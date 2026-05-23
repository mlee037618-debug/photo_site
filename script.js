// Local photo files from /photos directory
const photoEntries = [
  { fileName: "DSC01389.jpg" },
  { fileName: "DSC01407.jpg" },
  { fileName: "DSC01410.jpg" },
  { fileName: "DSC01437.jpg" },
  { fileName: "DSC01448.jpg" },
  { fileName: "DSC01454.jpg" },
  { fileName: "DSC01457.jpg" },
  { fileName: "DSC01464.jpg" },
  { fileName: "DSC01471.jpg" },
  { fileName: "DSC01491.jpg" },
  { fileName: "DSC01492.jpg" },
  { fileName: "DSC01496.jpg" },
  { fileName: "DSC01499.jpg" },
  { fileName: "DSC01500-2.jpg" },
  { fileName: "DSC01503.jpg" },
  { fileName: "DSC01509.jpg" },
  { fileName: "DSC01529.jpg" },
  { fileName: "DSC01542.jpg" },
  { fileName: "DSC01566.jpg" },
  { fileName: "DSC01571.jpg" },
  { fileName: "DSC01572-2.jpg" },
  { fileName: "DSC01572.jpg" },
  { fileName: "DSC01597.jpg" },
  { fileName: "DSC01608.jpg" },
  { fileName: "DSC01613.jpg" },
  { fileName: "DSC01614.jpg" },
  { fileName: "DSC01619.jpg" },
  { fileName: "DSC01621.jpg" },
  { fileName: "DSC01627.jpg" },
  { fileName: "DSC01630.jpg" },
  { fileName: "DSC01660-2.jpg" },
  { fileName: "DSC01660.jpg" },
  { fileName: "DSC01682.jpg" },
  { fileName: "DSC01689-2.jpg" },
  { fileName: "DSC01689-3.jpg" },
  { fileName: "DSC01689.jpg" },
  { fileName: "DSC01694.jpg" },
  { fileName: "DSC01701-2.jpg" },
  { fileName: "DSC01701.jpg" },
  { fileName: "DSC01710.jpg" },
  { fileName: "DSC01712.jpg" },
  { fileName: "DSC01730.jpg" },
  { fileName: "DSC01734.jpg" },
  { fileName: "DSC01852-2.jpg" },
  { fileName: "DSC01852.jpg" },
  { fileName: "DSC01856-2.jpg" },
  { fileName: "DSC01856.jpg" },
  { fileName: "DSC01857-2.jpg" },
  { fileName: "DSC01857.jpg" },
  { fileName: "DSC01858-2.jpg" },
  { fileName: "DSC01858.jpg" },
  { fileName: "DSC01866-2.jpg" },
  { fileName: "DSC01866.jpg" },
  { fileName: "DSC01872-2.jpg" },
  { fileName: "DSC01872.jpg" },
  { fileName: "DSC01877-2.jpg" },
  { fileName: "DSC01877.jpg" },
  { fileName: "DSC01880-2.jpg" },
  { fileName: "DSC01880.jpg" },
  { fileName: "DSC01882-2.jpg" },
  { fileName: "DSC01882.jpg" },
  { fileName: "DSC01883-2.jpg" },
  { fileName: "DSC01883.jpg" },
  { fileName: "DSC01885-2.jpg" },
  { fileName: "DSC01885.jpg" },
  { fileName: "DSC01888-2.jpg" },
  { fileName: "DSC01888.jpg" },
  { fileName: "DSC01897-2.jpg" },
  { fileName: "DSC01897.jpg" },
  { fileName: "DSC01898-2.jpg" },
  { fileName: "DSC01898.jpg" },
  { fileName: "DSC01900-2.jpg" },
  { fileName: "DSC01900.jpg" },
  { fileName: "DSC01902-2.jpg" },
  { fileName: "DSC01902.jpg" },
  { fileName: "DSC01904-2.jpg" },
  { fileName: "DSC01904.jpg" },
  { fileName: "DSC01912-2.jpg" },
  { fileName: "DSC01912.jpg" },
  { fileName: "DSC01922-2.jpg" },
  { fileName: "DSC01922.jpg" },
  { fileName: "DSC01926-2.jpg" },
  { fileName: "DSC01926.jpg" },
  { fileName: "DSC01930-2.jpg" },
  { fileName: "DSC01930.jpg" },
  { fileName: "DSC01948-2.jpg" },
  { fileName: "DSC01948.jpg" },
  { fileName: "DSC01949-2.jpg" },
  { fileName: "DSC01949.jpg" },
  { fileName: "DSC01950-2.jpg" },
  { fileName: "DSC01950.jpg" },
  { fileName: "DSC01951-2.jpg" },
  { fileName: "DSC01951.jpg" },
  { fileName: "DSC01963-2.jpg" },
  { fileName: "DSC01963.jpg" },
  { fileName: "DSC01964-2.jpg" },
  { fileName: "DSC01964.jpg" },
  { fileName: "DSC01966-2.jpg" },
  { fileName: "DSC01966.jpg" },
  { fileName: "DSC01971-2.jpg" },
  { fileName: "DSC01971.jpg" },
  { fileName: "DSC01978-2.jpg" },
  { fileName: "DSC01978.jpg" },
  { fileName: "DSC02001-2.jpg" },
  { fileName: "DSC02001.jpg" },
  { fileName: "DSC02004-2.jpg" },
  { fileName: "DSC02004.jpg" },
  { fileName: "DSC02013-2.jpg" },
  { fileName: "DSC02013.jpg" },
  { fileName: "DSC02014-2.jpg" },
  { fileName: "DSC02014.jpg" },
  { fileName: "DSC02034.jpg" },
  { fileName: "DSC02040.jpg" },
  { fileName: "DSC02041.jpg" },
  { fileName: "DSC02042.jpg" },
  { fileName: "DSC02043.jpg" },
  { fileName: "DSC02044.jpg" },
  { fileName: "DSC02062.jpg" },
  { fileName: "DSC02075.jpg" },
  { fileName: "DSC02108-2.jpg" },
  { fileName: "DSC02151.jpg" },
  { fileName: "DSC02164-2.jpg" },
  { fileName: "DSC02164.jpg" },
  { fileName: "DSC02170-2.jpg" },
  { fileName: "DSC02170.jpg" },
  { fileName: "DSC02174.jpg" },
  { fileName: "DSC02189.jpg" },
  { fileName: "DSC02199.jpg" },
  { fileName: "DSC02200.jpg" },
  { fileName: "DSC02241.jpg" },
  { fileName: "DSC02244.jpg" },
  { fileName: "DSC02248.jpg" },
  { fileName: "DSC02252.jpg" },
  { fileName: "DSC02253.jpg" },
  { fileName: "DSC02259.jpg" },
  { fileName: "DSC02260.jpg" },
  { fileName: "DSC02266.jpg" },
  { fileName: "DSC02277.jpg" },
  { fileName: "DSC02284.jpg" },
  { fileName: "DSC02287.jpg" },
  { fileName: "DSC02289.jpg" },
  { fileName: "DSC02292.jpg" },
  { fileName: "DSC02301-2.jpg" },
  { fileName: "DSC02309-2.jpg" },
  { fileName: "DSC02310.jpg" },
  { fileName: "DSC02344.jpg" },
  { fileName: "DSC02345.jpg" },
  { fileName: "DSC02349.jpg" },
  { fileName: "DSC02392.jpg" },
  { fileName: "DSC02413.jpg" },
  { fileName: "DSC02416.jpg" },
  { fileName: "DSC02423.jpg" },
  { fileName: "DSC02427.jpg" },
  { fileName: "DSC02431.jpg" },
  { fileName: "DSC02432-2.jpg" },
  { fileName: "DSC02434.jpg" },
  { fileName: "DSC02440.jpg" },
  { fileName: "DSC02441.jpg" },
  { fileName: "DSC02443-2.jpg" },
  { fileName: "DSC02443.jpg" },
  { fileName: "DSC02444.jpg" },
  { fileName: "DSC02446-2.jpg" },
  { fileName: "DSC02446.jpg" },
  { fileName: "DSC02450-2.jpg" },
  { fileName: "DSC02453.jpg" },
  { fileName: "DSC02459.jpg" },
  { fileName: "DSC02466.jpg" },
  { fileName: "DSC02470.jpg" },
  { fileName: "DSC02476.jpg" },
  { fileName: "DSC02479.jpg" },
  { fileName: "DSC02486.jpg" },
  { fileName: "DSC02516.jpg" },
  { fileName: "DSC02519.jpg" },
  { fileName: "DSC02521.jpg" },
  { fileName: "DSC02528.jpg" },
  { fileName: "DSC02530.jpg" },
  { fileName: "DSC02558.jpg" },
  { fileName: "DSC02572.jpg" },
  { fileName: "DSC02573.jpg" },
  { fileName: "DSC02576.jpg" },
  { fileName: "DSC02582.jpg" },
  { fileName: "DSC02583.jpg" },
  { fileName: "DSC02584.jpg" },
  { fileName: "DSC02591.jpg" },
  { fileName: "DSC02601.jpg" },
  { fileName: "DSC02604.jpg" },
  { fileName: "DSC02618.jpg" },
  { fileName: "DSC02679.jpg" },
  { fileName: "DSC02682.jpg" },
  { fileName: "DSC02697.jpg" },
  { fileName: "DSC02698.jpg" },
  { fileName: "DSC02699-2.jpg" },
  { fileName: "DSC02699.jpg" },
  { fileName: "DSC02701.jpg" },
  { fileName: "DSC02703.jpg" },
  { fileName: "DSC02704.jpg" },
  { fileName: "DSC02708.jpg" },
  { fileName: "DSC02709.jpg" },
  { fileName: "DSC02713.jpg" },
  { fileName: "DSC02719.jpg" },
  { fileName: "DSC02720.jpg" },
  { fileName: "DSC02721.jpg" },
  { fileName: "DSC02722.jpg" },
  { fileName: "DSC02724.jpg" },
  { fileName: "DSC02726.jpg" },
  { fileName: "DSC02735.jpg" },
  { fileName: "DSC02741.jpg" },
  { fileName: "DSC02743.jpg" },
  { fileName: "DSC02749.jpg" },
  { fileName: "DSC02754.jpg" },
  { fileName: "DSC02762.jpg" },
  { fileName: "DSC02763.jpg" },
  { fileName: "DSC02764.jpg" },
  { fileName: "DSC02768.jpg" },
  { fileName: "DSC02772.jpg" },
  { fileName: "DSC02775.jpg" },
  { fileName: "DSC02777.jpg" },
  { fileName: "DSC02778.jpg" },
  { fileName: "DSC02780.jpg" },
  { fileName: "DSC02783.jpg" },
  { fileName: "DSC02785.jpg" },
  { fileName: "DSC02791.jpg" },
  { fileName: "DSC02806.jpg" },
  { fileName: "DSC02808.jpg" },
  { fileName: "DSC02836-2.jpg" },
  { fileName: "DSC02837-2.jpg" },
  { fileName: "DSC02838.jpg" },
  { fileName: "DSC02839.jpg" },
  { fileName: "DSC02845.jpg" },
  { fileName: "DSC02852.jpg" },
  { fileName: "DSC02861.jpg" },
  { fileName: "DSC02868.jpg" },
  { fileName: "DSC02875.jpg" },
  { fileName: "DSC02877.jpg" },
  { fileName: "DSC02878.jpg" },
  { fileName: "DSC02880.jpg" },
  { fileName: "DSC02881.jpg" },
  { fileName: "DSC02900.jpg" },
  { fileName: "DSC02902.jpg" },
  { fileName: "DSC02906.jpg" },
  { fileName: "DSC02914.jpg" },
  { fileName: "DSC02928.jpg" },
  { fileName: "DSC02939.jpg" },
  { fileName: "DSC02972.jpg" },
  { fileName: "DSC02982.jpg" },
  { fileName: "DSC02984.jpg" },
  { fileName: "DSC02987.jpg" },
  { fileName: "DSC02988.jpg" },
  { fileName: "DSC02989.jpg" },
  { fileName: "DSC02990.jpg" },
  { fileName: "DSC03005.jpg" },
  { fileName: "DSC03015.jpg" },
  { fileName: "DSC03021.jpg" },
  { fileName: "DSC03027.jpg" },
  { fileName: "DSC03033.jpg" },
  { fileName: "DSC03034.jpg" },
  { fileName: "DSC03055.jpg" },
  { fileName: "DSC03061.jpg" },
  { fileName: "DSC03109.jpg" },
  { fileName: "DSC03113.jpg" },
  { fileName: "DSC03118.jpg" },
  { fileName: "DSC03122.jpg" },
  { fileName: "DSC03123.jpg" },
  { fileName: "DSC03127.jpg" },
  { fileName: "DSC03134.jpg" },
  { fileName: "DSC03185.jpg" },
  { fileName: "DSC03186.jpg" },
  { fileName: "DSC03188.jpg" },
  { fileName: "DSC03189.jpg" },
  { fileName: "DSC03194.jpg" },
  { fileName: "DSC03219.jpg" },
  { fileName: "DSC03222.jpg" },
  { fileName: "DSC03223.jpg" },
  { fileName: "DSC03245.jpg" },
  { fileName: "DSC03268.jpg" },
  { fileName: "DSC03277.jpg" },
  { fileName: "DSC03303.jpg" },
  { fileName: "DSC03304.jpg" },
  { fileName: "DSC03305.jpg" },
  { fileName: "DSC03306.jpg" },
  { fileName: "DSC03307.jpg" },
  { fileName: "DSC03308.jpg" },
  { fileName: "DSC03309.jpg" },
  { fileName: "DSC03312.jpg" },
  { fileName: "DSC03313.jpg" },
  { fileName: "DSC03314.jpg" },
  { fileName: "DSC03315.jpg" },
  { fileName: "DSC03317.jpg" },
  { fileName: "DSC03321.jpg" },
  { fileName: "DSC03325.jpg" },
  { fileName: "DSC03328.jpg" },
  { fileName: "DSC03330.jpg" },
  { fileName: "DSC03333.jpg" },
  { fileName: "DSC03336.jpg" },
  { fileName: "DSC03343.jpg" },
  { fileName: "DSC03345.jpg" },
  { fileName: "DSC03359.jpg" },
  { fileName: "DSC03362.jpg" },
  { fileName: "DSC03383.jpg" },
  { fileName: "DSC03388.jpg" },
  { fileName: "DSC03391.jpg" },
  { fileName: "DSC03392.jpg" },
  { fileName: "DSC03394.jpg" },
  { fileName: "DSC03399.jpg" },
  { fileName: "DSC03400.jpg" },
  { fileName: "DSC03404.jpg" },
  { fileName: "DSC03405.jpg" },
  { fileName: "DSC03406.jpg" },
  { fileName: "DSC03412.jpg" },
  { fileName: "DSC03417.jpg" },
  { fileName: "DSC03420.jpg" },
  { fileName: "DSC03424.jpg" },
  { fileName: "DSC03426.jpg" },
  { fileName: "DSC03430.jpg" },
  { fileName: "DSC03431.jpg" },
  { fileName: "DSC03433.jpg" },
  { fileName: "DSC03438.jpg" },
  { fileName: "DSC03445.jpg" },
  { fileName: "DSC03447.jpg" },
  { fileName: "DSC03450.jpg" },
  { fileName: "DSC03455.jpg" },
  { fileName: "DSC03464.jpg" },
  { fileName: "DSC03484-2.jpg" },
  { fileName: "DSC03484.jpg" },
  { fileName: "DSC03489.jpg" },
  { fileName: "DSC03490.jpg" },
  { fileName: "DSC03492.jpg" },
  { fileName: "DSC03495.jpg" },
  { fileName: "DSC03498.jpg" },
  { fileName: "DSC03505.jpg" },
  { fileName: "DSC03510.jpg" },
  { fileName: "DSC03511.jpg" },
  { fileName: "DSC03512.jpg" },
  { fileName: "DSC03516.jpg" },
  { fileName: "DSC03517.jpg" },
  { fileName: "DSC03518.jpg" },
  { fileName: "DSC03520.jpg" },
  { fileName: "DSC03521.jpg" },
  { fileName: "DSC03630.jpg" },
  { fileName: "DSC03641.jpg" },
  { fileName: "DSC03644.jpg" },
  { fileName: "DSC03666.jpg" },
  { fileName: "DSC03686.jpg" },
  { fileName: "DSC03690.jpg" },
  { fileName: "DSC03695.jpg" },
  { fileName: "DSC03698.jpg" },
  { fileName: "DSC03705.jpg" },
  { fileName: "DSC03708.jpg" },
  { fileName: "DSC03715.jpg" },
  { fileName: "DSC03729.jpg" },
  { fileName: "DSC03732.jpg" },
  { fileName: "DSC03740.jpg" },
  { fileName: "DSC03743.jpg" },
  { fileName: "DSC03749.jpg" },
  { fileName: "DSC03752.jpg" },
  { fileName: "DSC03754.jpg" },
  { fileName: "DSC03757.jpg" },
  { fileName: "DSC03766.jpg" },
  { fileName: "DSC03771.jpg" },
  { fileName: "DSC03781.jpg" },
  { fileName: "DSC03789.jpg" },
];

const categories = ['landscape', 'portrait', 'travel'];
const photoBatchSize = 30;
let activeCategory = 'all';
let currentIndex = 0;
let visiblePhotos = [];

const filterButtons = document.querySelectorAll('.filter-button');
const galleryGrid = document.getElementById('galleryGrid');
const loadMoreButton = document.getElementById('loadMore');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const scrollGallery = document.getElementById('scrollGallery');

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    const dataSrc = img.dataset.src;
    if (dataSrc) {
      img.src = dataSrc;
      img.removeAttribute('data-src');
    }
    observer.unobserve(img);
  });
}, {
  rootMargin: '200px 0px',
  threshold: 0.1,
});

function getPhotoCaption(photo) {
  return photo.title || createCaption(photo.fileName);
}

function createCaption(fileName) {
  return fileName
    .replace(/[-_]/g, ' ')
    .replace(/\.jpg$/i, '')
    .replace(/\b(DSC|IMG)\b/gi, '')
    .trim() || 'Photo';
}

function getCategory(index) {
  return categories[index % categories.length];
}

function getFilteredPhotos() {
  return photoEntries
    .map((photo, index) => ({
      ...photo,
      category: photo.category || getCategory(index),
    }))
    .filter(photo => activeCategory === "all" || photo.category === activeCategory);
}

function createGalleryItem(photo) {
  const caption = getPhotoCaption(photo);
  const item = document.createElement("article");

  item.className = "gallery-item";
  item.dataset.category = photo.category;
  item.innerHTML = `
    <img data-src="photos/thumbs/${photo.fileName}" data-full="photos/${photo.fileName}" alt="${caption}" loading="lazy" />
    <h3>${caption}</h3>
  `;

  const img = item.querySelector("img");
  intersectionObserver.observe(img);

  item.addEventListener("click", () => {
    const fullSrc = img.dataset.full || img.src || img.dataset.src;
    openLightbox(fullSrc, caption);
  });

  return item;
}

function renderGallery(reset = false) {
  if (reset) {
    currentIndex = 0;
    galleryGrid.innerHTML = '';
    visiblePhotos = getFilteredPhotos();
  }

  const nextPhotos = visiblePhotos.slice(currentIndex, currentIndex + photoBatchSize);

  nextPhotos.forEach(photo => {
    galleryGrid.appendChild(createGalleryItem(photo));
  });

  currentIndex += nextPhotos.length;
  loadMoreButton.classList.toggle('hidden', currentIndex >= visiblePhotos.length);
  loadMoreButton.disabled = currentIndex === 0;
}

function setActiveFilter(category) {
  activeCategory = category;
  filterButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.category === category);
  });
  renderGallery(true);
}

function openLightbox(imgSrc, caption) {
  lightboxImage.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove('hidden');
}

function closeLightboxPanel() {
  lightbox.classList.add('hidden');
  lightboxImage.src = '';
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    setActiveFilter(button.dataset.category);
  });
});

loadMoreButton.addEventListener('click', () => {
  renderGallery(false);
});

closeLightbox.addEventListener('click', closeLightboxPanel);
lightboxBackdrop.addEventListener('click', closeLightboxPanel);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
    closeLightboxPanel();
  }
});

scrollGallery.addEventListener('click', () => {
  document.getElementById('gallerySection').scrollIntoView({ behavior: 'smooth' });
});

setActiveFilter('all');
