//klik europe fra
let ekesempel = document.querySelector('.ekesempel')
ekesempel.addEventListener("click", ()=>{
    if (sessionStorage.getItem("europe") == "off") {
        
        sessionStorage.setItem("europe","on")
    }else if (sessionStorage.getItem("europe") == "on") {
        
        sessionStorage.setItem("europe","off")
    }
})
let ekesempel2 = document.querySelector('#toogleA')
console.log(ekesempel2)
    ekesempel2.checked = false;
    
    
    // check om europe er slået til i session storage
// klik europe til
//sessionStorage.setItem("europe","on")
        document.body.style.backgroundColor = sessionStorage.getItem('bg');
        document.body.style.color = sessionStorage.getItem('cc');
        function darker() {
             if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
        
                    sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
                    sessionStorage.setItem('cc', '#777');
        
        
             }
            else if (sessionStorage.getItem('bg') == null || undefined) {
                sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
                sessionStorage.setItem('cc', '#777');
        
            }
            else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {
        
                sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
                sessionStorage.setItem('cc', '#333');
        
        
            }
        
        document.body.style.backgroundColor = sessionStorage.getItem('bg');
        document.body.style.color = sessionStorage.getItem('cc');
        
        }
