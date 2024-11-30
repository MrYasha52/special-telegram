function getUser(url) {
    fetch(url).then((r) => r.json()).then(data => {
        let {name, surname, balance, photo_url} = data[0]
        document.querySelector("main").innerHTML = `
        <h1>${name} ${surname}</h1>
        <p>Balance: ${balance}$</p>
        <img src="${photo_url}">
        `
    })
}

let parasm = new URLSearchParams(window.location.search)
let id = parasm.get("id")
console.log(id)

getUser("https://my-json-server.typicode.com/Bsenichak/WebMiddleDB/users?id=" + id)