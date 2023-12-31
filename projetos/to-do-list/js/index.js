//Pai das tarefas
const toDoList = document.getElementById('to-do-list');
//form
const form = document.querySelector('form');
//Inputs
const inputText = document.getElementById('list-name');
//Alerta de máximo de caracteres
const maxCaracterAlert = document.getElementById('max-caracter-alert');

//Adiciona a tarefa quando aperta enter ou clica no botão
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Não deixa adicionar uma nova task se passar do máximo de letras
    if (inputText.value.length >= inputText.maxLength) return;

    if (inputText.value.length == 0) {
        maxCaracterAlert.innerText = 'please, insert any word *';
        return;
    }

    newTask(inputText.value, toDoList);
    inputText.value = '';
});

//Verifica se o números de caracteres não está no limite
inputText.addEventListener('input', function () {
    if (inputText.value.length >= inputText.maxLength) {
        maxCaracterAlert.innerText = 'maximum characters reached *';
    } else {
        maxCaracterAlert.innerText = '';
    }
});

//Carrega as tarefas que foram salvas
loadAllTasks(toDoList);