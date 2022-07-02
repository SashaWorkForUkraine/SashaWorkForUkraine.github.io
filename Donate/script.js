function toggle_navbar_list() {
    const navbar_list = document.getElementsByClassName('navbar-list');
    if(navbar_list[0].style.display != "none" && navbar_list[0].style.display != "") navbar_list[0].style.display = "none";
    else navbar_list[0].style.display = 'flex';
}

function copy_to_clipboard(copy_text_id) {
    const copy_text = document.getElementById(copy_text_id);
    navigator.clipboard.writeText(copy_text.textContent);
}