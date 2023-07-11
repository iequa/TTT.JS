//Глобальные поля приложения

//Игровая матрица значений
let fieldsValues = [0,0,0][0,0,0][0,0,0];
//Сторона, которая делает ход в текущий момент
let currentPlayer = false;
//Тип противника (компьютер, человек)
let enemyVariant = "Player";

const buttonHandler = start_button.onclick = onClickHandler;
const divHandler = allDivFields.onclick = onClickHandler;

function onClickHandler(event) {
    console.log("это кликнул " + event.srcElement.id);
    currentPlayer = true;
}

function onButtonClickEvent() {
    //customElements.define("TicTacDiv", TicTacDiv)
    console.log("this is test function! cp = " + currentPlayer);
};

function onClickEvent() {
    //customElements.define("TicTacDiv", TicTacDiv)
    console.log("Div click! " + currentPlayer);
};
//export {App};