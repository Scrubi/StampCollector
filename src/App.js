import React from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import DataManager from './components/DataManager';

function App() {
  DataManager.initDataManager();
  return (
    <div className='App container-fluid col-10 justify-content-center'>
      <Header/>
      <MainWindow dataManager={DataManager}/>
    </div>  
  );
}

export default App;