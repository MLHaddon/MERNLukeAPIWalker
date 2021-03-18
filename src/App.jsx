import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import HomePage from './components/Home/HomePage';
import Query from './components/Query/Query';
import './App.css';

function App() {
  const [query, setQuery] = useState();
  const [id, setId] = useState();
  const [item, setItem] = useState([]);
  const [apiHitCount, setHitCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${query}/${id}`)
      .then(res => {
        setItem(res.data);
        setHitCount(apiHitCount + 1);
        console.log(res);
      })
      .then(res => {
        navToPage();
      }).catch(err => console.error(err));
  }

  const navToPage = () => {
    navigate(`/${query}/${id}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-100">
            <div className="m-2 d-flex flex-row justify-content-between align-items-center">
                <Link to="/home"><button className="btn btn-primary">Home</button></Link>
                <p className="m-2">API Requests: {apiHitCount}</p>
            </div>
        </div>
      </header>
      <form className="m-2 d-flex flex-row" onSubmit={handleSubmit}>
        <div className="form-group">
          <select onChange={(e) => setQuery(e.target.value)} className="form-control">
            <option className="text-secondary">- Query -</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className="form-group">
          <input type="number" name="id" onChange={(e) => setId(e.target.value)} className="form-control col-5" placeholder="ID"/>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
      <Router>
          <HomePage path="/home" />
          <Query 
            item={item}
            path="/:query/:id" 
          />
      </Router>
    </div>
  );
}

export default App;
