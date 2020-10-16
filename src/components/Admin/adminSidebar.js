import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faLuggageCart, faSignOutAlt, faCommentAlt, faPlus, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
const adminSidebar = () => {

    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);



    useEffect(()=>{
        fetch('https://nameless-sands-87488.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data=>{
            setIsAdmin(data)
        })

    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
        <li>
                    <Link to="/home" className="text-white">
                        <img style={{width:"100px"}} src={logo}/>
                    </Link>
                </li>

                {isAdmin&&
                   <div>
                   <li>
                       <Link to="/serviceTable" className="text-white">
                           <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> <span>Service list</span> 
                       </Link>
                   </li>
                   <li>
                       <Link to="/addService" className="text-white">
                           <FontAwesomeIcon icon={faPlus} className="mr-2"/> <span>Add service</span> 
                       </Link>
                   </li>
                   <li>
                       <Link to="/addAdmin" className="text-white">
                           <FontAwesomeIcon icon={faPeopleArrows} className="mr-2"/> <span>Add Admin</span>
                       </Link>
                   </li>
                   </div>}

        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default adminSidebar;