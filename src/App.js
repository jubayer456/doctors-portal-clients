import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AppointmentPage from './pages/AppointmentPage/AppointmentPage';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import RequireAdmin from './pages/Login/RequireAdmin';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import NavBar from './pages/Shared/NavBar/NavBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import MyReview from './pages/DashBoard/MyReview';
import AllUsers from './pages/DashBoard/AllUsers';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <AppointmentPage />
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <DashBoard />
        </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
        </Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
