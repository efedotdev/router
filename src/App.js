import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Dashbord/Home';
import Users from './pages/Dashbord/Users';
import Contact from './pages/Dashbord/Contact';
import UserDetail from './pages/Dashbord/UserDetail';
import Login from './pages/Auth/Login';
import DashbordLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="contact" element={<Contact />} /> */}
        <Route path='/' element={<DashbordLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
