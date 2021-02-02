// const btn = document.querySelector('button');

// setTimeout(() => {
// 	btn.style.transform = `translateX(100px)`;
// 	setTimeout(() => {
// 		btn.style.transform = `translateX(200px)`;
// 	}, 3000);
// }, 2000);

// const moveXPromise = (element, amount, delay, callback) => {
// 	setTimeout(() => {
// 		element.style.transform = `translateX(${amount}px)`;
// 		if (callback) callback();
// 	}, delay);
// };
// moveXPromise(btn, 100, 1000)
// 	.then(() => moveXPromise(btn, 100, 1000))
// 	.then(() => moveXPromise(btn, 100, 1000))
// 	.then(() => moveXPromise(btn, 100, 1000))
// 	.then(() => moveXPromise(btn, 50, 1000))
//     .then(() => moveXPromise(btn, 50, 1000));
//     .catch((position) => {
//         alert('Cannot move kurwa')
//     })
// const willGetYouADog = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 5000);
// 	});
// };
// willGetYouADog()
// 	.then(() => {
// 		console.log('yeah, we will get a dog');
// 	})
// 	.catch(() => {
// 		console.log(':( ahh noo');
// 	});
// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users': [ { id: 1, username: 'Temur' }, { id: 2, username: 'Bobur' } ],
// 				'/about': 'This is about page'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data });
// 			} else {
// 				reject({ status: 404 });
// 			}
// 		}, 3000);
// 	});
// };
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data', res.data);
// 		console.log('Request worked');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('Request failed');
// 	});
// fakeRequest('/dogs')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data', res.data);
// 		console.log('Request worked');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('Request failed');
// 	});

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users': [ { id: 1, username: 'Temur' }, { id: 2, username: 'Bobur' } ],
// 				'/users/1': {
// 					id: 1,
// 					username: 'Bobur',
// 					upvotes: 360,
// 					city: 'New York',
// 					topPostId: 454321
// 				},
// 				'/users/5': {
// 					id: 5,
// 					username: 'Gulnoza',
// 					upvotes: 571,
// 					city: 'Tashkent'
// 				},
// 				'/posts/454321': {
// 					id: 454321,
// 					title: 'Ladies & Gentlemen, may I indtroduce myself, Temur'
// 				},
// 				'/about': 'This is the page'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data });
// 			} else {
// 				reject({ status: 404 });
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/users/${id}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`).then((res) => {
// 			console.log(res);
// 		});
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('Oopss!', err);
// 	});
// const btn = document.querySelector('button');
// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			} else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
//   	.then(() => moveX(btn, 100, 2000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => console.log('hey, lemme move litt" more'))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large`);
// 	});
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('Error', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// 	// for (let planet of data.results) {
// 	// 	console.log(planet.name);
// 	// }
// });

// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request sent!');
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status code Error: ${response.status}`);

// 	return response.json();
// };
// const printPlanets = (data) => {
// 	console.log('LOADED 10 MORE PLANETS');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };
// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
// 	return fetch(url);
// };
// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('Something is wrong with status code');
// 		console.log(err);
// 	});

// axios
// 	.get('https://swapi.dev/api/planets/')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
// 	return axios.get(url);
// };
// const printPlanets = ({ data }) => {
// 	console.log(data);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// fetchNextPlanets().then(printPlanets).then(fetchNextPlanets).then(printPlanets).catch((err) => {
// 	console.log(err);
// });

// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/').then((data) =>{
// 		console.log(data)
// 	})  ;
// 	console.log(data);
// }

// async function greet() {
// 	return 'Hello';
// }

// greet().then((val) => {
// 	console.log('Promise resolved with: ', val);
// });

// async function add(x, y) {
// 	if (typeof x !== 'number' || typeof y !== 'number') {
// 		throw 'X and Y must be numbers!';
// 	}
// 	return x + y;
// }
// function add(x, y) {
// 	return new Promise((resolve, rejecet) => {
// 		if (typeof x !== 'number' || typeof y !== 'number') {
// 			rejecet('x  and y must be numbers');
// 		}
// 		resolve(x + y);
// 	});
// }
// add('e', 4)
// 	.then((val) => {
// 		console.log('Promise rejected with: ', val);
// 	})
// 	.catch((err) => {
// 		console.log('Promise rejected with: ', err);
// 	});
// //
// function getPlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }
// getPlanets().then((res) => {
// 	console.log(res);
// });

// async function getPlanets() {
// 	const res = await axios.get('https://swapi.dev/api/planets/');
// 	console.log(res.data);
// // }
// getPlanets().catch((err) => {
// 	console.log('In catch');
// 	console.log(err);
// });

// async function getPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.dev/api/planets/');
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log('In catch', e);
// 	}
// }
// getPlanets();

// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			} else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// async function animateRight(element, amount) {
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// 	await moveX(element, amount, 1000);
// }

// animateRight(btn, 100).catch((err) => {
// 	console.log('All done!');
// 	animateRight(btn, -100);
// });
// async function get3Pokemon() {
// 	const poke1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	await poke1
// 	await poke2
// 	await poke3
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }
// get3Pokemon();

// function changeBodyColor(color, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color;
// 			resolve();
// 		}, delay);
// 	});
// }
// async function lightShow() {
// 	const p1 = changeBodyColor('black', 2000);
// 	const p2 = changeBodyColor('grey', 2000);
// 	const p3 = changeBodyColor('white', 2000);
// 	const p4 = changeBodyColor('darkgrey', 2000);
// }
// lightShow();

// async function get3Pokemon() {
// 	const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	const results = await Promise.all([ poke1, poke2, poke3 ]);
// 	printPokemon(results);
// }
// function printPokemon(results) {
// 	for (let pokemon of results) {
// 		console.log(pokemon.data.name);
// 	}
// }
// get3Pokemon();

// const navColor = new Color('carrot', [ 230, 126, 34 ]);
// const logoColor = new Color('emerald', [ 46, 204, 113 ]);
// function hex(r, g, b) {
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
// 	return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const { r, g, b } = this;
// 		return '#' + (( 1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	};
// 	return color;
// }
// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// 	console.log(this);
// }
// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function() {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function(a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);

// class Color {
// 	constructor(r, g, b, name) {
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 		this.name = name;
// 		this.calcHSL();
// 	}
// 	innerRGB() {
// 		const { r, g, b } = this;
// 		return `${r}, ${g}, ${b}`;
// 	}
// 	rgb() {
// 		return `rgb(${this.innerRGB()})`;
// 	}
// 	rgba(a = 1.0) {
// 		return `rgba(${r}, ${g}, ${b}, ${a})`;
// 	}
// 	hex() {
// 		const { r, g, b } = this;

// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	}
// 	hsl() {
// 		const { h, s, l } = this;
// 		return `hsl(${h}, ${s}%, ${l}%)`;
// 	}

// 	// const black = new Color(40, 50, 60, 'Rexar');
// 	// const white = new Color(255, 255, 255, 'Rohan');

// 	calcHSL() {
// 		let { r, g, b } = this;
// 		r /= 255;
// 		g /= 255;
// 		b /= 255;

// 		let cmin = Math.min(r, g, b),
// 			cmax = Math.max(r, g, b),
// 			delta = cmax - cmin,
// 			h = 0,
// 			s = 0,
// 			l = 0;

// 		if (delta == 0) h = 0;
// 		else if (cmax == r) h = ((g - b) / delta) % 6;
// 		else if (cmax == g) h = (b - r) / delta + 2;
// 		else h = (r - g) / delta + 4;
// 		h = Math.random(h * 60);
// 		if (h < 0) h += 360;
// 		l = (cmax + cmin) / 2;
// 		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
// 		s = +(s * 100).toFixed(1);
// 		l = +(l * 100).toFixed(1);
// 		this.h = h;
// 		this.s = s;
// 		this.l = h;
// 	}
// }
// const black = new Color(40, 50, 60, 'grey');
// const white = new Color(255, 255, 255, 'white');
// class Pet {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		return `${this.name} is eating`;
// 	}
// }
// class Cat extends Pet {
// 	meow() {
// 		return 'MEOWWWW!';
// 	}
// }
// class Dog extends Pet {
// 	bark() {
// 		'Wooof!';
// 	}
// 	// eat() {
// 	// 	return `${this.name} scarfs his food`;
// 	// }
// }
