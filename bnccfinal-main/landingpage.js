function toggleMenu(){
    const menu = document.querySelector(".links");
    const icon = document.querySelector(".hamburg-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const getItems = document.querySelectorAll(".left-side ul li a");
const explanations = document.querySelectorAll(".right-side ul li .explanation");

getItems.forEach((item, index) => {
    item.addEventListener("click", function(e){
        getItems.forEach(item => item.classList.remove("active"));
        explanations.forEach(explanation => explanation.classList.remove("active"));
        this.classList.add("active");
        explanations[index].classList.add("active");
    });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});