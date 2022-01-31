import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Heading</h1>
      <p>Content of home page</p>
      <Counter />
    </Fragment>
  )
}
