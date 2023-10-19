//PRIMER VIDEO
const openModal = document.querySelector('.btn_v');
const modal = document.querySelector('.modal_V');
const closeModal = document.querySelector('.modal_close_V');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
   modal.classList.add('modal--show')
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
   modal.classList.remove('modal--show')
});

//SEGUNDO VIDEO
const openModalV2 = document.querySelector('.btn_v1');
const modalV2 = document.querySelector('.modal_V2');
const closeModalV2 = document.querySelector('.modal_close_V2');

openModalV2.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV2.classList.add('modal--show')
});

closeModalV2.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV2.classList.remove('modal--show')
});

//TERCER VIDEO
const openModalV3 = document.querySelector('.btn_v2');
const modalV3 = document.querySelector('.modal_V3');
const closeModalV3 = document.querySelector('.modal_close_V3');

openModalV3.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV3.classList.add('modal--show')
});

closeModalV3.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV3.classList.remove('modal--show')
});

//CUARTO VIDEO
const openModalV4 = document.querySelector('.btn_v3');
const modalV4 = document.querySelector('.modal_V4');
const closeModalV4 = document.querySelector('.modal_close_V4');

openModalV4.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV4.classList.add('modal--show')
});

closeModalV4.addEventListener('click', (e)=>{
    e.preventDefault();
   modalV4.classList.remove('modal--show')
});