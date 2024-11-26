/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package.
 * 2. Use that root to render some JSX. For now, just
 *    render an h1 element.
 */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <img src="/src/assets/react-logo.png" width="40px" alt="React logo"/>
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)