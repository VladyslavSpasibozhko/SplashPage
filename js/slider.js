const slider_node = document.getElementById('slider');

const banners = {
    desktop: [
        './images/banner.png',
        './images/baner-1.png',
        './images/baner-11.png',
        './images/baner-2.png',
        './images/baner-22.png',

    ],
    mobile: [
        './images/mobile/mobile_banner.png',
        './images/mobile/test_mobile_1.png',
        './images/mobile/test_mobile_2.png',

    ]
};

class Slider {
    constructor(images, node){
        this.images = images;
        this.node = node;
        this.counter = 0;
        this.timeoutId = '';

        this.prev_image = this.prev_image.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.changeImageClass = this.changeImageClass.bind(this);

    }

    render(){
        this.node.innerHTML = `
              <a href="https://members.oddsbit.io/Members/Services/OpenAccount/short.asp" class="slider_pages" id="slider_pages"></a> 
              <button class="left btn_fon" id="to_prev">
                    <img src="./images/arrows/left.png" alt="left_arrow">
              </button>
              <button class="right btn_fon" id="to_next">
                    <img src="./images/arrows/right.png" alt="right_arrow">
              </button>
        `

        this.images.map((item, index) => {
            let image = document.createElement('img');
            image.src = item;
            if (index === 0) image.className='active';
            image.setAttribute('data-id',index);
            this.node.querySelector('.slider_pages').appendChild(image)
        });
        this.node.querySelector('#to_prev').addEventListener('click', this.prev_image);
        this.node.querySelector('#to_next').addEventListener('click', this.nextImage);
    };

    changeImageClass(){
        slider_pages.querySelectorAll('img').forEach(item => {
            if (Number(item.dataset.id) === this.counter){
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        });
    }

    disabledOrEnabledBtn(){
        const btn_prev = document.getElementById('to_prev');
        const btn_next = document.getElementById('to_next');
        if (this.counter !== 0) {
            btn_prev.classList.add('btn_fon');
        } else {
            btn_prev.classList.remove('btn_fon');
        }
        if (this.counter !== this.images.length-1) {
            btn_next.classList.add('btn_fon');
        } else {
            btn_next.classList.remove('btn_fon');
        }
    }

    changeSliderPage(){
        this.timeoutId = setTimeout(()=> {
            this.counter++;
            const length = this.images.length;
            if ( this.counter === length) this.counter = 0;
            this.changeImageClass();
            this.changeSliderPage();
            this.disabledOrEnabledBtn();

        },10000);

    };

    prev_image(){
        clearTimeout(this.timeoutId);
        if (this.counter !== 0) {
            this.counter--;
            this.changeImageClass();
            this.disabledOrEnabledBtn()
        }
        this.changeSliderPage();
    }

    nextImage(){
        clearTimeout(this.timeoutId);
        if (this.counter !== this.images.length-1) {
            this.counter++;
            this.changeImageClass();
            this.disabledOrEnabledBtn()
        }
        this.changeSliderPage();
    }
}

let slider;

window.onload = () => {
    let images = [];

    if (window.outerWidth <= 500){
        images = banners.mobile;
    } else {
        images = banners.desktop;
    }

    slider = new Slider(images, slider_node);
    slider.render();
    slider.disabledOrEnabledBtn();
    slider.changeSliderPage();
};

window.onresize = () => {
    let images = [];

    if (window.outerWidth <= 450){
        images = banners.mobile;
    } else {
        images = banners.desktop;
    }

    slider_node.innerHTML = '';
    slider.images = images;
    slider.render();
    slider.disabledOrEnabledBtn();
};
