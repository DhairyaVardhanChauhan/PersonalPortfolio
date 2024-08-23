  import "./App.css";
import About from "./Components/About.jsx";
import Home from "./Components/Home";
import MobileNavBar from "./Components/MobileNavBar";
import SideBar from "./Components/SideBar";
  function App() {
    return (
      <div>
        <SideBar/>
        <MobileNavBar></MobileNavBar>
        <section className="bgImage">
          <Home></Home>
        </section>
        <section className="pl-[150px]">
          <section className="pt-[60px]">
            <About></About>
          </section>
        </section>
      </div>
    );
  }

  export default App;
