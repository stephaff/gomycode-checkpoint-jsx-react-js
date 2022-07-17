import './App.css';
import React from 'react';
import FullName from './component/FullName';
import Adress from './component/Adress';
import ProfilePhoto from './component/ProfilePhoto';

function App() {
  return (
    <React.Fragment>
      <div className='content'>
        <div className='content-informations'>
          <FullName />
          <Adress />
        </div>
        <div className='content-photo'>
          <ProfilePhoto />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
