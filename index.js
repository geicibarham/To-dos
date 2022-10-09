$(document).ready(function () {
    $("#button").click(function () {
        let todoItem = $("input[name=todo]").val()

        $("ol").append("<li>" + todoItem + "</li>")
        $("input[name=todo]").val(" ")
    })

    $("ol").on("dblclick", "li", function () {
        $(this).toggleClass("strike")
    })
    $("ol").sortable();

    $("#datepicker").datepicker({
        onSelect: function (dateText, inst) {
            let date = moment(dateText).format("MMM Do YY");
            $('#date-text').text(date)

        },
    });

})

