var revealInitializer = {
	width: 1280,
	height: 720,
	center: false,
	hash: true,
	dependencies: []
};

if (window.gaPropertyID) {
	revealInitializer.dependencies.push({
		src: '../common/reveal-ga-0.2.0/dist/reveal-ga.min.js'
	});
}

// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize(revealInitializer);

function reloadAudio() {
	var audios = document.getElementsByClassName('audio-fragment');
	Array.prototype.forEach.call(audios, function(audio) {
		if (audio.classList.contains('current-fragment')) {
			audio.currentTime = 0;
			audio.play();
		} else {
			audio.pause();
		}
	});
}

Reveal.on('fragmentshown', reloadAudio);

Reveal.on('fragmenthidden', reloadAudio);

function clickAudio(event) {
	if (event.target.dataset.wordId) {
		var audio = document.getElementById('sound-' + event.target.dataset.wordId);
		if (audio) {
			audio.currentTime = 0;
			audio.play();
		}
	}
}

Array.prototype.forEach.call(
	document.getElementsByClassName('audio-click'),
	function(element) {
		element.addEventListener('mousedown', clickAudio);
		element.addEventListener('touchstart', clickAudio);
	}
);
