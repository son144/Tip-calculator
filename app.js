function cal() {
    let amount = document.getElementById("prince").value;
    let persons = document.getElementById("persons").value;
    let service = document.getElementById("princejaiswal").value;
 
    console.log(service);
    
    if (amount === '' && service === 'Select') {
        alert("enter correct value");
        return;
    }
    if (persons === '1')
    
        document.getElementById("violet").style.display = 'none';
    else
        document.getElementById("violet").style.display = 'block';

    let rocket = (amount * service) / persons;
    rocket = rocket.toFixed(2);
  
    document.querySelector('.tip').style.display = 'block';
    document.getElementById("rocket").innerHTML = rocket;
}
window.onload = () =>
    {
        document.getElementById("calculate").onclick = cal;
    }
