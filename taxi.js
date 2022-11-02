function init() {

    document.querySelector('#calculate').onclick = taxi_fare_calculator;

}






function taxi_fare_calculator(){

    const ff = 5;   //first 10 km fare charge per km
    const sf = 2;    //second 10 km fare charge per km
    const fd = 10;    //first distance retriction in km
    const sd = 20;    //second distance retriction in km
    const rest = 1;    // rest fare per km after second restriction
    let n = document.querySelector('#distance').value;
    if (n === '') {
        alert("Please enter valid values");
        return;
    }
    if (n<=10) {
    var fare = (n*ff);
    fare = fare.toFixed(2);
    // console.log(fare);
}
 else if (n>10 && n<=30) {
    var fare = (fd*ff)+((n-fd)*sf);
    fare = fare.toFixed(2);
    // console.log(fare);
 }
else if(n>20) {
    var fare = ((fd*ff)+(sd*sf)+(n-(fd+sd))*rest);
    fare = fare.toFixed(2);
    // console.log(fare);  
}
document.querySelector('.fare').style.display = 'block';
    document.querySelector('#total').innerHTML = fare;
}

window.onload = init;


// ((10*5)+(10*2)+(30-(10+10))*1);




