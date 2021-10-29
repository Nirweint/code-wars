// 1
function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8
	} else {
		return number * 9
	}
}
simpleMultiplication(2)

// 2
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - (sonYearsOld*2));
}

twiceAsOld(30, 10)

// 3
function even_or_odd(number) {
	return (number % 2 === 0) ? "Even" : "Odd";
}

even_or_odd(2)

// 4
function booleanToString(b){
	return b.toString();
}

booleanToString(true)

// 5
function missingNo(nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	let ans = sortedNums.findIndex((item, index) => {
		if (item !== index) {
			return true
		}
	})
	if (ans === -1) {
		return 100
	} else {
		return ans
	}
}

missingNo([0,1,2,5,6,3,4,3])

// 6
function distinct(a) {
	let newArray = [];
	a.forEach((item) => {
		if (!newArray.includes(item)) {
			newArray.push(item)
		}
	})
	return newArray;
}

distinct([1,4,5,6,6,7])

// 7
function usdCny(usd) {
	return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

usdCny(2)

// 8
const howManyYears = function(date1, date2){
	let date1New = Number(date1.slice(0, 4));
	let date2New = Number(date2.slice(0, 4));
	return Math.abs(date2New - date1New);
}

howManyYears('1997/10/10', '2015/10/10')

// 9
function evenOrOdd(str) {
	let odd = 0;
	let even = 0;
	let arr = str.split("").map((item) => Number(item));
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			odd = odd + arr[i]
		} else {
			even = even + arr[i]
		}
	}
	if(even < odd) {
		return "Even is greater than Odd"
	}
	if(even > odd) {
		return "Odd is greater than Even"
	}
	if(even === odd) {
		return "Even and Odd are the same"
	}
}

evenOrOdd('1365218735')

// 10
function ensureQuestion(s) {
	if (s.includes("?")) {
		return s
	} else {
		return s + "?"
	}
}

ensureQuestion("Hello");

// 11
function check(a, x) {
	return a.includes(x);
}

check([66, 101], 66)

// 12
function greet(name){
	if(name === "Johnny") {
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	}
}

greet("Jim")

// 13
function main(verb, noun) {
	return verb + noun
}

main('take ', 'item')

// 14
function makeNegative(num) {
	if (num > 0) {
		return num * -1
	} else {
		return num
	}
}

makeNegative(42)

// 15
function noSpace(x){
	return x.split(' ').join("")
}

noSpace('8shew dddd r     ')

// 16
function well(x){
	if (!x.includes("good")) {
		return "Fail!"
	}
	let res = x.filter(item => item === 'good')
	if (res.length <= 2 ) {
		return 'Publish!'
	}
	if (res.length > 2) {
		return "I smell a series!"
	}
}

well(['bad', 'bad', 'bad']);

// 17
function nameShuffler(str){
	return str.split(" ").reverse().join(" ");
}

nameShuffler('john McLane');

// 18
function stringToArray(string){
	return string.split(" ")
}

stringToArray("Robin Singh")

// 19
function numberToString(num) {
	return num.toString()
}

numberToString(67)

// 20
function uefaEuro2016(teams, scores){
	if (scores[0] === scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
	}
	if (scores[0] > scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
	}
	if (scores[0] < scores[1]) {
		return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
	}
}

uefaEuro2016(['Germany', 'Ukraine'], [2, 0])

// 21
function formatMoney(amount){
	return `$${amount.toFixed(2)}`;
}

formatMoney(39.99);

// 22
function areYouPlayingBanjo(name) {
	if (name[0] === 'r' || name[0] === 'R') {
		return name + " plays banjo"
	} else {
		return name + " does not play banjo"
	}
}

areYouPlayingBanjo("Adam")

// 23
function capitalizeWord(word) {
	let second = word.slice(1)
	let first = word[0].toUpperCase();
	return first + second
}

capitalizeWord('word');

// 24
let a = 123;
a = a.toString();

// 25
let stringToNumber = function(str){
	return Number(str)
}

stringToNumber("1234");

// 26
function countSheeps(arrayOfSheep) {
	return arrayOfSheep.filter((item) => item === true).length
}

countSheeps([true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true ])

// 27
function digitize(n) {
	let newArr = n.toString().split("").reverse();
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = Number(newArr[i]);
	}
	return newArr
}

digitize(35231)

function digitizeK(n) {
	return String(n).split('').map(Number).reverse()
}

// 28

function feast(beast, dish) {
	if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
		return true;
	} else {
		return false;
	}
}

feast("sdsdsd", "dsdsdsd")

// 29
function fakeBin(x){
	let str = x.split('')
	for (let i = 0; i < str.length; i++) {
		if (str[i] < 5) {
			str[i] = '0'
		} else {
			str[i] = '1';
		}
	}
	return str.join('')
}

fakeBin('45385593107843568')

// 30
x=()=>{}

//  31

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '')
  }

disemvowel("This website is for losers LOL!")

// 32

function countBy(x, n) {
	let res = []
	for(let i = 1; i <= n; i++) {
		res.push(x)
	}
	return res.map((item,index) => item * (index + 1))
}

countBy(1,10)

// 33 
String.prototype.digit = function() {
  return /^\d$/.test(this);
};

// 34 
function removeSmallest(numbers) {
	let minIndex = numbers.indexOf(Math.min(...numbers))
	return numbers.filter((item, index) => minIndex !== index)
  }

removeSmallest([1, 2, 3, 4, 5])

// 35
function checkExam(array1, array2) {
	let ans = 0;
	for(let i = 0; i < array1.length; i++) {
	 if(array1[i] === array2[i]) {
	  ans += 4;
	 }
	 if(array1[i] !== array2[i] && array2[i] !== "") {
	  ans -= 1;
	 }
	}
	 if (ans < 0) {
	   ans = 0;
	   }
	 return ans;
   }

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])

// 36 
function sumMix(x){
	let arr = x.map(item => typeof item == 'string' ? Number(item) : item)
	return arr.reduce((sum, current) => sum + current, 0)
  }
sumMix([9, 3, '7', '3'])

// 37