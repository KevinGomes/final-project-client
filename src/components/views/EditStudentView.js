/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to edit the student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const {handleChange, handleSubmit, student } = props;
  const classes = useStyles();

  // Render a edit Student view with an input form
  return (
    <div>
      <h1>Edit Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Edit Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" defaultValue={student.firstname} onChange ={(e) => handleChange(e)} required />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" defaultValue={student.lastname} onChange={(e) => handleChange(e)} required />
            <br/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="email" name="email" defaultValue={student.email} onChange={(e) => handleChange(e)} required />
            <br/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
            <input type="url" name="imageurl" defaultValue={student.imageurl} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" name="gpa" step="0.01" min="0" defaultValue={student.gpa} onChange={(e) => handleChange(e)} required />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input type="number" name="campusId" defaultValue={student.campusId} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditStudentView;