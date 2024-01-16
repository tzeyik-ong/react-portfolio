import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/react-portfolio/about" element={<About />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
        <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;
