import React from 'react'

const About = () => {
  const instructor = {
    name: 'Ghada',
    stack: 'MERN'
  }
  return (
    <div>
        <h4>{instructor.name}</h4>
        <h4>{instructor.stack} stack</h4>
    </div>
  )
}

export default About