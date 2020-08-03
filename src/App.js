import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateExercises from './components/CreateExercises'
import CreateUser from './components/CreateUser'
import EditExercises from './components/EditExercises'
import ExercisesList from './components/ExercisesList'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path = '/' exact component = {ExercisesList} />
      <Route path = '/edit/:id' exact component = {EditExercises} />
      <Route path = '/create' exact component = {CreateExercises} />
      <Route path = '/user' exact component = {CreateUser} />

    </Router>
    
  );
}

export default App;