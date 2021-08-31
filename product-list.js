const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    handleProductList(data);
})

function handleProductList(data){
    console.log(data);
    data.forEach(showProductCard);
}

function showProductCard(prod) {
    console.log(prod);
    const shCard = document.querySelector("#prod-card-template").content;
    const clone = shCard.cloneNode(true);
    clone.querySelector("#prod-link").setAttribute("href", "product.html?id=" + prod.id);
    clone.querySelector("#card-title").textContent = prod.productdisplayname;
    clone.querySelector("#brand-name").textContent = prod.brandname;
    clone.querySelector("#price").textContent = `${prod.price} kr.`;
    clone.querySelector("#prod-pic").src = `https://kea-alt-del.dk/t7/images/webp/640/${prod.id}.webp`;

    if (prod.soldout) {
        clone.querySelector("#prod-card").classList.add("sold-out");
    }
    if (prod.discount) {
        clone.querySelector("#off").textContent = `${Math.ceil(prod.price * (1 - prod.discount / 100))} kr.`;
        clone.querySelector("#price").classList.add("old-price");
    }
    const parent = document.querySelector("section");
    parent.appendChild(clone);
}


{/* <template id="prod-card-template">
<div id="prod-card">
    <a id="prod-link" href="">
        <img id="prod-pic" src="assets/black-shirt.webp">
    </a>
    <a id="card-title" href="product.html"> Black Leaping Cat T-shirt</a>
        <p id="brand-name">	</p>
        <p id="price">899 kr.</p>
        <p id="off"></p>
    </div>
</template> */}