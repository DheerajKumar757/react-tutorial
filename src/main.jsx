import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

function MainContent() {
  return <h1>React is Great!</h1>
}

root.render(
  <div>
    <MainContent />
  </div>
)