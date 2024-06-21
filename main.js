$(document).ready(function() {
    const tarefas = [];
    
    $("form").submit(function(event) {
        event.preventDefault();
        const nomeTarefa = $('#Nova-Tarefa').val();
        
        if (nomeTarefa === "") {
            alert('Por favor, digite uma tarefa.');
            return;
        }
        
        if (tarefas.includes(nomeTarefa)) {
            alert('Essa tarefa já está na lista.');
        } else {
            tarefas.push(nomeTarefa);
            const novaTarefa = $('<li class="tarefa"></li>').text(nomeTarefa);
            $('#Lista-de-Tarefas').append(novaTarefa);
            $('#Nova-Tarefa').val("");
        }
    });

    $('#Lista-de-Tarefas').on('click', '.tarefa', function() {
        $(this).toggleClass('line-through');
    });
});

