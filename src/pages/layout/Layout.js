import {  Outlet } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import './Layout.css';

export default function Layout() {

    return <>

    {/* We must have a top bar here */}

        <div className='midle-section'>
            
            <SideBar/>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>Some footer</footer>
    </>

}