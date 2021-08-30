function bindEvents() {
window.addEventListener('DOMContentLoaded', ExecuteAfterDOM);
document.addEventListener("keydown",keyDownHandler, false);	
document.addEventListener("keyup",keyUpHandler, false);
}