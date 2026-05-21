/* ========== Gallery Registry ========== */
// Store gallery data in JS instead of HTML attributes to avoid encoding issues
var galleryRegistry = {};
var galleryIdCounter = 0;

/* ========== Get Category from URL ========== */
(function() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'video';
  const extra = params.get('extra') || '';
  const groupFilter = params.get('group') || '';
  var cat = portfolioData[type];

  if (!cat) {
    window.location.href = 'index.html';
    return;
  }

  // Merge extra content
  if (extra === 'intern-videos' && type === 'video' && portfolioData.internship) {
    cat = JSON.parse(JSON.stringify(cat));
    var internVideoGroup = portfolioData.internship.groups.find(function(g) {
      return g.label === '实习视频作品';
    });
    if (internVideoGroup) {
      cat.groups.push({ label: '实习视频作品', items: internVideoGroup.items });
    }
  }

  // Content ops: marketing groups + planning + internship videos
  if (extra === 'content-ops' && type === 'marketing') {
    cat = JSON.parse(JSON.stringify(cat));
    // Keep only 游戏营销推广 and 软件 & 活动推广 from marketing
    cat.groups = cat.groups.filter(function(g) {
      return g.label === '游戏营销推广' || g.label === '软件 & 活动推广';
    });
    // Add planning items as a group
    if (portfolioData.planning && portfolioData.planning.items) {
      cat.groups.push({ label: '策划方案', items: portfolioData.planning.items.map(function(item) {
        return { title: item.title, desc: item.desc, src: item.src, type: item.type, icon: item.icon };
      })});
    }
    // Add internship videos
    if (portfolioData.internship) {
      var ivGroup = portfolioData.internship.groups.find(function(g) { return g.label === '实习视频作品'; });
      if (ivGroup) {
        cat.groups.push({ label: '实习视频作品', items: ivGroup.items });
      }
    }
    cat.name = '内容运营';
    cat.icon = '📱';
    cat.desc = '游戏营销推广、品牌活动推广、策划方案与实习视频作品合集。';
  }

  // Filter to specific group if group parameter is set
  if (groupFilter && cat.groups) {
    cat = JSON.parse(JSON.stringify(cat));
    cat.groups = cat.groups.filter(function(g) {
      return g.label === groupFilter;
    });
  }

  // Back link: hero tags → back to top; works cards → back to #works
  const from = params.get('from') || 'works';
  const backLink = document.getElementById('backLink');
  if (backLink) {
    if (from === 'hero') {
      backLink.href = 'index.html';
      backLink.addEventListener('click', function(e) {
        if (document.referrer && document.referrer.indexOf('index.html') !== -1) {
          e.preventDefault();
          history.back();
        }
      });
    } else {
      backLink.href = 'index.html#works';
    }
  }

  // Set nav title
  const navTitle = document.getElementById('categoryNavTitle');
  if (navTitle) navTitle.textContent = cat.name;

  document.title = cat.name + ' | 张凯丽作品集';

  // Render header
  const header = document.getElementById('categoryHeader');
  header.innerHTML = `
    <div class="cat-header">
      <div class="cat-icon">${cat.icon}</div>
      <h2>${cat.name}</h2>
      <p>${cat.desc}</p>
    </div>`;

  // Render content
  const content = document.getElementById('categoryContent');

  if (cat.groups) {
    content.innerHTML = cat.groups.map(function(group) {
      return `
        <div class="cat-group">
          <h3 class="cat-group-label">${group.label}</h3>
          <div class="cat-item-grid">
            ${group.items.map(function(item, idx) {
              return renderItem(item, group.label + '-' + idx);
            }).join('')}
          </div>
        </div>`;
    }).join('');
  } else if (cat.items) {
    const isDoc = cat.items[0] && cat.items[0].type === 'doc';
    if (isDoc) {
      content.innerHTML = `
        <div class="cat-doc-grid">
          ${cat.items.map(function(item) { return renderDocItem(item); }).join('')}
        </div>`;
    } else {
      content.innerHTML = `
        <div class="cat-item-grid">
          ${cat.items.map(function(item, idx) {
            return renderItem(item, 'simple-' + idx);
          }).join('')}
        </div>`;
    }
  }

  // Collect all lightbox items and bind events
  initLightbox();
})();

/* ========== Render Functions ========== */
function renderItem(item, id) {
  if (item.type === 'placeholder') {
    return `
      <div class="cat-item-placeholder">
        <div class="ph-icon">&#127916;</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="size-tag">${item.size || '大文件'}</span>
        <p style="font-size:0.75rem;color:var(--text-secondary);">文件较大，请通过网盘或视频平台查看完整版</p>
      </div>`;
  }

  if (item.type === 'video') {
    return `
      <div class="cat-item-card" data-lightbox="video" data-src="${item.src}" data-title="${item.title}" data-desc="${item.desc}" data-group="${item.group || ''}" data-id="${id}">
        <div class="cat-item-thumb">
          <video src="${item.src}" preload="metadata" muted loop playsinline></video>
        </div>
        <div class="cat-item-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>`;
  }

  if (item.type === 'image') {
    return `
      <div class="cat-item-card" data-lightbox="image" data-src="${item.src}" data-title="${item.title}" data-desc="${item.desc}" data-group="${item.group || ''}" data-id="${id}">
        <div class="cat-item-thumb">
          <img src="${item.src}" alt="${item.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=thumb-icon>&#127912;</span>';">
        </div>
        <div class="cat-item-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>`;
  }

  if (item.type === 'doc') {
    return `
      <a class="cat-doc-card" href="${item.src}" download>
        <div class="doc-icon">${item.icon || '&#128196;'}</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="doc-type">${item.src.split('.').pop().toUpperCase()}</span>
      </a>`;
  }

  if (item.type === 'gallery') {
    const gid = 'gallery-' + (++galleryIdCounter);
    galleryRegistry[gid] = { images: item.gallery, viewMode: item.viewMode || 'slideshow' };
    return `
      <div class="cat-item-card cat-item-gallery" data-lightbox="gallery" data-gallery-id="${gid}" data-title="${item.title}" data-desc="${item.desc}">
        <div class="cat-item-thumb">
          <img src="${item.thumb || item.gallery[0].src}" alt="${item.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <span class="gallery-badge">${item.gallery.length}张</span>
        <div class="cat-item-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>`;
  }

  return '';
}

function renderDocItem(item) {
  return `
    <a class="cat-doc-card" href="${item.src}" download>
      <div class="doc-icon">${item.icon || '&#128196;'}</div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
      <span class="doc-type">${item.src.split('.').pop().toUpperCase()}</span>
    </a>`;
}

/* ========== Card hover: play video ========== */
(function() {
  document.addEventListener('mouseover', function(e) {
    const card = e.target.closest('.cat-item-card');
    if (!card) return;
    const video = card.querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play().catch(function() {});
    }
  });
  document.addEventListener('mouseout', function(e) {
    const card = e.target.closest('.cat-item-card');
    if (!card) return;
    const video = card.querySelector('video');
    if (video) video.pause();
  });
})();

/* ========== Lightbox with Gallery Navigation ========== */
let galleryItems = [];
let currentIndex = 0;

function initLightbox() {
  const modal = document.getElementById('modal');
  const modalMedia = document.getElementById('modalMedia');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');

  if (!modal) return;

  // Collect all lightbox triggers
  const allTriggers = document.querySelectorAll('[data-lightbox]');

  allTriggers.forEach(function(el, idx) {
    el.addEventListener('click', function() {
      const type = this.dataset.lightbox;
      const group = this.dataset.group;

      if (type === 'gallery') {
        const gid = this.dataset.galleryId;
        const reg = galleryRegistry[gid] || { images: [], viewMode: 'slideshow' };
        const images = reg.images;
        const viewMode = reg.viewMode || 'slideshow';

        if (viewMode === 'grid') {
          // Grid view: show all images at once
          openGridView(images, this.dataset.title);
          return;
        }

        // Slideshow view
        galleryItems = images.map(function(img) {
          return { type: 'image', src: img.src, title: img.title, desc: '' };
        });
        currentIndex = 0;
      } else if (group) {
        // Filter items in the same group
        galleryItems = Array.from(allTriggers).filter(function(t) {
          return t.dataset.group === group && t.dataset.lightbox === 'image';
        }).map(function(t) {
          return { type: 'image', src: t.dataset.src, title: t.dataset.title, desc: t.dataset.desc };
        });
        currentIndex = galleryItems.findIndex(function(item) { return item.src === el.dataset.src; });
        if (currentIndex === -1) currentIndex = 0;
      } else {
        galleryItems = [{ type: type, src: this.dataset.src, title: this.dataset.title, desc: this.dataset.desc }];
        currentIndex = 0;
      }

      showCurrentItem();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateGallery(-1);
    if (e.key === 'ArrowRight') navigateGallery(1);
  });

  if (modalPrev) modalPrev.addEventListener('click', function() { navigateGallery(-1); });
  if (modalNext) modalNext.addEventListener('click', function() { navigateGallery(1); });

  function showCurrentItem() {
    if (galleryItems.length === 0) return;
    const item = galleryItems[currentIndex];
    const type = item.type;
    const src = item.src;
    const title = item.title;
    const desc = item.desc || '';

    modalMedia.innerHTML = '';
    if (type === 'video') {
      modalMedia.innerHTML = '<video src="' + src + '" controls autoplay style="max-width:90vw;max-height:70vh;border-radius:8px;"></video>';
    } else if (type === 'image') {
      modalMedia.innerHTML = '<img src="' + src + '" alt="' + title + '" style="max-width:90vw;max-height:70vh;object-fit:contain;border-radius:8px;">';
    }
    modalTitle.textContent = title;

    // Show/hide nav buttons based on gallery size
    if (galleryItems.length > 1) {
      modalPrev.style.display = 'flex';
      modalNext.style.display = 'flex';
      modalDesc.textContent = desc + ' (' + (currentIndex + 1) + '/' + galleryItems.length + ')';
    } else {
      modalPrev.style.display = 'none';
      modalNext.style.display = 'none';
      modalDesc.textContent = desc;
    }
  }

  function navigateGallery(direction) {
    if (galleryItems.length <= 1) return;
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    showCurrentItem();
  }

  function openGridView(images, title) {
    // Pair images: 2 per cell, stacked vertically
    var cells = '';
    for (var i = 0; i < images.length; i += 2) {
      var img1 = images[i];
      var img2 = images[i + 1];
      cells += '<div class="gallery-grid-cell">';
      cells += '<div class="gallery-grid-item' + (img2 ? ' pair' : ' single') + '"><img src="' + img1.src + '" alt="' + img1.title + '" loading="lazy"></div>';
      if (img2) {
        cells += '<div class="gallery-grid-item pair"><img src="' + img2.src + '" alt="' + img2.title + '" loading="lazy"></div>';
      }
      cells += '</div>';
    }
    modalMedia.innerHTML = '<div class="gallery-grid-view">' + cells + '</div>';
    modalTitle.textContent = title;
    modalDesc.textContent = '共 ' + images.length + ' 张';
    modalPrev.style.display = 'none';
    modalNext.style.display = 'none';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalMedia.innerHTML = '';
    galleryItems = [];
  }
}
