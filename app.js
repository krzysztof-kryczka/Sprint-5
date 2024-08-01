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
        if (nonString(person.firstName)) {
            return person
        }
        if (person.firstName.length < 3) {
            return person
        }
        const reversedFirstName = person.firstName.slice(-3).split('').reverse().join('')
        return reversedFirstName
    })
}

const outputData = generateNickname(inputDataPeople)
console.log(outputData)
