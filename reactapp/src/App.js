import React from 'react';
import './App.css';


function App() {
    const [state, setState]=React.useState({list:[]});

    React.useEffect(()=>{
	  fetch('/app')
	  .then(res=>res.json())
	  .then(json=>{
	  	  setState({list:json})
		  })
  	  },[]);
	
    var listTag = state.list.map(c=><li>{c.name}, {c.birthday}</li>)
	
  
  return (
    <div>
      hello
	  {listTag}
    </div>
  );
}

export default App;
