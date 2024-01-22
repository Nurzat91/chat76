import User from './components/User/user';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';
import Messages from './components/Messages/Messages';


function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Messages/>}/>
        <Route path="user" element={<User/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Layout>
  )
}

export default App
