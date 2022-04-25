import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./Component/MyNavBar";
import MyCarousel from "./Component/Home";

function App() {
  return (
    <div>
      <MyNavBar payoff="we are here" call="talk!" />
      <MyCarousel />
    </div>
  );
}

export default App;
