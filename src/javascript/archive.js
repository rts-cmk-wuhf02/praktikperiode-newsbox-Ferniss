if(localStorage.getItem("europe") == "on"){
let e = document.querySelector('#europe')
e.innerHTML += `
            <figure class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
            <h1>EUROPE</h1>
            </figure>
            <figure class="pr-10">
            <img class="europeAnimation" src="/assets/images/Arow.png" alt="">
            </figure>
            `
let ea = document.querySelector('.europeAnimation')
e.addEventListener("click", () => {
    ea.classList.toggle('clicked')
    let se = document.querySelector('#sectioneurope')
    if (ea.className === "europeAnimation clicked") {

        JSON.parse(localStorage.getItem("article")).forEach(element => {
            se.innerHTML += `
                      <section class="flex justify-between items-center my-6 slider">
                        <figur class="flex items-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16 ml-8">
                            <section class="mx-4 newsTextContainer">
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                        <img src="/assets/images/delete.png" alt="" class="h-24 w-24 bg-red-600 p-8 flex-shrink-0 europaStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;
                      let europaStorage = document.querySelectorAll('.europaStorage');
                      europaStorage.forEach(E => {
                        E.addEventListener('click', ()=>{
                            const index = JSON.parse(localStorage.getItem("article")).findIndex(x => x.title === element.title);
                            storage.splice(index, 1);
                            localStorage.setItem('articles', JSON.stringify(storage));
                            e.currentTarget.remove();
                            
                      })
                      })
        })
    } 
    let slider = document.querySelectorAll(".slider")
    let mouseX;
    let mouseY;
    slider.forEach(element => {
        element.addEventListener('touchend', (e) => {
            if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {

                if (e.changedTouches[0].clientX + 100 < mouseX) {

                    element.style.transform = "translateX(-6rem)"
                } else if (e.changedTouches[0].clientX - 100 > mouseX)
                    element.style.transform = "translateX(0)"
            }


        })
        element.addEventListener('touchstart', (e) => {
            mouseX = e.touches[0].clientX
            mouseY = e.touches[0].clientY


        })
    });
})
}

/////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

if (localStorage.getItem("health") == "on") {
            let h = document.querySelector('#health')
            h.innerHTML += `
        <figure class="flex items-center">
        <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
        <h1>HEALTH</h1>
        </figure>
        <figure class="pr-10">
        <img class="healthAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
            `
            let ha = document.querySelector('.healthAnimation')
            h.addEventListener("click", () => {
                ha.classList.toggle('clicked')
                let sh = document.querySelector('#sectionhealth')
                if (ha.className === "healthAnimation clicked") {

                    JSON.parse(localStorage.getItem("article")).forEach(element => {
                        sh.innerHTML += `
                      <section class="flex justify-between items-center my-6 slider">
                        <figur class="flex items-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16 ml-8">
                            <section class="mx-4 newsTextContainer">
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                        <img src="/assets/images/delete.png" alt="" class="h-24 w-24 bg-red-600 p-8 flex-shrink-0 healthStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                      let healthStorage = document.querySelectorAll('.healthStorage');
                      healthStorage.forEach(E => {
                            E.addEventListener('click', ()=>{
                                const index = JSON.parse(localStorage.getItem("article")).findIndex(x => x.title === element.title);
                                storage.splice(index, 1);
                                localStorage.setItem('articles', JSON.stringify(storage));
                                e.currentTarget.remove();
                                
                          })
                          })
            })
        } 
        let slider = document.querySelectorAll(".slider")
        let mouseX;
        let mouseY;
        slider.forEach(element => {
            element.addEventListener('touchend', (e) => {
                if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {
    
                    if (e.changedTouches[0].clientX + 100 < mouseX) {
    
                        element.style.transform = "translateX(-6rem)"
                    } else if (e.changedTouches[0].clientX - 100 > mouseX)
                        element.style.transform = "translateX(0)"
                }
    
    
            })
            element.addEventListener('touchstart', (e) => {
                mouseX = e.touches[0].clientX
                mouseY = e.touches[0].clientY
    
    
            })
        });
    })
    }

/////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh



/////sssssssssssssssssssssssssssssssssssssssssssss
if (localStorage.getItem("sport") == "on") {

            let s = document.querySelector('#sport')
            s.innerHTML += `
        <figure class="flex items-center">
        <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
        <h1>SPORT</h1>
        </figure>
        <figure class="pr-10">
        <img class="sportAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
        `
            let sa = document.querySelector('.sportAnimation')
            s.addEventListener("click", () => {
                sa.classList.toggle('clicked')
                let ss = document.querySelector('#sectionsport')
                if (sa.className === "sportAnimation clicked") {
                    JSON.parse(localStorage.getItem("article")).forEach(element => {
                        ss.innerHTML += `
                      <section class="flex justify-between items-center my-6 slider">
                        <figur class="flex items-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16 ml-8">
                            <section class="mx-4 newsTextContainer">
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                        <img src="/assets/images/delete.png" alt="" class="h-24 w-24 bg-red-600 p-8 flex-shrink-0 sportStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                      let sportStorage = document.querySelectorAll('.sportStorage');
                      sportStorage.forEach(E => {
                        E.addEventListener('click', ()=>{
                            const index = JSON.parse(localStorage.getItem("article")).findIndex(x => x.title === element.title);
                            storage.splice(index, 1);
                            localStorage.setItem('articles', JSON.stringify(storage));
                            e.currentTarget.remove();
                            
                      })
                      })
        })
    } 
    let slider = document.querySelectorAll(".slider")
    let mouseX;
    let mouseY;
    slider.forEach(element => {
        element.addEventListener('touchend', (e) => {
            if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {

                if (e.changedTouches[0].clientX + 100 < mouseX) {

                    element.style.transform = "translateX(-6rem)"
                } else if (e.changedTouches[0].clientX - 100 > mouseX)
                    element.style.transform = "translateX(0)"
            }


        })
        element.addEventListener('touchstart', (e) => {
            mouseX = e.touches[0].clientX
            mouseY = e.touches[0].clientY


        })
    });
})
}
/////sssssssssssssssssssssssssssssssssssssssssssss 




/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
if (localStorage.getItem("business") == "on") {

            let b = document.querySelector('#buisness')
            b.innerHTML += `
        <figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
            <h1>BUISNESS</h1>
        </figur>
        <figure class="pr-10">
            <img class="buisnessAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
            `
            let ba = document.querySelector('.buisnessAnimation')
            b.addEventListener("click", () => {
                ba.classList.toggle('clicked')
                let sb = document.querySelector('#sectionbuisness')
                if (ba.className === "buisnessAnimation clicked") {
                    data.rss.channel.item.forEach(element => {
                        sb.innerHTML += `
                      <section class="flex justify-between items-center my-6 slider">
                        <figur class="flex items-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16 ml-8">
                            <section class="mx-4 newsTextContainer">
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                        <img src="/assets/images/delete.png" alt="" class="h-24 w-24 bg-red-600 p-8 flex-shrink-0 businessStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;
                      let businessStorage = document.querySelectorAll('.businessStorage');
                      businessStorage.forEach(E => {
                        E.addEventListener('click', ()=>{
                            const index = JSON.parse(localStorage.getItem("article")).findIndex(x => x.title === element.title);
                            storage.splice(index, 1);
                            localStorage.setItem('articles', JSON.stringify(storage));
                            e.currentTarget.remove();
                            
                      })
                      })
        })
    } 
    let slider = document.querySelectorAll(".slider")
    let mouseX;
    let mouseY;
    slider.forEach(element => {
        element.addEventListener('touchend', (e) => {
            if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {

                if (e.changedTouches[0].clientX + 100 < mouseX) {

                    element.style.transform = "translateX(-6rem)"
                } else if (e.changedTouches[0].clientX - 100 > mouseX)
                    element.style.transform = "translateX(0)"
            }


        })
        element.addEventListener('touchstart', (e) => {
            mouseX = e.touches[0].clientX
            mouseY = e.touches[0].clientY


        })
    });
})
}
/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
if (localStorage.getItem("travel") == "on") {

            let t = document.querySelector('#travel')
            t.innerHTML += `
        <figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
            <h1>TRAVEL</h1>
        </figur>
        <figure class="pr-10">
            <img class="travelAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
            `
            let ta = document.querySelector('.travelAnimation')
            t.addEventListener("click", () => {
                ta.classList.toggle('clicked')
                let st = document.querySelector('#sectiontravel')
                if (ta.className === "travelAnimation clicked") {
                    data.rss.channel.item.forEach(element => {
                        st.innerHTML += `
                      <section class="flex justify-between items-center my-6 slider">
                        <figur class="flex items-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16 ml-8">
                            <section class="mx-4 newsTextContainer">
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                        <img src="/assets/images/delete.png" alt="" class="h-24 w-24 bg-red-600 p-8 flex-shrink-0 travelStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                      let travelStorage = document.querySelectorAll('.travelStorage');
                      travelStorage.forEach(E => {
                        E.addEventListener('click', ()=>{
                            const index = JSON.parse(localStorage.getItem("article")).findIndex(x => x.title === element.title);
                            storage.splice(index, 1);
                            localStorage.setItem('articles', JSON.stringify(storage));
                            e.currentTarget.remove();
                            
                      })
                      })
        })
    } 
    let slider = document.querySelectorAll(".slider")
    let mouseX;
    let mouseY;
    slider.forEach(element => {
        element.addEventListener('touchend', (e) => {
            if (e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY) {

                if (e.changedTouches[0].clientX + 100 < mouseX) {

                    element.style.transform = "translateX(-6rem)"
                } else if (e.changedTouches[0].clientX - 100 > mouseX)
                    element.style.transform = "translateX(0)"
            }


        })
        element.addEventListener('touchstart', (e) => {
            mouseX = e.touches[0].clientX
            mouseY = e.touches[0].clientY


        })
    });
})
}