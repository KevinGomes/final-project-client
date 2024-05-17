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
  buttonColor: {
    backgroundColor: '#006d77',
    "&:hover": {
      backgroundColor: '#00bbcc'
    },
    color: '#edf6f9',
    margin: '10px 5px 0 0',
  },

  deleteButton: {
    backgroundColor: '#770a00',
    "&:hover": {
      backgroundColor: '#cc1100'
    },
    color: '#edf6f9',
    margin: '10px 0 0 5px',
  },
  formContainer:{  
    width: '500px',
    backgroundColor: '#edf6f9',
    borderRadius: '25px',
    margin: 'auto',
    padding: '10px',
    fontSize: 'large',
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
        
        <img alt="student profile"src={student.imageurl ? student.imageurl : "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        className={classes.userImage}/>

        <p>First Name: {student.firstname}</p>
        
        <p>Last Name: {student.lastname}</p>
        
        <p>Email: {student.email}</p>
        
        <p>GPA: {parseFloat(student.gpa).toFixed(2)}</p>
        
        <p>Attends:</p>
        <div>
          { student.campusId != 0 ?

          <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
          </Link>

          :

          <div>
          Not currently enrolled
          </div>
          
          }
        </div>

        <Link to={`/editstudent/${student.id}`}>
          <Button className={classes.buttonColor}>Edit Student</Button>
        </Link>

        
        <Link to={`/students`}>
          <Button className={classes.deleteButton} onClick={() => deleteStudent(student.id)}>Delete</Button>
        </Link>
      </div>
    </div>
  );

};

export default StudentView;