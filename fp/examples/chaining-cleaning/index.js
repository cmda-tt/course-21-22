/* Ik gebruik een functie, de parseData() om alle data in te verwerken. */
function parseData() {
	/* Deze functie genereert een nieuwe Promise, dit zou ook gebeuren als je de dataset met een fetch() zou ophalen */
	return new Promise((resolve, reject) => {
		let dataSet = data;
		/* resolve stuurt de data naar de .then() onderin */
		resolve(dataSet);
	})
}

/* Utility functie om hoofdletters te verwijderen */
function removeCapitals(string) {
	/* Ik wil hem alleen op strings uitvoeren, dus kijk ik of de parameter ook echt een string is */
	if(typeof string === 'string') {
		return string.toLowerCase();
	} else {
		return string;
	}
}

/* Utility functie om vraagtekens te verwijderen */
function removeQuestionMarks(string) {
	if(typeof string === 'string') {
		return string.replaceAll('?', '');
	} else {
		return string;
	}
}

/* Utility functie om lege strings aan te passen */
function ifEmptyChangeToZero(string) {
	if(typeof string === 'string' && string.length < 1) {
		return "Geen antwoord";
	} else {
		return string
	}
}

/* Utility functie om strings te veranderen naar integers */
function convertStringToInt(string) {
	if(!isNaN(parseInt(string, 10))) {
		/* https://stackoverflow.com/questions/10398834/using-javascript-parseint-and-a-radix-parameter */
		return parseInt(string, 10)
	} else {
		return string;
	}
}

/* Methode 1, hiermee kun je losse items schoonmaken */
let results1 = removeCapitals(data[0]['Wat is je favoriete zuivelproduct?'])
let results2 = removeQuestionMarks(data[3]['Kaas is ook een zoogdier?'])
let results3 = ifEmptyChangeToZero(data[16]['Kies zelf of je deze vraag beantwoord.'])


/* Methode 2, hiermee kun je meerdere items aan elkaar "chainen" */
parseData()
	.then(data => {
		/* Om meerdere .then()s aan elkaar te chainen moet er een return plaatsvinden in de
		   oorspronkelijke .then(), daarom return ik het resultaat van de data.map() method */
		return data.map(obj => {
			/* We loopen hier over alle objecten in de array heen, obj staat voor ieder los object */
			Object.keys(obj).forEach(key => {
				/* Object.keys(obj) maakt een nieuwe array aan met alle keys, met forEach() loopen we daarover */
				obj[key] = removeCapitals(obj[key]);
				obj[key] = removeQuestionMarks(obj[key]);
				obj[key] = ifEmptyChangeToZero(obj[key]);

				/* data-item['vraag'] = removeCapitals(data-item['vraag']) */
			})

			/* Stuur elk obj aangepast terug naar de map() */
			return obj;
		})
	})
	.then(data => {
		return data.map(obj => {
			// Haal de waarde 'op welke verdieping...'-key uit het object dat terugkomt uit de loop van data
			obj['Op welke verdieping van het TTH studeer je het liefst?'] = convertStringToInt(obj['Op welke verdieping van het TTH studeer je het liefst?']);
			return obj;
		})
	}).then(cleanData => {
		/* In deze .then() kunnen we vervolgens iets doen met de data, bijvoorbeeld renderen in een DOM */
		console.log('This data is cleaned');
		console.table(cleanData);
	}).catch(err => {
		/* de .catch() vangt eventuele errors af tijdens de promise kunnen plaatsvinden, altijd gebruiken! */
		console.log(err);
	})

