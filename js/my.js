/**
 * Created by user on 3/21/14.
 */
$(document).ready(function(){
    //
//                $("#show_inbox").click(function(){
//                    $("#mail-layer").show();
//                    $("#calendar-layer").hide();
//                    $("#tasks-layer").hide();
//                });
//                $("#show_calendar").click(function(){
//                    $("#mail-layer").hide();
//                    $("#calendar-layer").show();
//                    $("#tasks-layer").hide();
//                });
//                $("#show_tasks").click(function(){
//                    $("#mail-layer").hide();
//                    $("#calendar-layer").hide();
//                    $("#tasks-layer").show();
//                });
    $("#hide_add_task_panel").click(function(){
        $("#add-task-panel").hide();
    });
    $("#show_add_task_panel").click(function(){
        $("#add-task-panel").show();
    });
    $(function(){
        $("#datepiker_stop").datepicker();
    });
    $(function(){
        $("#datepiker_start").datepicker();
    });
    $("#accordian h3").click(function(){
        //slide up all the link lists
        $("#accordian ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
        }
    });
    $('#add_form').submit(function () {
        if ($('#add-input').val() !== '') {
            var input_value = $('#add-input').val();
            $('#list-box').append('<div class="todo-line">' +
                '                       <div><input type="checkbox"></div>' +
                '                       <div><label>' + input_value + '</label></div>' +
                '                  </div>');
            //$('ul').append('<li>' + input_value '<a href="">x</a></li>');
        };
        $('#add-input').val('');
        return false;
    });
});