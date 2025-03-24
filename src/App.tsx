import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/not_found" element={<NotFound />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

