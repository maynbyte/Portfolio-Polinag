import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl text-center p-16">
          Vite + React + Tailwind CSS
        </h1>
        <Button className="bg-blue-500 text-white hover:bg-blue-700">
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
