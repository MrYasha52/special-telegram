function getProducts(url) {
    fetch(url).then((r) => r.json()).then(data => {
        console.log(data)
        data.forEach(p => {
            let product = document.createElement("div")
            product.classList.add("product")
            product.innerHTML = `
            <h3>${p.name}</h3>
            <img src="${p.photo_url}">
            <p>Price:${p.price}$</p>
            <p>Description:${p.description}</p>
            <a href="userProfile.html?id=${p.seller_id}">Seller profile</a>
            `
            document.querySelector("main").append(product)
        })
    })
}

getProducts("https://my-json-server.typicode.com/Bsenichak/WebMiddleDB/products")