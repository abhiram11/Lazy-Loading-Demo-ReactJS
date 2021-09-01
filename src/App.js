import React, { lazy, Suspense } from "react";
import "./App.css";
// import Demo from "./components/Demo";
const Demo = lazy(() => import("./components/Demo"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is normal header</h1>
        <Suspense fallback={<>Loading...!!!!</>}>
          <Demo />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
