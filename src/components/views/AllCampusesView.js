/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
    color: '#edf6f9',
  },
  userImage: {
    display: 'inline-block',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  }
}));

const AllCampusesView = (props) => {
  const classes = useStyles();
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
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
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
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