import '../App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div className="col-2 mx-auto">
    <>
      <Display />
    </>
    <ButtonPanel />
  </div>

);

App.propTypes = {

};

export default App;
