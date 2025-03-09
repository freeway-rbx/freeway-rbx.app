/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



  async function getDownloadURLs() {  
    const a = await fetch("https://api.github.com/repos/freeway-rbx/freeway/releases/latest") 
    const b = await a.json()
    const macAssets = b.assets.filter((asset) => asset.name.endsWith(".dmg"))
    const macDownloadUrl = macAssets[0].browser_download_url
    const winAssets = b.assets.filter((asset) => asset.name.endsWith("setup.exe"))
    const winDownloadUrl = winAssets[0].browser_download_url

    document.getElementById('macDownloadLink').href = macDownloadUrl;
    document.getElementById('winDownloadLink').href = winDownloadUrl;

    document.getElementById('macDownloadLinkFooter').href = macDownloadUrl;
    document.getElementById('winDownloadLinkFooter').href = winDownloadUrl;

  }


  getDownloadURLs()

});
