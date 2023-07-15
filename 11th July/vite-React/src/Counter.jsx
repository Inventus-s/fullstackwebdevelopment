import { useState } from "react";

let z=10;
function Counter(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [todo, settodo] = useState(['todo1', 'todo2']);

    return (
        <>
        {todo.map((tdo) => <li>{tdo}</li>)} 
        <button onClick={() => settodo([...todo,'another one'])}>Click</button>
        <br />
        count X: {x} is {(x % 2 == 0) ? 'Even':'Odd'}
        <button onClick={() => setX(x+1)} >Inc</button>
        <button onClick={() => setX(x-1)} >Dec</button> <br />
        count Y: {y}
        <button onClick={() => setY(y+1)} >Inc</button>
        <button onClick={() => setY(y-1)} >Dec</button> <br />
        count Z: {z}
        <button onClick={() => z+=1} >Inc</button>
        <button onClick={() => z-=1} >Dec</button>
        </>
    )
}

export default Counter;