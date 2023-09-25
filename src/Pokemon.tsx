import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonArr = Pokemon[];

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonArr>([]);

  const fetchMockAPI = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    setPokemon(prev => [...prev, ...data.results]);
  }

  useEffect(() => {
    fetchMockAPI();
  }, [])

  return (
    <>
      {console.log(pokemon)}
      {pokemon.map((poke, idx) => 
        <div key={`${poke}${idx}`}>{idx+1}: {poke.name}</div> 
    )}
    </>
  )
}

export default Pokemon;