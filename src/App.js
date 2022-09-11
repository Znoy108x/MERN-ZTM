import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import {Courses} from "./page/Courses"
import Course from "./page/Course"
import Login from "./page/Login"
import Academy from "./page/Academy"
import Community from "./page/Community"
import Blog from "./page/Blog" 
import Testimonials from "./page/Testimonials"
import Payment  from "./page/Payment"
import Events from "./page/Events"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:name" element={<Course/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/academy" element={<Academy/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path ="/payment" element={<Payment/>}/>
        <Route path ="/events" element={<Events/>}/>
      </Routes>
    </Router>
  );
}
export default App;