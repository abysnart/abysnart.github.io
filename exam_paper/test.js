(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    factory(jQuery);
  }
}(function($) {
  var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    slice = Array.prototype.slice,
    nullLowestDeltaTimeout, lowestDelta;
  if ($.event.fixHooks) {
    for (var i = toFix.length; i;) {
      $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    }
  }
  var special = $.event.special.mousewheel = {
    version: '3.1.9',
    setup: function() {
      if (this.addEventListener) {
        for (var i = toBind.length; i;) {
          this.addEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
      $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
      $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
    },
    teardown: function() {
      if (this.removeEventListener) {
        for (var i = toBind.length; i;) {
          this.removeEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    },
    getLineHeight: function(elem) {
      return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
    },
    getPageHeight: function(elem) {
      return $(elem).height();
    },
    settings: {
      adjustOldDeltas: true
    }
  };
  $.fn.extend({
    mousewheel: function(fn) {
      return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
    },
    unmousewheel: function(fn) {
      return this.unbind('mousewheel', fn);
    }
  });

  function handler(event) {
    var orgEvent = event || window.event,
      args = slice.call(arguments, 1),
      delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0;
    event = $.event.fix(orgEvent);
    event.type = 'mousewheel';
    if ('detail' in orgEvent) {
      deltaY = orgEvent.detail * -1;
    }
    if ('wheelDelta' in orgEvent) {
      deltaY = orgEvent.wheelDelta;
    }
    if ('wheelDeltaY' in orgEvent) {
      deltaY = orgEvent.wheelDeltaY;
    }
    if ('wheelDeltaX' in orgEvent) {
      deltaX = orgEvent.wheelDeltaX * -1;
    }
    if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaX = deltaY * -1;
      deltaY = 0;
    }
    delta = deltaY === 0 ? deltaX : deltaY;
    if ('deltaY' in orgEvent) {
      deltaY = orgEvent.deltaY * -1;
      delta = deltaY;
    }
    if ('deltaX' in orgEvent) {
      deltaX = orgEvent.deltaX;
      if (deltaY === 0) {
        delta = deltaX * -1;
      }
    }
    if (deltaY === 0 && deltaX === 0) {
      return;
    }
    if (orgEvent.deltaMode === 1) {
      var lineHeight = $.data(this, 'mousewheel-line-height');
      delta *= lineHeight;
      deltaY *= lineHeight;
      deltaX *= lineHeight;
    } else if (orgEvent.deltaMode === 2) {
      var pageHeight = $.data(this, 'mousewheel-page-height');
      delta *= pageHeight;
      deltaY *= pageHeight;
      deltaX *= pageHeight;
    }
    absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        lowestDelta /= 40;
      }
    }
    if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
      delta /= 40;
      deltaX /= 40;
      deltaY /= 40;
    }
    delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
    deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
    deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
    event.deltaX = deltaX;
    event.deltaY = deltaY;
    event.deltaFactor = lowestDelta;
    event.deltaMode = 0;
    args.unshift(event, delta, deltaX, deltaY);
    if (nullLowestDeltaTimeout) {
      clearTimeout(nullLowestDeltaTimeout);
    }
    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

  function nullLowestDelta() {
    lowestDelta = null;
  }

  function shouldAdjustOldDeltas(orgEvent, absDelta) {
    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
  }
}));

MathJax.Hub.Config({
  jax: ["input/TeX", "output/SVG"],
  extensions: ["tex2jax.js"],
  tex2jax: {preview: ["Đang tải công thức..."],},
  showMathMenu: false,
  showProcessingMessages: false,
  messageStyle: "none",
  SVG: {useGlobalCache:false, font: "STIX-Web"},
  TeX: {extensions: ["AMSmath.js", "AMSsymbols.js", "autoload-all.js"]}
});

const uniform_options = { radioClass: 'choice', selectAutoWidth: false };

moment.locale('vi', {
  months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
  monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
  monthsParseExact : true,
  weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
  weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  weekdaysParseExact : true,
  meridiemParse: /sa|ch/i,
  isPM : function (input) {
    return /^ch$/i.test(input);
  },
  meridiem : function (hours, minutes, isLower) {
    if (hours < 12) {
      return isLower ? 'sa' : 'SA';
    } else {
      return isLower ? 'ch' : 'CH';
    }
  },
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM [năm] YYYY',
    LLL : 'D MMMM [năm] YYYY HH:mm',
    LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
    l : 'DD/M/YYYY',
    ll : 'D MMM YYYY',
    lll : 'D MMM YYYY HH:mm',
    llll : 'ddd, D MMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Hôm nay lúc] LT',
    nextDay: '[Ngày mai lúc] LT',
    nextWeek: 'dddd [tuần tới lúc] LT',
    lastDay: '[Hôm qua lúc] LT',
    lastWeek: 'dddd [tuần rồi lúc] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : '%s tới',
    past : '%s trước',
    s : 'vài giây',
    m : 'một phút',
    mm : '%d phút',
    h : 'một giờ',
    hh : '%d giờ',
    d : 'một ngày',
    dd : '%d ngày',
    M : 'một tháng',
    MM : '%d tháng',
    y : 'một năm',
    yy : '%d năm'
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal : function (number) {
    return number;
  },
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});

const img_holder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADp0lEQVR4Xu3bW+jlUxQH8M+QMUMm0aRJUzJuSWGGSCGmlEJEuUyhiAcvzCChEPHAGA+McWkkci2SGSWZ8YJchqgJE8nDFMZleGBcQqv2qdPpnPPb5/x+5zjn/H7r5f9w9t5rfb+/tfZea+39n6PmMqfm+DUENB5QcwaaEKi5AzSbYBMCTQhwLp7C/JqR8TsujhB4DFfWDHwL7rog4HFcgW+xuiZE3IiFeKSdgK04qiYEfI7DGwIaD8gLgX1wHg7DT9iAbVMeKtkhcBqeTxtGC/M/uBc3TTEJWQQcio+xdw+gN+C+KSUhi4DW8dgL404cgD+nkIQsAr5Icd8P33HYMqsEfIklBeBOwPuzSsAzkSv3Afdb2hzj77RJVggci/ewRw909+DmESDfF/djGV7GXfi7Yj1ZBITOi7C+S6UY3nHZCAzbHW/i1DbAz+KS/4uA0LsYl+II/IhXsLlig1rL3Ylbu6x9NR6tUGe2B1Sos3Cp0/EGdusyMmr34xEFWxUycQREafoJFvVBF+CDhCCjrEwUAVGSb8SZGaiieXNVxriiIRNFwPWptigyuvX7hXghd3CPcRNDQLj0232O2m72/4I4or8uQcJEELAgFVsHDwEk8pOT8dcQc2PKRBDwHMKdh5UoyaO3N4xUSsDReDhVhg+lLK7IqOhCx4ZWRv5NG+frQyxSGQEHJjeOY6wlt+OOPkYdiQ+w1xCGd075HvEBoqM9iFRCQCQsmzrS1jAiOkbL8VYXi+Yl8FV2nyN1PiPpzSWhEgJuQ3ztbrIdx+CHjh/XIdLaquUW3D3AoqUJOCV9/Sheekk0T89u+/ECvDiAkYMMjWoxCqh3MieVImD/lLZG/BfJdXgAB6W9IkrdUck3KT/4OUNBKQJexVkZSmJI9AvDW4KEEzPnlBn2Es7PWGBoAq7FmgwF7UP+wJ4Dzikz/BqsLVhgKAKW4l3MLWPdGObuQvQqP+2ja2AC4nboIxwyBgBVqPgM0bHu1a8cmICnsaIKy8a4RrTy4tq/mwxEwOV4YoyGV6kqeonRU+yUbALiDj0uPnpdj1Vp7CjW+hWxd33VsXgWAbFzR9kZufY0y4c4qaN0ziLgQcSRMgsS9wyr2oAUEhAvx+JSYlYkSudI3l5LgPoSEKlu9P33mxX0CccOxHuHuNUu9IAZw553CnyXcvZZBx/4VrY/k6v9Q8lz8GQNn8pGmryieS1eh4Dvh7HxgMYDas5AEwI1d4Dmv8aaEKh7CPwH49cI0wWWZzcAAAAASUVORK5CYII=`;


const templates_test = (params) => {
	function index_by_letter(num) {
		num++;
	  var mod = num % 26, pow = num / 26 | 0, out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
	  return pow ? index_by_letter(pow) + out : out;
	}

	function find_break(string) {
	  return string.match(/@break@/)
	}

	function split_break(string) {
		return string.split('@break@')
	}

	function index_empty_space(index, string) {
		var tmp = string.split(/[_]+/), str = '';
		for(var i = 0; i < tmp.length - 1; i++) {
			str += tmp[i]+'<span class="text-primary"> ('+(i + index)+')</span>_____'
		}
		str += tmp[tmp.length-1]
		return '<p>'+str.replace(/(\n)+/g, '</p><p>')+'</p>';
	}

	function html_format(string) {
		var test, text;
		if(string && typeof string === 'string') {
			test = string.match(/\.jpeg|\.jpg|\.png|\.gif/gi);
			if (test) {
				text = string.split('@media@');
				return text[0]+'<img class="media-attachment" src="'+img_holder+'" data-defer-src="'+text[1]+'">'
			}
			test = string.match(/\.mp3/gi);
			if (test) {
				text = string.split('@media@');
				return text[0]+`<audio class="media-attachment" controls><source src="${text[1]}" type="audio/mpeg"></audio>`
			}

			if(find_break(string)) {
				text = split_break(string);
				if (text[0].length == 0) string = text[1]
				else string = text[0]+'<br>'+'<span class="sub-info">'+text[1].replace(/(\n)+/g, '</span><span class="sub-info">')+'</span>'
			}
			test = string.match(/<\/*[b|u|sub|br].*>/gi);
			if (test && test.length > 0) {
				text = string.replace(/&(lt|gt);/g, function (str, p1){
					return (p1 == "lt")? "<" : ">";
				});
				string = text.replace(/<\/?(?!b|u|sub|br)[^(?!b|u|sub|br)>]+(>|$)/gi, "")
			}
			
			return string.trim()
		} else return string
	}

	let info = '', answers = '';
	if(params.info) {
		if(!find_break(params.info)) {
			info = '<span class="test-question-info">'+params.info+'</span>'
		} else { 
			let tmp = split_break(params.info);
			info = `
				<span class="test-question-info">${tmp[0]}</span>
				<span class="test-question-paragraph">${index_empty_space(params.index, tmp[1])}</span>
			`
		}
	}
	if(params.answers) {
		for(let i in params.answers) {
			answers += `
				<label class="${(params.question) ? params.type : params.type+'-inline'} check-primary">
					<input type="${params.type}" name="answer${params.id}" value="${params.answers[i]}" class="styled">
					<span class="text-700">${index_by_letter(i)}. </span>
					<span class="lbl">${html_format(params.answers[i])}</span>
				</label>
			`
		}
	}
	return `
		<div class="test-question ${(params.question) ? '' : 'inline'}" data-question="${params.id}">
			${info}
			<div class="test-question-title">
				<span class="text-700">${params.label+' '+params.index+'. '}</span>
				${(params.question) ? '<span>'+html_format(params.question)+'</span>' : ''}
			</div>
			${answers}
		</div>
	`
};

const templates_modal = (_class, title, body) => {
	return `
		<div class="${_class} modal fade" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<p class="modal-title">${title}</p>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<div class="modal-body">
						${body}
					</div>
				</div>
			</div>
		</div>`
};

const templates_notification = (type, msg) => {
	return `
		<div class="notify-wrapper">
			<span class="server-${type}">
				<span class="notify-msg">
					<span>${msg}</span>
				</span>
			</span>
		</div>`
}



	var $window = $(window);
	var $test_clock = $('#clockdiv');
	var $test_header = $('.test-header');
	var $test_content = $('.test-content');
	var $test_content_child = $('.test-content .content');
	var $test_loading = $('.test-loading');
	var $test_control = $('.test-control');
	var $test_menu = $('.test-menu');
	var $test_submit = $('[data-action="finish"]');

	
	function _test_load_content(x) {
		let from = x*_Test.questions_per_page, to = from+_Test.questions_per_page, html = '';
		for(let i = from; i < to; i++) {
			let item = _Test.questions_list[i];
			if(item) {
				item.index = i+1;
				html += templates_test(item)
			}
		}
		$test_content_child.html(html);
		MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		if(_Test.preview) {
			$test_content.find('.styled, .action').remove()
		} else {
			for (let i = from, c = 0; i <= to; i++) {
				if(_Test.user_results[i] !== _Test.no_answer_mark) {
					$('.test-question:eq('+c+') input:eq('+_Test.user_results[i]+')').prop('checked', true)
				}
				c++
			}
			$('.styled').uniform(uniform_options);
			//MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
		}
	}
	_test_load_content(0);

	if(_Test.questions_number>_Test.questions_per_page) {
		$test_content.find('ul').pagination({
			items: _Test.questions_number,
			itemsOnPage: _Test.questions_per_page,
			prevText: '',
			nextText: '',
			onPageClick: function(page_number, e) {
				if(e) {
					e.preventDefault();
					document.body.scrollTop = 0;
    			document.documentElement.scrollTop = 0
				}
				_Test.current_page = page_number-1;
				_test_load_content(_Test.current_page);
				if(_Test.cheatsheet && typeof _Test.cheatsheet !== 'string') _test_display_result(_Test.cheatsheet);
			}
		})
	}



	function reveal_on_scroll() {
		var scrolled = $window.scrollTop();
		if (scrolled > 150 && $window.width() >= 1200) {
			$test_clock.addClass('side')
		} else {
			$test_clock.removeClass('side')
		}
	}

	var getTimeRemaining = function(end_time){
		var t = end_time - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	var _test_init_clock = function(id) {
		var clock = document.getElementById(id);
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
		var end_time = _Test.time_start +	_Test.time * 1000;

		function _test_update_clock() {
			var t = getTimeRemaining(end_time);
			if (t.total <= 0) {
				$test_menu.remove();
				swal({
					title: 'Hết giờ!', 
					text: 'Kết quả sẽ được hiển thị sau vài giây.',
					icon:'warning',
					buttons: false,
					closeOnClickOutside: false,
					closeOnEsc: false
				});
				clearInterval(_Test.time_interval);
				setTimeout(function() { _test_finish(true) }, 2000)
			} else {
				hoursSpan.innerHTML = ('0' + t.hours).slice(-2)+' :';
				minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)+' :';
				secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
				if(!t.hours && t.minutes <= 4) $test_submit.addClass('warning');
				if(!t.hours && t.minutes < 1) $test_submit.addClass('danger')
			}
		}
		_test_update_clock();
		_Test.time_interval = setInterval(_test_update_clock, 1000);
	}

	var _test_set_start = () => {
		_Test.time_start = Date.now();
		$('.scrollable').jScrollPane({
			autoReinitialise:true,
			autoReinitialiseDelay:300
		});
		for (var i = 0; i < _Test.questions_number; i++) {
			$test_control.find('.jspPane').append('<li data-point="'+i+'"><span>'+(i+1)+'</span></li>');
		}
		_test_init_clock('clockdiv');
		_Test.user_results.fill(_Test.no_answer_mark);
		$test_content.on('click', '.test-question', function() {
			var that = $(this);
			var inputs = that.find('input');
			var input_checked = that.find('input:checked');
			setTimeout(function() {
				var index = _Test.questions_list.findIndex((obj) => {
					return obj.id === that.data('question')
				}), answers = _Test.no_answer_mark;
				var control = $test_control.find('ul li:eq('+index+')');
				if(input_checked.length > 0) {
					var answers = inputs.index(input_checked);
					if(input_checked.attr('type') === 'checkbox') {
						if (_Test.user_results[index] === _Test.no_answer_mark)
							 _Test.user_results[index] = new Array()
						if(input_checked.length > 1) {
							answers = [];
							for (var i = 0; i < input_checked.length; i++) {
								answers.push(inputs.index($(input_checked[i])))
							}
						}
					}
					control.addClass('checked')
				} else control.removeClass('checked');
				_Test.user_results[index] = answers
			},200)
		});
		$test_content.on('click', '.test-guide', function() {
			let id = $(this).parents('.test-question').data('question');
			$.post('/get-question-guide', {id:id}, function(res) {
				if(res.ok) {
					let div = document.createElement('div');
					div.className = "question-guide";
					div.innerHTML = '<p>'+res.data.replace(/(\n)+/g, '</p><p>')+'</p>'
					swal({
						title: 'Hướng dẫn!',
						content: div
					})
					let text = document.querySelector('.question-guide');
					MathJax.Hub.Queue(["Typeset",MathJax.Hub, text])
				} else swal('Thông báo!', res.error, 'warning')
			})
			
		});
		$('[data-point]').click(function() {
			var point = $(this).data('point')+1;
			var page = Math.ceil(point/_Test.questions_per_page);
			var x = point - (Math.floor(point/_Test.questions_per_page)*_Test.questions_per_page);
			if(_Test.questions_number>_Test.questions_per_page)
				$test_content.find('ul').pagination('selectPage', page);
			window.scrollTo(0,$('.test-question:eq('+(x-1)+')').position().top);
		});
		$('[data-action="finish"]').text('Nộp bài');
		$('[data-action="finish"]').unbind('click').bind('click', _test_confirm_finish);
	};

	var _test_confirm_finish = function() {
		swal({
			title: "Nộp bài?",
			text: "Bạn chắc chắn nộp bài chứ !",
			icon: "warning",
			buttons: ["Không, chưa làm xong", "Nộp bài"],
		}).then((ok) => {
			if (ok) {
				clearInterval(_Test.time_interval);
				_test_finish()
			}
		})
	};

	var _test_result_text = function(score, pass, total) {
		var time = ms_to_time(Date.now() - _Test.time_start);
		return `<div class="score-board">
			<div><p>Điểm</p><p>Số câu đúng</p><p>Thời gian</p></div>
			<div><p>${score}</p><p><span>${pass}</span>/${total}</p><p>${time}</p></div>
		</div>`;
	};

	var _test_finish = function(force) {
		var need_select = [];
		for (var i = 0, len = _Test.user_results.length; i < len; i++) {
			if (_Test.user_results[i] === _Test.no_answer_mark) need_select.push(i)
		}
		if (force || need_select.length == 0) {
			_test_commit(_Test.user_results);
		} else {
			swal({
				title: 'Thông báo!',
				text: 'Bạn còn '+need_select.length+' câu chưa chọn đáp án',
				buttons: ['Vẫn nộp', 'Làm nốt'],
				icon: 'warning',
			}).then((ok) => {
				if (!ok) _test_commit(_Test.user_results)
				else _test_go_to_question(need_select[0]);
			})
		}
	}

	function _test_go_to_question(q) {
		var that = $('.test-question:eq('+q+')').position();
		window.scrollTo(0,that.top)
	};

	function _test_commit(result) {
		let request = {
			id: _Test.id,
			answers: [].concat.apply([], result),
			source: _Test.source || null,
			finish: Date.now(),
			time: (Date.now() - _Test.time_start) / 1000
		};
		if(_Test.cheatsheet && typeof _Test.cheatsheet === 'string') request.sheet = _Test.cheatsheet;
		$.post('/get-score', request, function(res) {
			if(res.ok) _test_action(res)
		})
	};

	function _test_show_result(sheet) {
		$test_control.find('li').addClass('fail');
		$test_menu.children('span:last-child').text('Làm lại');
		$('[data-action="finish"]').unbind('click').bind('click', function(e) {
			e.preventDefault();
			location.reload()
		})
		_test_display_result(sheet)
	};

	function _test_display_result(sheet) {
		_Test.cheatsheet = sheet;
		let $question = $('.test-question');
		$question.find('input').prop('disabled', true);
		for (let i = 0, len = sheet.length; i < len; i++) {
			let question_pos = i - _Test.current_page*_Test.questions_per_page;
			if(Array.isArray(sheet[i])) {
				for (let j = 0; j < sheet[i].length; j++) 
					_test_highlight_result(i, $($question[question_pos]), sheet[i][j])
			} else _test_highlight_result(i, $($question[question_pos]), sheet[i])
		}
	};

	function _test_highlight_result(x, question, index) {
		let obj = question.find('label:eq('+index+')');
		question.removeClass('text-danger').find('input:checked').parents('label').addClass('check-danger');
		if(obj.hasClass('check-danger')) 
			$test_control.find('li:eq('+x+')').removeClass('fail')
		obj.addClass('check-success');
		obj.find('span:eq(0)').addClass('checked');
		if(_Test.action.match(/sg/g)) obj.append('<span class="test-guide">Hướng dẫn</span>');
	};

	function _test_action(res) {
		let div = document.createElement('div');
		div.innerHTML = _test_result_text(res.score, res.pass, _Test.questions_number);
		let options = {
			title: 'Kết quả!',
			content: div,
			icon: (res.pass > (_Test.questions_number/2)) ? 'success' : 'warning',
			closeOnClickOutside: false,
			closeOnEsc: false,
		}, func = null, action = _Test.action;
		if(action) {
			if(action === 'srrw' || action === 'srrwsg') {
				Object.assign(options, {
					buttons: ['Xem đáp án', 'Làm lại'],
				});
				func = (ok) => {
					if (ok) location.reload()
					else _test_show_result(res.cheatsheet);
				}
			} else if(action === 'sr') {
				Object.assign(options, {
					buttons: [false, 'Xem đáp án'],
				});
				func = (ok) => {
					if(ok) _test_show_result(res.cheatsheet)
				}
			} else if(action === 'rw') {
				$test_menu.remove();
				Object.assign(options, {
					buttons: [false, 'Làm lại'],
				});
				func = (ok) => {
					if(ok) location.reload()
				}
			}
		} else {
			options = {
				title: 'Đã nộp!',
				text: 'Bài của bạn đã được nộp',
				icon: 'success',
				buttons: false,
				closeOnClickOutside: false,
				closeOnEsc: false,
			}
			$test_menu.remove()
		}
		swal(options).then(func)
	};

	_test_set_start()