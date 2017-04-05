$('#red').click(function() {
	document.getElementById('stylechange').href = "ct_css/red.css";
});

$("#blue").click(function() {
	document.getElementById("stylechange").href = "ct_css/blue.css"
});
$('#yellow').click(function() {
	document.getElementById('stylechange').href = "ct_css/yellow.css";
});

$("#black").click(function() {
	document.getElementById("stylechange").href = "ct_css/black.css"
});
$('#white').click(function() {
	document.getElementById('stylechange').href = "ct_css/white.css";
});

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}

function hexToRgb(h) {
	var i = parseInt(h, 16);
	return "rgb(" + ((i >> 16) & 255) + "," + ((i >> 8) & 255) + ","
			+ (i & 255) + ")";
};

$(document).ready(
		function() {
			$('.palette_li').each(
					function() {
						$(this).html(
								'<input type="text" style="background: #'
										+ $(this).attr('swatch') + ';" />');
					});

			$('.palette_ul').dblclick(function(e) {
				var elem = e.target;
				if ($(elem).is('input')) {

					$(elem).val(hexToRgb($(elem).parent().attr('swatch')));
					elem.focus();
					elem.select();
					setTimeout(function() {
						resetElem(elem)
					}, 4000);

				}
			});

			$('.palette_ul').click(function(e) {
				var elem = e.target;
				if ($(elem).is('input')) {
					$(elem).val($(elem).parent().attr('swatch'));
					elem.focus();
					elem.select();
					setTimeout(function() {
						resetElem(elem)
					}, 4000);
				}
			});
		});

// functions
function resetElem(elem) {
	$(elem).val('');
	elem.blur();
}

$("#hidespan").click(function() {
	$("#hidespan").hide();
});

$(".closebtn").click(function() {
	$("#hidespan").show();
});

function showSelectOpt1() {
	document.getElementById('selectOption1').style.display = "block";
}
function showSelectOpt2() {
	document.getElementById('selectOption2').style.display = "block";
}
function showSelectOpt3() {
	document.getElementById('selectOption3').style.display = "block";
}

$(function() {

	$('#sel1').val('navbar').click(function() {
		$(".palette_ul li").click(function() {
			var colornv = hexToRgb($(this).attr('swatch'));
			console.log('#' + colornv);
			$('.navbar-inverse').css({
				"background-color" : colornv
			});
		});
	});
});
$(function() {
	$('#sel1').val('headertxt').click(function() {
		$(".palette_ul li").click(function() {
			var colorht = hexToRgb($(this).attr('swatch'));
			console.log('#' + colorht);
			$('.navbar-inverse .navbar-nav>li>a').css({
				"color" : colorht
			});
		});
	});
});
/*$(function() {
	$('#sel1').val('bgcolor').click(function() {
		$(".palette_ul li").click(function() {
			var colorbg = hexToRgb($(this).attr('swatch'));
			console.log('#' + colorbg);
			$('#bgcolor').css({
				"background-color" : colorbg
			});
		});
	});
});
$(function() {
	$('#sel1').val('footer').click(function() {
		$(".palette_ul li").click(function() {
			var colorft = hexToRgb($(this).attr('swatch'));
			console.log('#' + colorft);
			$('footer').css({
				"background-color" : colorft
			});
		});
	});
});*/

/*
 * $(function() { if ($('#sel1').val('footertxt') == 'footertxt') { footer(); } })
 * 
 * var footer = function() { $('#sel1').val('footertxt').click(function() {
 * $(".palette_ul li").click(function() { var colorftt =
 * hexToRgb($(this).attr('swatch')); console.log('#' + colorftt);
 * $('#footertxt').css({ "color" : colorftt }); }); }); };
 */
/*
 * $(function() { $('#sel1').val('hovertxt').click(function() { $(".palette_ul
 * li").click(function() { var colorht = hexToRgb($(this).attr('swatch'));
 * console.log('#' + colorht); $('#hovertxt').css({ "color" : colorht }); });
 * }); });
 */
/*
 * $(function() { if ($('#sel1').val('carouseltxt') == 'carouseltxt') { return
 * carousel(); } })
 * 
 * var carousel = function() {
 * 
 * $('#sel1').val('carouseltxt').click(function() { $(".palette_ul
 * li").click(function() { var colorct = hexToRgb($(this).attr('swatch'));
 * console.log('#' + colorct); $('.header-text').css({ "color" : colorct }); });
 * }); };
 */
