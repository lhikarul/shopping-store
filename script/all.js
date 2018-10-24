
// 中央工廠
var dessert = function makingItem(){

    // 每個電商都有甜點的庫存
    var dessert_items = [];

    // 每個甜點都是獨一無二的
    function Items(name,img,price,index,type,tag){
        this.name = name;
        this.img = img;
        this.price = price;
        this.index = index;
        this.type = type;
        this.tag = tag;
    }

    // 電商的生產線
    function createItems(name,img,price,index,type,tag){
        var dessert_item = new Items(name,img,price,index,type,tag);
        dessert_items.push(dessert_item);
    }

    //電商的包裝線
    function produceItems(){
        createItems('英式糕點','img/dessert/dessert-01.jpg','450',false,'desserts-today','本日精選');
        createItems('芒果冰棒','img/dessert/dessert-02.jpg','350',false,'new-desserts','新品上市');
        createItems('鮮酥脆片','img/dessert/dessert-03.jpg','450',false,'desserts-today','本日精選');
        createItems('古早拼盤','img/dessert/dessert-04.jpg','250',false,'new-desserts','新品上市');
        createItems('奇異果水盤','img/dessert/dessert-05.jpg','550',false,'desserts-today','本日精選');
        createItems('甜甜圈','img/dessert/dessert-06.jpg','450',true,'new-desserts','新品上市');
        createItems('葡萄果凍','img/dessert/dessert-07.jpg','450',true,'desserts-today','本日精選');
        createItems('草莓蛋糕','img/dessert/dessert-08.jpg','450',false,'new-desserts','新品上市');
        createItems('西式糕點','img/dessert/dessert-09.jpg','450',false,'desserts-today','本日精選');
        createItems('火龍果','img/dessert/dessert-11.jpg','400',false,'new-desserts','新品上市');
        createItems('焦糖蛋糕','img/dessert/dessert-12.jpg','450',false,'desserts-today','本日精選');
        createItems('水果冰沙','img/dessert/dessert-10.jpg','550',false,'desserts-recommended','人氣推薦');
        createItems('草莓布丁','img/dessert/dessert-13.jpg','600',false,'desserts-recommended','人氣推薦');
        createItems('巧克力蛋糕','img/dessert/dessert-14.jpg','700',false,'desserts-recommended','人氣推薦');
        createItems('奶油蛋糕','img/dessert/dessert-15.jpg','700',false,'desserts-recommended','人氣推薦');
        createItems('粉紅戀人','img/dessert/dessert-16.jpg','900',true,'desserts-recommended','人氣推薦');
        createItems('杯子蛋糕','img/dessert/dessert-17.jpg','400',false,'new-desserts','新品上市');
        createItems('巧克力杯子','img/dessert/dessert-18.jpg','350',false,'desserts-today','本日精選');
        createItems('冰淇淋','img/dessert/dessert-19.jpg','350',false,'new-desserts','新品上市');
        createItems('小糕點','img/dessert/dessert-20.jpg','250',false,'desserts-today','本日精選');
        createItems('七彩拼盤','img/dessert/dessert-21.jpg','400',false,'new-desserts','新品上市');
        createItems('草莓巧克力','img/dessert/dessert-22.jpg','450',false,'desserts-today','本日精選');
    }
    produceItems();

    var indexDessert = dessert_items.filter(item => item.index == true);
    var dessertsToday = dessert_items.filter(item => item.tag == '本日精選');
    var dessertsRecommended = dessert_items.filter(item => item.tag == '人氣推薦');
    var newDesserts = dessert_items.filter(item => item.tag == '新品上市');
    
    return {
        dessert_items,indexDessert,dessertsToday,dessertsRecommended,newDesserts
    };
}();


// 導覽
(function navBar(){
    document.querySelector('.navbar-icon').addEventListener('click',function(){
        document.querySelector('.nav-text-lg').classList.toggle('nav-btn-show');
    });
})();


// 顯示購物車的清單
(function showCart(){
    document.querySelector('.cart-icon').addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.shopping-box').classList.toggle('show-cart');

        setTimeout(() =>{
            document.querySelector('.shopping-box').classList.remove('show-cart');    
        },3000)
    })
})();

// 關閉購物車的清單
(function closeCart(){
    document.querySelector('.close-cart-btn').addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.shopping-box').classList.remove('show-cart');
    })
})();