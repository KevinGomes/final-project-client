/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
    color: '#edf6f9',
    "&:hover": {
      backgroundColor: '#00bbcc'
    },
  },
  userImage: {
    display: 'inline-block',
    width: '350px',
    height: '350px',
    borderRadius: '5%',
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

const AllCampusesView = (props) => {
  const classes = useStyles();
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return  <div>
              <h1>There are no campuses.</h1>
              <br/>
              <Link to={`/newcampus`}>
                <Button className={classes.buttonColor}>Add New Campus</Button>
              </Link>
            </div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <div>
        <h1>All Campuses</h1>
    
        {props.allCampuses.map((campus) => (
          <div className={classes.formContainer} key={campus.id}>
            <img alt="campus profile"src={campus.imageurl ? campus.imageurl : "https://media.istockphoto.com/id/636199580/photo/afternoon-in-the-university.jpg?s=612x612&w=0&k=20&c=LQzMIxJUluhaXN2pi6Tqe6PCSFZgsnQYqNKR2ESMNY0="} 
            className={classes.userImage}/>
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>
            <h4>campus id: {campus.id}</h4>
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <hr/>
          </div>
        ))}
        </div>
      <br/>
      <Link to={`/newcampus`}>
        <Button className={classes.buttonColor}>Add New Campus</Button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;