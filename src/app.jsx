import React, { useState, lazy, Suspense } from 'react'

// const MyComponent = lazy(() => 
//   import(/* webpackChunkName: 'my-component' */ './components/my-component.jsx')
// )
import MyComponent from './components/my-component.jsx'

export default () => {
  const [display, setDisplay] = useState(false)

  return (
    <div
      style={{
        width: '50vw',
        margin: '0 auto'
      }}
    >
      <button
        onClick={setDisplay(!display)}
      >
        点我撒！
      </button>
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {display ? <MyComponent /> : null}
        {/* </Suspense> */}
      </div>
    </div>
  )
}