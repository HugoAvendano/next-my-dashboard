
import { SimplePokemon,PokemonsResponse, ProkemonGrid } from "@/pokemons";
import Image from "next/image";

export const metadata = {
    title: 'Favorites Pokemons',
    description: 'Page Favorites Pokemons',
   };

export default async function PokemonsPage() {

    
    return (
        <div className="flex flex-col p-2">
            <span className="text-5xl p-2 py-2">Favorites Pokemons <small>Global State</small></span>
            <ProkemonGrid pokemons={[]}/>         
           
        </div>
    );
}