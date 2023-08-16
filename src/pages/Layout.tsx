import {FC} from "react";
import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer.tsx";


const Layout: FC = () => {
    return (
        <div className=' font-inter text-white  '>
            <Header/>
            <div className=" max-w-6xl mx-auto   mt-20 ">
                <Outlet/>
            </div>
            <div className="z-20 ">
                <Footer/>
            </div>


        </div>
    )
}
export default Layout