let tabs = document.getElementsByClassName("hugo-notebook-tab");
    
let openTab = function(t){

    
    let c = t.currentTarget
    let target = document.getElementById(c.dataset.ntab);
    
    let tgroup = "[data-tgroup=" + c.dataset.tgroup + "]";
    let tabs = document.querySelectorAll(tgroup);
    
    let group = c.dataset.tgroup; 
    let q = "[data-ngroup=" + group + "]";
    let notebooks = document.querySelectorAll(q);
    
    for(let i = 0; i< notebooks.length; i++) {
        notebooks[i].classList.remove("active")
        tabs[i].classList.remove("active")
    }
    
    target.classList.add("active")
    c.classList.add("active")


    console.log(tabs, tgroup)
}

for(let i = 0; i< tabs.length; i++) {
    tabs[i].addEventListener("click", openTab)
}