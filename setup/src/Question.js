import React, { useState } from 'react';
//react icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  // toggle 
  const[showInfo ,setShowInfo]=useState(false);   //phle me plus icon 
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
         {showInfo ? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {
        //show info true hogi to para dikha do
        showInfo && <p>{info}</p>
      }
    </article>
  )
}

export default Question;
