import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

/*

Challenge - recreate previous commit using vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using 'appendChild') of the div#root

Don't use innerHTML to accomplish any of this.

*/

const h1_element = document.createElement("h1");
h1_element.textContent = "This is a manual imperative coding"
h1_element.class = "header"
document.getElementById("root").appendChild(h1_element)

root.render(
  h1_element
)