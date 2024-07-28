// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const openbtn = document.getElementById('openbtn');

    openbtn.addEventListener('click', function() {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
            document.querySelector('.main_content').style.marginLeft = '0';
        } else {
            sidebar.style.width = '250px';
            document.querySelector('.main_content').style.marginLeft = '250px';
        }
    });
});