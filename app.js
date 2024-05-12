let item = document.querySelectorAll(".container .list .item");
console.log(item)
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");
console.log(thumbnail)

let countItem = item.length;
let itemActive = 0;

next.onclick = function(){
    console.log("click")
    itemActive = itemActive+1; 
    if(itemActive>=countItem){
        itemActive = 0;
    }
    showSlides();4
}
prev.onclick = function(){
    itemActive = itemActive-1;
    if(itemActive<0){
        itemActive = countItem-1
    }
    showSlides();
}

function showSlides(){
    let itemOLdActive = document.querySelector(".container .list .item.active");
    console.log(itemOLdActive);
    let oldThumbnail = document.querySelector(".thumbnail .item.active");
    oldThumbnail.classList.remove("active")
     itemOLdActive.classList.remove('active');
     item[itemActive].classList.add("active");
     thumbnail[itemActive].classList.add("active");


}
thumbnail.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        itemActive = index;
        showSlides();


    })
})



