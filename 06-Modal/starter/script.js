'use strict';

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-model');
const btnsOpenModal = document.querySelector('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
