var modal = (function(){                    //Declare modal object
    var $window = $(window);
    var $modal = $('<div class="modal"></div>');         //create markup for modal
    var $heading = $('<h1>Default Title</h1>');
    var $content = $('<div class="modal-content"></div>');
    var $close = $('<button role="button" class="modal-close">close</button>'); //Create close butoon in modal
    
    $content.prepend($heading);
    $modal.append($content, $close);

    $close.on('click',function(e){              //If user clicks on close
        e.preventDefault();                     //Prevent link behavior
        modal.close();                          //Close the modal
    })

    return {                                    //Add code to modal
        center: function(){                     //Define center() method
            //Calculate distance from top and left of window to center the modal
            var top = Math.max($window.height()-$modal.outerHeight(),0)/2;
            var left = Math.max($window.width() -$modal.outerWidth(),0)/2;

            $modal.css({                                 //Set CSS for the modal
                top: top + $window.scrollTop(),         //Center vertical ly
                left: left+ $window.scrollLeft()        //Center horizontally  
            });
        },
        open: function(settings) {                           //Define open() method
            $content.empty().prepend(settings.heading).append(settings.content);      //Set new content of modal

            $modal.css({                                    //Set modal dimensions
                width: settings.width || 'auto',
                height: settings.height || 'auto',
                color: settings.color || 'black',
                background: settings.background || 'white'
            }).appendTo('body');                           //Add it to the page

            modal.center();                                 //Call center() method
            $(window).on('resize scroll',modal.center);     //Call it if window resized
        },
        close: function(){                                  //Define close() method
            $heading.empty();
            $content.empty();                               //Remove content from modal
            $modal.detach();                                //Remove modal from page
            $window.off('resize', modal.center);            //Remove event handler
        }
    };

}());