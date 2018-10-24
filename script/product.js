// 全部的商品
(function displayDessert(dessert){
    
    const dessertListContainer = document.querySelector('.desserts-list-container'); 
    const dessert_items = dessert.dessert_items;

    const per_page = 5;

        // 頁數
        function numPages(){
            return Math.ceil(dessert_items.length / per_page  );
        }

        // 切換頁數
        function changePages(page){
            var str = '';
            dessertListContainer.innerHTML = '';
            

            // 一次顯示5筆資料
            for (let i=(page-1) * per_page; i<page * per_page && i < dessert_items.length; i++){

            str += `<div class="dessert ${dessert_items[i].type}">
                        <div class="dessert-img-container">
                            <div class="dessert-featured-tag">${dessert_items[i].tag}</div>
                            <i class="far fa-heart dessert-heart-icon"></i>
                            <img src="${dessert_items[i].img}" alt="" class="dessert-list-img">
                        </div>
                        <div class="dessert-infor">
                            <div class="dessert-name">${dessert_items[i].name}</div>
                            <div class="dessert-price">NT$ ${dessert_items[i].price}</div>
                        </div>
                        <div class="add-item-cart" data-add="addBtn">加入購物車</div>   
                    </div>`
            }
            dessertListContainer.innerHTML = str;
            paginations();
        }
        changePages(1);

        // 製作分頁
        function paginations(){
            var pagination = '';

            for (let i=0; i<numPages(); i++){
                pagination+= `<a href="#page" class="pageBtn" data-page="${i+1}">${i+1}</a>`;
            }

            const div = document.createElement('div');
            div.classList.add('pagination');
            div.innerHTML = pagination;
            dessertListContainer.appendChild(div)

            const pageBtn = document.querySelectorAll('.pageBtn');
            pageBtn.forEach(btn =>{
                btn.addEventListener('click',function(e){
                    var pageValue = e.target.dataset.page;
                    
                    changePages(pageValue);
                })
            })
        }

        // 重新渲染出所有的甜點
        document.querySelector('.all-desserts').addEventListener('click',function(){
            changePages(1);
        })
})(dessert);

//商品篩選
(function filterItem(dessert){
    const filterBtn = document.querySelectorAll('.filter-btn');
    const per_page = 5;

    filterBtn.forEach(btn =>{
        btn.addEventListener('click',function(e){
            var dataValue = e.target.dataset.filter;         
            var filterArray = [];

            //將符合條件的item匯集至新的陣列
            dessert.dessert_items.filter(item =>{
                if (dataValue == item.type){
                    filterArray.push(item);
                    changePages(1);
                };
            });

            // 頁數
            function numPages(){
                return Math.ceil(filterArray.length / per_page);
            };

            // 切換頁數
            function changePages(page){
                const dessertListContainer = document.querySelector('.desserts-list-container');
                var str = '';
                dessertListContainer.innerHTML = '';
                
                for (let i=(page-1) * per_page; i<page * per_page && i < filterArray.length ; i++){
                    str += `<div class="dessert ${filterArray[i].type}">
                                <div class="dessert-img-container">
                                    <div class="dessert-featured-tag">${filterArray[i].tag}</div>
                                    <i class="far fa-heart dessert-heart-icon"></i>
                                    <img src="${filterArray[i].img}" alt="" class="dessert-list-img">
                                </div>
                                <div class="dessert-infor">
                                    <div class="dessert-name">${filterArray[i].name}</div>
                                    <div class="dessert-price'">NT$ ${filterArray[i].price}</div>
                                </div>
                                <div class="add-item-cart" data-add="addBtn">加入購物車</div>   
                            </div>`
                }
                dessertListContainer.innerHTML = str;
                paginations();
            }

            // 製作分頁
            function paginations(){
                const dessertListContainer = document.querySelector('.desserts-list-container');
                var pagination = '';
                for (let i=0; i<numPages(); i++){
                    pagination+= `<a href="#" class="pageBtn" data-page="${i+1}">${i+1}</a>`  
                }
                
                const div = document.createElement('div');
                div.classList.add('pagination');
                div.innerHTML = pagination
            
                dessertListContainer.appendChild(div)
            
                
                const pageBtn = document.querySelectorAll('.pageBtn');
                pageBtn.forEach(btn =>{
                    btn.addEventListener('click',function(e){
                        var pageValue = e.target.dataset.page;
                        
                        changePages(pageValue);
                    })
                })
            }
        });// btn
    });// filterbtn


    document.querySelector('.all-desserts').textContent = `所有甜點(${dessert.dessert_items.length})`;
    document.querySelector('.desserts-today').textContent = `本日推薦(${dessert.dessertsToday.length})`;
    document.querySelector('.desserts-recommended').textContent = `人氣推薦(${dessert.dessertsRecommended.length})` ;
    document.querySelector('.new-desserts').textContent = `新品上市(${dessert.newDesserts.length})`;
})(dessert);

//加入購物車
(function addItemToCart(){
    const desserts_list_container = document.querySelector('.desserts-list-container');
    desserts_list_container.addEventListener('click',function(e){

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