function parseData() {
	return new Promise((resolve, reject) => {
		let dataSet = data;
		resolve(dataSet);
	}).then(data => {
		return data.map(obj => {
			Object.keys(obj).forEach(key => {
				obj[key] = removeCapitals(obj[key]);
				obj[key] = removeQuestionMarks(obj[key]);
				obj[key] = ifEmptyChangeToZero(obj[key]);
			})
			return obj;
		})
	})
	.then(data => {
		return data.map(obj => {
			obj['Op welke verdieping van het TTH studeer je het liefst?'] = convertStringToInt(obj['Op welke verdieping van het TTH studeer je het liefst?']);
			return obj;
		})
	}).catch(err => {
		console.log(err);
	})
}

function removeCapitals(string) {
	if(typeof string === 'string') {
		return string.toLowerCase();
	} else {
		return string;
	}
}

function removeQuestionMarks(string) {
	if(typeof string === 'string') {
		return string.replaceAll('?', '');
	} else {
		return string;
	}
}

function ifEmptyChangeToZero(string) {
	if(typeof string === 'string' && string.length < 1) {
		return "Geen antwoord";
	} else {
		return string
	}
}

function convertStringToInt(string) {
	if(!isNaN(parseInt(string, 10))) {
		return parseInt(string, 10)
	} else {
		return string;
	}
}

// let results1 = removeCapitals(data[0]['Wat is je favoriete zuivelproduct?'])
// let results2 = removeQuestionMarks(data[3]['Kaas is ook een zoogdier?'])
// let results3 = ifEmptyChangeToZero(data[16]['Kies zelf of je deze vraag beantwoord.'])


parseData().then(cleanData => {
	console.log('This data is cleaned');
	console.table(cleanData);
});

