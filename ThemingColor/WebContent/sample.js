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

$('.palette_li').each(
		function() {
			$(this).html(
					'<input type="text" style="background: #'
							+ $(this).attr('swatch') + ';" />');
		});
$('#pages').click(function() {
	$('#register').css({"color": "red"});
});