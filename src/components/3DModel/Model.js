import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useMemo } from 'react';
import {
  Canvas,
  useThree,
  useFrame,
  useLoader,
  extend,
} from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { AdditiveBlendingShader, VolumetricLightShader } from './shaders';
import styled from 'styled-components';

extend({ EffectComposer, RenderPass, ShaderPass });

const DEFAULT_LAYER = 0;
const OCCLUSION_LAYER = 1;

const StyledCanvas = styled(Canvas)`
  height: 100vh !important;
`;

function Elf({ layer = DEFAULT_LAYER }) {
  const group = useRef();
  // (data, path, onLoad, onError)
  // scene and draco-gltf referenced from 'public' folder
  // which is populated by these static assets from 'static' folder
  // and other runtime assets.
  const gltf = useLoader(GLTFLoader, '/scene.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  const material = useMemo(() => {
    if (layer === DEFAULT_LAYER)
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color('#407C80'),
        roughness: 1,
        metalness: 0.9,
      });
    else
      return new THREE.MeshBasicMaterial({ color: new THREE.Color('black') });
  }, [layer]);

  useFrame(() => (group.current.rotation.y += 0.004));

  return (
    <group ref={group}>
      <group rotation={[-1.5707963267948963, 0, 0]} position={[0, 2, 0]}>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
        </mesh>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
        </mesh>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
        </mesh>
      </group>
    </group>
  );
}

function Effects() {
  const { gl, scene, camera, size } = useThree();
  const occlusionRenderTarget = useMemo(
    () => new THREE.WebGLRenderTarget(),
    [],
  );
  const occlusionComposer = useRef();
  const composer = useRef();

  useEffect(() => {
    occlusionComposer.current.setSize(size.width, size.height);
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    camera.layers.set(OCCLUSION_LAYER);
    occlusionComposer.current.render();
    camera.layers.set(DEFAULT_LAYER);
    composer.current.render();
  }, 1);

  return (
    <>
      <mesh layers={OCCLUSION_LAYER} position={[0, 4.5, -10]}>
        <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
        <meshBasicMaterial attach="material" />
      </mesh>
      <effectComposer
        ref={occlusionComposer}
        args={[gl, occlusionRenderTarget]}
        renderToScreen={false}
      >
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[VolumetricLightShader]}
          needsSwap={false}
        />
      </effectComposer>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[AdditiveBlendingShader]}
          uniforms-tAdd-value={occlusionRenderTarget.texture}
        />
        <shaderPass
          attachArray="passes"
          args={[FXAAShader]}
          uniforms-resolution-value={[1 / size.width, 1 / size.height]}
          renderToScreen
        />
      </effectComposer>
    </>
  );
}

function DomCenter() {
  return (
    <mesh>
      <boxBufferGeometry
        position={[10, 10, 10]}
        attach="geometry"
        args={[1, 1, 1]}
      />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
}

function Model() {
  return (
    <StyledCanvas
      shadowMap
      style={{ background: '#171717' }}
      camera={{ position: [0, 0, 10], fov: 65 }}
      gl={{ antialias: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 60, -100]} intensity={20} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <spotLight
        castShadow
        intensity={8}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh position={[0, 4.5, -10]}>
        <sphereBufferGeometry attach="geometry" args={[4.9, 32, 32]} />
        <meshBasicMaterial attach="material" transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={null}>
        <Elf />
        <Elf layer={OCCLUSION_LAYER} />
      </Suspense>
      <Effects />
    </StyledCanvas>
  );
}

export default Model;
