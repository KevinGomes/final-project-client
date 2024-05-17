/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
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
  const {campus, deleteCampus} = props;
  const classes = useStyles();
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1 className={classes.formTitle}>{campus.name}</h1>

      <div className={classes.formContainer}>

        <img alt="campus profile"src={campus.imageurl ? campus.imageurl : "https://media.istockphoto.com/id/636199580/photo/afternoon-in-the-university.jpg?s=612x612&w=0&k=20&c=LQzMIxJUluhaXN2pi6Tqe6PCSFZgsnQYqNKR2ESMNY0="} 
        className={classes.userImage}/>

        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <table className={classes.tableContainer}>
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
              
              { //this button doesntdont anything yet
                //look up how to remove one to many relationships
                //probably could do it on the backend with an inverse function that was used to attach students to dummy campuses
              }
              <td><Button className={classes.buttonColor}>Remove Student</Button>   </td>

            </tr>

          );
        })}
        </table>

      </div>

        <br/>

      <Link to={`/editcampus/${campus.id}`}>
          <Button className={classes.buttonColor}>Edit</Button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campuses`}>
          <Button className={classes.buttonColor} onClick={() => deleteCampus(campus.id)}>Delete</Button>
      </Link>

    </div>

  );
};

export default CampusView;