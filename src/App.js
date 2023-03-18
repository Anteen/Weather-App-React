import {useEffect, useState} from 'react'
import './App.css';
import Container from './components/Container.js';
import Modal from './Modal';
import formatedWeatherData from './services/api';
import getWeatherData from './services/api';


function App() {

  const [active, setActive] = useState(false)
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="App">
          <Container />
          <Modal open={active} onClose={() => setActive(false)} onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
