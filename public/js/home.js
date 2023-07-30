const productcontainer = [...document.querySelectorAll('.product-container')];
const nextbtn = [...document.querySelectorAll('.next-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productcontainer.forEach((item, i) => {
 let containerDimenstions = item.getBoundingClientRect();
 let containerwidth = containerDimenstions.width;

 nextbtn[i].addEventListener('click', (m) =>{
    item.scrollLeft += containerwidth;
 })

 prebtn[i].addEventListener('click', (m) =>{
    item.scrollLeft -= containerwidth;
 })

 
})