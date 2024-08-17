import "./App.css";
import Home from "./Components/Home";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div>
      <SideBar />
      <section className="bgImage">
        <Home></Home>
      </section>
    </div>
  );
}

export default App;
