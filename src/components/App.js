// create your App component here
import React,{useState,useEffect} from "react"

function App(){
    
    const [dogImage, setDogImage] = useState(null);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            setDogImage(data.message)
        })
    },[])
    return(
        dogImage ? (
       
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )

    )
}
export default App;