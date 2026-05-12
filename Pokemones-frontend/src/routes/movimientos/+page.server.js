export async function load() {
    let url = new URL('https://tp2-backend-z9h1.onrender.com/movimientos/');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    let movimientos = await response.json();

    return {
        movimientos: movimientos
    };
}
