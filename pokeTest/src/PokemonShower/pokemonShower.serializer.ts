import { Pokemon } from "../utils/types";

export function pokemonSerializer({
  pokemons,
  pokemonType,
}: {
  pokemons: Pokemon[];
  pokemonType: string | null;
}) {
  const filterOptions = pokemons.flatMap((pokemon) => pokemon.type);

  if (!pokemonType) {
    return {
      filteredPokemons: [pokemons[0]],
      filterOptions,
    };
  }
  return {
    filteredPokemons: pokemons.filter((pokemon) =>
      pokemon.type.some((item) => item === pokemonType)
    ),
    filterOptions,
  };
}
