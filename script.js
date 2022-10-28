/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        id;
        name;
        desc;
        category;

        constructor(id, name, desc, category) {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.category = category;
        }

        updateContentItem(id, name, desc, category) {
            if (id == this.id && (name || desc || category))
            {
                $('div#error-msg').remove();
                this.id = id;
                this.name = name;
                this.desc = desc;
                this.category = category;
            }
            else
            {
                console.log("Error updating...");
                console.log("Attempted to change object values using invalid parameters.");
                $('button#update-content-fail').after('<div id="error-msg">Error updating...</div>');
            }
        }

        toString() {
            return '<div class="content-item-wrapper" id="content-item-' + this.id + '">' + 
                        '<h2>' + this.name + '</h2>' +
                        '<p>' + this.desc + '</p>' +
                        '<div>' + this.category + '</div>' +
                    '</div>'
        }
        
    }


    const Cameras = [
        new ContentItem(
            1,
            "Panasonic Lumix G9",
            "Professional mirrorless camera optimized for photography.",
            "Micro Four Thirds"
        ),
        new ContentItem(
            2,
            "Panasonic Lumix S5",
            "Professional mirrorless camera optimized for videography.",
            "Full Frame"
        ),
        new ContentItem(
            3,
            "Panasonic Lumix DMC-G6",
            "Lightweight travel camera best for general use.",
            "Micro Four Thirds"
        ),
        new ContentItem(
            4,
            "Canon 90D",
            "Professional DSLR optimized for photos.",
            "APS-C"
        ),
        new ContentItem(
            5,
            "Sony a7iii",
            "Professional mirrorless camera packed with many advanced features.",
            "Full Frame"
        )
    ]


    function displayContent() {
        $('div#content-item-list').empty();
        $(Cameras).each(function(i) {
            $('div#content-item-list').append(Cameras[i].toString());
        })

          $('.content-item-wrapper').css({
        "border": "solid 1px grey",
        "width": "300px",
        "padding": "1em",
        "margin": "2em auto"
    });
    }
 
    displayContent();


  
   
    $('button#update-content-success').on('click', function () {
        Cameras[0].updateContentItem(
            1,
            "Panasonic Lumix DC-G9",
            "Professional mirrorless camera optimized for photography. My personal favourite.",
            "Micro Four Thirds"
        );
        displayContent();
    });

    $('button#update-content-fail').on('click', function () {
        Cameras[2].updateContentItem(
            1,
            "Title Deleted by Attacker",
            "Description deleted by attacker, something went wrong in the updateContentItem method",
            ""
        );
        displayContent();
    });


});


