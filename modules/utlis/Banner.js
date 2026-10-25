import Button from "../components/button/Button.js";
const ratingIcon = '<i class="fa-solid fa-star"></i>'
const btnData = [
    {
        headers: [
            {
                icon: '',
                text: 'FEATURED',
                class: 'transparent-red rounded-lg',
            }
        ]
    }
];

const btnData2 = [
    {
        icon: '<i class="fa-solid fa-play"></i>',
        text: 'Watch Trailer',
        class: 'rounded-lg btn-primary',
    },
    {
        icon: '<i class="fa-regular fa-image"></i>',
        text: 'View Images',
        class: 'rounded-lg btn-secndary',
    },
];
const movieInfo = [
    {
        info1:'Year:',
        info2:'2008',
        extraClass:'',
    },
    {
        info1:'Rating:',
        info2: `${ratingIcon} 9.0`,
        extraClass:'bg-warning',
    },
    {
        info1:'Duration:',
        info2:'2h 32m',
        extraClass:'',
    },
];
const ImgVidData = [
    {
        icon: '<i class="fa-solid fa-play"></i>',
        text: 'Watch Trailer',
        class: 'rounded-lg btn-primary',
    },
    {
        icon: '<i class="fa-regular fa-image"></i>',
        text: 'View Images',
        class: 'rounded-lg btn-secndary',
    },
]
function Banner(
    heading = 'The Dark Knight',
    para = 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    buttons = btnData2,
    movieInfos = movieInfo,
    ImgVidDatas = ImgVidData
) {
    return `
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="flex flex-col gap-2">
                            ${Button(btnData[0].headers[0].class,'' ,btnData[0].headers[0].text)}
                            <h1>${heading}</h1>
                            <p>${para}</p>
                            <div class="flex gap-2">
                                ${buttons.map(btn => Button(btn.class,btn.icon, btn.text)).join('')}
                            </div>
                            <div class="flex movieIfno gap-2">
                                ${movieInfos.map(Info => `<div><span>${Info.info1} </span> <span class="bold ${Info.extraClass ? Info.extraClass : ''}">${ Info.info2}</span></div>`).join('')}           
                            </div>
                        </div>
                    </div>
                </div>         
            </div>                
        </section>
    `;
}

export default Banner;