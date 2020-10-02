function sum(arr){
	let result=0;
	for (i=0;i<arr.length;i++){
		result+=arr[i];
	}
	return result;
}

function odd(num){
	return num%2==0;
}

function even(num){
	return num%2!=0;
}

function sumToN(n){
	let result = 0;
	let a=1;
	while (a <= n){
		result+=a;
		a++;
	}
	return result;
}

function sumXToY(x,y){
	let result = 0;
	while (x <= y){
		result+=x;
		x++;
	}
	return result;
}

function lcm(a,b){
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

function gcd(a,b){
	let ucln=1;
	for (let i=1;i<=a;i++){
		if (a%i==0 && b%i==0){
			ucln=i;
		}
	}
	return ucln;
}

function rndI(a,b){
	return Math.floor(Math.random() * (b+1)) + a;
}

function rnd(a,b){
	return Math.random() * (b+1) + a;
}

function round(a){
	return Math.round(a);
}

function floor(a){
	return Math.floor(a);
}

function toFix(a,b){
	return Number(a.toFixed(b));
}

const PI = Math.PI;

function square(a){ 
	return Math.pow(a, 2);
}

function sqrt(a){
	return Math.sqrt(a);
}

function pow(a,b){
	return Math.pow(a,b);
}

function divisible(a,b){
	return a%b==0;
}

function prime(a){
	for (i=2;i<a;i++){
		if (a%i==0){
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

function sin(a){
	return Math.sin(a);
}

function abs(a){
	return Math.abs(a);
}

function isFin(a){
	return a==Infinity || Number.isNaN(a);
}

function isNaN(a){
	return a==Number.isNaN(a);
}

function cos(a){
	return Math.cos(a);
}

function tan(a){
	return Math.tan(a);
}

function findPrime(a,b){
	let arr=[];
	let check;
	for (i=a;i<=b;i++){
		check=true;
		for (j=2;j<i;j++){
			if (i%j==0){
				check=false;
			}
		}
		if (check != false && i > 2){
			arr.push(i)
		}
	}
	return arr;
}

function perfectN(a){
	let sum=0;
	for (i=1;i<a;i++){
		if (a%i==0 && a!=i){
			sum+=i;
		}
	}
	if (sum == a){
		return true;
	} else {
		return false;
	}
}