const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightboxImg.src = ""; // clear to avoid flicker
});
