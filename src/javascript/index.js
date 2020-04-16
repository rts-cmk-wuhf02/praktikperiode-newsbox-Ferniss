  if(localStorage.getItem("europe") == "on"){
    
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
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0 europaStorage">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;
                      let europaStorage = document.querySelectorAll('.europaStorage');
                      europaStorage.forEach(E => {
                        E.addEventListener('click', ()=>{
                          let feed;
                          if (localStorage.getItem("article")) {
                            feed = JSON.parse(localStorage.getItem("article"));
                            feed.push({title: element.title, description: element.description, link: element.link, category: data.rss.channel.title.split(" &gt; ").pop()});
                            console.log("hej")
                          }else{
                            feed = [{title: element.title, description: element.description, link: element.link, category: data.rss.channel.title.split(" &gt; ").pop()}];
                          }
                          localStorage.setItem("article", JSON.stringify(feed))
                        })
                      });
                    })} else {
                      se.innerHTML = "";
                    }
                    // skal bruges på archive siden 
                    //JSON.parse(localStorage.getItem("article")).forEach(article => console.log(article.category))
                    
                    let slider = document.querySelectorAll(".slider")
                    let mouseX;
                    let mouseY;
                    slider.forEach(element => {
                      element.addEventListener('touchend',(e) =>{
                        if(e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY){
                          
                          if (e.changedTouches[0].clientX + 100 < mouseX) {
                          
                            element.style.transform = "translateX(-6rem)"
                          }else if(e.changedTouches[0].clientX - 100 > mouseX)
                          element.style.transform = "translateX(0)"
                        }
                        

                      })
                      element.addEventListener('touchstart',(e) =>{
                        mouseX = e.touches[0].clientX
                        mouseY = e.touches[0].clientY
      

                      })
                    });
                })
            });
          }
          
/////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

if(localStorage.getItem("health") == "on"){
    
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Health.xml', {
    
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
    }
    )
    .then(data=>{
        console.log(data)
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
                h.addEventListener("click", () =>{
                    ha.classList.toggle('clicked')
                    let sh = document.querySelector('#sectionhealth')
                    if (ha.className === "healthAnimation clicked") {
                        data.rss.channel.item.forEach(element => {
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
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                    })} else {
                        sh.innerHTML = "";
                    }
                    let slider = document.querySelectorAll(".slider")
                    let mouseX;
                    let mouseY;
                    slider.forEach(element => {
                      element.addEventListener('touchend',(e) =>{
                        if(e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY){
                          
                          if (e.changedTouches[0].clientX + 100 < mouseX) {
                          
                            element.style.transform = "translateX(-6rem)"
                          }else if(e.changedTouches[0].clientX - 100 > mouseX)
                          element.style.transform = "translateX(0)"
                        }
                        

                      })
                      element.addEventListener('touchstart',(e) =>{
                        mouseX = e.touches[0].clientX
                        mouseY = e.touches[0].clientY
      

                      })
                    });
                })
            });
         }
    
/////hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh



/////sssssssssssssssssssssssssssssssssssssssssssss
if(localStorage.getItem("sport") == "on"){
    
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml', {
    
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
    }
    )
    .then(data=>{
        console.log(data)
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
                s.addEventListener("click", () =>{
                    sa.classList.toggle('clicked')
                    let ss = document.querySelector('#sectionsport')
                    if (sa.className === "sportAnimation clicked") {
                        data.rss.channel.item.forEach(element => {
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
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                    })} else {
                        ss.innerHTML = "";
                    }
                    let slider = document.querySelectorAll(".slider")
                    let mouseX;
                    let mouseY;
                    slider.forEach(element => {
                      element.addEventListener('touchend',(e) =>{
                        if(e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY){
                          
                          if (e.changedTouches[0].clientX + 100 < mouseX) {
                          
                            element.style.transform = "translateX(-6rem)"
                          }else if(e.changedTouches[0].clientX - 100 > mouseX)
                          element.style.transform = "translateX(0)"
                        }
                        

                      })
                      element.addEventListener('touchstart',(e) =>{
                        mouseX = e.touches[0].clientX
                        mouseY = e.touches[0].clientY
      

                      })
                    });
                })
            });
         }
/////sssssssssssssssssssssssssssssssssssssssssssss 




/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
if(localStorage.getItem("business") == "on"){
    
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/business.xml', {
    
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
    }
    )
    .then(data=>{
        console.log(data)
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
                b.addEventListener("click", () =>{
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
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                    })} else {
                        sb.innerHTML = "";
                    }
                    let slider = document.querySelectorAll(".slider")
                    let mouseX;
                    let mouseY;
                    slider.forEach(element => {
                      element.addEventListener('touchend',(e) =>{
                        if(e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY){
                          
                          if (e.changedTouches[0].clientX + 100 < mouseX) {
                          
                            element.style.transform = "translateX(-6rem)"
                          }else if(e.changedTouches[0].clientX - 100 > mouseX)
                          element.style.transform = "translateX(0)"
                        }
                        

                      })
                      element.addEventListener('touchstart',(e) =>{
                        mouseX = e.touches[0].clientX
                        mouseY = e.touches[0].clientY
      

                      })
                    });
                })
            });
          }
/////bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
if(localStorage.getItem("travel") == "on"){
    
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/travel.xml', {
    
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

  
  // converting to DOM Tree
  const parser = new DOMParser();
  const srcDOM = parser.parseFromString(xmlStr, "application/xml");
  
  // Converting DOM Tree To JSON. 
return xml2json(srcDOM)
    }
    )
    .then(data=>{
        console.log(data)
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
                t.addEventListener("click", () =>{
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
                            <img src="/assets/images/archive.png" alt="" class="h-24 w-24 bg-teal-400 p-8 flex-shrink-0">
                        </figur>
                    </section>
                    </section>

                    </section>
                      `;

                    })} else {
                        st.innerHTML = "";
                    }
                    let slider = document.querySelectorAll(".slider")
                    let mouseX;
                    let mouseY;
                    slider.forEach(element => {
                      element.addEventListener('touchend',(e) =>{
                        if(e.changedTouches[0].clientY + 50 >= mouseY && e.changedTouches[0].clientY - 50 <= mouseY){
                          
                          if (e.changedTouches[0].clientX + 100 < mouseX) {
                          
                            element.style.transform = "translateX(-6rem)"
                          }else if(e.changedTouches[0].clientX - 100 > mouseX)
                          element.style.transform = "translateX(0)"
                        }
                        

                      })
                      element.addEventListener('touchstart',(e) =>{
                        mouseX = e.touches[0].clientX
                        mouseY = e.touches[0].clientY
      

                      })
                    });
                })
            });
         }