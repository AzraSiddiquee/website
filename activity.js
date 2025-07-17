document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    const products = document.querySelectorAll('.product-card');

    // Filtering Logic
    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            const activeFilters = Array.from(filters)
                .filter(f => f.checked)
                .map(f => f.getAttribute('data-filter'));

            products.forEach(product => {
                const matches = activeFilters.every(filterClass =>
                    product.classList.contains(filterClass)
                );

                if (activeFilters.length === 0 || matches) {
                    product.style.display = 'flex';
                    product.style.flexDirection = 'column';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Quick View Modal (Optional Enhancement)
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';

    const modalContent = document.createElement('div');
    modalContent.style.background = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.maxWidth = '300px';
    modalContent.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    modalContent.innerHTML = '<span style="cursor:pointer;float:right;font-size:18px;" id="closeModal">&times;</span><div id="modalText"></div>';

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    products.forEach(product => {
        product.addEventListener('click', () => {
            const name = product.querySelector('h4').textContent;
            const details = product.querySelectorAll('p');
            let detailText = '';
            details.forEach(p => {
                detailText += p.textContent + '<br>';
            });

            document.getElementById('modalText').innerHTML = `<strong>${name}</strong><br>${detailText}`;
            modal.style.display = 'flex';
        });
    });

    document.getElementById('closeModal').onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

});

