let btnnext = document.querySelector('.next')
let btnback = document.querySelector('.back')
let container = document.querySelector('.container ')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnnext.onclick = () => moveItemsOnClick('next')
btnback.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    console.log('listitems')
    console.log('thumbitems')

    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    }
    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);

}