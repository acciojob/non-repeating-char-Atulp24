function firstNonRepeatedChar(str) {
	const charFreqCount = {};
	for(let char of str) {
		if(charFreqCount[char])
		{
			charFreqCount[char] += 1;
		}
		else
		{
			charFreqCount[char] = 1;
		}
	}
	for(let char of str) {
		if(charFreqCount[char] === 1)
		{
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
