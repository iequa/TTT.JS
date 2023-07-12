//Глобальные поля приложения

//Игровая матрица значений
let fieldsValues = [0,0,0][0,0,0][0,0,0];
//Сторона, которая делает ход в текущий момент
let currentPlayer = false;
//Тип противника (компьютер, человек)
let enemyVariant = "Player";
//Шаблон для отрисовки крестика
const X_ELEMENT = "<div class=\"x\"></div>";
const O_ELEMENT = "<div class=\"o\"></div>";


const buttonHandler = start_button.onclick = onClickHandler;
const divHandler = allDivFields.onclick = onClickHandler;

function onClickHandler(event) {
    //Проверяем класс кликнутого объекта, если это <div> то производим отрисовку
    //TODO ещё проверять по матрице [className.length-1] - индекс текущего элемента
    if (event.srcElement.className !== "x" && event.srcElement.className !== "o") {
        let currentDiv = document.getElementById(event.srcElement.id);
        currentDiv.innerHTML = currentPlayer ? X_ELEMENT : O_ELEMENT;
        currentPlayer = !currentPlayer;
    }
}

function onButtonClickEvent() {
    console.log("this is test function! cp = " + currentPlayer);
};

function onClickEvent() {
    console.log("Div click! " + currentPlayer);
};