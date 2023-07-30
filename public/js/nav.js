const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav">
    <h1 class="heading"><b>BOOKIES</b></h1>
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder="search for the best books ">
        <button class="search-btn">search</button>
      </div>
      <a href="#"><img src="js/img/user.png"></a>
      <a href="#"><img src="js/img/cart.png"></a>
    </div>
    </div>
  </div>
  <ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">second hand book</a></li>
    <li class="link-item"><a href="#" class="link">rental books</a></li>
    <li class="link-item"><a href="#" class="link">new books</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
  </ul>
    `;
}

createNav();