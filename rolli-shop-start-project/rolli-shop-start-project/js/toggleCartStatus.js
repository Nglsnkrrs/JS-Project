function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');

    constorderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0){

        cartEmpty.classList.add('none');
        constorderForm.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        constorderForm.classList.add('none');
    }
}