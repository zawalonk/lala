let lista = ['adam', 'ola', 'karol','wojtek'];
lista.forEach(function(elem) {
    console.log(elem);
    listItem.innerText = elem;
    console.log(document.getElementsByClassName('main-lista')[0]);
    let listItem = document.createElement('li');
    listItem.classList('class-list');
    document.getElementsByClassName('main-list')[0].appendChild(listItem);
});