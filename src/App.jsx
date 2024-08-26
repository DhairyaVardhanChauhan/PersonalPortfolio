import "./App.css";
import About from "./Components/About.jsx";
import Home from "./Components/Home";
import MobileNavBar from "./Components/MobileNavBar";
import SideBar from "./Components/SideBar";
import Skills from "./Components/Skills.jsx";
import Education from "./Components/Education.jsx";
function App() {
  return (
    <div>
      <SideBar />
      <MobileNavBar></MobileNavBar>
      <section className="bgImage">
        <Home></Home>
      </section>
      <section className="min-[0px]:pl-0 lg:pl-[150px]">
        <section className="min-[0px]:pl-0 pt-[60px]">
          <About></About>
        </section>
        <section className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0">
          <Skills></Skills>
        </section>
        <section className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0">
          <Education></Education>
        </section>
      </section>
    </div>
  );
}

export default App;
