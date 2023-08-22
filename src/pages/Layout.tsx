import {FC} from "react";
import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import ScrollToAnchor from "../components/ScrollToAnchor.tsx";
import Footer from "../components/Footer.tsx";


const Layout: FC = () => {
    return (
        <div className={'container'}>
            <div className='font-inter text-white '>
            <ScrollToAnchor/>
            <Header/>
            <div className=" max-w-[73rem] mx-auto   mt-20 ">
                <Outlet/>
            </div>
                <div className="z-20 ">
                    <Footer/>
                </div>
        </div>
        </div>
    )
}
export default Layout