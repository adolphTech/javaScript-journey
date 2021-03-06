function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');

window.addEventListener('keyup',function(e){
	if(e.key === 'ArrowDown' || e.key ==='Down'){
	const currTop = extractPos(avatar.style.top);
	avatar.style.top = `${currTop + 50}px`;
	} 
	else if (e.key === 'ArrowUp' || e.key === 'up'){

		const currTop = extractPos(avatar.style.top);

		avatar.style.top = `${currTop -50}px`;
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right'){

		const currLeft = extractPos(avatar.style.left);

		avatar.style.top = `${currLeft +50}px`;
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left'){

		const currLeft = extractPos(avatar.style.currLeft);

		avatar.style.top = `${currLeft -50}px`;
	}
})

const extractPos = (pos)=>{
	if (!pos) return 100;	
	return parseint(pos.slice(0,-2));
};