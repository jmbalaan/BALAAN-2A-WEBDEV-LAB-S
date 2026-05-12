export default async function Home() {
  // Fetching the data from PokeAPI
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const pokemon = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 capitalize text-gray-800">
        Pokedex: {pokemon.name}
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center border border-gray-200">
        
        
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain"
        />

        <div className="mt-6 text-xl space-y-2 text-gray-700">
          
          <p><strong>Height:</strong> {pokemon.height}</p>
          
          
          <p><strong>Weight:</strong> {pokemon.weight}</p>
        </div>

      </div>
    </main>
  );
}