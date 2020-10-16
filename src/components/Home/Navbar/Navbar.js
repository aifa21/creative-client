import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  
const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-4" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Our Team</a>
                    </li>
        
                    
                    <li className="nav-item">
                        <a className="nav-link mr-4 " href="#">Contact Us</a>
                    </li>
                    <div className={classes.root}>
                            
                            <Link to='/login'>  <button className="btn btn-dark">Login</button></Link>
                        
                            </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;