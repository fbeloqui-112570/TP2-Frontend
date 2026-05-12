import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let pokemonUrl = new URL(`https://tp2-backend-z9h1.onrender.com/pokemones/${params.id}`);
	const pokemonResp = await fetch(pokemonUrl);
	if (!pokemonResp.ok) {
		error(pokemonResp.status);
	}

	let pokemon = await pokemonResp.json();

	return {
		pokemon
	};
}
