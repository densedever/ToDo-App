// main.js
// - holds components and main logic.

(function() {
    "use strict"
    
    // helper functions:
    
    // task's id, mutable
    let accumulatingId = 0
    
    const dateString = date =>
        `${date.toDateString()} ${date.getHour()} ${date.getMinute()} ${date.getSecond()}`

    // take out illegal characters to prevent XSS
    // should be server-side!
    const sanitize = str =>
        str
        .replace(/[^a-z0-9 \.,_-]/gim,'') // delete everything but these characters.
        .trim()
    
    // end helper functions.
    
    // return task information to be added to the app
    const genTask = () =>
        `<div class='task'>
            <p class='task-text'>${sanitize($('#post-text').val())}</p>
            Id: <p class='post-id'>${++accumulatingId}</p>
            Name: <p class='name'>${sanitize($('#task-name').val())}</p>
            Description: <p class='desc'>${sanitize($('#task-desc').val())}</p>
            Created: <p class='date-created'>${new Date()}</p>
            Edited: <p class='date-edited'>${null}</p>
            <button type='button' class='edit'>Edit</button>
            <button type='button' class='delete'>Delete</button>
        </div>`
    
    $(document).ready(() => {
        $('#edit-area').hide()
        $('#submit').click(() => {
            // post a new task
            $('#saved-tasks').append(genTask())
        })
        
        // when edit button clicked
        $('#saved-tasks').on('click','.edit', (event) => {
            
            $('#edit-area').show()
            
            const $taskText = $(event.currentTarget)
                              .parent()
                              .find('.task-text')
            
            // sets task description to edit window value
            // put task contents into edit field
            $('#edit-field').val($taskText.text())
            $('#edit-submit').off('click')
            
            // when submit clicked, DOM is searched for task description
            $('#edit-submit').click(() => {

                // task description is updated
                $taskText.text($('#edit-field').val())
                $(event.currentTarget).parent()
                                      .find('.date-edited')
                                      .text(new Date())
            })
        })
        $('#saved-tasks').on('click', '.delete', (event) => {
            $(event.currentTarget)
                .parent()
                .remove()
        })

    })
})();
