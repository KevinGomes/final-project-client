/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {

    
    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id);
    }
      
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
    student: this.props.student,
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
        id: this.props.match.params.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        imageurl: this.state.imageurl,
        gpa: this.state.gpa,
        campusId: this.state.campusId
    };
    
    // edit student in back-end database
    let editStudent = await this.props.editStudent(student);
    editStudent = this.props.student;

    // Update state, and trigger redirect to show the edited student
    this.setState({
      firstname: "", 
      lastname: "",
      email: "",
      imageurl: null,
      gpa: 0, 
      campusId: null, 
      redirect: true, 
      redirectId: editStudent.id
    });
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render edit student input form
  render() {
    // Redirect to edited student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}    
          student={this.state.student}  
        />
      </div>          
    );
  }
}


const mapState = (state) => {
    return {
      student: state.student,  // Get the State object from Reducer "student"
    };
  };

// The following input argument is passed to the "connect" function used by "EditStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    })
}

// Export store-connected container by default
// EditStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditStudentContainer);