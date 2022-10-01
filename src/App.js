import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {

  const baseUrl = "http://localhost:8080";

  const [ data, setData ] = useState('');

  useEffect(() => {
    putSpringData();
  },[])

  async function putSpringData() {
    await axios
    .get(baseUrl + "/")
    .then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  return (
    <div> 
      <h1>Hello</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
