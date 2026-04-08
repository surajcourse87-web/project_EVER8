import { 
  BRAND_NAME, PRODUCT_LINE, EDITION_NAME, EDITION_TAGLINE, 
  HERO_HEADLINE, HERO_BG_TEXT, PRODUCT_HEADLINE, PRODUCT_SPEC_COPY,
  SHOWCASE_EYEBROW, SHOWCASE_HEADLINE, SHOWCASE_COPY,
  COLLECTION_VARIANT_1_NAME, COLLECTION_VARIANT_1_LABEL, COLLECTION_VARIANT_1_COPY,
  BG_COLOR, ACCENT_COLOR_SILVER, ACCENT_COLOR_BLACK, PRIMARY_COLOR
} from './constants.js';

document.getElementById('app').innerHTML = `
  <header class="navbar">
    <div class="logo">${BRAND_NAME} <span>${PRODUCT_LINE}</span></div>
    <nav>
      <ul>
        <li><a href="#hero">Discover</a></li>
        <li><a href="#specs">Engineering</a></li>
        <li><a href="#showcase">Showcase</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="/BMW PRO.mp4" type="video/mp4" />
      </video>
      <div class="hero-bg-text">${HERO_BG_TEXT}</div>
      <div class="hero-content">
        <h1>${HERO_HEADLINE.replace('\n', '<br/>')}</h1>
        <p class="tagline">${EDITION_TAGLINE}</p>
        <span class="edition">${EDITION_NAME}</span>
      </div>
    </section>

    <section id="specs" class="specs">
      <div class="container specs-grid">
        <div class="specs-content">
          <h2>${PRODUCT_HEADLINE.replace('\n', '<br/>')}</h2>
          <p>${PRODUCT_SPEC_COPY}</p>
          <div class="variant">
            <h3>${COLLECTION_VARIANT_1_NAME} / <small>${COLLECTION_VARIANT_1_LABEL}</small></h3>
            <p>${COLLECTION_VARIANT_1_COPY}</p>
          </div>
        </div>
        <div class="specs-image">
          <img src="/Whisk_153574da10afa168a51483a58f99feaedr.png" alt="BMW Side Profile" />
        </div>
      </div>
    </section>

    <section id="showcase" class="showcase">
      <div class="container text-center">
        <span class="eyebrow">${SHOWCASE_EYEBROW}</span>
        <h2>${SHOWCASE_HEADLINE.replace('\n', '<br/>')}</h2>
        <p>${SHOWCASE_COPY}</p>
        <div class="image-gallery">
          <img src="/Whisk_94c1e6a30685a26ab2b4f56d0c4da671dr.png" alt="BMW Front View" class="gallery-img" />
          <img src="/Whisk_2f8d4c5ab531f59a4d34d7cb4f315625dr.png" alt="BMW Side View" class="gallery-img" />
          <img src="/Whisk_153574da10afa168a51483a58f99feaedr.png" alt="BMW Angled View" class="gallery-img" />
        </div>
      </div>
    </section>
  </main>
`;