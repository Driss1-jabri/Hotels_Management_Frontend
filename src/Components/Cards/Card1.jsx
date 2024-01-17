import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../../Assets/Images/about.png'
import WithoutCancelDemo from './WithoutCancelDemo';

const Card1 = () => {
    return (
        
        <Card style={{ width: '18rem' ,display:"block"}}>
            <Card.Img variant="top" src={logo} />
            <Card.Body >
                <div className='text-uppercase p-1 ' style={{textAlign:"left",fontSize:"20px",color:"#93c572"}} ><b>type chambre</b> </div>
                <WithoutCancelDemo></WithoutCancelDemo>
                <p className='mt-4'>description description description description description description</p>
                <div className=' d-flex justify-content-center align-items-center'>
                <button type="button" style={{backgroundColor:"#93c572"}} className="text-uppercase btn border-0 me-2 text-light">book now</button>
                <div className='d-flex flex-column '>
                    <span style={{color:"#93c572"}}>$ 250</span>
                    <span>Per Nigth</span>
                </div>
                </div>
            </Card.Body>
        </Card>
  


        
    );
}

export default Card1;
