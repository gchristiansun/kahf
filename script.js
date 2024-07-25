window.addEventListener('scroll', function() {
    var overlayImage = document.querySelector('overlayImage');
    if (window.scrollY > 0) {
        overlayImage.classList.add('hidden');
    } else {
        overlayImage.classList.remove('hidden');
    }
    });
    
    