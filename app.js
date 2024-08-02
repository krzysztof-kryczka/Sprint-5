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

const findMostCommonLetter = (people) => {
    const newArray = people.map((person) => {
        const allLetters = person.firstName + person.lastName + person.nickname
        const letterCounts = allLetters
            .toLowerCase()
            .split('')
            .reduce((counts, letter) => {
                //  if counts[letter] exists (is not null or undefined), we increment its value by 1. Otherwise, we set it to 1
                counts[letter] = ++counts[letter] || 1
                console.log(counts)
                return counts
            }, {})
        let mostCommonLetter = ''
        let maxCount = 0
        for (const [letter, count] of Object.entries(letterCounts)) {
            if (count > maxCount) {
                mostCommonLetter = letter
                maxCount = count
            } else if (count === maxCount) {
                mostCommonLetter = letter < mostCommonLetter ? letter : mostCommonLetter
            }
        }
        return {
            ...person,
            mostCommonLetter: {
                letter: mostCommonLetter,
                count: maxCount,
            },
        }
    })
    return newArray
}

const resultWithCommonLetter = findMostCommonLetter(processedPeople)
console.log('\n\nZadanie 3:\n\n', resultWithCommonLetter)
