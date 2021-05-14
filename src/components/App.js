import '../App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div className="">
    <div className="col-2 mx-auto">
      <div className="text-end my-2">
        <Display />
      </div>
      <ButtonPanel />
    </div>
  </div>
);

App.propTypes = {

};

export default App;
