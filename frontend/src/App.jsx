import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BackgroundVideo from './background/background';
import DashBoard from './pages/DashBoard';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <BackgroundVideo/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
      <Route path='/dashboard' element={<DashBoard/>} />

      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
