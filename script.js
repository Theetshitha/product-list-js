let image = document.querySelectorAll(".image");
let  product = document.querySelector("#product");
let  brand = document.querySelector("#brand");
let  rate = document.querySelector("#rate");
let Icon=document.querySelector("#ico")
let para = document.querySelector("#para");
let img = document.querySelector(".change"); 

let object = [{
    src: "https://course-api.com/images/store/product-1.jpeg",
    Product: "High-Back-Bench",
    Brand: "Caressa",
    Rate: "9.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}, {
    src: "https://course-api.com/images/store/product-4.jpeg",
    Product: "Albany Table",
    Brand: "Caressa",
    Rate: "79.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-7.jpeg",
    Product: "Accent Chair",
    Brand: "Caressa",
    Rate: "25.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-2.jpeg",
    Product: "Wooden Table",
    Brand: "Caressa",
    Rate: "45.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-5.jpeg",
    Product: " Dining Table",
    Brand: "Caressa",
    Rate: "6.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-8.jpeg",
    Product: "Sofa Set",
    Brand: "Caressa",
    Rate: "69.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-3.jpeg",
    Product: "Modern BookShelf",
    Brand: "Caressa",
    Rate: "10.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-6.jpeg",
    Product: "Emperor Bed",
    Brand: "Caressa",
    Rate: "4.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-9.jpeg",
    Product: "Utopia Sofa",
    Brand: "Caressa",
    Rate: "13.99",
    icon:`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`+`<i class="fa-solid fa-circle" style="color: #ff0000;"></i>`,
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}
];

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function() {
        location.href = "index2.html";
        show(i);
    });
}



function show(i){
      localStorage.setItem('index',i ); 
}

let index1 = localStorage.getItem('index')
console.log(index1)

if (index1) {
    console.log(product)
    product.innerHTML = object[index1].Product;
    brand.innerHTML = object[index1].Brand;
    rate.innerHTML = object[index1].Rate;
    Icon.innerHTML=object[index1].icon
    para.innerHTML = object[index1].para;
    img.src = object[index1].src;
}


let backbuttons = document.getElementsByClassName("btn-1");

for (let i = 0; i < backbuttons.length; i++) {
    backbuttons[i].addEventListener("click", function() {
        location.href = "index1.html";
    });
}

// let test = 90;
// if(0){
//     console.log("if block")
// }



