'use strict'
const bit_array = "011111101111110";
const flag = "01111110";

console.log(`Before stuffing: ${bit_array} -- ${bit_array.length} characters`);

/**
 * Simple function made to duplicate the data link layer.
 * @param _ An array of 1's and 0's
 * @argument s The string being manually created
 * @argument i The temporary value following the number of 1's 
 */
const stuff = (_, s = '', i = 0, x = 0) => { //User only requires to input the array.
	if(x == _.length) return s; //If there's no more bits in the array to check, return the string
	const O = +_[x]; //Assign O to the xth bit to reduce accessing the array.
	if(O) i++; //Check if the bit is a 1, if so, increase i
	else i = 0; //If at any point it isn't, go back to 0.
	s += O; //Assign the xth character of the string
	if(i == 5){ 
		s += 0; //Add on a 0 to the 1.
		i = 0; //Reset the i value
	}
	return stuff(_, s, i, ++x); //Recursively call the function
} //Pure function.

const stuffed_bits = stuff(bit_array.split(''));

console.log(`After stuffing: ${stuffed_bits} -- ${stuffed_bits.length} characters`);

console.log(`After framing: ${flag + stuffed_bits + flag}`);
