import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

export default function Project(props) {
  const fact = props.fact;
  const image = fact.image;
  return (
    <div className="projects flex flex--aligncenter flex--spacebetween">
      <div className="projects__image" style={{height: "200px", backgroundImage: 'url(' + image + ')'}}></div>
      <div className="projects__text">
        <ul className="projects__text__tags">
              {fact.tags.map(function(item, i) {
                return <li key={i}>{item}</li>;
              })}
        </ul>
        <h1>{fact.name}</h1>
        <p>{fact.excerpt}</p>
      </div>
    </div>
  )
}