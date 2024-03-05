'use client'

import Link from "next/link";
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toogleFavorite } from "@/store/pokemons/pokemonsSlice";


interface Props{
    pokemon: SimplePokemon
}

export default function PokemonCard({pokemon}: Props) {

    const {id,name} = pokemon;

    const isFavorite = useAppSelector(state=> !!state.pokemons.favorites[id]);
    const dispatch = useAppDispatch();

    const onToogle= () =>{
        dispatch(toogleFavorite(pokemon));
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={id} 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                        alt={"name"}
                        width={100}
                        height={100}
                        priority={false}                    
                    />
                    <p className="pt-2 text-lg font-semibold capitalize text-gray-50">{name}</p>                    
                    <div className="mt-5">
                        <Link
                           /*  href={`/dashboard/pokemon/${id}`} */
                            href={`/dashboard/pokemon/${name}`}                           
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={()=> onToogle()} 
                        className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
                        
                        <div className="text-red-600">
                            {isFavorite ? 
                                (<IoHeart/>) : 
                                (<IoHeartOutline/>)
                            } 
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? 
                                    'Favorite' :
                                    'Not Favorite'
                                    
                                }
                            </p>
                            <p className="text-xs text-gray-500">
                                {isFavorite ? 
                                    'Delete Favorite' :
                                    'Add Favorite'
                                    
                                }
                            </p>
                        </div>
                        
                    </div>                    
                </div>                
            </div>
        </div>
    )
}
