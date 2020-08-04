import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = { exercises: [] };
      }
    
    componentDidMount = () => {
        axios
          .get("http://localhost:5000/exercises")
          .then((response) => {

            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'+response)
            this.setState({
              exercises: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

    render() {
        return (
             <tr>
      <td>{this.props.exercise.username}</td>
      <td>{this.props.exercise.description}</td>
      <td>{this.props.exercise.duration}</td>
      <td>{this.props.exercise.date.substring(0,10)}</td>
      <td> <Link to={"/edit/"+this.props.exercise._id}>edit</Link> | <a href="/#" onClick={() => { this.props.deleteExercise(this.props.exercise._id) }}>delete</a>  </td>
    </tr>
        )
    }
}
