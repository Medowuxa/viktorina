

export function getRandomElement(arr){
    const last = arr.length 
    const index = Math.floor(Math.random() * last)
    return arr[index]
}
