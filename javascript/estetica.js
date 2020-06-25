$('.galeria_img').click(function(e){
    var img = e.target.src;
    var modal = '<div class="modal"><img src="'+ img +'"><div class="close">X</div></div>';
    $('body').append(modal);
})