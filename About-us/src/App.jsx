import './App.css';
import React from 'react';
import TemplateImg from '../src/assets/Template.png';
import ManDog from '../src/assets/man-dog.webp'

function App() {
  return (

 <div>
    <div>
      <div>
        <div className='w-full md:w-full mt-10 md:mt-0 h-[550px] absolute top-[80px]'>
            <img src={TemplateImg} alt="template" className='h-full w-full '/> 
           <div className='md:w-[550px] h-[100px] absolute top-[115px] left-[60px] '>
                 <img src={ManDog} alt='ManwithDog' className='h-[350px] w-[450px] rounded-[10px]'></img>

            </div>  
            <div className='text-[#0b0b0b]'>
            <p className='text-[42px] font-bold absolute top-[120px] left-[750px]'><b>What is ZenPaws?</b></p> 
            <p className='text-[22px] absolute top-[195px] left-[750px]'>ZenPaws is an online platform <br/>that connects people with animal-assisted <br/> therapy services,offering a unique and effective way <br/>to promote their mental well-being.</p>
            </div>
                     
        </div>
      </div>    
    </div>      
  </div>
  

    
  );
}

export default App;
