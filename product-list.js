const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("categories");
url = "https://kea-alt-del.dk/t7/api/products?category=" + cat;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProductCard);
}

function showProductCard(prod) {
  console.log(prod);
  const shCard = document.querySelector(".prod-card-template").content;
  const clone = shCard.cloneNode(true);
  clone
    .querySelector(".prod-link")
    .setAttribute("href", "product.html?id=" + prod.id);
  clone.querySelector(".card-title").textContent = prod.productdisplayname;
  clone.querySelector(".brand-name").textContent = prod.brandname;
  clone.querySelector(".price").textContent = `${prod.price} kr.`;
  clone.querySelector(
    ".prod-pic"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${prod.id}.webp`;

  if (prod.soldout) {
    clone.querySelector(".prod-card").classList.add("sold-out");
  } else {
    clone.querySelector(".sold-out-tag").remove();
  }
  if (prod.discount) {
    clone.querySelector(".off").textContent = `${Math.ceil(
      prod.price * (1 - prod.discount / 100)
    )} kr.`;
    clone.querySelector(".off-tag").textContent = `${prod.discount}% OFF`;
    clone.querySelector(".price").classList.add("old-price");
  } else {
    clone.querySelector(".off-tag").remove();
  }
  const parent = document.querySelector("section");
  parent.appendChild(clone);
}

{
  /* <template class="prod-card-template">
<div class="prod-card">
    <a class="prod-link" href="">
        <div class="container">
            <img class="prod-pic" src="" alt="">
            <div class="sold-out-tag">Sold Out</div>
            <div class="off-tag">47% OFF</div>
        </div>
    </a>
    <a class="card-title" href="product.html"> Black Leaping Cat T-shirt</a>
    <p class="brand-name"> </p>
    <p class="price">899 kr.</p>
    <p class="off"></p>
</div>
</template> */
}
