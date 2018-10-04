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
		clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
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

//Select all Grandma elements in the DOM
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple')

//Event listener for if a grandma is trying to be bought
buyGrandma.addEventListener("click", function() {
	if(cookieCount >= grandmaPriceAmount){
		autoGrandma = true;
		grandmaAutoStart();

		cookieCount -= grandmaPriceAmount;

		grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
		grandmaLevelNumber += 1;
		grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

		refreshGrandma();
		refreshCookieCount();
	}else{
		console.log("You don't have enough money for that!'")
	}
});

/********************************
		   Facilities
********************************/
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//Select all facility related elements within the DOM
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//Event listener for if a facility is trying to be bought
buyFacility.addEventListener("click", function () {
	if(cookieCount >= facilityPriceAmount) {
		//Upgrade facility stats
		cookieCount -= facilityPriceAmount;
		facilityLevelNumber += 1;
		facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);
		facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

		//Spin up a new facility
		facilityAuto = true;
		facilityAutoStart();
		
		//Update the cookie & facility count
		refreshFacility();
		refreshCookieCount();
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

//Refresh grandma shop item HTML
let refreshGrandma = function(){
	grandmaMultiple.innerHTML = grandmaPower - 10;
	grandmaLevel.innerHTML = grandmaLevelNumber;
	grandmaPrice.innerHTML = grandmaPriceAmount;
}

//Refresh facility shop item HTML
let refreshFacility = function(){
	facilityLevel.innerHTML = facilityLevelNumber;
	facilityPrice.innerHTML = facilityPriceAmount;
	facilityMultiple.innerHTML = facilityPower - 600;
}

//Grandma auto start function for baking cookies.
let grandmaAutoStart = function() {
	let grandmaInt = window.setInterval(function() {
		cookieCount += grandmaPower;
		refreshCookieCount();
	}, 1000);

}

let facilityAutoStart = function() {
	let facilityInt = window.setInterval(function() {
		cookieCount += facilityPower;
		refreshCookieCount();
	}, 1000)
}
