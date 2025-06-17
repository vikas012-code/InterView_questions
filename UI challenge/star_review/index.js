const stars=document.querySelectorAll(".star")
console.log(stars)

const rating=document.querySelector(".rating_count")

for(let i=0;i<stars.length;i++){

    stars[i].addEventListener("click",()=>{
        if(rating.children.length>0){
            rating.removeChild(rating.children[0])
        }
        for(let j=0;j<stars.length;j++){
            if(j<=i) stars[j].setAttribute("id","star-gold")

            else stars[j].removeAttribute("id","star-gold")
        }
        const span=document.createElement("span")
        span.innerText=`${i+1}`
        rating.appendChild(span)
    })

    stars[i].addEventListener("mouseenter",()=>{
        for(let j=0;j<=i;j++){
            stars[j].classList="star-gold"
        }
    })
    stars[i].addEventListener("mouseleave",()=>{
        console.log(stars[i])
        for(let j=0;j<=i;j++){
            stars[j].classList="star"
        }
    })
}