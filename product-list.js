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
    clone.querySelector("#card-title").textContent = prod.productdisplayname;
    clone.querySelector("#brand-name").textContent = prod.brandname;
    clone.querySelector("#price").textContent = `${prod.price} kr.`;
    if (prod.soldout) {
        clone.querySelector("#prod-card").classList.add("sold-out");
    }
    if (prod.discount) {
        clone.querySelector("#off").textContent = `${prod.price * (1 - prod.discount / 100)} kr.`;
        clone.querySelector("#price").classList.add("#old-price");
    }
    const parent = document.querySelector("section");
    parent.appendChild(clone);
}


{/* <div class="prod-card">
            <a class="prod-link" href="product.html">
                <img class="prod-pic" src="assets/black-shirt.webp">
            </a>
            <a id="card-title1" href="product.html"> Black Leaping Cat T-shirt</a>
                <p class="brand-name">	Puma</p>
                <p class="price">899 kr.</p>
                <p id="off">953.47 kr.</p>
            </div> */}