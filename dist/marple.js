function sumOfArray(arr){
	let result=0;
	for (i=0;i<arr.length;i++){
		result+=arr[i];
	}
	return result;
}

function OddOrEven(num){
	if (num % 2 == 0){
		return num.toString() + " is even";
	} else {
		return num.toString() + " is odd";
	}
}

function sumToN(n){
	let result = 0;
	let a=1;
	while (a < n){
		result+=a;
		a++;
	}
	return result;
}

function leastCommonMultiple(a,b){
	let bcnn=0;
	let k=1;
	while (true){
		if (k%a==0 && k%b==0){
			bcnn=k;
			break;
		}
		k++;
	}
	return bcnn;
}

function greatestCommonDivisor(a,b){
	let ucln=1;
	for (let i=1;i<=a;i++){
		if (a%i==0 && b%i==0){
			ucln=i;
		}
	}
	return ucln;
}

function randomNumInt(a,b){
	let result = Math.floor(Math.random() * ++b) + a ;
	return result;
}

function randomNum(a,b){
	let result = Math.random() * ++b + a ;
	return result;
}

function round(a){
	let result = Math.round(a);
	return result;
}

function floor(a){
	let result = Math.floor(a);
	return result;
}

function toFix(a,b){
	let result = a.toFixed(b);
	return result;
}

function PI(){
	return Math.PI;
}

function square(a){
	let result = Math.pow(a, 2);
	return result;
}

function sqrt(a){
	let result = Math.sqrt(a);
	return result;
}

function pow(a,b){
	let result = Math.pow(a,b);
	return result;
}

function divisible(a,b){
	if (a%b==0) {
		return true;
	} else {
		return false;
	}
}

function isPrime(a){
	for (i=2;i<n;i++){
		if (n%i!=0){
			return false;
		}
	}
	return true;
}

function max(arr){
	var max = arr[0];
	for (i=1;i<arr.length;i++){
		if (max<arr[i]){
			max=arr[i];
		}
	}
	return max;
}

function min(arr){
	var min = arr[0];
	for (i=1;i<arr.length;i++){
		if (min>arr[i]){
			min=arr[i];
		}
	}
	return min;
}