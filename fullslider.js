        $(document).ready(function () {

            // Make all relative paths work on hostwebb
            $("img[src^='/']").each(function () {
                $(this).attr('src', 'http://hostwebb.net' + $(this).attr('src'));
            });

            console.log($(this));

            // Calling LayerSlider on the target element
            $('#layerslider').layerSlider({
                pauseOnHover: false,
                responsive: false,
                hideUnder: 750,
                skinsPath: 'http://hostwebb.net/websites/common/plugins/layerslider-v2/skins/',
                skin: 'v5'
            });


            $('[data-toggle="popover"]').popover({
                html: true,
                placement: 'top',
                trigger: 'focus hover',
                viewport: 'body'
            });


        });