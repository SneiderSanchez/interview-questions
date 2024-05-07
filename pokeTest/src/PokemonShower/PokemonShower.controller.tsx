import { PokemonShower } from "./PokemonShower";
import Pokemons from "../utils/Pokemons.json";
import "./Pokemon.css";
import { useState } from "react";
import { pokemonSerializer } from "./pokemonShower.serializer";

export function PokemonShowerController() {
  const [filter, setFilter] = useState<string | null>(null);

  const { filteredPokemons, filterOptions } = pokemonSerializer({
    pokemons: Pokemons,
    pokemonType: filter,
  });

  function handleSelectFilter(selectedValue: string) {
    setFilter(selectedValue);
  }

  return (
    <PokemonShower
      pokemons={filteredPokemons}
      handleSelectFilter={handleSelectFilter}
      filterOptions={filterOptions}
    />
  );
}
