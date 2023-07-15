import Button from "./Button"
import Person from "./Person"
import { ReactDOM } from "react"
import React from "react"
import Header from "./Header"
import List from "./List"

function App() {
  const handleClick = () =>{
    alert('Button Clicked');
  }

  const item = ['item 1', 'item 2', 'item 3'];
  return (
    <>
    {/* Question 1 */}
      <h1>Person Information</h1>
      < Person name='Mukund' age={21} />
      < Person name='Parveen' age={19} />
      {/* Question 2 */}
      <h1>Button Example</h1>
      < Button text={'Click me'} onClick={handleClick} />
      {/* Question 3 */}
      <Header tittle={"This is App Header"} />
      {/* Question 4 */}
      <h1>Generate List </h1>
      <List item={item} />
    </>
  )
}

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App/>, document.getElementById('root'));

export default App
