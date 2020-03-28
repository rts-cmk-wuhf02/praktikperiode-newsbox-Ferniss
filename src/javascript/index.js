document.addEventListener('DOMContentLoaded', ()=>{
let h = document.querySelector('#health')
h.innerHTML = `
<figure class="flex items-center">
<img src="/assets/images/tema.png" alt="" class="w-32 h-32">
<h1>HEALTH</h1>
</figure>
<figure class="pr-10">
<img class="healthAnimation" src="/assets/images/Arow.png" alt="">
</figure>
`
let ha = document.querySelector('.healthAnimation')
    h.addEventListener("click", () =>{
        ha.classList.toggle('clicked')
        let sh = document.querySelector('#sectionhealth')
        if (ha.className === "healthAnimation clicked") {
          sh.innerHTML = `
          <section class="flex justify-between items-center pt-2 my-3 p-6">
            <figur class="flex items-center justify-center">
                <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16">
                <section>
                    <h1>Headline</h1>
    
                    <p>
                        Surfing is a surface water sport in which the wave rider, referred to as...
                    </p>
                </section>
            </figur>
        </section>
          `;
        } else {
            sh.innerHTML = "";
        }
    })
    

let s = document.querySelector('#sport')
s.innerHTML = `
<figure class="flex items-center">
<img src="/assets/images/tema.png" alt="" class="w-32 h-32">
<h1>SPORT</h1>
</figure>
<figure class="pr-10">
<img class="sportAnimation" src="/assets/images/Arow.png" alt="">
</figure>
`

let sa = document.querySelector('.sportAnimation')
    s.addEventListener("click", () =>{
        sa.classList.toggle('clicked')
    })

let t = document.querySelector('#travel')
t.innerHTML = `
<figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-32 h-32">
            <h1>TRAVEL</h1>
        </figur>
        <figure class="pr-10">
            <img class="travelAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
`
let ta = document.querySelector('.travelAnimation')
t.addEventListener("click", () =>{
        ta.classList.toggle('clicked')
    })
})