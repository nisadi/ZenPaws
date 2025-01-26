import React from 'react'
import GrpCat from '../assets/GroupCat.jpeg'
import Cat from '../assets/Cat.jpeg'
import '../App.css'

const ContactUs = () => {
  return (
  
    <div>
        <div>
            <div style={{backgroundColor: "#c05621", height: "500px", width:"1536px",position:"absolute",top:"0px" }}></div>
            <div className='GrpCat'>
                <img src={GrpCat} alt="grpCat" className='rounded-[10px]'/>
            </div>
            <div className='md:w-[550px] h-[100px] absolute top-[115px] left-[60px]'>
                <img src={Cat} alt="grpCat" className='h-[350px] w-[450px] rounded-[10px]'/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs