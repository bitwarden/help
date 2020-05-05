$(function () {
    var lightboxOpen = false,
        lightboxSelector = 'a[rel="lightbox"]';

    $(lightboxSelector)
        .on('openstart.fluidbox', function () {
            lightboxOpen = true;
        })
        .on('closestart.fluidbox', function () {
            lightboxOpen = false;
        })
        .fluidbox();

    $(document).keydown(function (e) {
        if (lightboxOpen && e.keyCode === 27) {
            $(lightboxSelector).trigger('close.fluidbox');
        }
    });

    $(window).scroll(function () {
        if (lightboxOpen) {
            $(lightboxSelector).trigger('close.fluidbox');
        }
    });

    $('.article .panel-body > h2, .article .panel-body > h3').filter('[id]').each(function () {
        var header = $(this),
            headerID = header.attr('id'),
            anchorClass = 'header-link',
            anchorIcon = '<i class="fa fa-link" aria-hidden="true"></i>';

        if (headerID) {
            header.append($('<a />')
                .addClass(anchorClass)
                .attr({ 'href': '#' + headerID, 'aria-hidden': 'true', title: 'Permalink' })
                .html(anchorIcon));
        }
        return this;
    });
});
