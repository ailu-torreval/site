const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    handleCategories(data);
})

function handleCategories(data){
    // console.log(data);
    data.forEach(showCategories);
}

function showCategories(cat) {
    console.log(cat);
    const catCard = document.querySelector("#cat-template").content;
    const clone = catCard.cloneNode(true);
    clone.querySelector(".cat-card").setAttribute("href", "product-list.html?categories=" + cat.category);
    clone.querySelector(".cat-title").textContent = cat.category;
    const parent = document.querySelector("section");
    parent.appendChild(clone);
}


/* <template id="cat-template">
<a href="" class="cat-card">
    <div class="cat-title"></div>
</a>
</template> */