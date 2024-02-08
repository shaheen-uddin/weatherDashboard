import Header from "./components/header/Header";
import WeatherDashboard from "./components/weather/WeatherDashboard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherDashboard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
