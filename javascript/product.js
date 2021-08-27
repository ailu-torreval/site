const url = "https://kea-alt-del.dk/t7/api/products/1534";
fetch(url)
.then((res)=>res.json())
.then((data)=>showProduct(data));

function showProduct(product) {
    console.log(product);
    console.log(product.productdisplayname);
    document.querySelector("#product-name").textContent = product.productdisplayname;
    document.querySelector("#prod-img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("#prod-img").alt = product.productdisplayname;
    document.querySelector("#prod-price").textContent = `${product.price}kr.`;
    document.querySelector("#prod-color").textContent = `Color: ${product.basecolour}`;
    document.querySelector("#inv-nr").textContent = `Ineventory Number: ${product.price}`;
    document.querySelector("#specs").innerHTML = `${product.description}`;

} 
