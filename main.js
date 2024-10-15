"use script";

const container = document.querySelector(".container");
const showPopup = container.querySelector(".container__btn");
const popup = container.querySelector(".reg-popup");
const closePopup = container.querySelector(".reg-popup__close");
const active = "_active";

showPopup.addEventListener("click", () => {
    popup.classList.add(`${active}`);
});

closePopup.addEventListener("click", () => {
    popup.classList.remove(`${active}`);
});



// document.addEventListener("click", (e) => {
//     let target = e.target;
//     const isTarget = target.classList.contains("advanced-filter__container")
//     // const content =

//     if (
//         !target.classList.contains("advanced-filter__container") &&
//         !target.closest(".advanced-filter__container") &&
//         target.classList.contains("advanced-filter__black-fon")
//     ) {
//         mainFilter.classList.remove("show-filter");
//         body.classList.remove("overflow-none");
//     }
// });
