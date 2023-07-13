//Глобальные поля приложения

//Константы выигрышных вариантов
const FROM_LEFT_TOP_CORNER_TO_RIGHT_BOT = [0, 4, 8];
const FROM_RIGHT_TOP_CORNER_TO_LEFT_BOT = [2, 4, 6];
const TOP_LINE_HORIZONTAL = [0, 1, 2];
const MIDDLE_LINE_HORIZONTAL = [3, 4, 5];
const BOT_LINE_HORIZONTAL = [6, 7, 8];
const LEFT_LINE_VERTICAL = [0, 3, 6];
const MIDDLE_LINE_VERTICAL = [1, 4, 7];
const RIGHT_LINE_VERTICAL = [2, 5, 8];

//Игровая матрица значений
let fieldsValues = 
[   
    0,0,0,
    0,0,0,
    0,0,0
];
//Сторона, которая делает ход в текущий момент (true - X, false - o)
let currentPlayer = true;
let someoneWin = false;

let scoreX = 0;
let scoreO = 0;
//Тип противника (компьютер, человек)
let enemyVariant = "Player";
//Шаблон для отрисовки крестика
const X_ELEMENT = "<div class=\"x\"></div>";
//Шаблон для отрисовки нолика
const O_ELEMENT = "<div class=\"o\"></div>";

const buttonHandler = start_button.onclick = buttonClickHandler;
const divHandler = allDivFields.onclick = divClickHandler;

function divClickHandler(event) {
    //Проверяем класс кликнутого объекта, если это <div> то производим отрисовку
    if ( !someoneWin && event.srcElement.className !== "x" && event.srcElement.className !== "o") {
        let currentDiv = document.getElementById(event.srcElement.id);
        currentDiv.innerHTML = currentPlayer ? X_ELEMENT : O_ELEMENT;
        const fieldIndex = parseInt(currentDiv.id.charAt(currentDiv.id.length-1));
        fieldsValues[fieldIndex-1] = currentPlayer ? 1 : 2;
        someoneWin = checkFieldsValues(fieldsValues, currentPlayer);
        if (someoneWin) {
            //Нагло лезем в главный див отрисовать победное окно
            let baseDiv = document.getElementById("board");
            const winner = currentPlayer ? "Крестик" : "Нолик";
            currentPlayer ? scoreX++ : scoreO++;
            baseDiv.innerHTML = `\"Крестики\"|${scoreX}:${scoreO}|\"Нолики\"` + `<p class="win_text">${winner} победил! </p>`;
        }
        currentPlayer = !currentPlayer;
    }
}

function buttonClickHandler() {
    fieldsValues = [0,0,0,0,0,0,0,0,0];
    currentPlayer = true;
    for(let i = 1; i<=fieldsValues.length;i++) {
        const elem = document.getElementById("divs_top"+i);
        elem.innerHTML = "";
    }
    document.getElementById("board").innerHTML = `\"Крестики\"|${scoreX}:${scoreO}|\"Нолики\"`;
    someoneWin = false;
};

function checkFieldsValues(fieldsValues, lastPlayer) {
    const lastPlayerIndex = lastPlayer ? 1 : 2;
    if(
        arrayCheck(fieldsValues, FROM_LEFT_TOP_CORNER_TO_RIGHT_BOT, lastPlayerIndex) ||
        arrayCheck(fieldsValues, FROM_RIGHT_TOP_CORNER_TO_LEFT_BOT, lastPlayerIndex) ||
        arrayCheck(fieldsValues, TOP_LINE_HORIZONTAL, lastPlayerIndex) ||
        arrayCheck(fieldsValues, MIDDLE_LINE_HORIZONTAL, lastPlayerIndex) ||
        arrayCheck(fieldsValues, BOT_LINE_HORIZONTAL, lastPlayerIndex) ||
        arrayCheck(fieldsValues, LEFT_LINE_VERTICAL, lastPlayerIndex) ||
        arrayCheck(fieldsValues, MIDDLE_LINE_VERTICAL, lastPlayerIndex) ||
        arrayCheck(fieldsValues, RIGHT_LINE_VERTICAL, lastPlayerIndex) 
        ) {
            return true;
    }
    return false;
}

function arrayCheck(fieldsValues, indexes, lastPlayerIndex) {
    if( fieldsValues[indexes[0]] === lastPlayerIndex && 
        fieldsValues[indexes[1]] === lastPlayerIndex && 
        fieldsValues[indexes[2]] === lastPlayerIndex
    ) {
        return true;
    }
    return false;
}