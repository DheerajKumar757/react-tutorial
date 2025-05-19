/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * - Add a 'nav' > 'ul' > 'li' (x3). The items should say:
 * "Pricing", "About" and "Contact".
 * 
 * Using flexbox, line up the 'li's horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 * 
 * Move the 'width' style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead.
 */

import { createRoot } from "react-dom/client";
import { Fragment } from "react";

const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <Page />
    </main>
)

function Header() {
    return (
        <header className="header">
            <img src="/src/assets/react-logo.png" className="nav-logo" alt="React logo"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
            
        </header>
    )
}

function MainContent() {
    return (
        <>
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <footer>
            <small>@ 2024 kumar development. All rights reserved. </small>
        </footer>
    )
}

function Page() {
    return (
        <Fragment>
            <Header />
            <MainContent />
            <Footer />
        </Fragment>
    )
}