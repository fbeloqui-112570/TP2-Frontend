export async function load() {
	let url = new URL('https://tp2-backend-z9h1.onrender.com/pokemones/');
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}

	let pokemones = await response.json();

	return {
		pokemones: pokemones
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		let url = new URL('https://tp2-backend-z9h1.onrender.com/pokemones/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				identificador: data.get('identificador'),
				altura: parseInt(data.get('altura')),
				peso: parseInt(data.get('peso')),
				experiencia_base: parseInt(data.get('experiencia_base'), 10),
				imagen: data.get('imagen'),
				grupo_de_huevo: data.get('grupo_de_huevo'),
				generacion: data.get('generacion' || '[]'),
				habilidades: data.get('habilidades' || '[]'),
				evoluciones_inmediatas: data.get('evoluciones_inmediatas' || '[]'),
				tipo: data.get('tipo' || '[]'),
				estadisticas: JSON.parse(data.get('estadisticas' || '{}')),
				id_especie: parseInt(data.get('id_especie'))
			})
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
	}
};
