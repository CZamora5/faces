const BASE_URL = 'https://100k-faces.glitch.me/';

async function fetchData(url) {
	try {
		const data = await fetch(url);
		// const data = await fetch(url, {
		// 	method: 'GET',
		// 	crossorigin: true,
		// 	mode: 'no-cors'
		// });
		console.log(data)
		return data;
	} catch (err) {
		console.error(err);
	}
}

export async function fetchRandomFace() {
	return fetchData(`${BASE_URL}random-image`);
}

export async function fetchRandomFaceURL() {
	return fetchData(`${BASE_URL}random-image-url`);
}