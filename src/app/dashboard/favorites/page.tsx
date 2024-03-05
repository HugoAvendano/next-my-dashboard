
import { SimplePokemon,PokemonsResponse, ProkemonGrid, FavoritePokemons } from "@/pokemons";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
    title: 'Favorites Pokemons',
    description: 'Page Favorites Pokemons',
   };

export default async function PokemonsPage() {

    
    return (
        <div className="flex flex-col p-2">
            <span className="text-5xl p-2 py-2">Favorites Pokemons <small>Global State</small></span>
            {/* <ProkemonGrid pokemons={[]}/> */}
            <FavoritePokemons/>         
        </div>
    );
}

