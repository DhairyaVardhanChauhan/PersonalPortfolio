import "./App.css";
import Home from "./Components/Home";
import MobileNavBar from "./Components/MobileNavBar";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div>
      <SideBar />
      <MobileNavBar></MobileNavBar>
      <section className="bgImage">
        <Home></Home>
      </section>
    </div>
  );
}

export default App;
