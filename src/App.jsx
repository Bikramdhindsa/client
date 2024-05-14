import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<signup />} />
        <Route path='/sign-in' element={<signin />} />
        <Route path='/profie' element={<profile />} />
        <Route path='/about' element={<about />} />
      </Routes>
    </BrowserRouter>
  )
}
