import React from "react";

const App = () => {
  const profiles = [
    { name: "Taro", age: "20"},
    { name: "Hanako", age: "19"},
    { name: "katada", age: "222"}
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

User.defaultProps = {
  age: 1
}

export default App;