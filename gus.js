let openBtn = document.querySelector('.button');
let modalWind = document.querySelector('.modal1');
let closeBtns = document.querySelectorAll('.close-button');
let formbtn = document.querySelector('.modal-button');

let contentContainer = document.querySelector('.modal-content');
let formCotent = contentContainer.innerHTML;
function backForm() {
  contentContainer.innerHTML = formCotent;
}
function openModal() {
  modalWind.classList.add('active-modal');
}
function closeModal() {
  modalWind.classList.remove('active-modal');
}

openBtn.addEventListener('click', openModal);
closeBtns.forEach(el => {
  el.addEventListener('click', closeModal);
});

function addNewContent() {
  contentContainer.innerHTML = `
  <div class="text-success">
          <p class="text-success-thanks">Дякуємо, гусь успішно запущений</p>
          <p class="text-success-adieus">Слава Україні! Героям Слава!</p>
        </div>
  `;
  setTimeout(closeModal, 2000);
  setTimeout(backForm, 2100);
}

formbtn.addEventListener('click', addNewContent);
