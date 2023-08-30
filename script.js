const mobileMenu = document.getElementById('ham-icon');
const dropDown = document.querySelector('.dropdown-content');

// Making the mobile menu work for phone
mobileMenu.addEventListener('click', () => {
    if (dropDown.style.display === '') {
        dropDown.style.display = 'block';
        mobileMenu.src = './images/icon-close.svg';
        document.querySelector('.first-container').style.opacity = '60%';
    } else {
        mobileMenu.src = './images/icon-hamburger.svg';
        dropDown.style.display = '';
        document.querySelector('.first-container').style.opacity = '';
    };
});
