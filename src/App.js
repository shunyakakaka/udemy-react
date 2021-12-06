import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Taro", age: 20},
    { name: "Hanako", age: 19},
    { name: 1}
  ]

  return(
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}></User>
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return (
    <div>Hi! I am {props.name} and {props.age}</div>
  )
}

User.propsTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;