import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
// import LAFARGE from '../assets/download.png'

function App() {
  const [showModal, setShowModal] =  useState(false);

  return (
    <div className="App h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      <h1 className='text-xl md:text- lg:text-xl xl:text-6xl font-bold pt-36 mt-36 text-green-700'>Lafarge Africa PLC</h1>
      <p className='text-xl md:text- lg:text-xl xl:text-4xl font-bold  text-blue-400'>A Member of Holcim</p>
      <button onClick={() => setShowModal(true)} className='bg-green-700 px-4 py-2 rounded-lg text-sm md:text-lg lg:text-xl'> Click to View</button>
     {showModal &&  <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
