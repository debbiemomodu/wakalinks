// App.jsx
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

