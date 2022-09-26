const menuEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopmenu');
const desployMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobilemenu');
const desployCarShop = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');




menuEmail.addEventListener('click', showAndBlockDesktopMenu);
desployMenuMobile.addEventListener('click', showAndBlockMobileMenu);
desployCarShop.addEventListener('click', showAndBlockdesployCarShop);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);






function showAndBlockDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
    if (showAndBlockdesployCarShop) {
        shoppingCartContainer.classList.add('inactive');
    }
}

function showAndBlockMobileMenu() {

    closeProductDetailAside();
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function showAndBlockdesployCarShop() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    

    //aside.classList.toggle('inactive');
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    

    //aside.classList.toggle('inactive');
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
 
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');

    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}




const productList = [];
productList.push({
    name: 'Bike',
    Price: 120,
    image: 'https://images.pexels.com/photos/4199964/pexels-photo-4199964.png?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name: 'T-shirt',
    Price: 180,
    image: 'https://images.pexels.com/photos/4199964/pexels-photo-4199964.png?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name: 'TV',
    Price: 1480,
    image: 'https://images.pexels.com/photos/4199964/pexels-photo-4199964.png?auto=compress&cs=tinysrgb&w=1600'
});

/*<div class="product-card">
    <img src="https://images.pexels.com/photos/4199964/pexels-photo-4199964.png?auto=compress&cs=tinysrgb&w=1600">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arr){
    for (product of arr) {
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg =  document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
    
        const productInfo = document.createElement('div');
        productCart.classList.add('product-info');
        
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.Price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
    
    }
    
}

renderProducts(productList);