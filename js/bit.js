$(function () {
    // lightbox listener
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

    // generating article card headers
    var $articleCardHeaders = $('.article-card .card-body > h2, .article-card .card-body > h3');
    $articleCardHeaders.filter('[id]').each(function () {
        var header = $(this),
            headerID = header.attr('id');

        if (headerID) {
            // generating clickable anchor links and id
            header.append(`<a href="#${this.id}" class="header-link" aria-hidden="true" title="Permalink">
                <i class="fa fa-link" aria-hidden="true"></i>
            </a>`);

            // generating toc-nav li via headers in article
            $('.toc-nav').append(`<li class="toc-entry toc-${this.localName}">
                <a href="#${this.id}">${this.textContent}</a>
            </li>`);
        }
        return this;
    });

    if ($articleCardHeaders.length === 0) {
        $('.bd-toc').attr('style', 'display: none !important');
    }

    // active class on toc right sidebar on scroll
    var addClassOnScroll = function () {
        var windowTop = $(window).scrollTop();

        $('.bd-content .article-card .card-body h2[id], .bd-content .article-card .card-body h3[id]').each(function (_, el) {
            var offsetTop = $(el).offset().top;
            var outerHeight = $(this).outerHeight(true);

            if (windowTop > (offsetTop - 56) && windowTop < ( offsetTop + outerHeight)) {
                var elId = $(el).attr('id');
                $(".toc-nav .toc-entry a.active").removeClass('active');
                $(".toc-nav .toc-entry a[href='#" + elId + "']").addClass('active');
            }
        });
    };

    $(window).on('scroll', function () {
        addClassOnScroll();
    });

    // smooth scrolling
    $('a[href*="#"]').click(function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                e.preventDefault();
                const NAVBAR_HEIGHT = 62 + 5;

                $('html, body').animate({
                    scrollTop: target.offset().top - NAVBAR_HEIGHT
                }, 500, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });
});
