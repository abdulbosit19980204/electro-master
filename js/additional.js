'use strict'
window.addEventListener('DOMContentLoaded', () => {
    // love button
    let wishBtn = document.querySelectorAll('.add-to-wishlist'),
        parentProductBtns = document.querySelectorAll('.product-btns'),
        heartsBtn = document.querySelectorAll('.fa-heart-o'),
        wishNum = document.querySelector('.qty'),
        i = Number(wishNum.textContent)


    heartsBtn.forEach((item, idx) => {
        item.addEventListener('click', () => {
            item.classList.toggle('heart-love')
            i++
            wishNum.textContent = String(i)
        })

    })

})