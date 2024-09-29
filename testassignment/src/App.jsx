import { useState } from "react";
import "./App.scss";
import Layout from "./components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
