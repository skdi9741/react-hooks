import React, { useContext } from "react";
import Content from './Content.js'
import Header from './Header.js'
import Footer from './Footer.js'
import { ThemeContext } from "../context/ThemeContext.js";

const Page = () => {
    const data = useContext(ThemeContext)
    
    return (
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Page;