// tab switching logic
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.add('hidden');
    });

    // Remove 'active' from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });

    // Show target tab
    document.getElementById(target).classList.remove('hidden');
    button.classList.add('active');
  });
});

// dynamically load all pictures
function loadPictures() {
  const picturesSection = document.getElementById('pictures');
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  const totalImages = 71;
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `./assets/poze/image${i}.jpeg`;
    img.alt = `Image ${i}`;
    img.className = 'gallery-img';
    gallery.appendChild(img);
  }

  picturesSection.appendChild(gallery);
}

// load when page is ready
document.addEventListener('DOMContentLoaded', loadPictures);
