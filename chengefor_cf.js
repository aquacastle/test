// let celsius;
// let fahrenheit;

const changeForC = (numF)=>{
	let fahrenheitSub = numF - (32);
	let fahrenheitDiv = fahrenheitSub / (1.8);
	return Math.floor(fahrenheitDiv);
};

const changeForF = (numC)=>{
	let celsiusMul = numC * (1.8);
	let celsiusAdd = celsiusMul + (32);
	return Math.floor(celsiusAdd)
};

console.log(changeForC(212));
console.log(changeForF(100));

