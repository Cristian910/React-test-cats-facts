import {useState,useEffect} from "react" 
import { getFact } from "../services/facts"

export const useCatFact = () => {
    const [fact,setFact] = useState()
    const refreshFact = () => {
    getFact().then(newFact => setFact(newFact))
    }
    //para que se ejecute una vez al iniciar 
    useEffect(refreshFact,[])
    return {fact, refreshFact}
    }