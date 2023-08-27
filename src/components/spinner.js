import React from 'react'
import loading from './loading.gif'

const spinner =()=> {
 
    return (
      <div className='text-centre'>
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default spinner
