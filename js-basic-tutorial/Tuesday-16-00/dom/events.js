let notf = document.querySelector("#notification");

// let query = document.forms[0].elements[0];
// document.forms - html dagi barcha form elementlari 
// document.forms[0].elements - form ning barcha maydonlari

// console.log(notf,query)
// console.log(query.value)
function checkInputValueHandler(){
    let query = document.querySelector("#query").value;
    if (query.toLowerCase() == "active"){
        notf.classList.remove("d-none")
        notf.classList.add("d-flex")
    }else{
        notf.classList.add("d-none")
    }
}


// for(let elem of document.forms[0].elements){
//     elem.style.backgroundColor = 'red'
// }

// RAM - Random Access Memory
    // DDR3 , *DDR4, DDR5
// ROM - Read Only Memory 
    // HDD - Hard Disc Drive 
    // SSD  - Solid State Drive
    // Nvme M2 - 

    // CTRL + Shift + Esc - Task manager 

    // Windows OS - M2
    // Dasturlar, Oyinlar -  SSD
    // Boshqa fayllar uchun - HDD  

    // BIOS menu - 