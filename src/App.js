import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import API_KEY from './api';
import Navbar from './Navbar';
import Add from './Add';
import Update from './Update';

const App = () => {

  const [data,setData] = useState([]);
  const [top,setTop] = useState("-300px");
  
  useEffect(() => {
    async function get() {
      const res = await axios.get(API_KEY);
      setData(res.data.data);
    }
    get();
  }, [])

  const post = (val) => {

    // const newData = {
    //   avatar: "https://reqres.in/img/faces/7-image.jpg",
    //   email: "sou.in",
    //   first_name: "sourav",
    //   id: 28,
    //   last_name: "kumar"
    // }

    axios.post("https://reqres.in/api/users", val)
    .then((d) => {
      const n = [...data, d.data];
      setData(n);
      console.log(d);
    })
    .catch((err) => {
      console.log(err);
    })

    setTop("-300px");
  }

  const del = (val) => {
    axios.delete('https://reqres.in/api/users/2',val).then((d) => {
        console.log(d);
        const n = data.filter((value) => value.id !== val.id);
        setData(n);
    }).catch((err) => {
      console.log(err);
    })
  } 

  const update = (val) => {

    // const newData = {
    //   avatar: "https://reqres.in/img/faces/7-image.jpg",
    //   email: "sou.in",
    //   first_name: "sourav",
    //   id: 7,
    //   last_name: "dubey"
    // }

    axios.put('https://reqres.in/api/users/2',val).then((d) => {
      console.log(d);
      const n = data.map((value) => value.id==val.id ? val : value );
      setData(n);

    }).catch((err) => {
      console.log(err);
    })
  }

  const create = () => {
    setTop("100px");
  }

  return (
    <>
      <Navbar create={create} />
      <div className="container">
      {
        data.map((value) => {
          return <Card key={value.id} value={value} delete={del} update={update} />
        })
      }
      </div>
      <Add top={top} post={post} />
    </>
  )
}

export default App;
