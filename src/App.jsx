import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
