$(document).ready(function() {
    $('.liste-menu').on('click', function() {
        $('.content-menu').css('background-color', 'blue');
        $('.liste-menu').css('background-color', 'blue');
    })
    $('.liste-menu1').on('click', function() {
        $('.liste-menu').css('background-color', '#B2DFDB')
        $('.content-menu').css('background-color', 'yellow');
        $('.liste-menu1').css('background-color', 'yellow');
    })
    $('.liste-menu2').on('click', function() {
        $('.liste-menu1').css('background-color', '#E040FB')
        $('.content-menu').css('background-color', 'green');
        $('.liste-menu2').css('background-color', 'green');
    })
    $('.liste-menu3').on('click', function() {
            $('.liste-menu2').css('background-color', '#212121')
            $('.content-menu').css('background-color', 'violet');
            $('.liste-menu3').css('background-color', 'violet');
        })
        // Ajout de texte au clic de la souris
    $('.liste-menu').on('click', function(e) {
        e.preventDefault()

        $('.titre').text('Mon nouveau titre')
    })

    $('.liste-menu1').on('click', function() {
        $('.titre').text('Partie 2');
    });
    $('.liste-menu2').on('click', function() {
        $('.titre').text('Partie 3');
    });
    $('.liste-menu3').on('click', function() {
        $('.titre').text('Partie 4');
    });
});
