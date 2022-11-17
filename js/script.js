$(function () {
    loadCharacters(); // Initial load
    let $search = $('#search');
    let cache;

    if ('oninput' in $search[0]){
        $search.on('input',searchName);
    } else {
        $search.on('keyup',searchName);
    }

    function loadCharacters(filter) {
        $(function ($) {
            $.ajax({
                type: "POST",
                url: "characters.json",
                data: {loadInfo: 1},
                dataType: 'json',
                success: function (data) {
                    loadTable(data);

                }
            });
        })
    }

    function loadTable(response) {
        let $tableBody = $('<tbody></tbody>');

        for (let i = 0; i < response.length; i++) {
            let character = response[i];
            let $row = $('<tr></tr>');

            $row.append($('<td class="first"></td>').text(character.firstName));
            $row.append($('<td class="last"></td>').text(character.lastName));
            $row.append($('<td class="gender"></td>').text(character.gender));
            $row.append($('<td class="hair"></td>').text(character.hairColour));
            $row.append($('<td class="occupation"></td>').text(character.occupation));
            $tableBody.append($row);
        }
        $('thead').after($tableBody);
        cache = response;
    }

    function searchName() {
        let query = this.value.trim();
        $('tr').css({
            "background": "none",
            "color": "black"
        });
        if (query != "")    // if search query is not empty then change colour of matching rows
        {
            $('.first:contains(' + query + ')').each(function (i) {
                console.log(this);
                $(this).parent().css({
                    "background": "darkgreen",
                    "color" : "white"
                });
            });
        }


        console.log(query);
        console.log(cache);

    }

})