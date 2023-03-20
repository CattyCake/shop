// executes when HTML-Document is loaded and DOM is ready
   $(function(){
$(".basket").mouseenter(function() {
   $(".basket-container").show()
})
   })

   $(function(){
$(".basket").mouseleave(function() {
   $(".basket-container").hide()
})
   })

 $(function(){
$(".buy").mouseup(function() {
        let data_name = $(this).attr("data_name");
        let data_price = $(this).attr("data_price");
        $(".basket-container ul").append('<li>' + data_name + ' ' + data_price + 'Р' + ' ' +
          '<span class=".delete-item">x</span> '
            +'</li>')
})
   })

$(function(){
$(".delete-item").mouseup(function() {
    alert("хуй")
})
   })
