// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
    // Select the cart count element
    const cartCountElement = document.getElementById('cart-count');

    // Initialize cart count
    let cartCount = 0;

    // Add event listener to each 'Add to Cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment cart count
            cartCount++;
            // Update cart count element
            cartCountElement.textContent = cartCount;
            // Optionally, you can add more functionality here, like updating a cart modal or local storage
            alert('Item added to cart!');
        });
    });
});
