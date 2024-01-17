import {useState,useEffect} from "react" 

export function useCatImage({fact}){
    const [image,setImage] = useState()
    
    useEffect(() => {
      if(!fact) return
      const threewords = fact.split(" ",3).join(" ")
      const firstWord = fact.split(" ")[0]
      
      const endpointImage = `https://cataas.com/cat/says/${threewords}`
      setImage(endpointImage)
    },[fact])
    return {image}
  }