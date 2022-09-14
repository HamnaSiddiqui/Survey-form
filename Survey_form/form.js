let fname = document.querySelector("#txt");
// let lname = document.querySelector("#lname");
// let email = document.querySelector("#email");
const mybtn = document.querySelector(".btn-list");
const list = document.querySelector(".container3 ul");

mybtn.addEventListener('click',(e)=>{
    if(fname.value != ""){
        e.preventDefault();
    }
    const myli = document.createElement("li");
    myli.innerHTML = fname.value;
    list.appendChild(myli);

    const myspan = document.createElement("span");
    myspan.innerHTML = "x";
    list.appendChild(myspan);
})