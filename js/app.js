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
let searchFormWindow = document.getElementById("searchFormWindow");

let searchFormControlBtn = document.getElementById("search-btn");

searchFormControlBtn.onclick = function() {
    if(searchFormWindow.style.display === "block"){
        searchFormWindow.style.display = "none";
    } else {
        searchFormWindow.style.display = "block";
    }
}
//

//Плюс/минус в форме
let adultsMinusBtn = document.getElementById("adult-minus-btn");
let adultsPlusBtn = document.getElementById("adult-plus-btn");
let kidsMinusBtn = document.getElementById("kids-minus-btn");
let kidsPlusBtn = document.getElementById("kids-plus-btn");
let adultQtyField = document.getElementById("adultQty");
let kidQtyField = document.getElementById("kidQty");

adultsMinusBtn.addEventListener("click", adultMinusControl);
adultsPlusBtn.addEventListener("click", adultPlusControl);
kidsMinusBtn.addEventListener("click", kidMinusControl);
kidsPlusBtn.addEventListener("click", kidPlusControl);

function adultMinusControl() {
  if(adultQtyField.value > 0){
    let adultQtyNum = adultQtyField.value;
    adultQtyNum = parseInt(adultQtyNum);
    adultQtyNum--;
    adultQtyField.value = adultQtyNum;
  }
}

function adultPlusControl() {
  if(adultQtyField.value < 9){
    let adultQtyNum = adultQtyField.value;
    adultQtyNum = parseInt(adultQtyNum);
    adultQtyNum++;
    adultQtyField.value = adultQtyNum;
  }
}

function kidMinusControl() {
  if(kidQtyField.value > 0){
    let kidQtyNum = kidQtyField.value;
    kidQtyNum = parseInt(kidQtyNum);
    kidQtyNum--;
    kidQtyField.value = kidQtyNum;
  }
}

function kidPlusControl() {
  if(kidQtyField.value < 9){
    let kidQtyNum = kidQtyField.value;
    kidQtyNum = parseInt(kidQtyNum);
    kidQtyNum++;
    kidQtyField.value = kidQtyNum;
  }
}
//