to_p1 = function () {
    $('.item3').hide();
    $('.item2').hide();
    $('.item1').show();
    $('.item1').css({ 'opacity': '0' });
    $('.item1').animate({ 'opacity': '1' }, 1000);
    $('.right_arrow').off();
    $('.right_arrow').click(to_p2);
    $('.left_arrow').off();
    $(".left_arrow").click(to_p3);
}

to_p2 = function () {
    $('.item1').hide();
    $('.item2').show();
    $('.item2').css({ 'opacity': '0' });
    $('.item2').animate({ 'opacity': '1' }, 1000);
    $('.item3').hide();
    $('.right_arrow').off();
    $('.right_arrow').click(to_p3);
    $('.left_arrow').off();
    $(".left_arrow").click(to_p1);
}

to_p3 = function () {
    $('.item2').hide();
    $('.item3').show();
    $('.item3').css({ 'opacity': '0' });
    $('.item3').animate({ 'opacity': '1' }, 1000);
    $('.item1').hide();
    $('.right_arrow').off();
    $('.right_arrow').click(to_p1);
    $('.left_arrow').off();
    $(".left_arrow").click(to_p2);
}

setup = function () {
    $('.item2').hide();
    $('.item3').hide()
    $(".right_arrow").click(to_p2);
    $(".left_arrow").click(to_p3);
}

jQuery(document).ready(setup)