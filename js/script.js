$(function () {
    loadCharacters(); // Initial load
    let $search = $('#search');
    let cache;


    if ('oninput' in $search[0]) {
        $search.on('input',searchName);
    } else {
        $search.on('keyup',searchName);
    }

    $('#firstHalf').on('click', filterFirstHalf);
    $('#lastHalf').on('click', filterLastHalf);
    $('#filterReset').on('click', filterReset);

    function loadCharacters() {
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
            $row.append($('<td class="birthdate"></td>').text(character.birthdate));
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
        if (query !== "")    // if search query is not empty then change colour of matching rows
        {
            $('.first:contains(' + query + ')').each(function (i) {
                $(this).parent().css({
                    "background": "darkgreen",
                    "color" : "white"
                });
            });
        }
    }

    function filterFirstHalf() {
        $('.last').parent().hide();
        $('.last').filter(function () {
            return $(this).text().match(/([A-M])/);
        }).parent().show();
    }

    function filterLastHalf() {
        $('.last').parent().hide();
        $('.last').filter(function () {
            return $(this).text().match(/([N-Z])/);
        }).parent().show();
    }

    function filterReset() {
        $('.last').parent().hide();
        $('.last').parent().show();
    }


    // Custom plugin for changing visibility of chevrons
    (function($) {
        $.fn.invisible = function() {
            return this.each(function() {
                $(this).css("visibility", "hidden");
            });
        };
        $.fn.visible = function() {
            return this.each(function() {
                $(this).css("visibility", "visible");
            });
        };
    }(jQuery));

    // Comparison object for each data type
    let comparison = {
        alphabet: function(a,b) {
            a = a.replace(/^the /i, '');
            b =  b.replace(/^the /i, '');
            if (a < b) {
                return -1;
            } else {
                return a>b ? 1 : 0;
            }
        },
        date: function(a,b){
            a = new Date(a);
            b = new Date(b);
            return a - b;
        }
    };

    $('.sortable').each(function () {
        let $controls = $('.sortable th')
        // Define sorting icons
        let $ascIcon = $('.asc-ico');
        let $descIcon = $('.desc-ico');
        $descIcon.hide();
        $ascIcon.invisible();

        $controls.on('click', function () {
            let $table = $('table');
            let $tbody = $('tbody');
            let $buttons = $('th');
            let rows = $('tbody tr').toArray();

            let $header = $(this);
            let order = $header.data('sort');
            let column;


            if ($header.is('.asc')) {
                $header.toggleClass('asc desc');
                $tbody.append(rows.reverse());

                $header.find($ascIcon).hide();
                $header.find($descIcon).show();
                $header.find($descIcon).visible();
            } else if ($header.is('.desc')) {
                $header.removeClass('desc');
                $header.siblings().removeClass('asc desc');

                $header.find($descIcon).hide();
                $header.find($ascIcon).show();
                $header.find($ascIcon).invisible();
            } else {
                $header.addClass('asc');
                $header.siblings().removeClass('asc desc');

                if (comparison.hasOwnProperty(order)){
                    column = $buttons.index(this);
                    rows.sort(function(a,b){
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        console.log('a: ',a,'   b: ', b)
                        return  comparison[order](a,b);
                    });
                    $tbody.append(rows);
                }
                $header.find($descIcon).hide();
                $header.find($ascIcon).visible();
            }
        });
    });
})