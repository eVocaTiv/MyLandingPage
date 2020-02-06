import React, { PureComponent } from "react"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"
import DemoComponent from "@components/DemoComponent"

const Button = styled.button``
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = ( type ) => store.dispatch({ type })

class App extends PureComponent {

  onStyledButtonClicked = () => {
    console.log('styled button clicked');
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <DemoComponent />
        <Button onClick={this.onStyledButtonClicked}>I'm a styled button!</Button>
        <Link to="/page-2/">Go to page 4</Link>
      </Layout>
    )
  }
}

export default App
