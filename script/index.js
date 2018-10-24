// 產品上架(首頁)
(function displayDessert(dessert){
    const dessertContainer = document.querySelector('.dessert-container');
    const indexDessert = dessert.indexDessert;
    var str = '';

    // 渲染展示在首頁的商品
    for (let i=0; i<indexDessert.length; i++){
        str +=  `
                    <div class="dessert">
                        <div class="img-container">
                            <div class="featured-tag">${indexDessert[i].tag}</div>
                            <i class="far fa-heart featured-icon"></i>
                            <img src="${indexDessert[i].img}" alt="" class="feature-dessert-img">
                        </div>
                        <div class="dessert-tag">
                            <div class="dessert-name">${indexDessert[i].name}</div>
                            <div class="dessert-price">NT$ ${indexDessert[i].price}</div>
                        </div>
                        <div class="add-item-cart" data-add="addBtn">加入購物車</div>    
                    </div>
                `
    }
    dessertContainer.innerHTML = str

})(dessert);


// 加入購物車
(function addItemToCart(){
    const dessertContainer = document.querySelector('.dessert-container');
    dessertContainer.addEventListener('click',function(e){

        if (e.target.dataset.add !== 'addBtn'){
            return;
        }else {
            selectedItem(e);
            document.querySelector('.shopping-box').classList.add('show-cart');
            setTimeout(() =>{
                document.querySelector('.shopping-box').classList.remove('show-cart');
            },3000)
        }
    });
})();

