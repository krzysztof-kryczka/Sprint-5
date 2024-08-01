const inputDataPeople = [
    {
        firstName: false,
        lastName: 2,
    },
    {
        firstName: 'Roman',
        lastName: 'Kowalska',
    },
    {
        firstName: 'Halina',
        lastName: 'Malina',
    },
    {
        firstName: 'B',
        lastName: '22',
    },
    {
        firstName: 'Jan',
        lastName: 'Nowak',
    },
    {
        firstName: 'Kamil',
        lastName: null,
    },
]

function nonString(name) {
    return typeof name !== 'string'
}

function generateNickname(people) {
    return people.map((person) => {
        if (nonString(person.firstName) || nonString(person.lastName)) {
            return person
        }
        if (person.firstName.length < 3 || person.lastName.length < 3) {
            return person
        }
        const reversedFirstName = person.firstName.slice(-3).split('').reverse().join('')
        const modifiedLastName = person.lastName.slice(0, 3) // Take the first three letters of the last name
        const transformedLastName = modifiedLastName[2] + modifiedLastName[1] + modifiedLastName[0] // and swap the first and third letters
        const nickname = `${reversedFirstName}${transformedLastName}`
        person.nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase()
        return person
    })
}

const outputData = generateNickname(inputDataPeople)
console.log(outputData)
