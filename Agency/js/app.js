window.onscroll = function() {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 700){
			let header = document.getElementById('header');
			header.classList.add('header-scroll');
		}
		if(scrolled < 700){
			header.classList.remove('header-scroll');
		}
	}

setTimeout(() => { 
	let banerMan = document.getElementById('baner-man');
	let banerBtn = document.getElementById('main-baner-btn');

	banerMan.classList.add('main-baner__man-img-active');
	banerBtn.classList.add('main-baner__btn-active');
 }, 500);

