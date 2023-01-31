import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './route/profile/page/Profile'
import { Layout } from './route/shared/components/layout'

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
