import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Document from './components/Documents/Documents';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileUploadForm from './components/Upload/Upload';
import Users from './components/Users/Users';

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
        <Route path="/document" element={<Document />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<FileUploadForm />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="*" element={<NoPage />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
