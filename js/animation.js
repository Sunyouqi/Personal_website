var preloader = document.querySelector(".loader-wrapper");
setTimeout(()=>{
    
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
}, 0);


function openModal(modal){
    //console.log("open modal!",modal);
    if(modal == null) {
        return;
    }
  
    modal.classList.add("active");
   // console.log("class:",modal.classList);

};

function closeModal(modal){
    if(modal == null){
        return;
    }
   
    
    modal.classList.remove("active");
    
};
var close_buttons = document.querySelectorAll(".CloseModal");
var introButtons = document.querySelectorAll(".nav_item");

  
/*
for(let button of introButtons){
    button.addEventListener("click", (eventHandle)=>{
        var target = eventHandle.target;
        //console.log(target);
        var modal = document.querySelector(target.dataset.modal);
        //var scroll_des = document.querySelector(target.dataset.bg);
        //console.log("in click", scroll_des);
        //scroll_des.scrollIntoView(true);
        openModal(modal);
    });
    
}*/

$(".nav_item").on('click', function(event){
    //console.log(this.dataset.bg);
    if(this.dataset.bg !=""){
        event.preventDefault();
        var des = this.dataset.bg;
        $('html, body').animate({
            scrollTop: $(des).offset().top
          }, 0);
        }
    if(this.dataset.modal == null){
        closeModal(document.querySelector(".modal-introduction"));
    }
});

for(let button of close_buttons){
    button.addEventListener("click", (eventHandle) =>{
        var target = eventHandle.target;
        //console.log(target);
        var modal = document.querySelector(target.dataset.modal);
        closeModal(modal);
    });
}


var page_position = window.pageYOffset;
var windowPosition = { value: page_position};
var nav_bar = document.querySelector(".navigation_bar");

var nav_bar_top = nav_bar.offsetTop;
var nameTag = document.querySelector(".name");
var intro_modal = document.querySelector(".modal-introduction");

function Test_window_position(original_position){
    
   
    if(original_position.value != window.pageYOffset){
        original_position.value = window.PageYOffset;
        
    }
    if(window.pageYOffset + 100 >= nav_bar_top){
        nav_bar.classList.add("sticky");
        
    }
    else{
        nav_bar.classList.remove("sticky");
    }
    if(window.pageYOffset + 100 >= intro_modal.offsetTop){
        
        intro_modal.classList.add("translate");
        
    }
    else{
        intro_modal.classList.remove("translate");
    }
    
}
function shrinkName(){
    
    if(nameTag.offsetTop  < window.pageYOffset){
        
        nameTag.classList.add("shrink");
        nameTag.style.animationName = "trans_shrink";
    }
    else{
        
        nameTag.classList.remove("shrink");
        nameTag.style.animationName = "recover";
    }
}
function change_background(){
    //console.log("in change background:", $(window).scrollTop(), 2.2*$(window).height());
    //console.log("in change background",$(".background").css("width"));
    //console.log("in change background",$(".bg-experience").css("width"));
    if($(window).scrollTop() < 1 * $(window).height()){
        //console.log("switch background!!!");
        $(".background").css("background", `url("image/IMG_portrait.jpeg")`);
        $(".background").css("background-size", "cover");
        $(".background").css("background-position", "80% 50%");
        $(".background").css("transition", "0ms ease-in-out");
        $(".background").css("opacity", `1`);
        $(".background").css("background-repeat", "no-repeat");

    }
    else if($(window).scrollTop() > 2 * $(window).height()){
        $(".background").css("background", `url(image/Gessen-UToronto.jpeg)`);
        $(".background").css("height", `100vh`);
        $(".background").css("opacity", `0.2`);
    }
    
}

var articles =  document.querySelectorAll(".article");
//console.log("articles:",articles);




function crop_top_bottom(){
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var tree_top = $(".bg-experience").offset().top;
    var tree_bottom = tree_top + $(".bg-experience").outerHeight();

    
    //console.log("lower cover bottom:", $('#lower').css('bottom'));
    if(viewportTop   > tree_top + 10  && viewportBottom <  tree_bottom ){
        $(".main-branch").css('position', `fixed`);
        $(".main-branch").css('top', `120px`);
        $(".main-branch").css('height', `700px`);
        
    }
    else if(viewportTop  <= tree_top + 250){
        $(".main-branch").css('position', `absolute`);
        $(".main-branch").css('top', `250px`);
        $(".main-branch").css('height', `700px`);
    }
    else{
        $(".main-branch").css('position', `fixed`);
        $(".main-branch").css('top', `${120}px`);
        $(".main-branch").css('height', `${700}px`);
    }
}

function extand(){
    var viewportTop = $(window).scrollTop();
    var viewportMiddle = viewportTop + $(window).height()/2;
    var viewportBottom = viewportTop + $(window).height();
    var item_pos = $("#node1").offset().top + $("#node1").outerHeight();
    //console.log(viewportMiddle, "and", item_pos);
    if(item_pos < viewportBottom - 100 && item_pos > viewportTop + 150){
        $("#node1").addClass("appear");
    }
    else{
        $("#node1").removeClass("appear");
    }
    if(item_pos < viewportMiddle + 250 && item_pos > viewportMiddle - 240) {
        $("#n1").addClass("expand");
        
        //console.log($("#n1"));
    }
    else{
        $("#n1").removeClass("expand");
    }
    var item2_pos = $("#node2").offset().top + $("#node2").outerHeight();
    if(item2_pos < viewportBottom - 100 && item2_pos > viewportTop + 150){
        $("#node2").addClass("appear");
    }
    else{
        $("#node2").removeClass("appear");
    }
    if(item2_pos < viewportMiddle + 250 && item2_pos > viewportMiddle - 240) {
        $("#n2").addClass("expand");
        //console.log($("#n2"));
    }
    else{
        $("#n2").removeClass("expand");
    }
    var item2_pos = $("#node3").offset().top + $("#node2").outerHeight();
    if(item2_pos < viewportBottom - 100 && item2_pos > viewportTop + 150){
        $("#node3").addClass("appear");
    }
    else{
        $("#node3").removeClass("appear");
    }
    if(item2_pos < viewportMiddle + 250 && item2_pos > viewportMiddle - 240) {
        $("#n3").addClass("expand");
        //console.log($("#n2"));
    }
    else{
        $("#n3").removeClass("expand");
    }
}

window.onscroll = function(){
    Test_window_position(windowPosition);
    shrinkName();
    change_background();
    //text_appear(articles);
    //text_disappear(articles);
    crop_top_bottom();
    extand();
};



