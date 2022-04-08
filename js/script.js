$(document).ready(function(){
    
    let $flex = $('.flex');
    let $grid = $('.grid');

    let $flex_bt = $('.flex-bt');
    let $grid_bt = $('.grid-bt');
    let $choose = $('.choose');

    let $main = $('.main');
    
    $flex_bt.click(function(){
        $(this).addClass('on');
        $choose.fadeOut(300);
        $main.addClass('flex-on');
    })
    $grid_bt.click(function(){
        $(this).addClass('on');
        $main.addClass('grid-on');
        $choose.fadeOut(300);
    })


})