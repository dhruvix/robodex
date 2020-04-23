import React, {useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Add from '../components/Add';
import Delete from '../components/Delete';
import './App.css';

function App() 
{
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearch] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetch('https://damp-depths-06693.herokuapp.com/robots', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(users => setRobots(users));
        fetch('https://damp-depths-06693.herokuapp.com/count', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(c => setCount(c));
        console.log("useEffect");
    },[]);

    function rerender(){
        console.log("rerendered");
        fetch('https://damp-depths-06693.herokuapp.com/robots', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(users => setRobots(users));
        fetch('https://damp-depths-06693.herokuapp.com/count', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(c => setCount(c));
    }

    const onsearchchange = (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value);   
    }
    try{
        var filteredrobots = robots.filter(robot=>{return robot.name.toLowerCase().includes(searchfield.toLowerCase())});
    }
    catch(err){
        filteredrobots = [{
            "id":0,
            "name":"nobody",
            "email":"don't worry, I'm still your friend"
        }]
    }
    
    return(
        <div>
            <h1 id="main">Robo-Friends</h1>
            <h3>you have {count} robo-friends!</h3>
            <Searchbox onsearchchange = {onsearchchange} />   
            <a href="#edit"><h4>Click here to add/delete robots</h4></a>     
            <CardList robots = {filteredrobots} thing={searchfield} />     
            <div className="choices" id="edit" >
            <Add rerender={rerender}/>
            <Delete rerender={rerender}/>
            </div>       
            <a href="#main"><h4>Go back to the top</h4></a>  
        </div>
    )
}

export default App;