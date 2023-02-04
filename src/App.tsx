import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './route/page/home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
