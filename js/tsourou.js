(function () {
  'use strict';

  document.querySelectorAll('.site-navbar .navbar-brand').forEach(function (brand) {
    brand.innerHTML = '<img class="brand-logo" src="img/logo-tsouroumoglou.jpg" alt="ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.">';
  });
  document.querySelectorAll('.footer-brand').forEach(function (brand) {
    brand.innerHTML = '<img class="footer-brand-logo" src="img/logo-tsouroumoglou.jpg" alt="ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.">';
  });
  document.querySelectorAll('.site-navbar a.btn[href="car.html"]').forEach(function (button) {
    if (!button.querySelector('i')) {
      button.innerHTML = '<i class="fas fa-truck mr-2" aria-hidden="true"></i>' + button.innerHTML;
    }
  });
  document.querySelectorAll('.hero-panel a.btn-primary[href="car.html"]').forEach(function (button) {
    if (!button.querySelector('i')) {
      button.innerHTML = '<i class="fas fa-truck-moving mr-2" aria-hidden="true"></i>' + button.innerHTML;
    }
  });
  document.querySelectorAll('.hero-panel a.btn-outline-light[href="contact.html"]').forEach(function (button) {
    if (!button.querySelector('i')) {
      button.innerHTML = '<i class="fas fa-phone-alt mr-2" aria-hidden="true"></i>' + button.innerHTML;
    }
  });
  document.querySelectorAll('a.btn').forEach(function (button) {
    if (button.querySelector('i')) return;
    var href = button.getAttribute('href') || '';
    var icon = href.indexOf('car.html') !== -1 ? 'fa-truck' :
      href.indexOf('contact.html') !== -1 ? 'fa-phone-alt' :
      href.indexOf('service.html') !== -1 ? 'fa-layer-group' :
      button.getAttribute('target') === '_blank' ? 'fa-external-link-alt' : 'fa-arrow-right';
    button.insertAdjacentHTML('afterbegin', '<i class="fas ' + icon + ' mr-2" aria-hidden="true"></i>');
  });
  document.querySelectorAll('.site-navbar a[href="index.html"]').forEach(function (link) {
    link.setAttribute('href', './');
  });
  if (window.history && window.location.search.indexOf('site-ui=20261017') !== -1) {
    window.history.replaceState(null, document.title, window.location.pathname || './');
  }
  document.querySelectorAll('link[rel="stylesheet"][href="css/tsourou.css"]').forEach(function (stylesheet) {
    stylesheet.setAttribute('href', 'css/tsourou.css?v=20261017p');
  });

  /*
   * Editorial hero slider. The images are local category visuals, while the
   * text and calls to action remain stable so the section stays easy to scan.
   * Autoplay pauses on hover/focus and is disabled for reduced-motion users.
   */
  var heroPanel = document.querySelector('.hero-panel');
  var heroSlider = document.querySelector('[data-hero-slider]');
  if (heroPanel && heroSlider) {
    var heroSlides = Array.prototype.slice.call(heroSlider.querySelectorAll('[data-hero-slide]'));
    var heroDots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
    var heroCurrent = document.querySelector('[data-hero-current]');
    var heroIndex = 0;
    var heroTimer = null;
    var heroReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var setHeroSlide = function (nextIndex) {
      heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;
      heroSlides.forEach(function (slide, index) {
        slide.classList.toggle('is-active', index === heroIndex);
      });
      heroDots.forEach(function (dot, index) {
        var isActive = index === heroIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });
      if (heroCurrent) heroCurrent.textContent = String(heroIndex + 1).padStart(2, '0');
    };
    var stopHeroAutoplay = function () {
      if (heroTimer) {
        window.clearInterval(heroTimer);
        heroTimer = null;
      }
    };
    var startHeroAutoplay = function () {
      stopHeroAutoplay();
      if (heroReducedMotion || heroSlides.length < 2) return;
      heroTimer = window.setInterval(function () { setHeroSlide(heroIndex + 1); }, 6500);
    };

    setHeroSlide(0);
    heroDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        setHeroSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
        startHeroAutoplay();
      });
    });
    heroPanel.addEventListener('mouseenter', stopHeroAutoplay);
    heroPanel.addEventListener('mouseleave', startHeroAutoplay);
    heroPanel.addEventListener('focusin', stopHeroAutoplay);
    heroPanel.addEventListener('focusout', function (event) {
      if (!heroPanel.contains(event.relatedTarget)) startHeroAutoplay();
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopHeroAutoplay();
      else startHeroAutoplay();
    });
    startHeroAutoplay();
  }

  /* Keep catalogue imagery aligned with the commercial-vehicle focus. */
  var truckImageByAlt = {
    'Ενδεικτική εικόνα βαρέος φορτηγού': 'img/company/company-02.jpg',
    'Ενδεικτική εικόνα επαγγελματικού οχήματος': 'img/company/company-01.jpg',
    'Ενδεικτική εικόνα τράκτορα': 'img/company/company-03.jpg',
    'Ενδεικτική εικόνα επικαθήμενου': 'img/company/company-07.jpg',
    'Ενδεικτική εικόνα μηχανήματος έργου': 'img/company/company-06.jpg'
  };
  document.querySelectorAll('img[alt]').forEach(function (image) {
    var truckImage = truckImageByAlt[image.getAttribute('alt') || ''];
    if (truckImage) image.setAttribute('src', truckImage);
  });

  document.querySelectorAll('[data-mailto-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var formData = new FormData(form);
      var name = String(formData.get('name') || '').trim();
      var phone = String(formData.get('phone') || '').trim();
      var email = String(formData.get('email') || '').trim();
      var message = String(formData.get('message') || '').trim();
      var feedback = form.querySelector('[data-form-feedback]');
      if (!name || !email || !message) {
        if (feedback) feedback.textContent = 'Συμπληρώστε ονοματεπώνυμο, email και μήνυμα.';
        return;
      }
      var subject = 'Νέο αίτημα από την ιστοσελίδα — ' + name;
      var body = ['Ονοματεπώνυμο: ' + name, 'Τηλέφωνο: ' + (phone || 'Δεν συμπληρώθηκε'), 'Email: ' + email, '', 'Μήνυμα:', message].join('\n');
      if (feedback) feedback.textContent = 'Ανοίγει το email σας με έτοιμο το αίτημα. Ελέγξτε το και πατήστε αποστολή.';
      window.location.href = 'mailto:afoitsoroumoglou@yahoo.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  });

  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var buttons = group.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-category-card]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter');
        buttons.forEach(function (item) { item.classList.remove('active'); });
        button.classList.add('active');
        cards.forEach(function (card) {
          var visible = filter === 'all' || card.getAttribute('data-category-card') === filter;
          card.closest('.listing-column').classList.toggle('d-none', !visible);
        });
      });
    });
  });

  /*
   * Public car.gr profile carousel. The catalogue is intentionally a local,
   * editable snapshot: the live page remains the source of truth for stock,
   * photos and price changes.
   */
  var profileListings = [
    {
      category: 'Φορτηγά άνω των 7,5 τόνων',
      icon: 'fas fa-truck-moving',
      title: 'DAF CF 480 HARDOX',
      price: '1 €',
      meta: ['2004', '485.000 km', '480 hp', '4 άξονες'],
      image: 'img/company/company-02.jpg',
      href: 'https://afoitsoroumoglou.car.gr/classifieds/view/56647002/',
      linkLabel: 'Άνοιγμα αγγελίας'
    },
    {
      category: 'Τράκτορες',
      icon: 'fas fa-truck',
      title: 'Volvo FH 16 550 Euro 6',
      price: '1 €',
      meta: ['2018', '550.000 km', '550 hp', '2 άξονες'],
      image: 'img/company/company-05.jpg',
      href: 'https://afoitsoroumoglou.car.gr/semitrucks/',
      linkLabel: 'Άνοιγμα κατηγορίας'
    },
    {
      category: 'Τράκτορες',
      icon: 'fas fa-truck',
      title: 'MAN TGX Euro 6D',
      price: '1 €',
      meta: ['2021', '480.000 km', '470 hp', '2 άξονες'],
      image: 'img/company/company-03.jpg',
      href: 'https://afoitsoroumoglou.car.gr/semitrucks/',
      linkLabel: 'Άνοιγμα κατηγορίας'
    },
    {
      category: 'Μηχανήματα έργων',
      icon: 'fas fa-cogs',
      title: 'CAT M318D',
      price: '1 €',
      meta: ['2012', '8.900 ώρες', '177 hp', 'Πετρέλαιο'],
      image: 'img/company/company-06.jpg',
      href: 'https://afoitsoroumoglou.car.gr/classifieds/view/44448622/',
      linkLabel: 'Άνοιγμα αγγελίας'
    },
    {
      category: 'Φορτηγά άνω των 7,5 τόνων',
      icon: 'fas fa-truck-moving',
      title: 'Mercedes-Benz 1619',
      price: '1 €',
      meta: ['1996', '600.000 km', '190 hp', '2 άξονες'],
      image: 'img/company/company-11.jpg',
      href: 'https://www.car.gr/classifieds/trucks/view/56260636-fortigo-anw-twn-75t-anatropi-mercedes-benz?lang=el',
      linkLabel: 'Άνοιγμα αγγελίας'
    },
    {
      category: 'Φορτηγά άνω των 7,5 τόνων',
      icon: 'fas fa-truck-moving',
      title: 'Scania 94D 310',
      price: '1 €',
      meta: ['2004', '700.000 km', '300 hp', '2 άξονες'],
      image: 'img/company/company-01.jpg',
      href: 'https://afoitsoroumoglou.car.gr/classifieds/view/54775957/',
      linkLabel: 'Άνοιγμα αγγελίας'
    }
  ];

  profileListings.push(
    {
      category: 'Επικαθήμενα και ρυμουλκούμενα',
      icon: 'fas fa-truck',
      title: 'Κατηγορία επικαθήμενων',
      price: 'Live στο car.gr',
      meta: ['Δημόσια κατηγορία', 'Μεταφορά', 'Ενημέρωση online', 'Χωρίς τιμή εδώ'],
      image: 'img/company/company-07.jpg',
      href: 'https://afoitsoroumoglou.car.gr/semitrailers/',
      linkLabel: 'Άνοιγμα κατηγορίας',
      tag: 'LIVE ΚΑΤΗΓΟΡΙΑ',
      tone: 'violet'
    },
    {
      category: 'Μηχανήματα έργων',
      icon: 'fas fa-cogs',
      title: 'Κατηγορία εργοταξιακού εξοπλισμού',
      price: 'Live στο car.gr',
      meta: ['Δημόσια κατηγορία', 'Εργοτάξιο', 'Ενημέρωση online', 'Χωρίς τιμή εδώ'],
      image: 'img/company/company-06.jpg',
      href: 'https://afoitsoroumoglou.car.gr/builders/',
      linkLabel: 'Άνοιγμα κατηγορίας',
      tag: 'LIVE ΚΑΤΗΓΟΡΙΑ',
      tone: 'orange'
    },
    {
      category: 'Επαγγελματικά οχήματα',
      icon: 'fas fa-truck-moving',
      title: 'Όλες οι δημόσιες κατηγορίες',
      price: 'Live στο car.gr',
      meta: ['Dealer profile', 'Φορτηγά', 'Τράκτορες', 'Μηχανήματα'],
      image: 'img/company/company-02.jpg',
      href: 'https://afoitsoroumoglou.car.gr/',
      linkLabel: 'Άνοιγμα dealer profile',
      tag: 'DEALER PROFILE',
      tone: 'cyan'
    }
  );

  var profileBand = Array.prototype.find.call(document.querySelectorAll('.dark-band'), function (band) {
    return band.textContent.indexOf('κατηγορίες') !== -1;
  });

  if (profileBand) {
    profileBand.classList.add('profile-band');
    var cardMarkup = profileListings.map(function (item) {
      var metaMarkup = item.meta.map(function (meta, index) {
        var metaIcon = index === 0 ? 'fa-calendar-alt' : index === 1 ? 'fa-road' : index === 2 ? 'fa-tachometer-alt' : 'fa-layer-group';
        return '<span><i class="fas ' + metaIcon + '" aria-hidden="true"></i>' + meta + '</span>';
      }).join('');
      return '<a class="live-listing-card" href="' + item.href + '" target="_blank" rel="noopener noreferrer" aria-label="' + item.linkLabel + ': ' + item.title + '">' +
        '<div class="live-listing-card-image"><img src="' + item.image + '" alt="Ενδεικτική εικόνα για ' + item.title + '" loading="lazy"><span class="live-listing-image-note"><i class="fas fa-image mr-1" aria-hidden="true"></i>Εικαστικό preview</span></div>' +
        '<div class="live-listing-card-body"><span class="live-listing-card-category"><i class="' + item.icon + ' mr-1" aria-hidden="true"></i>' + item.category + '</span><h3>' + item.title + '</h3><div class="live-listing-card-price">' + item.price + ' <small>όπως εμφανίζεται</small></div><div class="live-listing-card-meta">' + metaMarkup + '</div><span class="live-listing-card-link">' + item.linkLabel + ' <i class="fas fa-external-link-alt ml-1" aria-hidden="true"></i></span></div>' +
        '</a>';
    }).join('');

    cardMarkup = cardMarkup.replace(/Εικαστικό preview/g, 'Ενδεικτικό οπτικό υλικό');

    var categoryLinks = [
      ['fas fa-truck-moving', 'Φορτηγά', 'https://afoitsoroumoglou.car.gr/trucks/'],
      ['fas fa-truck', 'Τράκτορες', 'https://afoitsoroumoglou.car.gr/semitrucks/'],
      ['fas fa-truck', 'Επικαθήμενα', 'https://afoitsoroumoglou.car.gr/semitrailers/'],
      ['fas fa-cogs', 'Μηχανήματα έργων', 'https://afoitsoroumoglou.car.gr/builders/']
    ].map(function (link) {
      return '<a class="profile-category-link" href="' + link[2] + '" target="_blank" rel="noopener noreferrer"><i class="' + link[0] + '" aria-hidden="true"></i><span>' + link[1] + '</span><i class="fas fa-arrow-right ml-auto" aria-hidden="true"></i></a>';
    }).join('');

    profileBand.innerHTML = '<div class="container"><div class="listing-carousel-head"><div><p class="section-kicker mb-2" style="color:#f0c36f">Δημόσιο προφίλ στο car.gr</p><h2 class="section-title mb-3">Οι κατηγορίες του δημόσιου προφίλ.</h2><p class="section-lead mb-0">Επιλεγμένες δημόσιες καταχωρήσεις για φορτηγά, τράκτορες και μηχανήματα έργων. Κάθε κάρτα οδηγεί στο car.gr για την πλήρη εικόνα και την τελευταία ενημέρωση.</p></div><div class="listing-carousel-controls"><button class="listing-carousel-control" type="button" data-carousel-prev aria-label="Προηγούμενη καταχώρηση"><i class="fas fa-chevron-left" aria-hidden="true"></i></button><button class="listing-carousel-control" type="button" data-carousel-next aria-label="Επόμενη καταχώρηση"><i class="fas fa-chevron-right" aria-hidden="true"></i></button></div></div><div class="listing-carousel" data-listing-carousel><div class="listing-carousel-viewport" data-carousel-track tabindex="0" role="region" aria-label="Καρουζέλ δημόσιων καταχωρήσεων car.gr"><div class="listing-carousel-track">' + cardMarkup + '</div></div><div class="listing-carousel-dots" aria-label="Επιλογή καταχώρησης">' + profileListings.map(function (item, index) { return '<button class="listing-carousel-dot' + (index === 0 ? ' is-active' : '') + '" type="button" data-carousel-dot="' + index + '" aria-label="Καταχώρηση ' + (index + 1) + '"></button>'; }).join('') + '</div></div><p class="listing-carousel-disclaimer"><i class="fas fa-info-circle mr-1" aria-hidden="true"></i>Τα στοιχεία και οι τιμές αποτυπώνουν δημόσιο snapshot και ενδέχεται να αλλάξουν. Οι εικόνες στις κάρτες είναι εικαστικά previews· η ενεργή φωτογραφία, η διαθεσιμότητα και οι λεπτομέρειες επιβεβαιώνονται μόνο στο car.gr.</p><div class="profile-category-links">' + categoryLinks + '</div></div>';

    profileBand.querySelectorAll('.live-listing-card').forEach(function (card, index) {
      var item = profileListings[index];
      var tag = document.createElement('span');
      var isMachinery = item.icon.indexOf('cogs') !== -1 || item.icon.indexOf('tools') !== -1;
      var isTractor = item.icon === 'fas fa-truck' && !item.tag;
      tag.className = 'live-listing-card-tag ' + (item.tone || (isMachinery ? 'orange' : isTractor ? 'cyan' : 'blue'));
      tag.textContent = item.tag || (isMachinery ? 'ΕΡΓΟΤΑΞΙΟ' : isTractor ? 'ΤΡΑΚΤΟΡΑΣ' : 'ΦΟΡΤΗΓΟ');
      var cardImage = card.querySelector('.live-listing-card-image');
      cardImage.appendChild(tag);

      var carLogo = document.createElement('span');
      carLogo.className = 'live-listing-card-car-logo';
      carLogo.setAttribute('aria-hidden', 'true');
      carLogo.innerHTML = '<span class="profile-car-logo">car<span>.gr</span></span><small>Άνοιγμα στο car.gr <i class="fas fa-external-link-alt" aria-hidden="true"></i></small>';
      cardImage.appendChild(carLogo);

      var source = document.createElement('div');
      source.className = 'live-listing-card-source';
      source.innerHTML = '<i class="fas fa-globe-europe" aria-hidden="true"></i><span>car.gr · δημόσιο προφίλ</span>';
      var cardBody = card.querySelector('.live-listing-card-body');
      var cardLink = card.querySelector('.live-listing-card-link');
      cardBody.insertBefore(source, cardLink);
    });

    profileBand.querySelectorAll('.live-listing-image-note').forEach(function (note) {
      note.innerHTML = '<i class="fas fa-image mr-1" aria-hidden="true"></i>Ενδεικτικό οπτικό υλικό';
    });
    profileBand.querySelectorAll('.live-listing-card-price').forEach(function (price) {
      var value = price.firstChild && price.firstChild.nodeValue ? price.firstChild.nodeValue.trim() : price.textContent.split('όπως')[0].trim();
      price.innerHTML = '<small>Τιμή όπως εμφανίζεται</small><strong>' + value + '</strong>';
    });

    var carousel = profileBand.querySelector('[data-listing-carousel]');
    var track = carousel.querySelector('[data-carousel-track]');
    var prev = profileBand.querySelector('[data-carousel-prev]');
    var next = profileBand.querySelector('[data-carousel-next]');
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-dot]'));

    var carouselStep = function () {
      var card = track.querySelector('.live-listing-card');
      return card ? card.getBoundingClientRect().width + 24 : track.clientWidth;
    };
    var setActiveDot = function () {
      var index = Math.max(0, Math.min(dots.length - 1, Math.round(track.scrollLeft / carouselStep())));
      dots.forEach(function (dot, dotIndex) { dot.classList.toggle('is-active', dotIndex === index); });
    };
    prev.addEventListener('click', function () { track.scrollBy({ left: -carouselStep(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: carouselStep(), behavior: 'smooth' }); });
    track.addEventListener('scroll', setActiveDot, { passive: true });
    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); track.scrollBy({ left: -carouselStep(), behavior: 'smooth' }); }
      if (event.key === 'ArrowRight') { event.preventDefault(); track.scrollBy({ left: carouselStep(), behavior: 'smooth' }); }
    });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        track.scrollTo({ left: Number(dot.getAttribute('data-carousel-dot')) * carouselStep(), behavior: 'smooth' });
      });
    });
  }

  /* Public-source company photo gallery. Images are local copies of the supplied public URLs. */
  var companyPhotos = [
    { image: 'img/company/company-01.jpg', alt: 'Δημόσιο φωτογραφικό υλικό επαγγελματικού φορτηγού', label: 'Δημόσια φωτογραφία', title: 'Επαγγελματικό φορτηγό', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ShUoW0i0T4E0PIxqhGpXC06xMGHCR42lMsoBZNAFKtZ6AUaeRvl2NBD40hWSioasebKYMUjMu7naF1Dkp43ictOOPGhef2GP6c6TJPtXvs55q5XXSsWjAd7brStIwr5reFDVuE=s680-w680-h510' },
    { image: 'img/company/company-02.jpg', alt: 'Δημόσιο φωτογραφικό υλικό βαρέων φορτηγών', label: 'Δημόσια φωτογραφία', title: 'Βαρέα φορτηγά', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qaqko7f4EdkTFuGk9-rdl7RwRosGdlZEN2SjMfH6sPMQhaMeNvMvOTuzN9fOjfEhRyLByQ2Pd5RY2MsZt7Ry493tKMGk7MNPq3UUIrQ8S_HrxHYARW0qCTBzw9m8aw6-6tw1_6ZA=s680-w680-h510' },
    { image: 'img/company/company-03.jpg', alt: 'Δημόσιο φωτογραφικό υλικό τράκτορα και επικαθήμενου', label: 'Δημόσια φωτογραφία', title: 'Τράκτορας και επικαθήμενο', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SsHJTlc4LZ6KpHqWZP3Y6dKUNN7Mm-adZGya2vpBfq14cLSZgOAO-1fyzymtR6qbolxzKJAnUX3ji4z1-aTBF09v1KcQcxXiVscmQAWtMLbyi3cqS0OvF6NY6q4UyuCoQkLbjNXg=s680-w680-h510' },
    { image: 'img/company/company-04.jpg', alt: 'Δημόσιο φωτογραφικό υλικό συρμού μεταφοράς', label: 'Δημόσια φωτογραφία', title: 'Συρμός μεταφοράς', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QKTw0KownR59zmABu4dBG22LBgJJPSePrXDzy-7N-sSL9u3RKwDGX664NimLCv89lIlZOsqFvr4-Uw8VwW6kUzwCcGH7W5a8zF1sKDHo7VV_QPxlhmVk6ozusIgxUEv5FUi2-H=s680-w680-h510' },
    { image: 'img/company/company-05.jpg', alt: 'Δημόσιο φωτογραφικό υλικό λευκού φορτηγού', label: 'Δημόσια φωτογραφία', title: 'Φορτηγό δρόμου', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QB7cqrXgE5-ejWhYaKRfs5bRTccEuf0b21eaxe1yMDHtMFlusQDDEfaZCFp8z67yZqgfgnF8dFLu2o5i2nvBECzpeYyjMPVUoB6gzHN9QzCPJTU_uEuDp3AlhGe6y4ehiTB1Yr=s680-w680-h510' },
    { image: 'img/company/company-06.jpg', alt: 'Δημόσιο φωτογραφικό υλικό μηχανήματος έργων', label: 'Δημόσια φωτογραφία', title: 'Μηχάνημα έργων', source: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QtAl47fHywfDh3xVochzW_4fgm3eEUdfo4pj1ZARxG7BspmSDzbL2kKKUgjyj2oiCb2eDNXE6-0mH1WW-H1v-HpTsiWfmEgHV6BdmAZhAmyYBWfgNYgFxVAJFidAUCdW3PiO97Ig=s680-w680-h510' },
    { image: 'img/company/company-07.jpg', alt: 'Επικαθήμενο Schmitz από δημόσια καταχώρηση στο car.gr', label: 'car.gr καταχώρηση', title: 'Schmitz · 2008', source: 'https://afoitsoroumoglou.car.gr/classifieds/view/56260081/' },
    { image: 'img/company/company-08.jpg', alt: 'Επικαθήμενο από δημόσια καταχώρηση στο car.gr', label: 'car.gr καταχώρηση', title: 'Επικαθήμενο μεταφοράς', source: 'https://afoitsoroumoglou.car.gr/classifieds/view/54336565/' },
    { image: 'img/company/company-09.jpg', alt: 'Πίσω όψη επικαθήμενου Schmitz από δημόσια καταχώρηση στο car.gr', label: 'car.gr καταχώρηση', title: 'Schmitz · πίσω όψη', source: 'https://afoitsoroumoglou.car.gr/classifieds/view/56260081/' },
    { image: 'img/company/company-10.jpg', alt: 'Πλευρική όψη επικαθήμενου Schmitz από δημόσια καταχώρηση στο car.gr', label: 'car.gr καταχώρηση', title: 'Schmitz · πλευρική όψη', source: 'https://afoitsoroumoglou.car.gr/classifieds/view/56260081/' },
    { image: 'img/company/company-11.jpg', alt: 'Mercedes-Benz 1619 από δημόσια καταχώρηση στο car.gr', label: 'car.gr καταχώρηση', title: 'Mercedes-Benz 1619', source: 'https://afoitsoroumoglou.car.gr/classifieds/view/56260636/' },
  ];
  var companyGalleryAnchor = profileBand || (document.title.indexOf('Η εταιρεία') !== -1 ? document.querySelector('main .bg-secondary') : null);
  if (companyGalleryAnchor && !document.querySelector('[data-company-gallery]')) {
    var companyGallery = document.createElement('section');
    companyGallery.className = 'company-gallery-section';
    companyGallery.setAttribute('data-company-gallery', '');
    companyGallery.setAttribute('aria-labelledby', 'company-gallery-title');
    companyGallery.innerHTML = '<div class="container"><div class="company-gallery-heading"><div><p class="section-kicker mb-2">Δημόσιο φωτογραφικό υλικό</p><h2 id="company-gallery-title" class="section-title mb-3">Οχήματα και εξοπλισμός, σε πραγματικές εικόνες.</h2></div><p class="section-lead mb-0">Επιλεγμένες εικόνες από δημόσιες φωτογραφίες και καταχωρήσεις που συνδέονται με το online προφίλ. Η διαθεσιμότητα, η τιμή και τα στοιχεία κάθε μονάδας επιβεβαιώνονται μόνο στην ενεργή αγγελία.</p></div><div class="company-gallery-grid">' + companyPhotos.map(function (photo, index) { return '<figure class="company-gallery-card' + (index === 0 ? ' company-gallery-card-featured' : '') + '"><img src="' + photo.image + '" alt="' + photo.alt + '" loading="' + (index < 2 ? 'eager' : 'lazy') + '"><figcaption><span>' + photo.label + '</span><strong>' + photo.title + '</strong><a href="' + photo.source + '" target="_blank" rel="noopener noreferrer">Άνοιγμα πηγής <i class="fas fa-external-link-alt ml-1" aria-hidden="true"></i></a></figcaption></figure>'; }).join('') + '</div><p class="company-gallery-note"><i class="fas fa-info-circle mr-1" aria-hidden="true"></i>Το υλικό παραμένει ενδεικτικό δημόσιο αρχείο· δεν αποτελεί δήλωση τρέχοντος αποθέματος ή αποκλειστικής κυριότητας των φωτογραφιών.</p></div>';
    companyGalleryAnchor.parentNode.insertBefore(companyGallery, companyGalleryAnchor);
  }

  /* Static newsletter request block, injected consistently before every footer. */
  var siteFooter = document.querySelector('.site-footer');
  if (siteFooter && !document.querySelector('[data-newsletter-section]')) {
    var newsletterSection = document.createElement('section');
    newsletterSection.className = 'newsletter-section';
    newsletterSection.setAttribute('data-newsletter-section', '');
    newsletterSection.setAttribute('aria-labelledby', 'newsletter-title');
    newsletterSection.innerHTML = '<div class="container"><div class="newsletter-shell"><div class="newsletter-copy"><p class="newsletter-kicker"><span></span>Ενημερώσεις για επαγγελματικά οχήματα</p><h2 id="newsletter-title">Το σωστό όχημα,<br>στη σωστή στιγμή.</h2><p class="newsletter-lead">Λάβετε ενημέρωση όταν υπάρχει κάτι που αξίζει να δείτε. Αφήστε το email σας και στείλτε μας το αίτημα εγγραφής απευθείας.</p><form class="newsletter-form" data-newsletter-form novalidate><label class="sr-only" for="newsletter-email">Email για ενημερώσεις</label><div class="newsletter-field"><i class="fas fa-envelope" aria-hidden="true"></i><input id="newsletter-email" name="newsletter-email" type="email" autocomplete="email" placeholder="Το email σας" required><button type="submit">Εγγραφή <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i></button></div><p class="newsletter-feedback" data-newsletter-feedback aria-live="polite"></p><p class="newsletter-note"><i class="fas fa-lock mr-1" aria-hidden="true"></i>Δεν υπάρχει αυτόματη αποθήκευση δεδομένων. Ανοίγει το email σας με προσυμπληρωμένο αίτημα.</p></form></div><div class="newsletter-media"><img src="img/support-team.jpg" alt="Ενδεικτική εικόνα ομάδας υποστήριξης με ακουστικά" loading="lazy"><div class="newsletter-media-caption"><span><i class="fas fa-headset mr-2" aria-hidden="true"></i>Άμεση επικοινωνία</span><a href="https://www.pexels.com/photo/smiling-call-center-agents-looking-at-camera-7682342/" target="_blank" rel="noopener noreferrer">Φωτογραφία: Pexels</a></div></div></div></div>';
    siteFooter.parentNode.insertBefore(newsletterSection, siteFooter);
    var newsletterPhoto = newsletterSection.querySelector('.newsletter-media img');
    if (newsletterPhoto) {
      newsletterPhoto.src = 'img/support-executive.jpg';
      newsletterPhoto.alt = 'Ενδεικτική εικόνα επαγγελματία με ακουστικά επικοινωνίας';
    }
    var newsletterPhotoSource = newsletterSection.querySelector('.newsletter-media-caption a');
    if (newsletterPhotoSource) {
      newsletterPhotoSource.href = 'https://img.magnific.com/free-photo/smiling-executive-using-headset_1098-527.jpg?semt=ais_hybrid&w=740&q=80';
      newsletterPhotoSource.textContent = 'Πηγή εικόνας';
    }

    var newsletterForm = newsletterSection.querySelector('[data-newsletter-form]');
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var emailInput = newsletterForm.querySelector('input[type="email"]');
      var feedback = newsletterForm.querySelector('[data-newsletter-feedback]');
      var email = String(emailInput.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (feedback) feedback.textContent = 'Συμπληρώστε ένα έγκυρο email για να συνεχίσετε.';
        emailInput.focus();
        return;
      }
      var subject = 'Αίτημα εγγραφής στο newsletter - ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.';
      var body = 'Παρακαλώ επικοινωνήστε μαζί μου για ενημερώσεις σχετικά με επαγγελματικά οχήματα.\n\nEmail: ' + email;
      if (feedback) feedback.textContent = 'Ανοίγει το email σας με έτοιμο το αίτημα εγγραφής.';
      window.location.href = 'mailto:afoitsoroumoglou@yahoo.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });

    var footerNewsletterBand = siteFooter.querySelector('.footer-newsletter-band');
    if (!footerNewsletterBand) {
      footerNewsletterBand = document.createElement('div');
      footerNewsletterBand.className = 'footer-newsletter-band';
      footerNewsletterBand.innerHTML = '<div class="container"><div class="footer-newsletter"><div class="footer-newsletter-copy"><p><i class="fas fa-paper-plane mr-2" aria-hidden="true"></i>Newsletter</p><h3>Νέα οχήματα, απευθείας στο email σας.</h3></div><form class="footer-newsletter-form" data-footer-newsletter-form novalidate><label class="sr-only" for="footer-newsletter-email">Email για newsletter</label><div class="footer-newsletter-field"><input id="footer-newsletter-email" name="footer-newsletter-email" type="email" autocomplete="email" placeholder="Το email σας" required><button type="submit">Εγγραφή <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i></button></div><p class="footer-newsletter-feedback" data-footer-newsletter-feedback aria-live="polite"></p></form></div></div>';
      siteFooter.insertBefore(footerNewsletterBand, siteFooter.querySelector('.footer-bottom'));
    }

    var footerNewsletterForm = footerNewsletterBand.querySelector('[data-footer-newsletter-form]');
    footerNewsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var emailInput = footerNewsletterForm.querySelector('input[type="email"]');
      var feedback = footerNewsletterForm.querySelector('[data-footer-newsletter-feedback]');
      var email = String(emailInput.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (feedback) feedback.textContent = 'Συμπληρώστε ένα έγκυρο email.';
        emailInput.focus();
        return;
      }
      var subject = 'Αίτημα εγγραφής στο newsletter - ΑΦΟΙ Γ. ΤΣΟΡΟΥΜΟΓΛΟΥ Ο.Ε.';
      var body = 'Παρακαλώ επικοινωνήστε μαζί μου για ενημερώσεις σχετικά με επαγγελματικά οχήματα.\n\nEmail: ' + email;
      if (feedback) feedback.textContent = 'Ανοίγει το email σας με έτοιμο το αίτημα.';
      window.location.href = 'mailto:afoitsoroumoglou@yahoo.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* Local cookie preference center: no optional trackers are loaded by this static site. */
  var cookieStorageKey = 'ts-cookie-preferences-v1';
  var cookieConsent = null;
  try {
    cookieConsent = JSON.parse(window.localStorage.getItem(cookieStorageKey) || 'null');
  } catch (error) {
    cookieConsent = null;
  }

  var cookieRoot = document.createElement('div');
  cookieRoot.className = 'cookie-consent';
  cookieRoot.setAttribute('data-cookie-consent', '');
  cookieRoot.innerHTML = '<section class="cookie-consent-banner" data-cookie-banner role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description" aria-hidden="true"><p class="cookie-consent-kicker"><i class="fas fa-cookie-bite mr-2" aria-hidden="true"></i>Ρυθμίσεις απορρήτου</p><h2 id="cookie-consent-title">Η ιδιωτικότητά σας, με καθαρούς όρους.</h2><p id="cookie-consent-description">Η ιστοσελίδα χρησιμοποιεί μόνο απαραίτητη τοπική αποθήκευση για να θυμάται την επιλογή σας. Αυτή τη στιγμή δεν ενεργοποιούνται προαιρετικά analytics ή marketing cookies.</p><div class="cookie-consent-actions"><button class="cookie-consent-button cookie-consent-button-primary" type="button" data-cookie-action="accept"><i class="fas fa-check mr-2" aria-hidden="true"></i>Αποδοχή όλων</button><button class="cookie-consent-button cookie-consent-button-quiet" type="button" data-cookie-action="reject">Απόρριψη μη απαραίτητων</button><button class="cookie-consent-link" type="button" data-cookie-action="settings">Ρυθμίσεις</button></div></section><section class="cookie-preferences-panel" data-cookie-panel role="dialog" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-description" aria-hidden="true" hidden><div class="cookie-preferences-header"><div><p class="cookie-consent-kicker"><i class="fas fa-sliders-h mr-2" aria-hidden="true"></i>Έλεγχος επιλογών</p><h2 id="cookie-preferences-title">Προτιμήσεις cookies</h2></div><button class="cookie-preferences-close" type="button" data-cookie-action="close" aria-label="Κλείσιμο ρυθμίσεων"><i class="fas fa-times" aria-hidden="true"></i></button></div><p id="cookie-preferences-description">Οι απαραίτητες λειτουργίες παραμένουν ενεργές. Μπορείτε να αλλάξετε την επιλογή σας οποιαδήποτε στιγμή από το εικονίδιο cookie.</p><div class="cookie-preference-row"><div><strong>Απαραίτητα</strong><small>Αποθήκευση της επιλογής συναίνεσης και βασική λειτουργία της ιστοσελίδας.</small></div><span class="cookie-preference-status"><i class="fas fa-lock mr-1" aria-hidden="true"></i>Πάντα ενεργά</span></div><label class="cookie-preference-row cookie-preference-toggle"><span><strong>Προαιρετικά</strong><small>Analytics ή marketing cookies, μόνο αν προστεθούν και τα επιλέξετε.</small></span><input type="checkbox" data-cookie-optional><span class="cookie-toggle-ui" aria-hidden="true"></span></label><div class="cookie-preferences-actions"><button class="cookie-consent-button cookie-consent-button-primary" type="button" data-cookie-action="save">Αποθήκευση επιλογών</button><button class="cookie-consent-link" type="button" data-cookie-action="close">Άκυρο</button></div></section><button class="cookie-preferences-trigger" type="button" data-cookie-action="settings" aria-label="Άνοιγμα ρυθμίσεων cookies" aria-expanded="false"><i class="fas fa-cookie-bite" aria-hidden="true"></i><span>Cookies</span></button>';
  document.body.appendChild(cookieRoot);

  var cookieBanner = cookieRoot.querySelector('[data-cookie-banner]');
  var cookiePanel = cookieRoot.querySelector('[data-cookie-panel]');
  var cookieTrigger = cookieRoot.querySelector('.cookie-preferences-trigger');
  var cookieOptional = cookieRoot.querySelector('[data-cookie-optional]');
  var cookiePanelOpen = false;
  var cookiePreviousFocus = null;

  var cookieSetStored = function (optional) {
    var preferences = { necessary: true, optional: Boolean(optional), updatedAt: new Date().toISOString() };
    try { window.localStorage.setItem(cookieStorageKey, JSON.stringify(preferences)); } catch (error) { /* storage may be unavailable */ }
    cookieConsent = preferences;
    cookieBanner.classList.remove('is-visible');
    cookieBanner.setAttribute('aria-hidden', 'true');
    cookieRoot.classList.add('has-consent');
  };

  var cookieSetPanel = function (isOpen) {
    cookiePanelOpen = isOpen;
    cookiePanel.hidden = !isOpen;
    cookiePanel.classList.toggle('is-open', isOpen);
    cookiePanel.setAttribute('aria-hidden', String(!isOpen));
    cookieTrigger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      cookieBanner.classList.remove('is-visible');
      cookieBanner.setAttribute('aria-hidden', 'true');
      cookiePreviousFocus = document.activeElement;
      cookieOptional.checked = Boolean(cookieConsent && cookieConsent.optional);
      window.setTimeout(function () { cookieOptional.focus(); }, 40);
    } else if (cookiePreviousFocus && typeof cookiePreviousFocus.focus === 'function') {
      cookiePreviousFocus.focus();
      if (!cookieConsent || cookieConsent.necessary !== true) {
        cookieBanner.classList.add('is-visible');
        cookieBanner.setAttribute('aria-hidden', 'false');
      }
    }
  };

  cookieRoot.querySelectorAll('[data-cookie-action]').forEach(function (button) {
    button.addEventListener('click', function () {
      var action = button.getAttribute('data-cookie-action');
      if (action === 'accept') { cookieSetStored(true); return; }
      if (action === 'reject') { cookieSetStored(false); return; }
      if (action === 'settings') { cookieSetPanel(true); return; }
      if (action === 'save') { cookieSetStored(cookieOptional.checked); cookieSetPanel(false); return; }
      if (action === 'close') { cookieSetPanel(false); }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && cookiePanelOpen) {
      event.preventDefault();
      cookieSetPanel(false);
    }
  });

  if (!cookieConsent || cookieConsent.necessary !== true) {
    window.setTimeout(function () {
      cookieBanner.classList.add('is-visible');
      cookieBanner.setAttribute('aria-hidden', 'false');
    }, 650);
  } else {
    cookieRoot.classList.add('has-consent');
  }

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  /*
   * Site-wide entrance motion. Elements remain visible if JavaScript fails,
   * while the enhanced layer adds restrained load and scroll reveals.
   */
  var motionPreference = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  if (!motionPreference || !motionPreference.matches) {
    document.documentElement.classList.add('ts-motion-ready');

    var motionShow = function (element) {
      if (element) element.classList.add('ts-motion-visible');
    };
    var motionInitial = [];
    var topbar = document.querySelector('.site-topbar');
    var navbar = document.querySelector('.site-navbar');
    var hero = document.querySelector('.hero-panel, .page-hero');
    var errorPage = document.querySelector('main.dark-band');
    var heroItems = hero ? Array.prototype.slice.call(hero.querySelectorAll('.container > *')) : [];

    [topbar, navbar, hero, errorPage].forEach(function (element, index) {
      if (!element || motionInitial.indexOf(element) !== -1) return;
      element.classList.add('ts-motion-initial');
      element.style.setProperty('--ts-motion-delay', (index * 90) + 'ms');
      motionInitial.push(element);
    });

    var navItems = navbar ? Array.prototype.slice.call(navbar.querySelectorAll('.navbar-brand, .nav-link, .navbar-collapse > .btn')) : [];
    navItems.forEach(function (item, index) {
      item.classList.add('ts-motion-nav-item');
      item.style.setProperty('--ts-motion-delay', (130 + index * 45) + 'ms');
    });

    heroItems.forEach(function (item, index) {
      item.classList.add('ts-motion-hero-item');
      item.style.setProperty('--ts-motion-delay', (160 + index * 90) + 'ms');
    });

    var revealSections = Array.prototype.slice.call(document.querySelectorAll('main > section:not(.hero-panel):not(.page-hero), .newsletter-section, .site-footer'));
    var revealItems = [];
    var itemSelector = '.activity-row, .category-card, .listing-card, .article-card, .contact-card, .quote-panel, .metric, .live-listing-card, .profile-category-link, .newsletter-shell, .footer-newsletter, .footer-bottom, .site-footer .col-lg-5, .site-footer .col-lg-3, .site-footer .col-lg-4, .section-space > .container > .row > [class*="col-"], .dark-band > .container > .row > [class*="col-"], .map-frame';

    revealSections.forEach(function (section, sectionIndex) {
      section.classList.add('ts-scroll-reveal');
      section.style.setProperty('--ts-motion-delay', Math.min(sectionIndex * 35, 180) + 'ms');
      revealItems.push(section);
      Array.prototype.slice.call(section.querySelectorAll(itemSelector)).forEach(function (item, itemIndex) {
        item.classList.add('ts-scroll-reveal-item');
        item.style.setProperty('--ts-motion-delay', Math.min(itemIndex * 60, 240) + 'ms');
        revealItems.push(item);
      });
    });

    window.requestAnimationFrame(function () {
      motionInitial.forEach(function (element) {
        window.setTimeout(function () { motionShow(element); }, Number(element.style.getPropertyValue('--ts-motion-delay').replace('ms', '')) || 0);
      });
      navItems.forEach(function (item) {
        window.setTimeout(function () { motionShow(item); }, Number(item.style.getPropertyValue('--ts-motion-delay').replace('ms', '')) || 0);
      });
      heroItems.forEach(function (item) {
        window.setTimeout(function () { motionShow(item); }, Number(item.style.getPropertyValue('--ts-motion-delay').replace('ms', '')) || 0);
      });
    });

    if ('IntersectionObserver' in window) {
      var motionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          motionShow(entry.target);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealItems.forEach(function (item) { motionObserver.observe(item); });
    } else {
      revealItems.forEach(motionShow);
    }
  }
})();
