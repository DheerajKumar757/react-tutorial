/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package.
 * 2. Use that root to render some JSX. For now, just
 *    render an h1 element.
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
        <header>
            <img src="/src/assets/react-logo.png" width="40px" alt="React logo"/>
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