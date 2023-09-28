import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const url = window.location.pathname
  
  return (
    <BrowserRouter>
    {url !== "/register" && url !== "/login" && <Navigation/>}
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NoPage />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
