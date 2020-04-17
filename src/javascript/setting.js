let europeValue = document.querySelector('#toogleA')
europeValue.addEventListener("change", ()=>{
    if (europeValue.checked) {
        localStorage.setItem("europe","on")
    }else{
        localStorage.setItem("europe","off")
    }
})
document.querySelector("#toogleA").checked = localStorage.getItem("europe") == "on" ? true : false;




let healthValue = document.querySelector('#toogleB')
healthValue.addEventListener("change", ()=>{
    if (healthValue.checked) {
        localStorage.setItem("health","on")
    }else{
        localStorage.setItem("health","off")
    }
})
document.querySelector("#toogleB").checked = localStorage.getItem("health") == "on" ? true : false;



let sportValue = document.querySelector('#toogleC')
sportValue.addEventListener("change", ()=>{
    if (sportValue.checked) {
        localStorage.setItem("sport","on")
    }else{
        localStorage.setItem("sport","off")
    }
})
document.querySelector("#toogleC").checked = localStorage.getItem("sport") == "on" ? true : false;



let buisnessValue = document.querySelector('#toogleD')
buisnessValue.addEventListener("change", ()=>{
    if (buisnessValue.checked) {
        localStorage.setItem("business","on")
    }else{
        localStorage.setItem("business","off")
    }
})
document.querySelector("#toogleD").checked = localStorage.getItem("business") == "on" ? true : false;



let travelValue = document.querySelector('#toogleE')
travelValue.addEventListener("change", ()=>{
    if (travelValue.checked) {
        localStorage.setItem("travel","on")
    }else{
        localStorage.setItem("travel","off")
    }
})
document.querySelector("#toogleE").checked = localStorage.getItem("travel") == "on" ? true : false;
