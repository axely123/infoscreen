import DadJokes from "./DadJokes";
import Bikes from "./Bikes";
import Clock from "./clock";
import Resort from "./Resort";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock />
      <p>
        <Resort />
      </p>
      <DadJokes />
      <Bikes />
    </div>
  );
}

export default App;
