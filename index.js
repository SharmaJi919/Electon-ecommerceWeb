

let page = 1;

let c1 = document.getElementById("c1")

fetchdata();

async function fetchdata() {
    try {
        let res = await fetch(`http://localhost:3000/products`);
        let data = await res.json();
        console.log(data);
        displayHome1(data);
    } catch (error) {
        console.log(error)
    }
}

fetchdata2();
async function fetchdata2() {
    try {
        let arr = ["HeadSets", "Mouse", "Laptops", "Gaming", "Speakers", "Camera"]
        for (let i = 0; i < arr.length; i++) {
            let res = await fetch(`http://localhost:3000/${arr[i]}`);
            let data = await res.json();
            console.log(data);
            displayHome2(data, arr[i]);
        }
    } catch (error) {
        console.log(error)
    }
}

fetchpopular()
async function fetchpopular() {
    try {
        let res = await fetch(`http://localhost:3000/popular`);
        let data = await res.json();
        console.log(data);
        displaypop(data);
    } catch (error) {
        console.log(error)
    }
}

function displaypop(arr) {
    document.getElementById("pop-cont").innerHTML = "";

    arr.map((el) => {
        let box = document.createElement("div");
        box.setAttribute("class", "popProd")

        let idiv = document.createElement("div")

        let image = document.createElement("img");
        image.src = el.image;
        idiv.append(image)
        let bod = document.createElement("div")

        let title = document.createElement("h4")
        if (el.category === "HeadSets") {
            title.textContent = "HeadPhones";
        } else if (el.category === "Laptop") {
            title.textContent = "Tablet as a Laptop";
        } else if (el.category === "Camera") {
            title.textContent = "Camera";
        } else if (el.category === "Mouse") {
            title.textContent = "Mouse";
        } else if (el.category === "Gaming") {
            title.textContent = "Play Games";
        }
        title.style.color = "#165174"

        let price = document.createElement("h5");
        price.textContent = "$ " + el.price;
        price.style.color = "#2d2d2d"

        let rating = document.createElement("div");
        bod.append(title, price, rating)

        rating.textContent = "\u2605" + el.rating;

        box.append(idiv, bod);
        document.getElementById("pop-cont").append(box);
    })
}


function displayHome2(arr, category) {

    let b1 = document.createElement("div")

    // let {category, Brand, title} = el;
    let d1 = document.createElement("div")
    d1.setAttribute("class", "c2d1")

    let image1 = document.createElement("img");
    image1.setAttribute("class", "ppimage")
    image1.src = arr[0].image;
    d1.append(image1);

    let c2b1d2 = document.createElement("div")
    c2b1d2.setAttribute("class", "c2b1d2")
    c2b1d2.innerHTML =
        `<h3>${category}</h3><br><span>(${arr.length} items)`

    b1.append(d1, c2b1d2)
    b1.style.cursor = "pointer"

    document.getElementById("c2").append(b1);
    b1.addEventListener("click", () => {
        let ctg = fetchcategory(category)

        localStorage.setItem("category", JSON.stringify(ctg));
        window.location="products.html"
    })
}


async function fetchcategory(cat) {
    try {
        let res = await fetch(`http://localhost:3000/${cat}`);
        let data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// document.querySelector(".hp1-shop1-btn").addEventListener("click",()=>{
//     window.location="products.html"
// })


function displayHome1(data) {
    // c1.innerHTML="";
    document.querySelector(".hp1-btn1").style.backgroundColor = "#eda515";

    let hp1name = document.createElement("h1");
    hp1name.setAttribute("id", "hp1-name");

    let n1 = data.filter((el) => {
        return el.category == "Camera" && el.color == "White";
    })
    hp1name.innerHTML = `<h1>${n1[0].Brand}</h1> <h1>${n1[0].category}</h1>`;

    console.log(n1[0]);

    document.querySelector(".cd11").append(hp1name);
    document.getElementById("cd12").innerHTML =
        `<button class="hp1-shop1-btn"><a href="products.html">Shop Now</a></button>
        <button class="hp1-view1-btn"><a href="products.html">View More</a></button>`

    // let hp1image= n1[0].image;
    // console.log(hp1image);
    let hp1image = document.createElement("img");
    hp1image.src = n1[0].image;
    document.getElementById("cd2").append(hp1image);

    let hpp1 = document.createElement("div");
    hpp1.setAttribute("class", "hpp1");
    hpp1.innerHTML = `<h3>only <br>$ ${n1[0].price}</h3>`
    document.getElementById("cd2").append(hpp1)

    document.querySelector(".hp1-btn1").addEventListener("click", function () {
        changemain1(data);
    });
    document.querySelector(".hp1-btn2").addEventListener("click", function () {
        changemain2(data);
    });
    document.querySelector(".hp1-btn3").addEventListener("click", function () {
        changemain3(data);
    });

    // -----------------------------------------------------------------------------------------------

    // let c2b1d2 = document.createElement("div")

    document.getElementById("pd1").innerHTML = ""
    let dd = document.createElement("div");

    let dd1 = document.createElement("div");

    let d2 = document.createElement('div');
    d2.setAttribute("class", "pd11")

    let image0 = document.createElement("img");
    let i = data.filter((sp) => {
        return sp.category == "Speaker";
    })

    image0.src = i[0].image
    d2.append(image0);

    let d3 = document.createElement("div");
    d3.setAttribute("class", "d3")
    let title0 = document.createElement("h3");
    title0.textContent = i[0].title;

    let d3price = document.createElement("h4");
    d3price.textContent = i[0].price;
    d3price.style.marginTop = "20px"

    let d3rat = document.createElement("h5");
    d3rat.textContent = i[0].rating;
    d3rat.style.marginTop = "10px"

    let addc = document.createElement('button')
    addc.textContent = "Add to Cart";
    addc.setAttribute("class", "addc")
    addc.style.marginRight = "20px"

    let sh = document.createElement('button')
    sh.textContent = "eye";
    sh.setAttribute("class", "sh");



    // let d4 = document.createElement("div");
    // let bt1 = document.createElement("button");
    // bt1.setAttribute("class", "pdb1 hp1btn")
    // // bt1.addEventListener("click",ch1(data));
    // bt1.style.backgroundColor="#eda515"

    // let bt2 = document.createElement("button");
    // bt2.setAttribute("class", "pdb2 hp1btn")
    // // bt2.addEventListener("click", ch2(data));
    // bt2.style.backgroundColor = "none"

    // d4.append(bt1, bt2)
    d3.append(title0, d3price, d3rat, addc, sh);

    dd1.append(d2, d3)
    dd.append(dd1)
    dd.setAttribute("class", "dd")
    document.getElementById("pd1").append(dd);

    //-------------------------------------------

    let gam = data.filter(el => {
        return el.category === "Gaming"
    })

    document.querySelector(".dgam").innerHTML =
        `<div>
            <img src="${gam[0].image}" alt="">
        </div>
        <div>
            <h5>Play Game</h5>
            <p>${gam[0].price}</p>
            <span>${"\u2605" + gam[0].rat}</span>
        </div>`

    let lap = data.filter(el => {
        return el.category === "Laptop"
    })

    document.querySelector(".dlap").innerHTML =
        `<div>
            <img src="${lap[0].image}" alt="">
        </div>
        <div>
            <h5>Play Game</h5>
            <p>${lap[0].price}</p>
            <span>${"\u2605" + lap[0].rat}</span>
        </div>`

}


function changemain1(data) {
    {
        document.querySelector(".hp1-btn1").style.backgroundColor = "#eda515";
        document.querySelector(".hp1-btn2").style.backgroundColor = "white";
        document.querySelector(".hp1-btn3").style.backgroundColor = "white";

        let hp1name = document.createElement("h1");
        hp1name.setAttribute("id", "hp1-name");

        let n0 = data.filter((el) => {
            return el.category == "Camera" && el.color == "White";
        })
        console.log(n0)
        hp1name.innerHTML = `<h1>${n0[0].Brand}</h1> <h1>${n0[0].category}</h1>`;
        document.querySelector(".cd11").innerHTML = "";
        document.querySelector(".cd11").append(hp1name);

        document.getElementById("cd12").innerHTML =
            `<button onclick="shopitem" class="hp1-shop1-btn">Shop Now</button>
                <button onclick="viewmore" class="hp1-view1-btn">View More</button>`

        // let hp1image= n1[0].image;
        // console.log(hp1image);
        let hp1image = document.createElement("img");
        hp1image.src = n0[0].image;
        document.getElementById("cd2").innerHTML = "";
        document.getElementById("cd2").append(hp1image);

        let hpp1 = document.createElement("div");
        hpp1.setAttribute("class", "hpp1");
        hpp1.innerHTML = `<h3>only <br>$ ${n0[0].price}</h3>`
        document.getElementById("cd2").append(hpp1)


    }
}

function changemain2(data) {
    {
        document.querySelector(".hp1-btn2").style.backgroundColor = "#eda515";
        document.querySelector(".hp1-btn1").style.backgroundColor = "white";
        document.querySelector(".hp1-btn3").style.backgroundColor = "white";

        let hp1name = document.createElement("h1");
        hp1name.setAttribute("id", "hp1-name");

        let n0 = data.filter((el) => {
            return el.category == "HeadSets" && el.color == "White";
        })
        console.log(n0)
        hp1name.innerHTML = `<h1>${n0[0].Brand}</h1> <h1>${n0[0].category}</h1>`;
        document.querySelector(".cd11").innerHTML = "";
        document.querySelector(".cd11").append(hp1name);

        document.getElementById("cd12").innerHTML =
            `<button onclick="shopitem" class="hp1-shop1-btn">Shop Now</button>
                <button onclick="viewmore" class="hp1-view1-btn">View More</button>`

        // let hp1image= n1[0].image;
        // console.log(hp1image);
        let hp1image = document.createElement("img");
        hp1image.src = n0[0].image;
        document.getElementById("cd2").innerHTML = "";
        document.getElementById("cd2").append(hp1image);

        let hpp1 = document.createElement("div");
        hpp1.setAttribute("class", "hpp1");
        hpp1.innerHTML = `<h3>only <br>$ ${n0[0].price}</h3>`
        document.getElementById("cd2").append(hpp1)

    }
}

function changemain3(data) {
    {
        document.querySelector(".hp1-btn3").style.backgroundColor = "#eda515";
        document.querySelector(".hp1-btn2").style.backgroundColor = "white";
        document.querySelector(".hp1-btn1").style.backgroundColor = "white";

        let hp1name = document.createElement("h1");
        hp1name.setAttribute("id", "hp1-name");

        let n0 = data.filter((el) => {
            return el.category == "Laptop" && el.Brand == "Microsoft";
        })
        console.log(n0)
        hp1name.innerHTML = `<h1>${n0[0].Brand}</h1> <h1>${n0[0].category}</h1>`;
        document.querySelector(".cd11").innerHTML = "";
        document.querySelector(".cd11").append(hp1name);

        // let hp1image= n1[0].image;
        // console.log(hp1image);
        let hp1image = document.createElement("img");
        hp1image.src = n0[0].image;
        document.getElementById("cd2").innerHTML = "";
        document.getElementById("cd2").append(hp1image);

        let hpp1 = document.createElement("div");
        hpp1.setAttribute("class", "hpp1");
        hpp1.innerHTML = `<h3>only <br>$ ${n0[0].price}</h3>`
        document.getElementById("cd2").append(hpp1)



    }
}

fetchcomments();

document.getElementById("cmtbtn1").addEventListener("click", () => {
    document.getElementById("cmtbtn1").style.backgroundColor = "#eda515"
    document.getElementById("cmtbtn2").style.backgroundColor = "white"
    document.getElementById("cmtbtn3").style.backgroundColor = "white"
    page = 1;
    fetchcomments();
})
document.getElementById("cmtbtn2").addEventListener("click", () => {
    document.getElementById("cmtbtn2").style.backgroundColor = "#eda515"
    document.getElementById("cmtbtn1").style.backgroundColor = "white"
    document.getElementById("cmtbtn3").style.backgroundColor = "white"
    page = 2;
    fetchcomments();
})
document.getElementById("cmtbtn3").addEventListener("click", () => {
    document.getElementById("cmtbtn3").style.backgroundColor = "#eda515"
    document.getElementById("cmtbtn2").style.backgroundColor = "white"
    document.getElementById("cmtbtn1").style.backgroundColor = "white"
    page = 3;
    fetchcomments();
})
document.getElementById("cmtbtn1").style.backgroundColor = "#eda515"

async function fetchcomments() {
    try {
        let res = await fetch(`http://localhost:3000/comments?_limit=3&_page=${page}`);
        let data = await res.json();
        console.log(data);
        dispcomments(data);
    } catch (error) {
        console.log(error)
    }
}

function dispcomments(data) {
    let cdiv = document.getElementById("comments");
    cdiv.innerHTML = "";
    data.map(el => {
        let cp = document.createElement("div")
        cp.setAttribute("id", "Cperson")
        cp.innerHTML =
            `<div>
            <div class="avt">
                <img src=${el.avatar} alt="${el.name}">
            </div>
            <div>
                <h2>${el.name}</h2>
            </div>
        </div>
        <div>
            <p>${el.comment}</p>
        </div>`
        cdiv.append(cp)
    })
}

fetchNews();
let z1 = document.getElementById("nbtn1")
z1.style.backgroundColor = "#eda515"
let z2 = document.getElementById("nbtn2")
let z3 = document.getElementById("nbtn3")
let z4 = document.getElementById("nbtn4")
let z5 = document.getElementById("nbtn5")
z1.addEventListener("click", () => {
    z1.style.backgroundColor = "#eda515"
    z2.style.backgroundColor = "white"
    z3.style.backgroundColor = "white"
    z4.style.backgroundColor = "white"
    z5.style.backgroundColor = "white"
    page = 1;
    fetchNews();
})
z2.addEventListener("click", () => {
    z2.style.backgroundColor = "#eda515"
    z1.style.backgroundColor = "white"
    z3.style.backgroundColor = "white"
    z4.style.backgroundColor = "white"
    z5.style.backgroundColor = "white"
    page = 2;
    fetchNews();
})
z3.addEventListener("click", () => {
    z3.style.backgroundColor = "#eda515"
    z2.style.backgroundColor = "white"
    z1.style.backgroundColor = "white"
    z4.style.backgroundColor = "white"
    z5.style.backgroundColor = "white"
    page = 3;
    fetchNews();
})
z4.addEventListener("click", () => {
    z4.style.backgroundColor = "#eda515"
    z2.style.backgroundColor = "white"
    z3.style.backgroundColor = "white"
    z1.style.backgroundColor = "white"
    z5.style.backgroundColor = "white"
    page = 4;
    fetchNews();
})
z5.addEventListener("click", () => {
    z5.style.backgroundColor = "#eda515"
    z2.style.backgroundColor = "white"
    z3.style.backgroundColor = "white"
    z4.style.backgroundColor = "white"
    z1.style.backgroundColor = "white"
    page = 5;
    fetchNews();
})

async function fetchNews() {
    let apiKey_blog = "ddfff2ceaa66469896693c35ecc60747";
    try {
        let response = await fetch(
            `https://newsapi.org/v2/everything?q=gadgets&sortBy=popularity&page=${page}&pageSize=2&language=en&apiKey=${apiKey_blog}`
        );

        let data = await response.json();
        console.log(data.articles)
        appendNews(data.articles);
    } catch (error) {
        console.log(error);
    }
}

function appendNews(data) {
    let newsdiv = document.getElementById("newss");
    newsdiv.innerHTML = "";

    data.map(el => {
        let nbox = document.createElement("div");
        nbox.setAttribute("id", "nbox");
        let date = el.publishedAt.slice("T");


        nbox.innerHTML =
            `<div>
            <img src="${el.urlToImage}" alt="">
        </div>
        <div>
            <div class="datediv">
                <h3>${date}</h3>
            </div>
            <h3 maxlength="120">${el.title}</h3>
            <p>${el.content}</p>
            <p><strong>${el.author}</strong></p>
        </div>`
        newsdiv.append(nbox);
        nbox.addEventListener("click", () => {
            window.location = el.url;
        })

    })

}

function nwindow() {
    window.location = "https://www.gadgets360.com/"
}

