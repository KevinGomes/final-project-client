/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for home page
const useStyles = makeStyles( () => ({
  buttonColor: {
    backgroundColor: '#006d77',
    color: '#edf6f9',
    "&:hover": {
      backgroundColor: '#00bbcc'
    },
    marginTop: '5px',
  },
  placeImage: {
    display: 'inline-block',
    width: '350px',
    height: '250px',
    borderRadius: '5%',
    objectFit: 'cover',
  },
  flexContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow:'space-around',
  }, 
  formContainer:{  
    width: '500px',
    backgroundColor: '#edf6f9',
    borderRadius: '25px',
    margin: 'auto',
    marginTop: '25px',
    marginBottom: '10px',
    padding: '10px',
    fontSize: 'large',
  },
}));

const HomePageView = () => {
  
  const classes = useStyles();
  // Render Home page view
  return (
    <div >
      <h1>Welcome to your campus management system!</h1>
      <div className={classes.flexContainer}>

        <div className={classes.formContainer}>
          <h2>Campus View</h2>
          <img alt="campus view"src= "https://thumbs.dreamstime.com/b/college-campus-29465615.jpg" className={classes.placeImage}/>
          <br/>
          <Link to={`/campuses`}>
            <Button className={classes.buttonColor}>Click Here!</Button>
          </Link>
        </div>

        <div className={classes.formContainer}>
          <h2>Student View</h2>
          <img alt="campus view"src= "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg" className={classes.placeImage}/>
          <br/>
          <Link to={`/students`}>
            <Button className={classes.buttonColor}>Click Here!</Button>
          </Link>
        </div>

      </div>
    </div>
  );    
}

export default HomePageView;