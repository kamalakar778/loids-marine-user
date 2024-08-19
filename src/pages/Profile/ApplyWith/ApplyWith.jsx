import React from 'react'
import { Link } from 'react-router-dom'
import "./ApplyWith.css";


const applyWith = () => {
  return (
    <>
    <div className='row container '>
      <div className='left-container mt-4'>
        <ul>
          <Link to="/ApplicationPage" style={{paddingLeft: 13, textDecoration: 'none'}}><li>Application form</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Your Application number</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Pay Application fee</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Check Admit card</li></Link>
        </ul>
      </div>
      <div className='right-container text-center me-5 mb-5'>
        <h4 className='mb-5'>Application of merchant navy</h4>
       <label className=''>Mobile number</label>&nbsp;&nbsp;&nbsp;
       <input type="number" className='w-50 input-number mb-5'/>
        <button className="adjust-button w-auto ms-5">Continue</button>
      </div>
    </div>
    <div className=''>
    </div>
    </>
  )
}

export default applyWith
