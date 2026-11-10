import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h2> Welcome to the Home Page!</h2>
}

function About() {
  return <h2> This is the About Page!</h2>
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My React App</h1>

      <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}