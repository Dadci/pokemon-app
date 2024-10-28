import PokeGallery from "./components/PokeGallery";

function App() {
  let pokemon_array = [
    {
      name: "Pikachu",
      picture: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
      type: ["Electric"],
    },
    {
      name: "Bulbasaur",
      picture: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
      type: ["Grass", "Poison"],
    },
    {
      name: "Charmander",
      picture: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
      type: ["Fire"],
    },
    {
      name: "Squirtle",
      picture: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
      type: ["Water"],
    },
    {
      name: "Jigglypuff",
      picture: "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png",
      type: ["Normal"],
    },
    {
      name: "Meowth",
      picture: "https://img.pokemondb.net/sprites/home/normal/meowth.png",
      type: ["Normal"],
    },
    {
      name: "Psyduck",
      picture: "https://img.pokemondb.net/sprites/home/normal/psyduck.png",
      type: ["Water"],
    },
    {
      name: "Machop",
      picture: "https://img.pokemondb.net/sprites/home/normal/machop.png",
      type: ["Fighting"],
    },
    {
      name: "Geodude",
      picture: "https://img.pokemondb.net/sprites/home/normal/geodude.png",
      type: ["Rock"],
    },
    {
      name: "Rattata",
      picture: "https://img.pokemondb.net/sprites/home/normal/rattata.png",
      type: ["Normal"],
    },
    {
      name: "Pidgey",
      picture: "https://img.pokemondb.net/sprites/home/normal/pidgey.png",
      type: ["Flying"],
    },
    {
      name: "Snorlax",
      picture: "https://img.pokemondb.net/sprites/home/normal/snorlax.png",
      type: ["Normal"],
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center m-10">
        <h1 className="text-4xl font-semibold text-blue-700">Pokedex</h1>
      </div>

      <PokeGallery pokemon={pokemon_array} />
    </>
  );
}

export default App;
