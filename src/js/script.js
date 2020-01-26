document.addEventListener('DOMContentLoaded', function (event) {
   
    'use strict';

    // Модальное окно
    const modal = document.querySelector('.modal'),
        modalButton = document.querySelectorAll('[data-toggle=modal]'); 
        
    const modalSwitch = () => {
        modal.classList.toggle('modal--visible');
    };

    const removeModal = () => {
        modal.classList.remove('modal--visible');
    };
    
    modalButton.forEach((elem) => {
        elem.addEventListener('click', modalSwitch);
    });
    
    modal.addEventListener('click', function (event) {
        let target = event.target;
        if (target.matches('.modal--visible') || target.matches('.modal__close')) {
            modal.classList.remove('modal--visible');
        } else {
            modal.classList.add('modal--visible');
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.code == "Escape") {
            removeModal();
        }
    }); 

});

// $(document).ready(function () {
   
//     // Модальное окно
//     const modal = $('.modal'),
//         modalButton = $('[data-toggle=modal]');
    
//     modalButton.on('click', function () {
//        modal.toggleClass('modal--visible');
//     });

//     modal.on('click', function (event) {
//         let target = event.target;
//         if (target.matches('.modal--visible') || 
//         target.matches('.modal__close')) {
//             modal.removeClass('modal--visible');
//         } else {
//             modal.addClass('modal--visible');
//         }
//     });

// });