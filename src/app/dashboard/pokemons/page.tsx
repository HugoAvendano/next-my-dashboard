
import { SimplePokemon,PokemonsResponse, ProkemonGrid } from "@/pokemons";
import Image from "next/image";

export const metadata = {
    title: '151 Pokemons',
    description: 'Page with the fisrt 151 Pokemons',
   };

const getPokemons = async (limit = 20, offset = 0) :Promise<SimplePokemon[]> => {
    const response :PokemonsResponse  = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = response.results.map(pokemon =>(
        {
            id: pokemon.url.split("/").at(-2)!,
            name: pokemon.name,            
        }
    ));

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);


    return (
        <div className="flex flex-col p-2">
            <span className="text-5xl p-2 py-2">Static Pokemon List</span>
            <ProkemonGrid pokemons={pokemons}/>         
           
        </div>
    );
}