function firstChar(text) {
  // your code here
	let arr = text.split('');
	let res ='';
	for(let i in arr){
		if(arr[i] != ' '){
			res = arr[i];
			break;
		}
	}
	return res;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
