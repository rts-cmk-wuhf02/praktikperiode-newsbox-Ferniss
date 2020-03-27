document.addEventListener('DOMContentLoaded', ()=>{
let h = document.querySelector('#health')
let ha = document.querySelector('.healthAnimation')
let s = document.querySelector('#sport')
let sa = document.querySelector('.sportAnimation')
let t = document.querySelector('#travel')
let ta = document.querySelector('.travelAnimation')

h.innerHTML = `
<figure class="flex items-center">
<img src="/assets/images/tema.png" alt="" class="w-32 h-32">
<h1>HEALTH</h1>
</figure>
<figure class="pr-10">
<img class="healthAnimation" src="/assets/images/Arow.png" alt="">
</figure>
`
h.addEventListener("click", () =>{
    alert("healt")
   // ha.classList.add('clicked')
})

s.innerHTML = `
<figure class="flex items-center">
<img src="/assets/images/tema.png" alt="" class="w-32 h-32">
<h1>SPORT</h1>
</figure>
<figure class="pr-10">
<img class="healthAnimation" src="/assets/images/Arow.png" alt="">
</figure>
`
s.addEventListener("click", () =>{
    alert("SPORT")
   // ha.classList.add('clicked')
})

t.innerHTML = `

<figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-32 h-32">
            <h1>TRAVEL</h1>
        </figur>
        <figure class="pr-10">
            <img class="healthAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
`
t.addEventListener("click", () =>{
    alert("travel")
   // ha.classList.add('clicked')
})

})