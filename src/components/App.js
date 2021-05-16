import '../App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';


const App = () => {
  function handleClick() {
    return Calculate;
  }

  return (
    <div className="col-2 mx-auto">
      <Display />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

App.propTypes = {

};

export default App;
