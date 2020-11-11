//Гугл мапс карта

function initMap() {
    const sedona = { lat: 34.86974, lng: -111.76099 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: sedona,
    });
  }
//

//Кнопка открытия формы

let searchFormControlBtn = document.getElementById("search-btn");

addEventListenerIfNotNull(searchFormControlBtn, "click", function() {
	let searchFormWindow = document.getElementById("searchFormWindow");
	if(!searchFormWindow){
		console.log("Failed to find 'searchFormWindow'");
		return;
	}
	if(searchFormWindow.style.display === "block"){
		searchFormWindow.style.display = "none";
	} else {
		searchFormWindow.style.display = "block";
	}
	})

//

//Плюс/минус в форме
let adultsMinusBtn = document.getElementById("adult-minus-btn");
let adultsPlusBtn = document.getElementById("adult-plus-btn");
let kidsMinusBtn = document.getElementById("kids-minus-btn");
let kidsPlusBtn = document.getElementById("kids-plus-btn");

addEventListenerIfNotNull(adultsMinusBtn, "click", adultMinusControl);
addEventListenerIfNotNull(adultsPlusBtn, "click", adultPlusControl);
addEventListenerIfNotNull(kidsMinusBtn, "click", kidMinusControl);
addEventListenerIfNotNull(kidsPlusBtn, "click", kidPlusControl);

function addEventListenerIfNotNull(element, event, func){
	if(!element)
		return;
	
	element.addEventListener(event, func);
}

function adultMinusControl() {
  let adultQtyField = document.getElementById("adultQty");
  let kidQtyField = document.getElementById("kidQty");
  if(adultQtyField.value > 0){
    let adultQtyNum = adultQtyField.value;
    adultQtyNum = parseInt(adultQtyNum);
    adultQtyNum--;
    adultQtyField.value = adultQtyNum;
  }
}

function adultPlusControl() {
  let adultQtyField = document.getElementById("adultQty");
  if(adultQtyField.value < 9){
    let adultQtyNum = adultQtyField.value;
    adultQtyNum = parseInt(adultQtyNum);
    adultQtyNum++;
    adultQtyField.value = adultQtyNum;
  }
}

function kidMinusControl() {
  let kidQtyField = document.getElementById("kidQty");
  if(kidQtyField.value > 0){
    let kidQtyNum = kidQtyField.value;
    kidQtyNum = parseInt(kidQtyNum);
    kidQtyNum--;
    kidQtyField.value = kidQtyNum;
  }
}

function kidPlusControl() {
  let kidQtyField = document.getElementById("kidQty");
  if(kidQtyField.value < 9){
    let kidQtyNum = kidQtyField.value;
    kidQtyNum = parseInt(kidQtyNum);
    kidQtyNum++;
    kidQtyField.value = kidQtyNum;
  }
}
//