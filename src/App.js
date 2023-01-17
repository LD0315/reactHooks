import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
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
import MapDemo from './components/Map/MapDemo';
import PropsDemo from './components/Props/PropsDemo';
import UseCallBackDemo from './components/UseCallBack/UseCallBackDemo';

export default function App()  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="useEffectDemo" element={<UseEffectDemo />} />
        <Route path="useEffectDemo2" element={<UseEffectDemo2 />} />
        <Route path="useEffectDemo3" element={<UseEffectDemo3 />} />
        <Route path="useStateDemo" element={<UseStateDemo />} />
        <Route path="useStateDemo2" element={<UseStateDemo2 />} />
        <Route path="spreadOperatorDemo" element={<SpreadOperatorDemo />} />
        <Route path="useContextDemo" element={<UseContextDemo />} />
        <Route path="useContextDemo2" element={<UseContextDemo2 />} />
        <Route path="useRefDemo" element={<UseRefDemo />} />
        <Route path="useReducerDemo" element={<UseReducerDemo />} />
        <Route path="mapDemo" element={<MapDemo />} />
        <Route path="propsDemo" element={<PropsDemo />} />
        <Route path="useCallBackDemo" element={<UseCallBackDemo />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}





