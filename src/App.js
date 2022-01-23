import React from 'react'
import PropTypes from 'prop-types'
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName", age: 1000}
  ]
  return (
    <>
      {
        profiles.map((profile, index) => {
          return (
            <User name={profile.name} age={profile.age} key={index}></User>
          )
        })
      }
    </>
  )
}

const User = (props) => {
  return(
    <h1>Hi, I am {props.name} and {props.age} years old </h1>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;