const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  console.log(product.productdisplayname);
  document.querySelector("#product-name").textContent =
    product.productdisplayname;
  document.querySelector("#brand").textContent = product.brandname;
  document.querySelector(
    "#sub-info"
  ).textContent = `${product.category} | ${product.articletype}`;
  document.querySelector(
    "#prod-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("#prod-img").alt = product.productdisplayname;
  document.querySelector("#prod-price").textContent = `${product.price} kr.`;
  document.querySelector(
    "#prod-color"
  ).textContent = `Color: ${product.basecolour}`;
  document.querySelector(
    "#inv-nr"
  ).textContent = `Inventory Number: ${product.id}`;
  document.querySelector("#specs").innerHTML = `${product.description}`;

  if (product.soldout) {
    document.querySelector(".buy").remove();
    document.querySelector("#prod-color").classList.add("out-of-stock");
    document.querySelector("#size-title").classList.add("out-of-stock");
    document.querySelector("#sizes").classList.add("out-of-stock");
  } else {
    document.querySelector(".alert").remove();
    document.querySelector(".sold-out-txt").remove();
  }
  if (product.discount) {
    document.querySelector(".new-price").textContent = `${Math.ceil(
      product.price * (1 - product.discount / 100)
    )} kr.`;
    document.querySelector(
      ".discount-tag"
    ).textContent = `${product.discount}% OFF`;
    document.querySelector("#prod-price").classList.add("old-prod-price");
    // document.querySelector(".price").classList.add("old-price");
  } else {
    document.querySelector(".new-price").remove();
    document.querySelector(".discount-tag").remove();
  }
}

// <section id="prod">
// .old-prod-price
// <img id="prod-img" alt="">
// <div id="prod-info">
//     <p id="brand"></p>
//     <h1 id="product-name"></h1>
//     <p id="sub-info"></p>
//     <p id="prod-price"></p>
//     <p class="new-price">22 kr.</p>
//     <p id="prod-color"></p>
//     <p id="inv-nr"></p>
//     <p>Size:</p>
//     <p id="size">S</p>
//     <p id="size">M</p>
//     <p id="size">L</p>
//     <p class="sold-out-txt">Sorry, this product is sold out. We can let you know when is back though!</p>
//     <button class="alert">SET AN ALERT</button>
//     <button class="buy">ADD TO BASKET</button>
//     <h2 id="spec-titles">Description</h2>
//     <p id="specs"></p>
// </div>
// </section>
