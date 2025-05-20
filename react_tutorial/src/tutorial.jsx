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
 * 
 * Create different jsx file for Header, Footer and MainContent.
 */

import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer.jsx";
import MainContent from "./main_content.jsx";

const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <Page />
    </main>
)

function Page() {
    return (
        <Fragment>
            <Header />
            <MainContent />
            <Footer />
        </Fragment>
    )
}