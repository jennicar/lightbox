// animating the title
/*var str = "~.:visions:.~";
str = "*" + str;
var pos = 0;

function animate_title() {
	document.title = str.substring(pos, str.length) + str.substring(0, pos);
	pos++;
	if (pos >  str.length) pos = 0;
	window.setTimeout("animate_title()",200);
}*/

window.onload = function(){
	//animate_title();
	var total_slides = $('.slide').length;
	var lb = new Lightbox(total_slides);
	// LIGHTBOX EVENT HANDLERS
	$('.frame').click(function(){
		lb.show_lightbox();
		lb.id = this.id;
		lb.index = lb.get_index(lb.id);
		lb.hide_slides();
		lb.show_slide(lb.index);
	});
	$('.prev').click(function(e){
		e.stopPropagation();
		lb.prev_slide();
	});
	$('.next').click(function(e){
		e.stopPropagation();
		lb.next_slide();
	});
	$('.close').click(function(e){
		lb.hide_lightbox();
	});
	$('.design_arrow').click(function(e){
		window.close();
	});
	$('.slide').click(function(e){ e.stopPropagation(); });
	$('#lightbox').click(function(){ lb.hide_lightbox(); });
	// LIGHTBOX KEY PRESS EVENT HANDLERS
	document.onkeydown = function(e) {
		if (lb.is_visible() === true){
		    switch (e.keyCode) {
		    	case 27:
					lb.hide_lightbox();
		    		break;
		        case 37:
					lb.prev_slide();
		            break;
		        case 39:
		        	lb.next_slide();
		            break;
		    }
		}
	};
}

// LIGHTBOX FUNCTIONS
function Lightbox(t){
	this.tSlides = t;
	this.index = 0;
	this.id = '';
	this.slides = document.getElementsByClassName('slide');
	this.captions = document.getElementsByClassName('caption');
	this.caption = '';
}

Lightbox.prototype = {
	constructor: Lightbox,
	show_lightbox:function(){
		document.getElementById('lightbox').style.visibility = 'visible';
		document.getElementById('lightbox').style.opacity = '1';
	},
	hide_lightbox:function(){
		document.getElementById('lightbox').style.visibility = 'hidden';
		document.getElementById('lightbox').style.opacity = '0';
	}, 
	show_slide:function(){
		this.slides[this.index].style.display = 'inline-block';
		this.display_caption(this.index);
	}, 
	hide_slides:function(){
		for(var i = 0; i < this.tSlides; i++) {
			this.captions[i].style.display = 'none';
			this.slides[i].style.display = 'none';
		}
	}, 
	get_index:function(id){
		for(var i = 0; i < this.tSlides; i++){
			var data_id = document.getElementsByClassName('slide')[i].getAttribute('data-id');
			if (id === data_id){
				this.index = i;
				break;
			}
		}
	return this.index;
	},
	is_visible:function(){
		if (document.getElementById('lightbox').style.visibility === 'visible') return true;
	},
	prev_slide:function(){
		this.hide_slides();
		if (this.index == 0) this.show_slide(this.index = this.tSlides - 1);
		else this.show_slide(this.index -= 1);
	}, 
	next_slide:function(){
		this.hide_slides();
		if (this.index < this.tSlides - 1) this.show_slide(this.index += 1);
		else this.show_slide(this.index = 0);
	}, 
	display_caption:function(index){
		var id = this.slides[index].getAttribute('data-id');
		this.caption = $('#' + id + '> .overlay').text();
		this.captions[index].innerHTML = this.caption;
		this.captions[index].style.display = 'block';
	}
}