var cartList = JSON.parse(localStorage.getItem('購物車')) || [];

function orderList(){
    var str = '';

    for (let i=0; i<cartList.length; i++){
        str+= ` <div class="cart-list">
                        <img src="${cartList[i].img}" alt="" class="cart-img">
                    <div class="cart-infor">
                        <div class="item-name">${cartList[i].name}</div>
                        <div class="item-price">${cartList[i].price}</div>
                    </div>
                </div>`
    }
    const order_list = document.querySelector('.order-list');
    console.log(order_list)
    order_list.innerHTML = str ;
};

orderList();

(function showTotal_sm(){
    var total = [];
    const cartItemPrice = document.querySelectorAll('.item-price');
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

(function clearAll(){
    const clearBtn = document.querySelector('.clearBtn');
    clearBtn.addEventListener('click',function(e){

        cartList.splice(0,cartList.length);
        localStorage.setItem('購物車',JSON.stringify(cartList));

    });
})();