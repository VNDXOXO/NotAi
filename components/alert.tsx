"use client"
import React from 'react'
const Alert = ({params}:{params:any}) => {
    const showAlert=()=>{
        alert(params);
    }
  return (
    <button onClick={showAlert}>alert</button>
  )
}

export default Alert