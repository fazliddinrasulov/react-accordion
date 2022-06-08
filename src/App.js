import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <section className='container'>
      <h3>questions and answers about login</h3>
      <div>
        {questions.map(question => <Question key={question.id} question={question} ></Question>)}
      </div>
    </section>
  </main>
}

export default App;
