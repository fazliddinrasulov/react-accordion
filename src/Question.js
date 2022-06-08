import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [info, setInfo] = useState(false);
  const getInfo = () =>{setInfo(!info)}
  return <article className='question'>
    <header>
      <h4>{props.question.title}</h4>
      <button className='btn' onClick={getInfo}>{!info ? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}</button>
    </header>
    {info && <p>{props.question.info}</p>}
  </article>;
};

export default Question;
