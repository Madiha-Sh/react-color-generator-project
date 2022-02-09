import React, { Component, useState } from 'react';
import Values from 'values.js';
import SingleColor from './singleColor';

function App() {
  const [color, setColor] = useState('');
  const [num, setNum] = useState(20);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(parseInt(num));
      setList(colors);
      console.log(colors);
    } catch(error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='#f15025' value={color} onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
          <button className='btn'>submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index) => {
          const hexColor = color.hex;
          return <SingleColor key={index} {...color} index={index} hex={hexColor}/>
        })}
      </section>
    </React.Fragment>
  );
}

export default App;