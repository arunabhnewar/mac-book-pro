// memory price
const firstMemoryPrice = document.getElementById('first-memoryPrice');
const secondMemoryPrice = document.getElementById('second-memoryPrice');
const extraMemoryPrice = document.getElementById('extra-memoryPrice');

// storage price
const firstStoragePrice = document.getElementById('first-storagePrice');
const secondStoragePrice = document.getElementById('second-storagePrice');
const thirdStoragePrice = document.getElementById('third-storagePrice');
const extraStoragePrice = document.getElementById('extra-storagePrice');

// delivery charges
const regularDeliveryCharges = document.getElementById('regular-deliveryCharges');
const expressDeliveryCharges = document.getElementById('express-deliveryCharges');
const deliveryCharges = document.getElementById('delivery-charges');

// best price
const bestPrice = document.getElementById('best-price');
bestPrice.innerText = '1299';

// total price
let totalPrice = document.getElementById('total-price');
totalPrice = totalPrice.innerText;

// total amount
let totalAmount = document.getElementById('total-amount');
totalAmount = totalAmount.innerText;



// update total product price
function updateTotal() {
    let previousTotalPrice = document.getElementById('total-price');
    let previousTotalAmount = document.getElementById('total-amount');

    const fixedPrice = Number(bestPrice.innerText);
    const extraMemoryCost = Number(extraMemoryPrice.innerText);
    const extraStorageCost = Number(extraStoragePrice.innerText);
    const deliveryCost = Number(deliveryCharges.innerText);

    newTotalPrice = fixedPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    newTotalAmount = fixedPrice + extraMemoryCost + extraStorageCost + deliveryCost;

    previousTotalPrice.innerText = newTotalPrice;
    previousTotalAmount.innerText = newTotalAmount;

};


// memory price event handler
firstMemoryPrice.addEventListener('click', function () {
    extraMemoryPrice.innerText = '0';
    updateTotal();
    // console.log(extraMemoryPrice.innerText);
});
secondMemoryPrice.addEventListener('click', function () {
    extraMemoryPrice.innerText = '180';
    updateTotal();
    // console.log(extraMemoryPrice.innerText);
});

// storage price event handler
firstStoragePrice.addEventListener('click', function () {
    extraStoragePrice.innerText = '0';
    updateTotal()
});

secondStoragePrice.addEventListener('click', function () {
    extraStoragePrice.innerText = '100';
    updateTotal()
});

thirdStoragePrice.addEventListener('click', function () {
    extraStoragePrice.innerText = '180';
    updateTotal()
});

// delivery charges event handler
regularDeliveryCharges.addEventListener('click', function () {
    deliveryCharges.innerText = '0';
    updateTotal()
});

expressDeliveryCharges.addEventListener('click', function () {
    deliveryCharges.innerText = '20';
    updateTotal()
});


// promo code submit event handle
document.getElementById('submit-btn').addEventListener('click', function () {
    let totalProductPrice = document.getElementById('total-price');
    let totalProductAmount = document.getElementById('total-amount');
    let promoCodeInput = document.getElementById('promo-code');
    let promoCodeValue = promoCodeInput.value;
    let totalAmount = Number(totalProductPrice.innerText);
    if (promoCodeValue == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        totalProductAmount.innerText = totalAmount - discount;
    }
    // reset code input
    promoCodeInput.value = '';
});
