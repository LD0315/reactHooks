import React from 'react'
import SpreadOperatorDemo from './components/SpreadOperator/SpreadOperatorDemo'
import UseContextDemo from './components/UseContext/UseContextDemo'
import UseContextDemo2 from './components/UseContext/UseContextDemo2'
import UseEffectDemo from './components/UseEffect/UseEffectDemo'
import UseEffectDemo2 from './components/UseEffect/UseEffectDemo2'
import UseEffectDemo3 from './components/UseEffect/UseEffectDemo3'
import UseReducerDemo from './components/UseReducer/UseReducerDemo'
import UseRefDemo from './components/UseRef/UseRefDemo'
import UseStateDemo from './components/UseState/UseStateDemo'
import UseStateDemo2 from './components/UseState/UseStateDemo2'

export default function App()  {
  return (
    <>
      <UseEffectDemo />
      <UseEffectDemo2 />
      <UseEffectDemo3 />
      <UseStateDemo />
      <UseStateDemo2 />
      <SpreadOperatorDemo />
      <UseContextDemo />
      <UseContextDemo2 />
      <UseRefDemo />
      <UseReducerDemo />
    </>
  )
}





