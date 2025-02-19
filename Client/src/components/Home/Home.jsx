
import Content from './Content.jsx'
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-none z-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"><Link><img className="w-40 h-6/6" src="logo1.png" alt="logo" /></Link></div>
            <div className="flex-none hidden lg:block z-10">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                <li><Link to="/register" className="text-xl font-medium text-white" >Register</Link></li>
                <li><Link to="/login" className="text-xl font-medium text-white" >Login</Link></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Content/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 min-h-full mt-20">
            {/* Sidebar content here */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Home;
