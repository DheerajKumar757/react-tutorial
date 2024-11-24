import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from createElement!")
console.log(createElement)
root.render(reactElement)