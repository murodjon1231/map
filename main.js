function filterProducts() {
    const e = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.box1');

    productCards.forEach(card => {
        const productName = card.querySelector('p').textContent.toLowerCase();
        
        if (e === '' || productName.includes(e)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('searchButton').addEventListener('click', filterProducts);

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filterProducts();
    }
});

document.getElementById('searchInput').addEventListener('input', function() {
    if (this.value === '') {
        filterProducts();
    }
});
