// Product data - replace with your actual data
const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 149.99,
    originalPrice: 199.99,
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.",
    rating: 4.5,
    reviewCount: 128,
    image: "https://via.placeholder.com/500",
    colors: ["#000000", "#FFFFFF", "#6366F1"],
    inStock: true
  };

  // Calculate discount percentage
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Create heart icon SVG
  function createHeartIcon() {
    return `<svg class="heart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>`;
  }

  // Create star icon SVG
  function createStarIcon(filled = true) {
    return `<svg class="star ${filled ? '' : 'empty'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.4 7.5H22l-6 4.5 2.4 7.5-6-4.5-6 4.5 2.4-7.5-6-4.5h7.6z"></path>
    </svg>`;
  }

  // Create half-filled star icon SVG
  function createHalfStarIcon() {
    return `<svg class="star half" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.4 7.5H22l-6 4.5 2.4 7.5-6-4.5-6 4.5 2.4-7.5-6-4.5h7.6z"></path>
    </svg>`;
  }

  // Create cart icon SVG
  function createCartIcon() {
    return `<svg class="cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2zm6 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
    </svg>`;
  }

  // Generate rating stars
  function generateStars(rating) {
    let starsHtml = '';
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        starsHtml += createStarIcon(true);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Half star
        starsHtml += createHalfStarIcon();
      } else {
        // Empty star
        starsHtml += createStarIcon(false);
      }
    }
    
    return starsHtml;
  }

  // Create the product card HTML
  function createProductCard() {
    const container = document.getElementById('product-card-container');
    
    const productCardHtml = `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          ${discount > 0 ? `<div class="discount-badge">${discount}% OFF</div>` : ''}
          <button class="wish-button" id="wishButton">
            ${createHeartIcon()}
          </button>
        </div>
        
        <div class="product-info">
          <div class="product-header">
            <div>
              <h3 class="product-title">${product.name}</h3>
              <div class="rating-container">
                <div class="stars">
                  ${generateStars(product.rating)}
                </div>
                <span class="review-count">(${product.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div class="price-container">
              ${product.originalPrice > product.price 
                ? `<span class="original-price">$${product.originalPrice}</span>` 
                : ''}
              <span class="current-price">$${product.price}</span>
              <div class="${product.inStock ? 'stock-status in-stock' : 'stock-status out-of-stock'}">
                ${product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
          </div>
          
          <p class="product-description">${product.description}</p>
          
          <div class="color-options">
            <p class="color-label">Available Colors</p>
            <div class="color-choices" id="colorChoices">
              ${product.colors.map((color, idx) => 
                `<div class="color-choice ${idx === 0 ? 'selected' : ''}" 
                      style="background-color: ${color};"
                      data-color="${color}">
                </div>`
              ).join('')}
            </div>
          </div>
          
          <div class="product-actions">
            <button class="add-to-cart-btn">
              ${createCartIcon()}
              Add to Cart
            </button>
            <button class="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = productCardHtml;
    
    // Add event listeners after the HTML is inserted
    setupEventListeners();
  }

  // Set up event listeners
  function setupEventListeners() {
    // Wishlist button
    const wishButton = document.getElementById('wishButton');
    if (wishButton) {
      wishButton.addEventListener('click', function() {
        const heartIcon = this.querySelector('.heart-icon');
        heartIcon.classList.toggle('active');
      });
    }
    
    // Color choices
    const colorChoices = document.querySelectorAll('.color-choice');
    colorChoices.forEach(choice => {
      choice.addEventListener('click', function() {
        // Remove selected class from all choices
        colorChoices.forEach(c => c.classList.remove('selected'));
        // Add selected class to clicked choice
        this.classList.add('selected');
      });
    });
    
    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function() {
        const selectedColor = document.querySelector('.color-choice.selected').getAttribute('data-color');
        console.log(`Added ${product.name} to cart with color: ${selectedColor}`);
        alert(`Added ${product.name} to cart!`);
      });
    }
    
    // Buy now button
    const buyNowBtn = document.querySelector('.buy-now-btn');
    if (buyNowBtn) {
      buyNowBtn.addEventListener('click', function() {
        const selectedColor = document.querySelector('.color-choice.selected').getAttribute('data-color');
        console.log(`Buying ${product.name} with color: ${selectedColor}`);
        alert(`Proceeding to checkout for ${product.name}!`);
      });
    }
  }

  // Initialize the product card when the page loads
  document.addEventListener('DOMContentLoaded', createProductCard);