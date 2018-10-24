var cartList = JSON.parse(localStorage.getItem('購物車')) || [];

(function reRenderingItems(){
    const shoppingCart = document.querySelector('.shopping-cart');
        var str= '';
        for (let i=0; i<cartList.length; i++){
            str+= ` <div class="cart-item">
                        <img src="${cartList[i].img}" alt="" class="cart-item-img">
                        <div class="cart-item-text">
                            <p class="cart-item-title">${cartList[i].name}</p>
                            <span class="cart-item-price">${cartList[i].price}</span>
                        </div>
                    </div>`
        }
    shoppingCart.innerHTML = str 
    showTotal()
})(); 

function selectedItem(e){
    var itemImg = e.target.parentElement.children[0].children[2].src;
    var itemName = e.target.parentElement.children[1].children[0].textContent;
    var itemPrice = e.target.parentElement.children[1].children[1].textContent;

    var itemFeatures = {
        img: itemImg,
        name: itemName,
        price: itemPrice
    }

    cartList.push(itemFeatures);
    localStorage.setItem('購物車',JSON.stringify(cartList));

    const shoppingCart = document.querySelector('.shopping-cart');
    var str= '';
    for (let i=0; i<cartList.length; i++){
        str+= ` <div class="cart-item">
                    <img src="${cartList[i].img}" alt="" class="cart-item-img">
                    <div class="cart-item-text">
                        <p class="cart-item-title">${cartList[i].name}</p>
                        <span class="cart-item-price">${cartList[i].price}</span>
                    </div>
                </div>`
    }
    shoppingCart.innerHTML = str 
    showTotal();
}

// 計算金額
function showTotal(){
    var total = [];
    const cartItemPrice = document.querySelectorAll('.cart-item-price');
    cartItemPrice.forEach(function(price){
        var position = price.textContent.indexOf('$')
        var priceNum = price.textContent.slice(position+1)
        total.push(parseFloat(priceNum))
    });

    var totalMoney = total.reduce((total,item) =>{
        total += item;
        return total
    },0)
    document.querySelector('.cart-total-price').textContent = totalMoney ;
    document.querySelector('.orderNum').textContent = total.length;
    document.querySelector('.orderNum').style.display = 'block';
    
}

