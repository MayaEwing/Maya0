
var info = '';
var price = '0'
;// This code show modal.
function modalshow(no){
  document.getElementById('modal').style.display='block'
  info = carlist[no-1];
  document.getElementById("default-radio").checked ="checked";
  document.getElementById("car-name").innerHTML =info.name;
  document.getElementById('car-img').src=info.url;
  document.getElementById("car-type").innerHTML =info.type;
  document.getElementById("car-price").innerHTML =info.price;
  document.getElementById("total-price").innerHTML =(info.price*28).toFixed(2);
  document.getElementById("plus-price").innerHTML =info.plus;
  price = info.price; 
  price2 = info.price; 
}

function resetprice(){
  price = info.price;
  document.getElementById("car-price").innerHTML =price;
  document.getElementById("total-price").innerHTML =(price*28).toFixed(2);
  price2 = price;
  // alert(info.price);
}
function setprice(){
  document.getElementById("car-price").innerHTML =price+info.plus;
  document.getElementById("total-price").innerHTML =((price+info.plus)*28).toFixed(2);
  price2 = price+info.plus;
  // alert(info.price);
}

function detailview(){
  // alert(info.price)
  sessionStorage.setItem("id", info.id);
  sessionStorage.setItem("newprice", price2);
  location.href = "./order.html";
}

