// const { createElement } = require("react")

// !Filter Functionality
let buttons=document.querySelectorAll("#products_page2>button")
// console.log(buttons)
let cards=document.querySelectorAll(".shoe_container")
// console.log(cards)

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let btnname=btn.getAttribute("data-name")
        // console.log(btnname)
        buttons.forEach((btn)=> btn.classList.remove("active"))
        btn.classList.add("active")
cards.forEach((card)=>{
    // console.log(card)
    let cardname=card.getAttribute("data-name")
    if(btnname=="all"||btnname==cardname){
        card.style.display="flex"
    }else{
        card.style.display="none"
    }   

})

    })

})

// ! Page reload
let pagereload=()=>{
    location.reload()
}



// !Side Bar Functinalty
let sidebar=document.getElementById("sidebar")
// console.log(cart)

let cart_symbol=document.getElementById("cart")
// console.log(cart_symbol)

cart_symbol.addEventListener("click",()=>{
    sidebar.style.right="0px"
})
let close_btn=document.getElementById("close_btn")
// console.log(close_btn)
close_btn.addEventListener("click",()=>{
    sidebar.style.right="-400px"

})


// ! Cart Functionality
let finalcart=[]

let addcart=document.querySelectorAll(".addtocart")
// console.log(addcart)
addcart.forEach((btn)=>{
    // console.log(btn)
    btn.addEventListener("click",()=>{
        // console.log(btn)

        let parent=btn.closest(".shoe_container")
        let img=parent.querySelector("img").src
        // console.log(img)
        let title=parent.querySelector("h1").innerText
        // console.log(title)
        let price=Number(parent.querySelector("p").innerText.replace("₹",""))
        // console.log(price)
        // console.log(typeof price)
    let size=parent.querySelector("select").value
            // console.log(size)
   

     
        if( size==6|| size==7|| size==8|| size==9||size==10){
            btn.style.background="green"
            
        }else{
     alert("Please select the size to add into the cart")
            return
        }
        let item={title,img,price,size}
    finalcart.push(item)
    updatecartonui()

    })


})


//! Updateing On Ui Functionality

let cart_quantity=document.getElementById("cart_quantity")
// console.log(cart_quantity)
let insidecart=document.getElementById("sidebar2")
let  totalprice=document.querySelector("#sidebar3>h2>span")
// console.log(totalprice)

function updatecartonui(){
  insidecart.innerHTML = ""
  total_amount=0;

  finalcart.forEach((item)=>{
    total_amount+=item.price;

    let div=document.createElement("div")
    div.classList.add("item_container")
    console.log(div)


    div.innerHTML=`
    <aside  class="item_container1">

    <img src=${item.img}>

    </aside>
     <aside class="item_container2">
          <h2>${item.title}</h2>

        <p>Size: ${item.size}</p>
   <p>₹${item.price.toFixed(2)}</p>

     </aside>
    `
    insidecart.append(div)

    totalprice.innerText=total_amount.toFixed(2)
    cart_quantity.innerText=finalcart.length


  })


}


// ! Buynow  btn Functionality

let buynow=document.querySelector("#sidebar3>button")
// console.log(buynow)
buynow.addEventListener("click",()=>{
    alert(" Thank you for shopping")


})


// !Information page animation functionality    

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.section-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
