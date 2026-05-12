import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let teamUrl = new URL(`https://tp2-backend-z9h1.onrender.com/teams/${params.id}`);
	const teamResp = await fetch(teamUrl);
	if (!teamResp.ok) {
		error(teamResp.status);
	}

	let team = await teamResp.json();

	let urlPokemones = new URL('https://tp2-backend-z9h1.onrender.com/pokemones/');
	const responsePokemones = await fetch(urlPokemones);
	if (!responsePokemones.ok) {
		throw new Error(`Response status: ${responsePokemones.status}`);
	}

	let pokemones = await responsePokemones.json();

	let urlMovimientos = new URL('https://tp2-backend-z9h1.onrender.com/movimientos/');
	const responseMovimientos = await fetch(urlMovimientos);
	if (!responseMovimientos.ok) {
		throw new Error(`Response status: ${responseMovimientos.status}`);
	}

	let movimientos = await responseMovimientos.json();

	let urlNaturalezas = new URL('https://tp2-backend-z9h1.onrender.com/naturalezas/');
	const responseNaturalezas = await fetch(urlNaturalezas);
	if (!responseNaturalezas.ok) {
		throw new Error(`Response status: ${responseNaturalezas.status}`);
	}

	let naturalezas = await responseNaturalezas.json();

	return {
		team: team,
		pokemones: pokemones,
		movimientos: movimientos,
		naturalezas: naturalezas
	};
}
