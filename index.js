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
  //ボタンをクリックしたら発動
  $('li:nth-child(1)').hover(function() {

    //ボタンの横に要素を作成
    $(this).css('width', '200%');
    $('.text1').css('opacity', '1');
    $('.black2').css('background-color', 'RGBA(0,0,0,0.5)');
  }, function() {

    //色指定を空欄にすれば元の色に戻る
    $(this).css('width', '');
    $('.text1').css('opacity', '');
    $('.black2').css('background-color', '');
  });
  $('li:nth-child(2)').hover(function() {

    //ボタンの横に要素を作成
    $(this).css('width', '200%');
    $('.text2').css('opacity', '1');
    $('.black1').css('background-color', 'RGBA(0,0,0,0.5)');
  }, function() {

    //色指定を空欄にすれば元の色に戻る
    $(this).css('width', '');
    $('.text2').css('opacity', '');
    $('.black1').css('background-color', '');
  });
  $('.btn-brackets').click(function() {
    $('#mask').delay(260).fadeOut(200)
  });
});
