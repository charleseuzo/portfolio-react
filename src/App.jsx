import { useState } from "react";
import styles from "./App.module.css";
import Content from "./components/layout/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Content />
    </div>
  );
}

export default App;
