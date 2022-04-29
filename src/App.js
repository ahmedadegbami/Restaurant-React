import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./Component/MyNavBar";
import MyCarousel from "./Component/Home";
import ReservationForm from "./Component/ReservationForm";
import ReservationList from "./Component/ReservationList";
import Error from "./Component/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Component/Details";
import Menu from "./Component/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavBar payoff="we are here" call="talk!" />
        <Routes>
          <Route path="/" element={<MyCarousel />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/reserved" element={<ReservationList />} />
          <Route path="/details/:dishID" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
