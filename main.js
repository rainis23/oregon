document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
            this.classList.add('active');
        });
    });
});