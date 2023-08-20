let arr =[
    {img: "img1.jpg"},
    {img: "img2.jpg"},
    {img: "img3.jpg"},
    {img: "img4.jpg"},
    {img: "img5.jpg"},
    {img: "img6.jpg"}
]

let clutter =""

arr.forEach(function(elem, index){
    clutter += ` <div class="story">
    <img id="${index}" src="${elem.img}" alt="">
</div>`
})

let stories = document.querySelector(".stories");
stories.innerHTML=clutter;



stories.addEventListener("click", function(info){
        document.querySelector(".overflow").style.display = "block"
        document.querySelector(".overflow").style.backgroundImage = `url(${arr[info.target.id].img})`

        setTimeout(function(){
            document.querySelector(".overflow").style.display = "none"
        },3000)
      
    })

   
