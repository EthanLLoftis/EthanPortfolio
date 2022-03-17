import './styles/app.css';
import React from 'react';
import Navigation from "./Components/NavBar";
import BioCard from "./Components/AboutCard";
import CourseCard from "./Components/Courses";
import TechCard from "./Components/Technologies";
import ExpCard from "./Components/Experience";
import ProjCard from "./Components/Projects";
import Footer from "./Components/Footer"

export function App() {
    return(
        <div id='appWrap'>
            <Navigation/>
            <div id="viewWrap">
                <BioCard/>
                <CourseCard/>
                <TechCard/>
                <ExpCard/>
                <ProjCard/>
            </div>
               <Footer/>
        </div>
    );
}