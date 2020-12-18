function setupAccel() {
	let accel = new Accelerometer({frequency: 60});
	console.log('hi');
	function updateDisplay(e) {
		document.getElementById('accel-x').innerHTML = accel.x.toString();
		document.getElementById('accel-y').innerHTML = accel.y.toString();
		document.getElementById('accel-z').innerHTML = accel.z.toString();
	}

	accel.addEventListener('reading', updateDisplay);
}

let text = document.getElementById('status');
navigator.permissions.query({name: 'accelerometer'}).then(function(result) {
	if (result.state === 'granted') {
		text.innerHTML = 'nice';
		setupAccel();
	} else if (result.state === 'prompt') {
		text.innerHTML = 'prompt';
	} else if (result.state === 'denied') {
		text.innerHTML = 'rip';
	} else {
		text.innerHTML = 'what';
	}
})
