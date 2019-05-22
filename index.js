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
	Array.prototype.remove = function(element) {
	  for (var i = 0; i < this.length; i++)
	    if (this[i] == element) this.splice(i,1);
	};

	function preload(images, progress) {
		var total = images.length;
	    $(images).each(function(){
			var src = this;
	        $('<img/>')
				.attr('src', src)
				.on('load',function() {
					images.remove(src);
					progress(total, total - images.length);
				});
	    });
	}

	var now_percent = 0;
	var displaying_percent= 0;
	preload([
		'./images/yasuo4.jpg',
		'./images/riven4.jpg'
	], function(total, loaded){
		now_percent = Math.ceil(100 * loaded / total);
	});
	var timer = window.setInterval(function() {
		if (displaying_percent >= 100) {
			window.clearInterval(timer);
      $('#load_text').delay(1000).fadeOut('slow')
			$('#loader').delay(2000).fadeOut('slow', function() {
				$('.content').fadeIn('slow');
        $('#choice').delay(400).fadeIn(1400);
        $('#c_text').delay(400).fadeIn(3400);
        $('.move_right').delay(3000).fadeIn(400);
        $('.move_left').delay(3000).fadeIn(400);
        $(".move_left").animate({
          "padding-right": "50px"
        });
        $(".move_right").animate({
          "padding-left": "50px"
        });
        setTimeout(function(){
        $('.btn-brackets').css('opacity', '1');
      },3800);
			});
		} else {
			if (displaying_percent < now_percent) {
				displaying_percent++;
				$('#load-text').html(displaying_percent + '%');
				$('#bar span').css('width', displaying_percent + '%');
			}
		}
	},
	20);	// この数字を変えるとスピードを調整できる
});
$(function() {
  var timer2;
  var timer1;

  $('li:nth-child(1)').hover(function() {
    timer1 = setTimeout(function(){
    $('li:nth-child(1)').css('width', '200%');
    $('.black2').css('background-color', 'RGBA(0,0,0,0.7)');
    timer4 = setTimeout(function(){
      $('.text1').fadeIn();
    },1200);
    $('.test1').textillate({
      loop: false,
      minDisplayTime: 500,
      initialDelay: 500,
      in: {
        effect: 'fadeInLeftBig',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false
      }
    });
  },500);
  }, function() {
    //初期化
    clearTimeout(timer4);
    $(this).css('width', '');
    $('.text1').css('display', 'none');
    $('.black2').css('background-color', '');
    clearTimeout(timer1);
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
    timer2 = setTimeout(function(){
    $('li:nth-child(2)').css('width', '200%');
    $('.black1').css('background-color', 'RGBA(0,0,0,0.7)');
      timer3 = setTimeout(function(){
    $('.text2').fadeIn();
  },1200);
    $('.test2').textillate({
      loop: false,
      minDisplayTime: 500,
      initialDelay: 500,
      autoStart: true,
      in: {
        effect: 'fadeInLeftBig',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false
      }
    });
  },500);
  }, function() {
    //初期化
    clearTimeout(timer3);
    $(this).css('width', '');
    $('.text2').css('display', 'none');
    $('.black1').css('background-color', '');
    clearTimeout(timer2);
  });
  $('.btn-brackets').click(function() {
    $('#mask').delay(260).fadeOut(600)
  });
});
