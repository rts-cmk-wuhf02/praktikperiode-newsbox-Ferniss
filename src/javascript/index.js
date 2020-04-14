document.addEventListener('DOMContentLoaded', ()=>{
  //bg-black
  if(sessionStorage.getItem("europe") == "on"){
    

    fetch('https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml', {
    
    method: "GET",
})
.then(
    response=> response.text())
        .then( xmlStr => {
    
      /**
 * This function coverts a DOM Tree into JavaScript Object. 
 * @param srcDOM: DOM Tree to be converted. 
 */
function xml2json(srcDOM) {
    let children = [...srcDOM.children];
  
    // base case for recursion. 
    if (!children.length) {
      return srcDOM.innerHTML
    }
  
    // initializing object to be returned. 
    let jsonResult = {};
  
    for (let child of children) {
  
      // checking is child has siblings of same name. 
      let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
  
      // if child is array, save the values as array, else as strings. 
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [xml2json(child)];
        } else {
          jsonResult[child.nodeName].push(xml2json(child));
        }
      } else {
        jsonResult[child.nodeName] = xml2json(child);
      }
    }
  
    return jsonResult;
  }
  
  // testing the function

  
  // converting to DOM Tree
  const parser = new DOMParser();
  const srcDOM = parser.parseFromString(xmlStr, "application/xml");
  
  // Converting DOM Tree To JSON. 
return xml2json(srcDOM)
  
  /** The output will be
  {
    "book": {
      "title": "Some title",
      "description": "some description",
      "author": { "id": "1", "name": "some author name" },
      "review": ["nice book", "this book sucks", "amazing work"]
    }
  }
  */  
    }
    )
    .then(data=>{
        console.log(data)
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
                e.addEventListener("click", () =>{
                    ea.classList.toggle('clicked')
                    let se = document.querySelector('#sectioneurope')
                    if (ea.className === "europeAnimation clicked") {
                        data.rss.channel.item.forEach(element => {
                      se.innerHTML += `
                      <section class="flex justify-between items-center my-6 yoy">
                        <figur class="flex items-center justify-center w-full flex-shrink-0">
                            <img src="/assets/images/undertema.png" alt="" class="rounded-full h-16 w-16">
                            <section>
                                <h1>${element.title}</h1>
                                <p>
                                ${element.description}
                                </p>
                            </section>
                        </figur>
                        <figur class="flex items-center justify-center flex-shrink-0">
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;
                    })} else {
                        se.innerHTML = "";
                    }
                    let yoy = document.querySelectorAll(".yoy")
                    console.log(yoy)
                    yoy.forEach(element => {
                      
                      element.addEventListener('click', ()=>{
                        element.style.transform = "translateX(-103px)"
                      })
                    });
                })
            });
          }
          })
let h = document.querySelector('#health')
h.innerHTML = `
<figure class="flex items-center">
<img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
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
<img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
<h1>SPORT</h1>
</figure>
<figure class="pr-10">
<img class="sportAnimation" src="/assets/images/Arow.png" alt="">
</figure>
`

let sa = document.querySelector('.sportAnimation')
    s.addEventListener("click", () =>{
        sa.classList.toggle('clicked')
        let ss = document.querySelector('#sectionsport')
        if (sa.className === "sportAnimation clicked") {
          ss.innerHTML = `
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
            ss.innerHTML = "";
        }
    })
    
let b = document.querySelector('#buisness')
b.innerHTML = `
<figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
            <h1>BUISNESS</h1>
        </figur>
        <figure class="pr-10">
            <img class="buisnessAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
`
let ba = document.querySelector('.buisnessAnimation')
b.addEventListener("click", () =>{
        ba.classList.toggle('clicked')
        let sb = document.querySelector('#sectionbuisness')
        if (ba.className === "buisnessAnimation clicked") {
          sb.innerHTML = `
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
            sb.innerHTML = "";
        }
    })

let t = document.querySelector('#travel')
t.innerHTML = `
<figur class="flex items-center">
            <img src="/assets/images/tema.png" alt="" class="w-12 h-12 p-2">
            <h1>TRAVEL</h1>
        </figur>
        <figure class="pr-10">
            <img class="travelAnimation" src="/assets/images/Arow.png" alt="">
        </figure>
`
let ta = document.querySelector('.travelAnimation')
t.addEventListener("click", () =>{
        ta.classList.toggle('clicked')
        let st = document.querySelector('#sectiontravel')
        if (ta.className === "travelAnimation clicked") {
          st.innerHTML = `
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
            st.innerHTML = "";
        }
    })