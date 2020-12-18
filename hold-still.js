let text = document.getElementById('accel-x');
navigator.permissions.query({name: 'accelerometer'}).then(function(result) {
	if (result.state === 'granted') {
		text.innerHTML = 'nice';
	} else if (result.state === 'prompt') {
		text.innerHTML = 'prompt';
	} else if (result.state === 'denied') {
		text.innerHTML = 'rip';
	} else {
		text.innerHTML = 'what';
	}
})
