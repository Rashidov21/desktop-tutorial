M.AutoInit();
let form = document.getElementById("myform");
form.onchange = function selectFood(){
    let total = 0;
    let order = {};

    let food = document.getElementById("foods").value;
    let order_info = document.getElementById("order_info");
    let burger_count = document.getElementById("burger_count").value;
    let burger = document.getElementById("burgers").value;

    if(food === '1'){
        document.getElementById("burger_list").style = "display:block;";
    }else if(food === '2'){
        document.getElementById("lavash_list").style = "display:block;";
    }else if(food === '3'){
        document.getElementById("pizza_list").style = "display:block;";
    }
    if(burger === "bief"){
        total += burger_count * 1.20;
        order['order_burger'] = `Burger Bief  count=${burger_count} price=${Math.round(burger_count * 1.20)}`
    }

    order_info.innerHTML = `<h5>Your order is :</h5>
    Order name : <big><b>${order["order_burger"]}</b></big>   <br>Total: $ <big><b>${Math.round(total)}</b></big>`
}
