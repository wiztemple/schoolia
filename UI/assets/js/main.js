const selectItems = document.querySelectorAll('.flames-select');
const toggleSelect = () => {
  selectItems.forEach(selectItem => {
    const inputField = selectItem.querySelector('.input-field');
    const icon = selectItem.querySelector('.icon-right');
    const ul = selectItem.querySelector('.select-item');
    inputField.addEventListener('click', () => {
      ul.classList.toggle('active');
      icon.classList.toggle('active');
    })
  })
}
toggleSelect();

const filter = document.querySelector('.filter');
const secNav = document.querySelector('.secondary-nav');

filter.addEventListener('click', () => {
  secNav.classList.toggle('active');
}, null);

document.addEventListener('DOMContentLoaded', () => {
  let navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if (navBurgers.length > 0) {
    navBurgers.forEach(element => {
      element.addEventListener('click', () => {
        let target = element.dataset.target;
        let targetId = document.getElementById(target);
        element.classList.toggle('active');
        targetId.classList.toggle('active');
      }, null)
    })
  }
}, null);

// modal
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button-click');
const cancelButtons = document.querySelectorAll('.close-modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = [...modals].find(modal => modal.dataset.id === button.dataset.target)
    modal.style.display = 'block';
  });
});

cancelButtons.forEach(cancelButton => {
  cancelButton.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  })
})
// dismiss modal when the window is clicked
document.addEventListener('click', e => {
  modals.forEach(modal => {
    if (modal.style.display === 'block') {
      if (e.target.className === 'modal') {
        modal.style.display = 'none';
      }
    }
  });
})

