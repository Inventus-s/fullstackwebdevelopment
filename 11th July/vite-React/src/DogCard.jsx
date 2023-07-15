import DogImage from "./Image";
import Name from "./Name";

function DogCard(props){
    let tittle = "this is a dog card";
    return(
        
        <>
            <h2 style={
                {
                    fontSize: '10px',
                    color:'red'
                }
            }>{tittle}</h2>
            <Name>
                 <h3>{props.name}</h3>
            </Name>
           
            <DogImage src={props.image} />
        </>
    )
}

export default DogCard;