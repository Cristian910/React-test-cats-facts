import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';



function App() {

const {fact,refreshFact} = useCatFact()
const {image} = useCatImage({fact})

const handleClick = async () => {
  refreshFact()
}

  return (
    <>
      <main className="contenedor">
       <button className='btn-search' onClick={handleClick} >get new fact and meme</button>
    {fact && <h3>{fact}</h3>}
    {image && <img src={image} alt={`image of ${fact}`}/>}
  </main>
    </>
  );
}

export default App;
