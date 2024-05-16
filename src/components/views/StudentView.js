/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#edf6f9',
    borderRadius: '25px',
    margin: 'auto',
    padding: '10px',
    fontSize: 'large',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    //backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  userImage: {
    display: 'inline-block',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  }
}));

const StudentView = (props) => {
  const { deleteStudent, student } = props;
  const classes = useStyles();

  // Render a single Student view 
  return (
    <div>
      <h1 className={classes.formTitle}>{student.firstname + " " + student.lastname}</h1>

      <div className={classes.formContainer}>
        
        
        <img alt="student profile"src={student.url ? student.url : "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        className={classes.userImage}/>

        <p>First Name: {student.firstname}</p>
        
        <p>Last Name: {student.lastname}</p>
        
        <p>Email: {student.email}</p>
        
        <p>GPA: {student.gpa}</p>
        
        <p>Attends:</p>
        <Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link>

        <Link to={`/editstudent/${student.id}`}>
          <button>Edit Student</button>
        </Link>

        
        <Link to={`/students`}>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>
      </div>
    </div>
  );

};

export default StudentView;