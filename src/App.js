import {Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";


function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        {/* For a No Match entry from the user, we can avoid crashing with the wildcard route: * 
          Note that the layout of a parent route will still apply if it is nested */}
        <Route path="*" element={<p>Invalid URL <Link to="/">Home</Link></p>} />
      </Routes> 
    </div>
  );
}

export default App;