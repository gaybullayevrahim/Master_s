const items = document.querySelector("#Product");
const add = document.querySelector("#add");
const buyBtn = document.querySelector("#buybtn");
const wrap = document.querySelector(".wrapper");
const exit = document.getElementById("exitbtn");
exit.addEventListener("click", (e) => {
  wrap.style.display = "none";
  e.preventDefault();
});
buyBtn.addEventListener("click", (e) => {
  exit.style.display = "flex";
  e.preventDefault();
});
const goods = [
  { name: "Fancy Product", price: 40, sale: 20, quantity: 1, id: 1 },
  { name: "Special Item", price: 20, sale: 15, quantity: 1, id: 2 },
  { name: "Special Item", price: 20, sale: 30, quantity: 1, id: 3 },
  { name: "Sale Item", price: 30, sale: 40, quantity: 1, id: 4 },
  { name: "Popular Item", price: 50, sale: 80, quantity: 1, id: 5 },
  { name: "Sale Item", price: 700, sale: 10, quantity: 1, id: 6 },
  { name: "Fancy Product", price: 16, sale: 60, quantity: 1, id: 7 },
  { name: "Popular Item", price: 80, sale: 50, quantity: 1, id: 8 },
];

let buy = [];
let addGood = (name, price, id, quantity) => {
  buy.map((elem) => {
    let newbuy = {
      name,
      price,
      id,
      quantity,
    };
    buy = newbuy;
    console.log(buy);
  });
};
let item = goods.map((elem) => {
  return `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${elem.name}</h5>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">$${
                                      elem.price
                                    }</span><br> <span>sale ${elem.sale}%<span>
                                 <br>   $${(elem.price * elem.sale) / 100}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="add" onClick="addGood('${
                                  elem.name
                                }',${elem.price},${elem.id}, ${
    elem.quantity
  })" >Add to cart</a></div>
                            </div>
                        </div>
                    </div>`;
});

console.log(item);
items.innerHTML = item;
