import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import LoadCss from './modules/utlis/LoadCss.js';
import Banner from './modules/utlis/Banner.js';
LoadCss()
let root = document.getElementById('root');

let Element = [
        Header(),
        Banner(),
        Footer(),
    ];
Element.forEach((el)=>{
    root.insertAdjacentHTML('beforeend', el);
})


let Navlinks  =  document.querySelectorAll('.appLinks a');
const routes = {
    '/': () => Banner(),
    '/movies': () => Movies(),
    '/actors': () => Actors(),
    '/trending': () => Trending(),
}

Navlinks.forEach((link) => 
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const path = link.getAttribute('href');
        console.log(routes[path]);
    })
)