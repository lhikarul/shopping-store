var cartList = JSON.parse(localStorage.getItem('購物車'));

function shoppingList_lg(){
    var str = ''; 
    for (let i=0; i<cartList.length; i++){
        str+= ` <div class="cart-list">
                <img src="${cartList[i].img}" alt="" class="cart-img">
                <div class="cart-infor">
                    <div class="item-name">${cartList[i].name}</div>
                    <div class="item-price">${cartList[i].price}</div>
                </div>
                <div class="num">
                    <div href="#" class="how-many-order">-</div>
                    <div href="#" class="how-many-order">1</div>
                    <div href="#" class="how-many-order">+</div>
                </div>
                <div class="total-price-lg">${cartList[i].price}</div>
                <i class="fas fa-trash" data-num="${i}"></i>
            </div>`
    }
    

    const container_lg = document.querySelector('.cart-container-lg');
    container_lg.innerHTML = str;
}

shoppingList_lg();

function shoppingList_sm(){
    var str = '';
    for (let i=0; i<cartList.length; i++){
        str+= ` <div class="cart-list">
                    <img src="${cartList[i].img}" alt="" class="cart-img">
                    <div class="cart-infor">
                        <div class="item-name">${cartList[i].name}</div>
                        <div class="item-price">${cartList[i].price}</div>
                        <div class="num">
                            <div href="#" class="how-many-order">-</div>
                            <div href="#" class="how-many-order">1</div>
                            <div href="#" class="how-many-order">+</div>
                        </div>
                    </div>
                </div>
                <div class="total-price-sm">${cartList[i].price}</div>`
    }
    const container_sm = document.querySelector('.cart-container');
    container_sm.innerHTML = str;
}

shoppingList_sm();

(function showTotal_lg(){
    var total = [];
    const cartItemPrice = document.querySelectorAll('.total-price-lg');
    cartItemPrice.forEach(price => {
        var position = price.textContent.indexOf('$')
        var priceNum = price.textContent.slice(position+1)
        total.push(parseFloat(priceNum))
    });
    var totalMoney = total.reduce((total,item) =>{
        total += item;
        return total
    },0)
    document.querySelector('.order-price').textContent = 'NT$ ' + totalMoney;
    document.querySelector('.total-order-price').textContent = `NT$ ${totalMoney + 300}`
    
})();

(function showTotal_sm(){
    var total = [];
    const cartItemPrice = document.querySelectorAll('.total-price-sm');
    cartItemPrice.forEach(price => {
        var position = price.textContent.indexOf('$')
        var priceNum = price.textContent.slice(position+1)
        total.push(parseFloat(priceNum))
    });
    var totalMoney = total.reduce((total,item) =>{
        total += item;
        return total
    },0)

    document.querySelector('.order-price').textContent = 'NT$ ' + totalMoney;

    document.querySelector('.total-order-price').textContent = `NT$ ${totalMoney + 300}`
    
})();

(function deleteItem(){
    const shareContainer = document.querySelectorAll('.share');

    shareContainer.forEach(container =>{
        container.addEventListener('click',function(e){
            if (e.target.nodeName !== "I"){
                return
            }else{
                var num = e.target.dataset.num
                cartList.splice(num,1)
            }
            localStorage.setItem('購物車',JSON.stringify(cartList));
            shoppingList_lg();
            shoppingList_sm();
        });

    })
})();