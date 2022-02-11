//Menu de naveegacion mobil
let btnOpen = document.getElementById('btnOpen');
let navMobile = document.getElementById('navMobile');
let contentItem = document.getElementById('contentMobile');

btnOpen.addEventListener('click', () => {
    navMobile.classList.add('active');
    setTimeout(() => {
        contentItem.classList.add('active');
    }, 300);
});

navMobile.addEventListener('mouseup', () => {
    contentItem.classList.remove('active');
    setTimeout(() => {
        navMobile.classList.remove('active');
    }, 400);
});