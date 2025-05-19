import styles from './index.module.css';
import sqlLogo from './assets/sql-logo.png';
import { useState } from 'react';

function App() {
  const [queryDescription, setQueryDescription] = useState('');

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:5000/generate-sql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ queryDescription })
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Query Description:', queryDescription);
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon}/>
      <h3>Generate SQL Query with AI</h3>
      <form onSubmit={onSubmit}>
        <input 
        type="text" 
        name='query-description'
        placeholder='Describe your SQL query here'
        onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate SQL Query"/>
      </form>
    </main>
  )
}

export default App
