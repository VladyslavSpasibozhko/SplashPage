//desk form
const header_form = document.getElementById('header_form');
const username = header_form.elements.username;
const password = header_form.elements.password;

const join_now_desk = document.querySelector('.join_now_desk');
const lost_desk = document.querySelector('.lost_desk');

//mob log

const mobile_login = document.querySelector('.mobile_login');
const username_mob = mobile_login.elements.username;
const password_mob = mobile_login.elements.password;
const join_now_mob = document.getElementById('mob_join');
const lost_mob = document.querySelector('.mob_lost_log');
const lang_mob = document.querySelector('.lang_mob');
//
const sport_tit = document.querySelector('.sport_tit');
const sport_desc = document.querySelector('.sport_desc');

const games_tit = document.querySelector('.games_tit');
const games_desc = document.querySelector('.games_desc');

const live_casino_tit = document.querySelector('.live_casino_tit');
const live_casino_desc = document.querySelector('.live_cas_desc');

const casino_tit = document.querySelector('.casino_tit');
const casino_desc = document.querySelector('.casino_desc');
//
const textInfo = document.querySelector('.text_info ');
const language = document.querySelector('.lang_tit');
const aff = document.querySelector('.aff');
const terms = document.querySelector('.terms');
const policy = document.querySelector('.policy');

const changeLang = (obj) => {
    username.setAttribute('placeholder', `${obj.username}`);
    password.setAttribute('placeholder', `${obj.password}`);
    join_now_desk.innerText = obj.join_now;
    lost_desk.innerText = obj.lost_log;
    username_mob.setAttribute('placeholder', `${obj.username}`);
    password_mob.setAttribute('placeholder', `${obj.password}`);
    join_now_mob.innerText = obj.join_now;
    lost_mob.innerText = obj.lost_log;
    lang_mob.innerText = obj.language;

    sport_tit.innerText = obj.sport;
    sport_desc.innerText = obj.play_now;
    games_tit.innerText = obj.games;
    games_desc.innerText = obj.bet_now;
    live_casino_tit.innerText = obj.live_cas;
    live_casino_desc.innerText = obj.play_live;
    casino_tit.innerText = obj.casino;
    casino_desc.innerText = obj.spin_now;
    // text_info.innerText = obj.

    language.innerText = obj.language;
    aff.innerText = obj.aff;
    terms.innerText = obj.terms;
    policy.innerText = obj.privacy;
};

const goToHref = (str) => {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    window.location.hash = `${str}`
};

let ddData = [
    {
        text: "English",
        value: 'en',
        selected: true,
        description: "",
        imageSrc: "./images/flags/gb.png",
        background: 'red'
    },
    {
        text: "Български ",
        value: 'bg',
        selected: false,
        description: "",
        imageSrc: "./images/flags/bg.png"
    },
    {
        text: "汉语中文",
        value: 'zh',
        selected: false,
        description: "",
        imageSrc: "./images/flags/cn-2.png"
    },
    {
        text: "漢語中文",
        value: 'zh-tr',
        selected: false,
        description: "",
        imageSrc: "./images/flags/cn-2.png"
    },
    {
        text: "Deutsch",
        value: 'de',
        selected: false,
        description: "",
        imageSrc: "./images/flags/de.png"
    },
    {
        text: "Dansk",
        value: 'dk',
        selected: false,
        description: "",
        imageSrc: "./images/flags/dk.png"
    },
    {
        text: "Español",
        value: 'es',
        selected: false,
        description: "",
        imageSrc: "./images/flags/es.png"
    },
    {
        text: "Ελληνικά",
        value: 'el',
        selected: false,
        description: "",
        imageSrc: "./images/flags/gr.png"
    },
    {
        text: "Italiano",
        value: 'it',
        selected: false,
        description: "",
        imageSrc: "./images/flags/it.png"
    },
    {
        text: "Norsk",
        value: 'no',
        selected: false,
        description: "",
        imageSrc: "./images/flags/no.png"
    },{
        text: "Polski",
        value: 'pl',
        selected: false,
        description: "",
        imageSrc: "./images/flags/pl.png"
    },{
        text: "Português",
        value: 'pt',
        selected: false,
        description: "",
        imageSrc: "./images/flags/pt.png"
    },
    {
        text: "Românâ",
        value: 'ro',
        selected: false,
        description: "",
        imageSrc: "./images/flags/ro.png"
    },
    {
        text: "Sveska",
        value: 'sv',
        selected: false,
        description: "",
        imageSrc: "./images/flags/se.png"
    },
    {
        text: "Česky",
        value: 'cs',
        selected: false,
        description: "",
        imageSrc: "./images/flags/czech-republic.png"
    },
    {
        text: "Slovinčina",
        value: 'sk',
        selected: false,
        description: "",
        imageSrc: "./images/flags/slovakia.png"
    },
    {
        text: "Eesti",
        value: 'et',
        selected: false,
        description: "",
        imageSrc: "./images/flags/estonia.png"
    },
    {
        text: "Nederlands",
        value: 'ndr',
        selected: false,
        description: "",
        imageSrc: "./images/flags/netherlands.png"
    },
    {
        text: "Русский",
        value: 'ru',
        selected: false,
        description: "",
        imageSrc: "./images/flags/russia.png"
    },
    {
        text: "Magyar",
        value: 'hu',
        selected: false,
        description: "",
        imageSrc: "./images/flags/hungary.png"
    }
];

const eng = {
    username: "Username",
    password: "Password",
    join_now: "Join Now",
    lost_log: "Lost Login?",
    sport:" Sport",
    casino: "Casino",
    live_cas: "Live Casino",
    games: "Games",
    bet_now: "Bet Now",
    spin_now:"Spin Now",
    play_now: "Play Now",
    play_live:" Play Live",
    language: "Language",
    aff:"Affiliates",
    terms: "Terms&Conditions",
    privacy: "Privacy Policy"
};
const pg = {
    username: "Utilizador",
    password: "Palavra-passe",
    join_now: "Registe-se",
    lost_log: "Recuperar Dados",
    sport:" Desportos",
    casino: "Casino",
    live_cas: "Casino Ao-Vivo",
    games: "Jogos",
    bet_now: "Aposte Agora",
    spin_now:"Girar agora",
    play_now: "Jogue agora",
    play_live:" Tocar ao vivo",
    language: "Idioma",
    aff:"Afiliados",
    terms: "Termos e Condições",
    privacy: "Política de Privacidade"
};

$('#language_select').ddslick({
    data: ddData,
    width: 100,
    height: 50,
    background: '#399a9e',
    border:'none',
    clickOffToClose:false,
    embedCSS: false,
    imagePosition: "right",
    selectText: "English",
    onSelected: function (data) {
        if(data.selectedData.value === 'pt'){
            changeLang(pg)
        } else {
            changeLang(eng)
        }
        goToHref(data.selectedData.value)
    }
});
$('#mobile_lang').ddslick({
    data: ddData,
    width: 100,
    height: 50,
    background: '#399a9e',
    border:'none',
    clickOffToClose:false,
    embedCSS: false,
    imagePosition: "right",
    selectText: "English",
    onSelected: function (data) {
        if(data.selectedData.value === 'pt'){
            changeLang(pg)
        } else {
            changeLang(eng)
        }
        goToHref(data.selectedData.value)
    }
});
