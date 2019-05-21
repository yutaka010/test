// $(function() {
//     var h = $(window).height();
//     $('#contents').css('display','none');
//     $('#loader-bg ,#loader').height(h).css('display','block');
// });
// $(document).ready(function() {
//   $('#line').addClass('fullwidth');
// })
// $(window).on('load',function () {
//   var myPromise = $.when(
//       $('#loading').delay(2600).fadeOut(2000)
//   );
//   myPromise.done(function() {
//     $('#loader-bg').delay(1000).fadeOut(1000)
//     $('#contents').css('display','block')
//   });
// });
$(function() {
  $('.move_right').delay(400).fadeIn(400)
  $('.move_left').delay(400).fadeIn(400)
  $(".move_left").animate({
    "padding-right": "50px"
  });
  $(".move_right").animate({
    "padding-left": "50px"
  });
  $('li:nth-child(1)').hover(function() {
    $(this).css('width', '200%');
    $('.black2').css('background-color', 'RGBA(0,0,0,0.5)');
    setTimeout(function(){
       $('.text1').fadeToggle();

    },1000);
    $('.test1').textillate({
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 1000,
      in: {
        effect: 'fadeInLeft',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false
      }
    });
  }, function() {
    //初期化
    $(this).css('width', '');
    $('.text1').css('display', 'none');
    $('.black2').css('background-color', '');
  });
  $(function(){
    $('.text').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
    });
    setTimeout(function(){
      $(".text").addClass("active");
    },100);
  });
  $('li:nth-child(2)').hover(function() {
    $(this).css('width', '200%');
    $('.black1').css('background-color', 'RGBA(0,0,0,0.5)');
    setTimeout(function(){
       $('.text2').fadeToggle();

    },1000);
    $('.test2').textillate({
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 1000,
      in: {
        effect: 'fadeInLeft',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false
      }
    });
  }, function() {
    //初期化
    $(this).css('width', '');
    $('.text2').css('display', 'none');
    $('.black1').css('background-color', '');
  });
  $('.btn-brackets').click(function() {
    $('#mask').delay(260).fadeOut(200)
  });
});
