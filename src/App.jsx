import Header from "./components/header/Header";
import WeatherDashboard from "./components/weather/WeatherDashboard";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
          <section>
            <WeatherDashboard />
          </section>
      </main>
    </div>
  );
}

export default App;
