import NavBar from "./components/NavBar";
import Main from "./components/Main";

import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

import "./App.css";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
