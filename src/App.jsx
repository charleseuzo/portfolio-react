import { useState } from 'react'
import Schema from './Schema'
import styles from "./App.module.css";
import Content from "./components/layout/Content";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Schema />
    <div className={styles.container}>
      <Content />
    </div>
  );
}

export default App;
