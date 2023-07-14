import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./routes/WeatherApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
