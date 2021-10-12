let form = document.forms.myForm;

form.onchange = function (){
    let cash = Number(form.cash.value);
    let years = Number(form.years.value);
    let stapka = Number(form.stapka.value);
    let result = cash / 100 * stapka;


    document.getElementById("bylo").innerHTML = cash;
    document.getElementById("stanet").innerHTML = result;
    document.querySelector(".color-red").style.height = `${cash / 4}px`

}