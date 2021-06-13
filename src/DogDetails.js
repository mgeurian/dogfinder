import React from 'react'
import { Link, Redirect } from "react-router-dom";

function DogDetails({dog}) {

  if (!dog) return <Redirect to="/dogs"/>
  return (
    <div>
      <div>
        <img src={dog.src} alt={dog.name}/>
        <p>{dog.name}</p>
        <p>{dog.age}</p>
        <ul>
          {dog.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Back to all dogs</Link>
      </div>
    </div>
  )
}

export default DogDetails;
