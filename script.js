const contactBar = document.querySelector('.contact-bar');
const shopButton = document.querySelector('.shop-button');
const accordion = document.querySelector('#menuAccordion');

// Later, only change these two lines when your final contact details are ready.
const whatsappNumber = '447000000000';
const snapchatUsername = 'chazza_manhood';

const orderMessage = encodeURIComponent("Hi Herts Vapes, I'd like to place an order.");
document.querySelector('#whatsappLink').href = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;
document.querySelector('#snapchatLink').href = `https://www.snapchat.com/add/${snapchatUsername}`;

const categories = [
  {
    id: 'special-deals',
    icon: '⭐',
    title: 'Special Deals',
    headerImages: ['lost-mary.png', 'elux-salt-blue.png', 'pablo.png'],
    products: [
      { name: 'Vaporesso Kit + 4 Liquids', price: '£30', image: 'vaporesso-xros.png', deal: 'Best value starter bundle.' },
      { name: '2 Pods + 6 Liquids', price: '£20', image: 'xros-pods.png', deal: 'Pods and liquids bundle.' },
      { name: '2 × 25Ks', price: '£25', image: 'hayati25k.png', deal: 'Two large disposables.' },
      { name: '3 × 3.5Ks', price: '£10', image: 'lost-mary.png', deal: 'Budget disposable bundle.' },
      { name: '2 Lost Marys + 1 25K', price: '£30', image: 'lost-mary.png', deal: 'Mixed disposable deal.' }
    ]
  },
  {
    id: 'disposables',
    icon: '🔥',
    title: 'Disposable Vapes',
    headerImages: ['lost-mary.png', 'hayati25k.png'],
    products: [
      {
        name: 'Lost Mary BM6000', price: '£10', image: 'lost-mary.png', flavours: [
          { name: 'Summer Grape', stock: true }, { name: 'Blue Razz Lemonade', stock: true },
          { name: 'Pineapple Ice', stock: true }, { name: 'Cherry Cola', stock: true },
          { name: 'Cherry Ice', stock: true }, { name: 'Strawberry Raspberry Cherry Ice', stock: true },
          { name: 'Banana Ice', stock: true }, { name: 'Triple Mango', stock: true },
          { name: 'Blueberry Sour Raspberry', stock: true }, { name: 'Double Apple', stock: true },
          { name: 'Blueberry Cherry Cranberry', stock: true }, { name: 'Miami Mint', stock: true },
          { name: 'Orange Bru', stock: true }
        ]
      },
      {
        name: 'Hayati Pro Ultra 25K', price: '£15', image: 'hayati25k.png', flavours: [
          { name: 'Strawberry Cranberry Cherry / Strawberry Raspberry Ice', stock: true },
          { name: 'Blue Razz Cherry / Blue Razz Gummy Bear', stock: true },
          { name: 'Blueberry Cotton Candy / Raspberry Cotton Candy', stock: true },
          { name: 'Strawberry Cranberry Cherry / Cherry Ice', stock: true },
          { name: 'Kiwi Banana / Strawberry Banana', stock: true }
        ]
      },
      { name: 'Enjoy Ultra 9K', price: '£10', image: 'hayati25k.png', flavours: [
        { name: 'Berry Apple Peach', stock: true }, { name: 'Apple Watermelon Strawberry', stock: true }
      ]},
      { name: 'Elux Legend 3500', price: '£5', image: 'lost-mary.png', flavours: [
        { name: 'Cherry Ice', stock: true }, { name: 'Fizzy Cherry', stock: true }, { name: 'Cherry Sours', stock: true },
        { name: 'Pineapple Ice', stock: true }, { name: 'Watermelon Cherry Raspberry Ice', stock: true }
      ]},
      { name: 'Hayati Pro Max 6000', price: '£10', image: 'hayati25k.png', flavours: [ { name: 'Fizzy Cherry', stock: true } ] },
      { name: 'Pixl 8000', price: '£10', image: 'lost-mary.png', flavours: [ { name: 'Black Cherry', stock: true } ] }
    ]
  },
  {
    id: 'pod-kits',
    icon: '💨',
    title: 'Pod Kits',
    headerImages: ['vaporesso-xros.png'],
    products: [
      { name: 'Vaporesso XROS Pro 2.0 Kit', price: '£25', image: 'vaporesso-xros.png', flavoursLabel: 'View Colours', flavours: [
        { name: 'Glittering Black', stock: true }, { name: 'Glittering Silver', stock: true }, { name: 'Gem Green', stock: true }
      ]}
    ]
  },
  {
    id: 'replacement-pods',
    icon: '🟦',
    title: 'Replacement Pods',
    headerImages: ['xros-pods.png'],
    products: [
      { name: 'Vaporesso Corex XROS Pods 0.6Ω', price: '1 £5 / 4 £15', image: 'xros-pods.png', deal: 'Pack of 4 is standard pod pricing.' }
    ]
  },
  {
    id: 'nic-salts',
    icon: '🧪',
    title: 'Nic Salts',
    headerImages: ['elux-salt-blue.png', 'elux-salt-purple.png'],
    products: [
      { name: 'Elux Legend Nic Salts 20mg', price: '2 £5 / 4 £10', image: 'elux-salt-blue.png', flavours: [
        { name: 'Mr Blue', stock: true }, { name: 'Blueberry Cranberry Cherry', stock: true }, { name: 'Blue Razz Gummy', stock: true },
        { name: 'Blackberry Ice', stock: true }, { name: 'Banana Ice', stock: true }, { name: 'Gummy Bear', stock: true },
        { name: 'Fizzy Cherry', stock: true }, { name: 'Watermelon Ice', stock: true }, { name: 'Blueberry Sour Raspberry', stock: true },
        { name: 'Cherry Ice', stock: true }, { name: 'Blue Razz Cherry', stock: true }, { name: 'Cherry Sour Raspberry', stock: true },
        { name: 'Grape', stock: true }, { name: 'Lemon Lime', stock: true }, { name: 'Strawberry Raspberry Cherry', stock: true },
        { name: 'Cola', stock: true }, { name: 'Juicy Peach', stock: true }, { name: 'Pineapple Ice', stock: true },
        { name: 'Hubbla Bubbla', stock: true }, { name: 'Lemonade', stock: true }, { name: 'Raspberry Peach', stock: true },
        { name: 'Triple Mango', stock: true }, { name: 'Raspberry Watermelon', stock: true }, { name: 'Black Cherry', stock: true },
        { name: 'Triple Melon', stock: true }
      ]}
    ]
  },
  {
    id: 'pouches',
    icon: '⚪',
    title: 'Nicotine Pouches',
    headerImages: ['velo.png', 'pablo.png'],
    products: [
      { name: 'VELO Minty Lemon 10mg', price: '£5', image: 'velo.png', deal: '20 pouches in a box.' },
      { name: 'Pablo Orange 50mg', price: '£5', image: 'pablo.png', deal: '20 pouches in a box.' },
      { name: 'Pack of 5 Boxes', price: '£20', image: 'pablo.png', deal: 'Applies to nicotine pouches.' }
    ]
  }
];

function activateContactBar() { contactBar?.classList.add('is-active'); }

shopButton?.addEventListener('click', () => {
  activateContactBar();
  const target = document.querySelector(shopButton.getAttribute('data-scroll-target'));
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
window.addEventListener('scroll', () => { if (window.scrollY > 80) activateContactBar(); });

function renderMenu() {
  accordion.innerHTML = categories.map(category => `
    <article class="category" data-category="${category.id}">
      <button class="category-toggle" type="button" aria-expanded="false">
        <span class="category-images">${category.headerImages.map(src => `<img src="${src}" alt="" loading="lazy">`).join('')}</span>
        <span class="category-title"><span class="category-icon">${category.icon}</span>${category.title}</span>
        <span class="plus" aria-hidden="true">+</span>
      </button>
      <div class="category-panel">
        <div class="category-panel-inner">
          <div class="products">
            ${category.products.map(productTemplate).join('')}
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function productTemplate(product) {
  const hasFlavours = Array.isArray(product.flavours) && product.flavours.length;
  const label = product.flavoursLabel || 'View Flavours';
  return `
    <div class="product">
      <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-meta">
        <div class="product-name">${product.name}</div>
        ${product.deal ? `<p class="deal-line">${product.deal}</p>` : ''}
        ${hasFlavours ? `<button class="flavour-toggle" type="button">${label} ↓</button>` : ''}
      </div>
      <div class="price">${product.price}</div>
      ${hasFlavours ? `<div class="flavours">${product.flavours.map(f => `<div class="flavour ${f.stock ? '' : 'out'}"><span>${f.name}</span>${f.stock ? '' : '<span class="stock-note">Out</span>'}</div>`).join('')}</div>` : ''}
    </div>
  `;
}

renderMenu();

accordion.addEventListener('click', (event) => {
  const categoryButton = event.target.closest('.category-toggle');
  if (categoryButton) {
    const category = categoryButton.closest('.category');
    const isOpen = category.classList.contains('is-open');
    document.querySelectorAll('.category.is-open').forEach(open => {
      if (open !== category) {
        open.classList.remove('is-open');
        open.querySelector('.category-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
    category.classList.toggle('is-open', !isOpen);
    categoryButton.setAttribute('aria-expanded', String(!isOpen));
    activateContactBar();
    return;
  }

  const flavourButton = event.target.closest('.flavour-toggle');
  if (flavourButton) {
    const product = flavourButton.closest('.product');
    const opening = !product.classList.contains('is-open');
    product.classList.toggle('is-open');
    flavourButton.textContent = opening ? 'Hide ↑' : `${flavourButton.textContent.replace('Hide ↑', 'View Flavours ↓')}`;
    // Reset label properly for colours.
    if (!opening) {
      const productName = product.querySelector('.product-name')?.textContent || '';
      flavourButton.textContent = productName.includes('Kit') ? 'View Colours ↓' : 'View Flavours ↓';
    }
    activateContactBar();
  }
});
