const productImages = document.querySelectorAll('.product-images img');
const productImagesSlide = document.querySelector('.image-slider');

let activeImageslide = 0;


productImages.forEach((item, i) => {
item.addEventListener('click',() => {
    productImages[activeImageslide].classList.remove('active');
    item.classList.add('active');
    productImagesSlide.getElementsByClassName.backgroundImage = `url('${item.src}')`;
    activeImageslide = i;

 })
})

//toggle size buttons
 const sizeBtns = document.querySelectorAll('.size-radio-btn');
 let checkedBtn = 0;

 sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;

    })
 })