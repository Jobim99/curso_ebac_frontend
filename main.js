$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#lista-tarefa').val()
        const addTarefaNova = $('<li style="display: none;"></li>')
        $(`
            <li>${novaTarefa}</li>
        `).appendTo(addTarefaNova)
        $(addTarefaNova).appendTo('ul')
        $(addTarefaNova).fadeIn(0)
        $('#lista-tarefa').val('')
        console.log(novaTarefa)
    })


    $(document).on('click', 'li', function() {
        if ($(this).css('text-decoration-line') == "none")
            $(this).css('text-decoration-line', 'line-through');
        else
            $(this).css('text-decoration-line', 'none');
    })

})