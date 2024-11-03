document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', () => {
        updateTotal(); 
        const product = input.closest('.product');
        const checkmark = product.querySelector('.checkmark');

        
        if (input.value > 0) {
            checkmark.style.display = 'block'; 
            product.classList.add('selected'); 
        } else {
            checkmark.style.display = 'none'; 
            product.classList.remove('selected'); 
        }
    });
});

document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', () => {
        const product = img.closest('.product');
        const quantityInput = product.querySelector('.quantity');
        const checkmark = product.querySelector('.checkmark');

        
        if (quantityInput.value === "1") {
            quantityInput.value = 0; 
            checkmark.style.display = 'none'; 
            product.classList.remove('selected'); 
        } else {
            quantityInput.value = 1; 
            checkmark.style.display = 'block'; 
            product.classList.add('selected'); 
        }

        updateTotal(); 
    });
});

function updateTotal() {
    let total = 0;

    document.querySelectorAll('.product').forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const quantity = parseFloat(product.querySelector('.quantity').value) || 0;
        total += price * quantity;
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
}

document.getElementById('grocery-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const contactInput = document.getElementById('contact');
    const contactValue = contactInput.value;

    if (!/^\d{10}$/.test(contactValue)) {
        alert('Please enter a valid 10-digit mobile number.');
        return; 
    }

    
    const modal = document.getElementById('order-modal');
    modal.style.display = 'block';

    
    this.reset(); 

    
    const closeModal = document.querySelector('.close');
    closeModal.onclick = function() {
        modal.style.display = 'none'; 
    }

    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    }
});
