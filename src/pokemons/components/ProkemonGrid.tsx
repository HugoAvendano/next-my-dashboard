import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import PokemonCard from './PokemonCard';

interface Props {
    pokemons: SimplePokemon[]
}

export const ProkemonGrid = ({pokemons} : Props) => {
  return (
    <div className="flex flex-wrap gap-10  items-center justify-center mr-5">
        {
            pokemons.map(pokemon => (                        
                <PokemonCard key={pokemon.id} pokemon ={pokemon}/>                  
            ))
        }
    </div> 
  )
}
