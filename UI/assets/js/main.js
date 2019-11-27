// const selectItems = document.querySelectorAll('.flames-select');
// const toggleSelect = () => {
// 	selectItems.forEach((selectItem) => {
// 		const inputField = selectItem.querySelector('.input-field');
// 		const icon = selectItem.querySelector('.icon-right');
// 		const ul = selectItem.querySelector('.select-item');
// 		inputField.addEventListener('click', () => {
// 			ul.classList.toggle('active');
// 			icon.classList.toggle('active');
// 		});
// 	});
// };
// toggleSelect();

// const filter = document.querySelector('.filter');
// const secNav = document.querySelector('.secondary-nav');

// filter.addEventListener(
// 	'click',
// 	() => {
// 		secNav.classList.toggle('active');
// 	},
// 	null
// );

document.addEventListener(
	'DOMContentLoaded',
	() => {
		let navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		if (navBurgers.length > 0) {
			navBurgers.forEach((element) => {
				element.addEventListener(
					'click',
					() => {
						let target = element.dataset.target;
						let targetId = document.getElementById(target);
						element.classList.toggle('active');
						targetId.classList.toggle('active');
					},
					null
				);
			});
		}
	},
	null
);

// modal
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button-click');
const cancelButtons = document.querySelectorAll('.close-modal');
// const searchBar = document.getElementById('search-bar');

// searchBar.addEventListener('focus', () => {
// 	const modal = [ ...modals ].find((modal) => modal.dataset.id === searchBar.dataset.target);
// 	modal.style.display = 'block';
// });

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = [ ...modals ].find((modal) => modal.dataset.id === button.dataset.target);
		modal.style.display = 'block';
	});
});

cancelButtons.forEach((cancelButton) => {
	cancelButton.addEventListener('click', () => {
		modals.forEach((modal) => {
			modal.style.display = 'none';
		});
	});
});
// dismiss modal when the window is clicked
document.addEventListener('click', (e) => {
	modals.forEach((modal) => {
		if (modal.style.display === 'block') {
			if (e.target.className === 'modal') {
				modal.style.display = 'none';
			}
		}
	});
});

const options = document.querySelectorAll('.option');

[ ...options ].forEach((option) => {
	option.addEventListener('click', () => {
		option.classList.toggle('active');
	});
});

// const navbar = document.querySelector('.navbar');
// const searchBlock = document.querySelector('.search-block');
// const searchForm = document.querySelector('.search-form');
// const injectSearch = document.querySelector('.inject-search');

// function addShadow(e) {
// 	const scrolled = window.scrollY;
// 	const scrollable = document.documentElement.scrollHeight - window.innerHeight;

// 	if (scrolled > 100) {
// 		navbar.style.boxShadow = '0 0px 1px 0 rgba(0, 0, 0, 0.1), 0 0px 0px 0 rgba(0, 0, 0, 0.06)';
// 		navbar.style.borderBottom = '1px solid rgba(238, 238, 238, 0.466)';
// 		searchBlock.style.display = 'none';
// 		injectSearch.appendChild(searchForm);
// 	} else {
// 		navbar.style.borderBottom = 'none';
// 		searchBlock.style.display = 'block';
// 		searchForm.style.display = 'block';
// 	}
// }
// window.addEventListener('scroll', addShadow);

// let lastScrollTop = 0;
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener(
// 	'scroll',
// 	function() {
// 		// or window.addEventListener("scroll"....
// 		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
// 		if (st > lastScrollTop) {
// 			// downscroll code
// 			searchBlock.style.display = 'none';
// 			injectSearch.appendChild(searchForm);
// 		} else {
// 			// upscroll code
// 			// injectSearch.appendChild(searchForm);
// 			searchBlock.style.display = 'block';
// 			searchForm.style.display = 'none';
// 		}
// 		// lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// 	},
// 	false
// );

// let scrollableElement = document.getElementById('body');
// scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

// function findScrollDirectionOtherBrowsers(event) {
// 	let delta;
// 	if (event.wheelDelta) {
// 		delta = event.wheelDelta;
// 	} else {
// 		delta = -1 * event.deltaY;
// 	}
// 	if (delta < 0) {
// 		searchBlock.style.display = 'none';
// 		injectSearch.appendChild(searchForm);
// 		// searchForm.style.display = 'none';
// 		// down
// 	} else if (delta > 0) {
// 		// up

// 		searchBlock.style.display = 'block';
// 	}
// }
