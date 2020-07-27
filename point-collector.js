function boxClick() {
	if (document.querySelector('.claimable-bonus__icon')) {
		document.querySelector('.claimable-bonus__icon').click();
	}
}
setInterval(boxClick, 3000);