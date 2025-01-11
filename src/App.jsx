import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import PageNotFound from "./pages/PageNotFound";
import { NavigationUIProvider } from "./contexts/NavigationUIContext";
import { WeatherAPIProvider } from "./contexts/WeatherAPIContext";
import Weather from "./pages/Weather/Weather";
import Forecast from "./pages/Forecast/Forecast";

function App() {
  return (
    <>
      <WeatherAPIProvider>
        <NavigationUIProvider>
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Weather />}></Route>
              <Route path="/forecast" element={<Forecast />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </NavigationUIProvider>
      </WeatherAPIProvider>
    </>
  );
}

export default App;
