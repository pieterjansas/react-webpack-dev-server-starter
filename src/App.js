import React from 'react';
import { render } from 'react-dom';
import Project from './components/project';

export default function App(props) {
  function handleClick(fact) {
    return function(e) {
      e.preventDefault();
    }
  }
  const items = props.facts.map((fact, i) => {
    return (
      <li key={i}>
        <a href="#" onClick={handleClick(fact)}>
          <Project fact={fact} />
        </a>
      </li>
    )
  });
  return (
    <ul> {items} </ul>
  );
}