import React, {useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import User from './App.js'
import userEvent from '@testing-library/user-event';

function Profiles() {

 
return (

    <>
    {/* useParams for the profiles w/ respect to :id??? */}
    <div>
        {/* { User[0].firstName.map (firstName => ( */}
            <h1>
                {/* <Link to={`/profiles/${User[0].firstName}`}>{User[0].firstName}</Link> */}
            </h1>
        {/* ))} */}
    </div>
    </>
    
)
        }

export default Profiles;
