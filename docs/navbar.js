// navbar
const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');
const navStick = document.getElementById('navbar');
let lastScrollY = 0;

const colorEnvelope = document.getElementById('bg-envelope');
let isScrolllingUp = false;


const bgOptions = {
	rootMargin: '-200px 0px 0px 0px',
};

// envelope bg changing and add classlist

window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;

	if (currentScrollY > lastScrollY) {
		primaryHeader.classList.add('nav--hidden');
	} else {
		primaryHeader.classList.remove('nav--hidden');
	}

	
	if(currentScrollY < lastScrollY){
		isScrolllingUp = true;
	} else{
		isScrolllingUp = false
	}

	if (isScrolllingUp) {
		colorEnvelope.style.transition = '0.2s';
		colorEnvelope.style.backgroundColor = '#dbe7e8';
	} else {
		colorEnvelope.style.transition = '0.2s';
		colorEnvelope.style.backgroundColor = 'white';
	}

	lastScrollY = currentScrollY;
});


$(document).ready(function(){
	
	$('#menu-container').mouseenter(function() {
		$('#dropdown').css({
			visibilty:'visible',
			display:'none'
		}).stop().slideDown(500)
	});
		
	$('#menu-container').mouseleave(function(){
		$('#dropdown,#dropdown_2').stop().slideUp(600, function(){
			$(this).css('visibility', 'none')
		});
		
	});
});

$(document).ready(function(){
	
	$('#menu-container_2').mouseenter(function() {
		$('#dropdown_2').css({
			visibilty:'visible',
			display:'none'
		}).stop().slideDown(500)
	});
		
	$('#menu-container_2').mouseleave(function(){
		$('#dropdown_2').stop().slideUp(600, function(){
			$(this).css('visibility', 'none')
		});
		
	});
});


// changing the navbar's color

window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;

	if (currentScrollY === 0) {
		primaryHeader.style.transition = '0.6s';
		primaryHeader.style.backgroundColor = 'initial';
		primaryHeader.style.transition = "slide"
	} else {
		primaryHeader.style.transition = '0.6s';
		primaryHeader.style.backgroundColor = 'white';
	}
	
});

scrollWatcher.setAttribute('data-scroll-watcher', ' ');
primaryHeader.before(scrollWatcher);


const navObserver = new IntersectionObserver(function (entries, navObserver) {
	!entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			primaryHeader.classList.add('sticking');
		} else {
			primaryHeader.classList.remove('sticking');
		}
	});
}, bgOptions);

navObserver.observe(scrollWatcher);



const icons = document.getElementById('iconToggle');
let isRunningIcon = true;
icons.addEventListener('mouseenter', function (event) {
	if (isRunningIcon) {
		icons.classList.remove('fa-person-running');
		icons.classList.add('fa-pause');

	} else {
		icons.classList.remove('fa-pause');
		icons.classList.add('fa-person-running');
	}

	const pauseIcons = document.querySelector('.fa-pause')

	if(pauseIcons){
		pauseIcons.style.position = 'relative';
		pauseIcons.style.left = '13px';
		pauseIcons.style.top= '7px'
	} 

	isRunningIcon = !isRunningIcon;
});


