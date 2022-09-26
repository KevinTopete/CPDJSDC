const menuEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopmenu');
const desployMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobilemenu');
const desployCarShop = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener('click', showAndBlockDesktopMenu);
desployMenuMobile.addEventListener('click', showAndBlockMobileMenu);
desployCarShop.addEventListener('click', showAndBlockdesployCarShop);

function showAndBlockDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function showAndBlockMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function showAndBlockdesployCarShop() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    

    //aside.classList.toggle('inactive');
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
 
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
    image: 'data:image/jpeg;base64,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'
});
productList.push({
    name: 'TV',
    Price: 1480,
    image: 'https://previews.123rf.com/images/redrockerz/redrockerz1601/redrockerz160100016/50854987-camisa-de-ilustraci%C3%B3n-de-bosquejo-del-dise%C3%B1o.jpg'
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