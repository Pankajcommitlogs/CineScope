function Button(btnClass='', icon='', content ) {
    let button = `<button type="button" class="btn ${btnClass ? btnClass : ''}">${icon ? icon : ''} ${content}</button>`;
    return button;
}
export default Button;