
let p = document.getElementById('products');

services.forEach(i => {
    console.log(i);
    p.innerHTML += `
        <li class="ul">
            <div style="width: 45%">
                <h1>${i.name}</h1>
                <p>$ ${i.precio}</p>
            </div>
            <div style="width: 45%">
                <img class="img" src="${i.imgPath}">
            </div>
            <div style="width: 45%">
                <a href="#close" onclick="javascript:showModal(${i.id}, ${i.precio});">Ver</a>
            </div>
        </li>
    `;
});




function showModal(id, precio) {
    document.getElementById('openModal').style.display = 'block';
    document.getElementById('data').innerHTML = `
        <p>Id: ${id}</p>
        <p>Precio: ${precio}</p>
    `
}

function CloseModal() {
    document.getElementById('openModal').style.display = 'none';
    // document.getElementById('data').innerHTML = ''
}