const socialIons = {
    facebook:'<i class="fa-brands fa-facebook-f"></i>',
    XTwitter:'<i class="fa-brands fa-x-twitter"></i>',
    youtube:'<i class="fa-brands fa-youtube"></i>',
    instagram:'<i class="fa-brands fa-instagram"></i>',
}

let {facebook, XTwitter, youtube, instagram} = socialIons;

const footerLink = [
    {
        LinkText : 'About',
        LinkHref : '/about'
    },
    {
        LinkText : 'Contact',
        LinkHref : '/contact'
    },
    {
        LinkText : 'Privacy Policy',
        LinkHref : '/privacy-policy'
    },
    {
        LinkText : 'Terms of service',
        LinkHref : '/terms-condition'
    },
]
const socialLinks = [
    {
        LinkIcon: facebook,
        LinkHref : 'https://www.facebook.com/'
    },
    {
        LinkIcon : XTwitter,
        LinkHref : 'https://www.x.com/'
    },
    {
        LinkIcon : instagram,
        LinkHref : 'https://www.instagram.com/'
    },
    {
        LinkIcon : youtube,
        LinkHref : 'https://www.youtube.com/'
    },
]
function Footer(Logo, LogoPara){
    return (
        `
        <footer class="footer border-top">
            <div class="container">
                <div class="row justify-between">
                    <div class="col-4">
                        <h4 class="logo">${Logo= 'Cinemax'}</h4>
                        <p>${LogoPara = 'Your ultimate destination for discovering and watching the best movies. Stream thousands of titles anytime, anywhere.'}</p>
                    </div>
                    <div class="col-4">
                        <h4>Quick Links</h4>
                        <ul class="list-unstyled">
                            ${footerLink.map((link)=> `<li><a href="${link.LinkHref}">${link.LinkText}</a></li>`).join('')}
                        </ul>
                    </div>
                    <div class="col-4">
                        <h4>Follow Us</h4>
                        <ul class="list-unstyled flex gap-2 socialLinks">
                            ${socialLinks.map((link)=> `<li><a href="${link.LinkHref}">${link.LinkIcon}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container border-top mt-5">
                
            </div>
        </footer>
        `
    )
}
export default Footer;