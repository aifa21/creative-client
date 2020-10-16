import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';



const AddReview = () => {
//  const [data,setData]=useState(admindata.email);
    const handleReview = () => {
            const service = {};
           // console.log(service);
            fetch('https://nameless-sands-87488.herokuapp.com/addAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
        }

    return (
       
                <div>
        
            
           
                <button onClick={handleReview}>Add Review</button>
               </div>
    );
};

export default AddReview;