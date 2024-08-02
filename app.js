const inputDataPeople = [
    {
        firstName: false,
        lastName: 2,
    },
    {
        firstName: 'Roman',
        lastName: 'Kowalski',
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

const nonString = (name) => {
    return typeof name !== 'string'
}

const generateNickname = (people) => {
    return people.map(({ firstName, lastName }) => {
        if (nonString(firstName) || nonString(lastName)) {
            return { firstName, lastName }
        }
        if (firstName.length < 3 || lastName.length < 3) {
            return { firstName, lastName }
        }
        const reversedFirstName = firstName
            .substring(firstName.length - 3)
            .split('')
            .reverse()
            .join('')
        const modifiedLastName = lastName.substring(0, 3) // Take the first three letters of the last name
        const transformedLastName = modifiedLastName[2] + modifiedLastName[1] + modifiedLastName[0] // and swap the first and third letters
        const nickname = `${reversedFirstName}${transformedLastName}`
        return {
            firstName,
            lastName,
            nickname: nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase(),
        }
    })
}

const outputDataWithNick = generateNickname(inputDataPeople)
console.log('\n\nZadanie 1:\n\n', outputDataWithNick)

const calculateAge = (people) => {
    return people
        .filter(({ nickname }) => nickname)
        .map((person, index) => {
            const totalLetters = person.firstName.length + person.lastName.length
            const sumAllLetters = Object.keys(person).reduce(
                (accumulator, currentValue) => accumulator + currentValue.length,
                0
            )
            const age =
                totalLetters % 2 === 0
                    ? totalLetters
                    : Math.ceil(sumAllLetters / (index === 0 ? 1 : index))
            return { ...person, age }
        })
}

const processedPeople = calculateAge(outputDataWithNick)
console.log('\n\nZadanie 2:\n\n', processedPeople)
