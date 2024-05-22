

export function shuffleArray(arr) {
    arr.forEach((val, index, parent)=> {
        const rand = Math.floor(Math.random() * (index + 1));
        [parent[index], parent[rand]] = [parent[rand], parent[index]]
    })

    return arr
}

// [].forEach

// let i = [1, 2]
// let one = i[0]
// let two = i[1]

// let Nika = {
//     name: 'Nika',
//     age: 17,
//     hair: 'brown'
// }

// let userName = Nika.name
// let userAge = Nika.age

// let {name: userName, age: userAge} = Nika

// console.log(userAge);