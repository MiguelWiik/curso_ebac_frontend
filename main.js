$(document).ready(function(){
    $('#form-task').submit(function (e) { 
        e.preventDefault();

        const inputTaskValue = $('#form-input').val().trim()
        $(`<li>
                <label class="task-clickable">
                    <div class="finish-task-button"></div>
                </label>
                <div class="task-text">${inputTaskValue}</div>
                <img src="images/bin.png" alt="recycle bin illustration" id="recycle-bin">
            </li>
            `).appendTo('ul')
        $('#form-input').val('')
    });
    $(document).on('click', '.task-clickable', function(){
        $(this).closest('li').toggleClass('line-through');
        
    })
    $(document).on('click','.task-text', function () {
        $(this).closest('li').toggleClass('line-through');
    });
    $(document).on('click','#recycle-bin', function () {
        const recycleBin = $(this).closest('li');
        recycleBin.remove();
    });
})
