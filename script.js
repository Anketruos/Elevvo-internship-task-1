// Toggle sidebar functionality
const toggleButton = document.getElementById('button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});