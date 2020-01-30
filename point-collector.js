function boxClick() {
	if (document.querySelector('.tw-button__text')) {
		document.querySelector('.tw-button__text').click();
	}
}
setInterval(boxClick, 30000);