// Gathering the data
fetch('https://study-guide-api.herokuapp.com/course/')
	.then(result => result.json())
	.then(result => {
		let keys = getKeys(result)			//Raw look at the data
		let methods = getMethods(result)	//Zoom in on one variable
		//Not very readable but we can get a sense of the distribution
		//Let's get a unique list
		let uniqueMethods = getUniqueMethods(methods)	
		//Different question: What courses are available in English?
		let englishCourses = getEnglishCourses(result)
		// What if we want to restructure data and get only a couple of fields?
		let dataStore = storeSomeFields(result)
		
		//What if we want to reorder data (Think back to the jeugdzorg question data)
		let coursesPerLanguage = groupByLanguage(dataStore)
		//countCoursesPerLanguage(coursesPerLanguage)

	})

//Get an idea of what's in the data
function getKeys(data){
	console.table(data)
	let keys = Object.keys(data[0])
	console.log("Keys: ", keys)
	return keys
}

//Mapping one variable
function getMethods(data){
	let methods = data.map(course => course.methods)
	//What variables (keys) exist on a given object in the data array?
	console.log("methods per course:",methods)
	return methods
}

//Getting unique values
function getUniqueMethods(methods){
	let methodsList = methods.reduce(
		(acc, current) => acc.concat(current), []
	)
	console.log("MethodsList: ", methodsList)	//Still not unique but now it's flat
	//let uniqueMethods = []
	// methodsList.forEach(method => {
	// 	if (uniqueMethods.indexOf(method) == -1){
	// 		uniqueMethods.push(method)
	// 	}
	// })
	//Shorthand method
	let uniqueMethods = [...new Set(methodsList)] 
	console.log("uniqueMethods: ", uniqueMethods)
	return uniqueMethods
}

//What Courses are available in English?
function getEnglishCourses(courses){
	// let engCourses = []
	// courses.forEach(course => {
	// 	if (course.languages.indexOf("en") != -1){
	// 		engCourses.push(course)
	// 	}
	// })
	//Shorthand version
	let engCourses = courses.filter(course => course.languages.includes("en"))
	console.log("engCourses", engCourses)
	return engCourses
}

//Here we will store some of the fields in our own data store
function storeSomeFields(data){
	let dataStore = data.map(course => {		
		return {
			name: course.name[0]? course.name[0].value : "No name :(",
			methods: course.methods,
			coordinators: course.coordinators,
		}
	})
	console.log(dataStore)
}

//How to get from here
// courses = [
// 	{
// 		name: "frontend",
// 		langauges: ["nl","en"]
// 	}
// ]


//To here?
// courses = [
// 	"nl" : [
// 		{
// 			name: "frontend"
// 		}
// 	],
// 	"en" : [
// 		{
// 			name: "Design Ethics"
// 		}
// 	]
// ]

//TODO: rerite to group per teacher
function groupByLanguage(data){
	let dataStore = {}

	data.forEach(course => {
		course.languages.forEach(language => {
			if (dataStore[language]){
				dataStore[language].push(course)
			} else { 
				dataStore[language] = [course]
			}
			//Shorthand version with ternary operator
			//dataStore[language] ? dataStore[language].push(course) : dataStore[language] = course	
		})
	})
	console.log(dataStore)
	return dataStore
}

function countCoursesPerLanguage(data){
	console.log(data.en.length)
	console.log(data.nl.length)
	//return "eng: 4, nl: 80"
}
