
const cartWrapper = document.querySelector('.cart-wrapper');


// отслеживаем клик на странице
window.addEventListener('click', function (event) {
    if(event.target.hasAttribute('data-cart')) {

        //находим карточку товара, в которой совершили нажание
        const card = event.target.closest('.card');

        //собираем данные из карточки
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // проверять есть ли такой товра в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterEL = itemInCart.querySelector('[data-counter]');
            counterEL.innerText = parseInt(counterEL.innerText) + parseInt(productInfo.counter);
        } else {
            // Собранные данные подставим в шаблон для товара в корзине
            const cardItemHTML = `
                <div class="cart-item" data-id="${productInfo.id}">
                    <div class="cart-item__top">
                        <div class="cart-item__img">
                            <img src="${productInfo.imgSrc}" alt="">
                        </div>
                        <div class="cart-item__desc">
                            <div class="cart-item__title">${productInfo.title}</div>
                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                            <!-- cart-item__details -->
                            <div class="cart-item__details">

                                <div class="items items--small counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                </div>

                                <div class="price">
                                    <div class="price__currency">${productInfo.price}</div>
                                </div>

                            </div>
                            <!-- // cart-item__details -->
                        </div>
                    </div>
                </div>

            `;

            // отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }

        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();

        calcCartPriceAndDelivery();
    }
});