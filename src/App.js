import React from 'react';                 // To use React library 
import { Router } from '@reach/router';    // To use Reach Router (could use react-router)      
import About from './pages/About.jsx';     // To access the About Us page   
import Contact from './pages/Contact.jsx'; // To access the Contact Us page
import Home from './pages/Home.jsx';       // To access the Home page
import ResponsiveNavigation from './components/ResponsiveNavigation.jsx' // responsive toolbar
import logo from './logo.svg';             // The React logo
import './App.css';                        // CSS styling file


// This is a FUNCTIONAL COMPONENT
function App() {
    // Array used with the reach router to display the name of pages, path and icons
    const navLinks = [
        {
            text: 'Home',
            path: '/',
            icon: 'NO_BACKGROUND_ICON_home.png'
        },
        {
            text: 'Contact',
            path: '/contact',
            icon: 'NO_BACKGROUND_ICON_home.png'
        },
        {
            text: 'About',
            path: '/about',
            icon: 'NO_BACKGROUND_ICON_home.png'
        }
    ]

    return (
        <div className="App">
            <ResponsiveNavigation
                navLinks={ navLinks }
                logo={ logo }
                background="#fff"
                hoverBackground="#ddd"
                linkColor="#777"
            />
            <Router>
                <About path="/about" />
                <Contact path="/contact" />
                <Home path="/home" />
            </Router>
        </div>
    );
}

export default App;
