let mySwiper = document.querySelector('.mySwiper');
let swiperWrapper = mySwiper.querySelector('.swiper-wrapper'); // Select the swiper wrapper where slides are placed

let baza = [
    {
        id: 1,
        title: 'Bmw m5 cs',
        hp: '635',
        razgon: '3.1s',
        mator: '4.4 twin turbo',
        rasxod: '15/25',
        cost: '280.000$',
        Image: `https://autoreview.ru/images/Article/1715/Article_171577_860_575.jpg`
    },
    {
        id: 2,
        title: 'Codiak',
        hp: '142',
        razgon: '7s',
        mator: '2l',
        rasxod: '8/12',
        cost: '46.000$',
        Image: `https://avatars.mds.yandex.net/get-verba/937147/2a0000019006d692f9f0535de8e84d389ccb/cattouchret`
    },
    {
        id: 3,
        title: 'Carnival',
        hp: '272',
        razgon: '8.5s',
        mator: '3.5l',
        rasxod: '11/14',
        cost: '100.000$',
        Image: `https://www.kia-favorit.ru/upload/iblock/080/080f20697360b3439a5b44800cf12248.jpg`
    },
    {
        id: 4,
        title: 'bmw X7 m60i',
        hp: '535',
        razgon: '5s',
        mator: '4.4l twin turbo',
        rasxod: '12/16',
        cost: '225.000$',
        Image: `https://vehicle-images.dealerinspire.com/ac57-18003204/5UX33EM09S9W58988/6d64d943594a089525baa22fcbad406e.jpg`
    },
    {
        id: 5,
        title: 'Tracker 2',
        hp: '132',
        razgon: '11s',
        mator: '1.2l turbo',
        rasxod: '6.5/10',
        cost: '20.000$',
        Image: `https://chevrolet.uz/assets/images/tracker/colors/07.png`
    },
    {
        id: 6,
        title: 'Spark',
        hp: '75',
        razgon: '14s',
        mator: '1 l',
        rasxod: '9',
        cost: '8.000$',
        Image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/0_Chevrolet_Spark_%28M300%29_3.jpg/305px-0_Chevrolet_Spark_%28M300%29_3.jpg`
    },
    {
        id: 7,
        title: 'Spark',
        hp: '75',
        razgon: '14s',
        mator: '1 l',
        rasxod: '9',
        cost: '8.000$',
        Image: `https://avatars.mds.yandex.net/get-verba/216201/2a000001804bc7bbf975fdc13c8314eac768/cattouchret`
    },
    {
        id: 8,
        title: 'Camry',
        hp: '200',
        razgon: '7s',
        mator: '3.5 l',
        rasxod: '10',
        cost: '40.000$',
        Image: `https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*`
    }
];

swiperWrapper.innerHTML = '';

baza.map(car => {
    let slide = document.createElement('div');
    slide.classList.add(`swiper-slide`, `flex`, `flex-col`, `justify-center`); 
    
    slide.innerHTML = `
        <img src="${car.Image}" alt="">
        <h3>${car.title}</h3>
        <p>${car.hp} HP</p>
        <p>${car.razgon}</p>
        <p>${car.mator}</p>
        <p>${car.rasxod} L/100km</p>
        <p>${car.cost}</p>
    `;
    
    swiperWrapper.appendChild(slide);
});