import { baseStruct } from "./modules/baseStruct.js";
import { getRandomElement } from "./modules/getRandomElement.js";
import { shuffleArray } from "./modules/shuffleArray.js";
// const baseStruct = require("./modules/baseStruct.js");

let counter = 0
let incorrect = 0
const shuffledArray = shuffleArray(baseStruct)

insertQ()

function insertQ(){

    if (!shuffledArray[counter]) return goToFinal()

    $('.--red').removeClass('--red')
    const {question, answers} = shuffledArray[counter]
    $('.q span').text(question)

    answers.forEach((element, ind) => {
        $(`.a${ind+1}`).text(element)
    });

    counter++
}

$('.a').click(validatingA)

function validatingA(){
    
    if (shuffledArray[counter-1].correct == $(this).text()) {
        insertQ()
    } else {
        $(this).addClass('--red')
        insertIncorrect()
    }
}

function insertIncorrect(){
    incorrect++
    $('.not span').text(incorrect)
}

function goToFinal() {
    $('.play').addClass('--none')
    $('.final').removeClass('--none')

    if (incorrect < 1) $('.titul').text('Без ошибок! Впечатляет!')
    else if (incorrect < 5) $('.titul').text('Замечательно!')
    else if (incorrect < 9) $('.titul').text('Неплохой результат!')
    else $('.titul').text('Тебе стоит пройти ещё разок')

}

$('.start-btn').click(()=> {
    $('.start').addClass('--none')
    $('.play').removeClass('--none')
})

