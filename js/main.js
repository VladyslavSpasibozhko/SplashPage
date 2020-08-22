//buttons
const arrow_btn = document.querySelector('.arrow_btn');
const mobile_menu = document.getElementById('mobile_menu');
const close_mob_menu = document.getElementById('close_mob_menu');
const mob_log_in = document.getElementById('mob_log_in');
const form = document.getElementById('header_form');
//other
const ul = document.querySelectorAll('.dd-options');
const mobile_log_form = document.querySelector('.mobile_login');
const dd_sel = document.querySelectorAll('.dd-select');
const mob_login_form = document.querySelector('.mob_login_form');
const text_info = document.querySelector('.text_info');

arrow_btn.onclick = () => {
    text_info.classList.toggle('show_more_text');
    arrow_btn.classList.toggle('btn_press');
};

dd_sel.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('rotate_arrow_lang')
    });
});
ul.forEach(item => {
    item.querySelectorAll('li').forEach(elem => {
       elem.addEventListener('click', ()=> {
           dd_sel.forEach(div => {
              div.classList.remove('rotate_arrow_lang')
           });
       });
    });
});

mobile_menu.addEventListener('click', () => {
    mobile_menu.classList.add('unactive');
    close_mob_menu.classList.add('active');
    mob_login_form.classList.add('active');
});

close_mob_menu.addEventListener('click', () => {
    mobile_menu.classList.remove('unactive');
    close_mob_menu.classList.remove('active');
    mob_login_form.classList.remove('active');
});

mob_log_in.onclick = () => {
    mobile_log_form.classList.toggle('mob_login_form_show');
};

const redirectToSport = (e) => {
    e.preventDefault();
    window.location.href = 'https://mobile.oddsbit.io/';
};
mobile_log_form.addEventListener('submit', redirectToSport);
form.addEventListener('submit', redirectToSport );
