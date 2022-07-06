function toggle_navbar_list() {
    const navbar_list = document.getElementsByClassName('navbar-list');
    if(navbar_list[0].style.display != "none" && navbar_list[0].style.display != "") navbar_list[0].style.display = "none";
    else navbar_list[0].style.display = 'flex';
}