import { Outlet, Link } from "react-router-dom";
import './layoutStyle.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/useEffectDemo">UseEffectDemo</Link>
          </li>
          <li>
            <Link to="/useEffectDemo2">UseEffectDemo2</Link>
          </li>
          <li>
            <Link to="/useEffectDemo3">UseEffectDemo3</Link>
          </li>
          <li>
            <Link to="/useStateDemo">UseStateDemo</Link>
          </li>
          <li>
            <Link to="/useStateDemo2">UseStateDemo2</Link>
          </li>
          <li>
            <Link to="/spreadOperatorDemo">SpreadOperatorDemo</Link>
          </li>
          <li>
            <Link to="/useContextDemo">UseContextDemo</Link>
          </li>
          <li>
            <Link to="/useContextDemo2">UseContextDemo2</Link>
          </li>
          <li>
            <Link to="/useRefDemo">UseRefDemo</Link>
          </li>
          <li>
            <Link to="/useReducerDemo">UseReducerDemo</Link>
          </li>
          <li>
            <Link to="/mapDemo">ReactMapDemo</Link>
          </li>
          <li>
            <Link to="/propsDemo">ReactPropsDemo</Link>
          </li>
          <li>
            <Link to="/useCallBackDemo">UseCallBackDemo</Link>
          </li>
          <li>
            <Link to="/useMemoDemo">UseMemoDemo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;