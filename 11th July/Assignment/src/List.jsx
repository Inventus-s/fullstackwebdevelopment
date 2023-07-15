import React from "react";
const List = ({item}) => {
    return (
        <ul>
            {item.map((items) => <li>{items}</li>)}
        </ul>
    )
}

export default List;