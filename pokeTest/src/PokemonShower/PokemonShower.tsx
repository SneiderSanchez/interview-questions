import { Pokemon } from "../utils/types";

export function PokemonShower({
  pokemons,
  handleSelectFilter,
  filterOptions,
}: {
  pokemons: Pokemon[];
  handleSelectFilter: (selectedValue: string) => void;
  filterOptions: string[];
}) {
  return (
    <>
      <label htmlFor="pokemonFilter">Pick a type: </label>
      <select
        name="pokemonFilter"
        onChange={(e) => handleSelectFilter(e.target.value)}
      >
        {filterOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
