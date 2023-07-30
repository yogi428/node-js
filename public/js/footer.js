const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <h2 class="footer-logo"><b>BOOKIES</b></h2>
    <div class="footer-ul-container">
      <ul class="category">
          <li class="category-title">book</li>
          <li><a href="#" class="footer-link">state boards</a></li>
          <li><a href="#" class="footer-link">Compitative</a></li>
          <li><a href="#" class="footer-link">self help</a></li>
          <li><a href="#" class="footer-link">biography</a></li>
          <li><a href="#" class="footer-link">many more</a></li>
      </ul>
      <ul class="category">
          <li class="category-title">accessories</li>
          <li><a href="#" class="footer-link">pens</a></li>
          <li><a href="#" class="footer-link">pencil</a></li>
          <li><a href="#" class="footer-link">marker</a></li>
          <li><a href="#" class="footer-link">shrpner</a></li>
          <li><a href="#" class="footer-link">many more</a></li>
      </ul>
   </div>

  </div>
  <p class="footer-title">about company</p>
  <p class="footer-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda recusandae dolore non eius eos, necessitatibus commodi quia repellat. Asperiores aliquam in repellat minus necessitatibus ut est accusamus vitae? Sit, necessitatibus.</p>
      <p class="info">support email -help@bookies.com,<br>customersupport@bookies.</p>
      <p class="info">telephone@ - 18000 00 002</p>
      <div class="footer-social-contanier">
          <div>
              <a href="#" class="social-links">tearms & conditions</a>
              <a href="#" class="social-links">privacy page</a>
          </div>
          <div>
              <a href="#" class="social-links">instagram</a>
              <a href="#" class="social-links">facebook</a>
              <a href="#" class="social-links">twitter</a>
              
          </div>
          <p class="footer-credit">BOOKS, BOOKS FOR SECOND HANED, RENTAL BOOK & MUCH MORE ONLY IN BOOKIE</p>
      </div> 
      
    `;
    
}
      
    createFooter();