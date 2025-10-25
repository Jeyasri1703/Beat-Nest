const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    let anyVisible = false; // track if any cards match

    cards.forEach(card => {
        const text = card.querySelector('span').textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
            anyVisible = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Optional: show "No results found" message
    const noResult = document.getElementById('noResult');
    if (!noResult) {
        const div = document.createElement('div');
        div.id = 'noResult';
        div.textContent = 'No results found';
        div.style.textAlign = 'center';
        div.style.padding = '20px';
        div.style.fontSize = '1.2rem';
        div.style.color = '#888';
        div.style.display = anyVisible ? 'none' : 'block';
        document.querySelector('.playlist-container').appendChild(div);
    } else {
        noResult.style.display = anyVisible ? 'none' : 'block';
    }
});
/*playlist*/
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        // Close all cards
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

        // If it was not active before, activate it now
        if (!isActive) {
            card.classList.add('active');
        }
    });
});


