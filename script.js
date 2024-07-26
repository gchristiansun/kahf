window.addEventListener('scroll', function() {
    var overlayImage = document.querySelector('.overlayImage');
    if (window.scrollY > 50) {
        overlayImage.classList.add('hidden');
    } else {
        overlayImage.classList.remove('hidden');
    }
    });
    
window.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay_image')
    if (window.innerWidth < 950) {
        overlay.style.display = 'none'
    } 
    });
    
window.addEventListener('scroll', function() {
    var opacitynav = document.querySelector('.containerNav');
    if (window.scrollY > 50) {
        opacitynav.classList.add('containerNavShow');
    } else {
        opacitynav.classList.remove('containerNavShow');
    }
    });