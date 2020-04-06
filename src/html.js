import React from 'react';
import PropTypes from 'prop-types';
import { LoadingSpinner } from '@components';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Kunal Dewan</title>
        {props.headComponents}
      </head>
      <body
        id="___body"
        {...props.bodyAttributes}
        style={{
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          maxHeight: '100vh',
        }}
      >
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: '100vh',
            width: '100vw',
          }}
        >
          <LoadingSpinner />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          style={{
            width: '100vw',
            overflow: 'hidden',
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
