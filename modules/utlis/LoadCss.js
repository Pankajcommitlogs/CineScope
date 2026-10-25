function LoadCss(){
    let cssScript = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css'
    ]
    cssScript.forEach((el)=>{
        let Link = document.createElement('link');
        Link.rel = 'stylesheet';
        Link.href = el;
        document.head.appendChild(Link);
    })
}
export default LoadCss;