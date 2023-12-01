
jQuery(function ($) {
    $('.box').mouseenter(function () {
        var mainParentWidth = $('#main-parent-box').width(),
            mainParentHeight = $('#main-parent-box').height(),
            boxWidth = $(this).width(),
            boxHeight = $(this).height(),
            maxX = mainParentWidth - boxWidth,
            maxY = mainParentHeight - boxHeight,
            nextX = Math.floor(Math.random() * maxX),
            nextY = Math.floor(Math.random() * maxY);

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
                    if (fx.prop === 'left') {
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
    var container = document.querySelector('#main-parent-box');
    var objects = document.querySelectorAll('.box');
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





