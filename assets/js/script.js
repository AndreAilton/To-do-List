const button = document.querySelector(".add-task")
const input = document.querySelector(".input-task")
const List = document.querySelector(".list-tasks")

let array = []
function CriaTask(){
    array.push({tarefa:input.value, concluida:false})
    input.value = ''
    mostrarTarefas()
}

function removeitem(index){
    array.splice(index,1)
    mostrarTarefas()
}

function concluiritem(index){
    array[index].concluida = !array[index].concluida
    mostrarTarefas()
}
function mostrarTarefas(){
    let novaLi = ''

    array.forEach( (item,posicao) => {
        novaLi += `            
        <li class="task ${item.concluida && 'done'}" >
            <img src="assets/img/checked.png" alt="Check" onclick="concluiritem(${posicao})">
            <p>${item.tarefa}</p>
            <img src="assets/img/trash.png" alt="Remove" onclick="removeitem(${posicao})">
        </li>`
    })

    List.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(array))
}

function reloaditems(){
    const tarefasL = localStorage.getItem('lista')
    if (tarefasL){ array = JSON.parse(tarefasL)}

    mostrarTarefas()
}

reloaditems()
button.addEventListener("click", CriaTask)