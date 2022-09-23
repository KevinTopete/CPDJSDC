const menuEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopmenu');
const desployMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobilemenu');
const desployCarShop = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

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
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fss242.liverpool.com.mx%2Fxl%2F1049257123.jpg&imgrefurl=https%3A%2F%2Fwww.liverpool.com.mx%2Ftienda%2Fpdp%2FCamisa-casual-JBE-manga-larga-para-hombre%2F1049257123%3FskuId%3D1049257135&tbnid=GbG7IiVu7-ZpGM&vet=12ahUKEwiH5JGy6av6AhVUwikDHQokBAkQ94IIKAB6BQgBEM8C..i&docid=tAGCSlUZLwNNUM&w=940&h=1215&q=camisa&ved=2ahUKEwiH5JGy6av6AhVUwikDHQokBAkQ94IIKAB6BQgBEM8C'
});
productList.push({
    name: 'TV',
    Price: 1480,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Flatin-fhd-t5300-un43t5300apxpa-frontblack-229166470%3F%24650_519_PNG%24&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Flatin%2Ftvs%2Ffull-hd-tv%2Ft5300-43-inch-full-hd-smart-tv-un43t5300apxpa%2F&tbnid=iYuflzC0pcSCbM&vet=12ahUKEwiFhZ3W6av6AhXYG98KHQINBlsQMygAegUIARC_AQ..i&docid=TdpFcX9Dihf8_M&w=650&h=519&q=tv&ved=2ahUKEwiFhZ3W6av6AhXYG98KHQINBlsQMygAegUIARC_AQ'
});

