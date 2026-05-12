import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let movimientoUrl = new URL(`https://tp2-backend-z9h1.onrender.com/movimientos/${params.id}`);
	const movimientoResp = await fetch(movimientoUrl);
	if (!movimientoResp.ok) {
		error(movimientoResp.status);
	}

	let movimiento = await movimientoResp.json();

	return {
		movimiento,
		pokemones_tm: movimiento.pokemones_tm || [],
		pokemones_subida_nivel: movimiento.pokemones_subida_nivel || [],
		pokemones_grupo_huevo: movimiento.pokemones_grupo_huevo || []
	};
}
