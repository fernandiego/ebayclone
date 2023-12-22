"use client"
import TopMenu from "@/app/layouts/includes/TopMenu";
import MainHeader from "@/app/layouts/includes/MainHeader";
import SubMenu from "@/app/layouts/includes/SubMenu";
import Footer from "@/app/layouts/includes/Footer";

export default function MainLayout({children}) {
    return (
        <>
            <div id="MainLayout" className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <TopMenu/>
                <MainHeader/>
                <SubMenu/>
                {children}
                <Footer/>
            </div>
        </>
    )
}