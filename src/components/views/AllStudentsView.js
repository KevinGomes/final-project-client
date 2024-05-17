/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
    color: '#edf6f9',
    "&:hover": {
      backgroundColor: '#00bbcc'
    },
  },
  deleteButton: {
    backgroundColor: '#770a00',
    "&:hover": {
      backgroundColor: '#cc1100'
    },
    color: '#edf6f9',
  },
  userImage: {
    display: 'inline-block',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },  
  formContainer:{  
    width: '1000px',
    backgroundColor: '#edf6f9',
    borderRadius: '25px',
    margin: 'auto',
    marginBottom: '10px',
    padding: '10px',
    fontSize: 'large',
  },
}));

const AllStudentsView = (props) => {
  const classes = useStyles();
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <h1>There are no students.</h1>
      <Link to={`newstudent`}>
        <Button className={classes.buttonColor}>Add New Student</Button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div className={classes.formContainer} key={student.id}>

              <img alt="student profile"src={student.imageurl ? student.imageurl : "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
              className={classes.userImage}/>

              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              <Button className={classes.deleteButton} onClick={() => deleteStudent(student.id)}>Delete</Button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <Button className={classes.buttonColor}>Add New Student</Button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;