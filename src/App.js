// jsxとはjavascriptのxml版のようなもの
// 可読性が高い
// 直感的にhtmlを表現できる
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onClick={() => {console.log("I am clicked.")}}></input>
    </React.Fragment>
  );

}

export default App;