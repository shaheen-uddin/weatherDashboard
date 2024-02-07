import Header from "./components/header/Header";
import WeatherDashboard from "./components/weather/WeatherDashboard";

function App() {
  return (
    <>
      <Header />
      <main>
          <section>
            <WeatherDashboard />
          </section>
      </main>
    </>
  );
}

export default App;
