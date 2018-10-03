/****************************************
	  cookie clicker button section 
****************************************/
let cookieCount = 0;
let clickPower = 1;

//Select Cookie counter and cookie clicker on the DOM
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//Increase cookie amount by clickPower
cookieClicker.addEventListener("click", function() {
	cookieCount = cookieCount + clickPower;
	refreshCookieCount();
})


/************************************
	 Upgrade click power section
 ************************************/
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//Select all click power related shop items on the DOM
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Increase click power when the user has enough money to purchase
buyClickPower.addEventListener("click", function() {
	if(cookieCount >= clickPowerPriceAmount){
		cookieCount -= clickPowerPriceAmount;
		
		//Upgrade the click power, raise the power level, amd raose the price of upgrading power again 
		clickPower += 1;
		clickPowerLevelNumber = clickPowerLevelNumber + 1;
		clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
		
		//Refresh both clickpower and cookie count
		refreshClickPower()
		refreshCookieCount();
	}else{
		console.log("you don't have enough money for that!");
	}
})

/********************************
			Grandmas
********************************/
let grandmaAuto = false;

let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 1;

let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple')

buyGrandma.addEventListener("click", function() {
	if(cookieCount >= grandmaPriceAmount){
		autoGrandma = true;
		grandmaAutoStart();

		cookieCount -= grandmaPriceAmount;

		grandmaPower += 10;
		grandmaLevelNumber += 1;
		grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

		refreshGrandma();
		refreshCookieCount();
	}else{
		console.log("You don't have enough money for that!'")
	}
});


/* *****************************
	Helper/redraw functions
********************************/

//Refresh the cookie count HTML
let refreshCookieCount = function() {
	cookieCounter.innerHTML = cookieCount;
}

//Refresh the click power HTML
let refreshClickPower = function(){
	clickPowerLevel.innerHTML = clickPowerLevelNumber;
	clickPowerPrice.innerHTML = clickPowerPriceAmount;
	clickPowerMultiple.innerHTML = clickPower;
}

//Refresh grandma HTML
let refreshGrandma = function(){
	grandmaMultiple.innerHTML = grandmaPower - 10;
	grandmaLevel.innerHTML = grandmaLevelNumber;
	grandmaPrice.innerHTML = grandmaPriceAmount;
}

let grandmaAutoStart = function() {
	let grandmaInt = window.setInterval(function() {
		cookieCount += grandmaPower;
		refreshCookieCount();
	}, 1000);
}

