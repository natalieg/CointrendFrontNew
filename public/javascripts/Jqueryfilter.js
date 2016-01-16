/**
 * Created by Dominik on 14.01.2016.
 */
$(document).ready(function () {

    //default each row to visible

    $('tbody tr').addClass('visible');

    $('#filter').keyup(function (event) {
        //if esc is pressed or nothing is entered
        if (event.keyCode == 27 || $(this).val() == '') {
            //if esc is pressed we want to clear the value of search box
            $(this).val('');

            //we want each row to be visible because if nothing
            //is entered then all rows are matched.
            $('tbody tr').removeClass('visible').show().addClass('visible');
        }

        //if there is text, lets filter
        else {
            filter('tbody tr', $(this).val());
        }
    });
});




