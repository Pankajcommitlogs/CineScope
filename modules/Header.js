import Button from "./components/button/Button.js";

function Header() {
    const navData = {
        logo: 'Cenemax',
        link: [
            {
                href: '/',
                text:'Home'
            },
            {
                href: '/movies',
                text:'Movies'
            },
            {
                href: '/actors',
                text:'Actors'
            },
            {
                href: '/trending',
                text:'Trending'
            }
        ]
    }
    let nav = `
        <header class="fixed">
            <nav class="flex justify-between">
                <a href="/" class="logo">${navData.logo}</a>
                <ul class="appLinks">
                    ${navData.link.map((data)=> `<li><a href=${data.href}>${data.text}</a></li>`).join('')}
                </ul>
                <div class="flex relative">
                    <input type="text" placeholder="Search Movies" class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </nav>
        </header>
    `;
    return nav;
}
export default Header;
