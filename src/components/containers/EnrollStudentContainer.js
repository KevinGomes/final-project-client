/*==================================================
EnrollStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EnrollStudentView from '../views/EnrollStudentView';
import { addStudentThunk } from '../../store/thunks';

class EnrollStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      email: "",
      imageurl: null,
      gpa: 0, 
      campusId: this.props.match.params.id, 
      redirect: false, 
      redirectId: null
    };
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        imageurl: this.state.imageurl,
        gpa: this.state.gpa,
        campusId: this.state.campusId
    };
    
    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: "", 
      lastname: "",
      email: "",
      imageurl: null,
      gpa: 0, 
      campusId: null, 
      redirect: true, 
      redirectId: newStudent.campusId
    });
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to campus's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EnrollStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          student={this.state}        
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "EnrollStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

// Export store-connected container by default
// EnrollStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(EnrollStudentContainer);