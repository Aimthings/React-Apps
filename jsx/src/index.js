//import the libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getReactsubmit(){
    return 'Click on me!';
}
//Create a app component
const App=function(){
    return (
     <div>
          <label htmlFor="name">Enter Name:</label>
          <input id="name" type="text"/>
          <button style={{backgroundColor:'blue',color:'white'}}>{getReactsubmit()}</button>
    </div>
    )
};

//Take the react component and show it on the screen
ReactDOM.render(<App/>,document.querySelector('#root'));