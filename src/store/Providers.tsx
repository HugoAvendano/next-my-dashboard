'use client'

import { Provider } from 'react-redux';
import { store } from './index';
import { useEffect } from 'react';
import pokemonsSlice, { setFavoritePokemons } from './pokemons/pokemonsSlice';

interface Props {
    children : React.ReactNode
}

export const Providers = ({children}: Props) => {

  

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}' );
    console.log(fav);
    store.dispatch(setFavoritePokemons(fav));

    
  }, [])
  

  return (
    <Provider store={store}>
        { children }
    </Provider>
  )
}
