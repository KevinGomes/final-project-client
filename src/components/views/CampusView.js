/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

// Create styling for the campus page
const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
    "&:hover": {
      backgroundColor: '#00bbcc'
    },
    color: '#edf6f9',
  },

  deleteButton: {
    backgroundColor: '#770a00',
    "&:hover": {
      backgroundColor: '#cc1100'
    },
    color: '#edf6f9',
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
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  campusImage: {
    display: 'inline-block',
    width: '250px',
    height: '250px',
    borderRadius: '5%',
    objectFit: 'cover',
  },
  tablePos: {
    margin: '0 auto',
  },
  tableContainer: {
    display: 'grid',
    borderCollapse: 'separate',
    borderSpacing: '50px 0'
  }
}));

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, removeStudent} = props;
  const classes = useStyles();

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1 className={classes.formTitle}>{campus.name}</h1>

      <div className={classes.formContainer}>

        <img alt="campus profile"src={campus.imageurl ? campus.imageurl : "https://media.istockphoto.com/id/636199580/photo/afternoon-in-the-university.jpg?s=612x612&w=0&k=20&c=LQzMIxJUluhaXN2pi6Tqe6PCSFZgsnQYqNKR2ESMNY0="} 
        className={classes.campusImage}/>

        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <h3>{campus.students.length ? 
          <div>
            Number of students: {campus.students.length}
          </div>
          :
          <div>
            This campus has no enrolled students.
          </div>
        }</h3>
        <table className={classes.tableContainer}>
        <tbody>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <tr className={classes.tablePos} key={student.id}>
              <td>
                {
                  <Link to={`/student/${student.id}`}>
                    <h2>{name}</h2>
                  </Link> 
                }
              </td>
              
              <td>
                <Link to={`/campuses`}>
                  <Button className={classes.buttonColor} onClick={() => removeStudent(student)}>Unenroll Student</Button>
                </Link>
              </td>

            </tr>
          
          );
        })}
        </tbody>
        </table>

        <Link to={`/enrollstudent/${campus.id}`}>
          <Button className={classes.buttonColor}>Enroll New Student</Button>
        </Link>

      </div>

      <br/>

      <Link to={`/editcampus/${campus.id}`}>
          <Button className={classes.buttonColor}>Edit Information</Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campuses`}>
          <Button className={classes.deleteButton}  onClick={() => deleteCampus(campus.id)}>Delete Campus</Button>
      </Link>

    </div>

  );
};

export default CampusView;