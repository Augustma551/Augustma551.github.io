
jQuery(function ($) {
    $('.object').mouseenter(function () {
        var mainParentWidth = $('footer').width(),
            mainParentHeight = $('footer').height(),
            boxWidth = $(this).outerWidth(),
            boxHeight = $(this).outerHeight(),
            maxX = mainParentWidth - boxWidth,
            maxY = mainParentHeight - boxHeight,
            nextX = Math.floor(Math.random() * maxX),
            nextY = Math.floor(Math.random() * maxY);

        if (nextX < 0) nextX = 0;
        if (nextX > maxX) nextX = maxX;

        if (nextY < 0) nextY = 0;
        if (nextY > maxY) nextY = maxY

        // Use animate method to create a bounce effect
        $(this).animate(
            { left: nextX + 'px', top: nextY + 'px' },
            {
                duration: 900,
                step: function (now, fx) {
                    if (fx.prop === 'top') {
                        if (now < 0 || now > maxY) {
                            // Reset top position if it goes beyond boundaries
                            $(this).stop().css('top', nextY + 'px');
                        }
                    }
                    if (fx.prop === 'left'){
                        if (now < 0 || now > maxX) {
                            // Reset left position if it goes beyond boundaries
                            $(this).stop().css('left', nextX + 'px');
                        }
                    }
                },
            }
        );
        
    });
});

window.addEventListener('load', function() {
    var container = document.querySelector('footer');
    var objects = document.querySelectorAll('.object');
    var containerRect = container.getBoundingClientRect();

    objects.forEach(function(object) {
        var objectRect = object.getBoundingClientRect();
        var maxX = containerRect.width - objectRect.width;
        var maxY = containerRect.height - objectRect.height;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        object.style.left = randomX + 'px';
        object.style.top = randomY + 'px';
    });
});





