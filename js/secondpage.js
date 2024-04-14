var num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var fee = [59.57, 66.48, 389.84, 74.99, 61.69, 88.46];
function min(n){
  if(num[n]==1){
    document.getElementById(`bar${n}`).className='bar-bg';
  }
  if(num[n]!=0){
    num[n]--;
    document.getElementById(`num${n}`).innerHTML=num[n];
    newprice2 = newprice2-fee[n-1];
    // alert(num[n])
    document.getElementById("car-price").innerHTML =newprice2.toFixed(2);
    document.getElementById("total-price").innerHTML =(newprice2*28).toFixed(2);

  }
}
function plus(n){
  if(num[n]<5){
    num[n]++;
    document.getElementById(`num${n}`).innerText=num[n];
    document.getElementById(`bar${n}`).className+=' active';

    newprice2 = newprice2*1+fee[n-1];

    document.getElementById("car-price").innerHTML =newprice2.toFixed(2);
    document.getElementById("total-price").innerHTML =(newprice2*28).toFixed(2);
  }
}
function set(){
  sessionStorage.setItem("id", info.id);
  sessionStorage.setItem("newprice2", newprice2);
  alert('set price value : '+newprice2);
}


