function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
	    duration: '50%',
		triggerElement: '.parallax',
		triggerHook: 0.1
	})
	.setPin('.parallax')
	// .addIndicators()
	.addTo(controller);


}

splitScroll();

var cube_container = document.querySelector(".cube_container")
window.addEventListener("load", vanish);
function vanish (){
	
	cube_container.classList.add("cube_container-finish");

}
