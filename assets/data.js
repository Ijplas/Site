function tabs(tabId) {
    // Get all tabs and tab content
    const allTabs = document.querySelectorAll('.tab');
    const allTabLinks = document.querySelectorAll('.tabs ul li');

    // Hide all tab content and remove active class from tabs
    allTabs.forEach(tab => tab.style.display = 'none');
    allTabLinks.forEach(link => link.classList.remove('is-active'));

    // Show the selected tab content
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
    }

    // Add the active class to the selected tab
    const activeLink = [...allTabLinks].find(link => 
        link.querySelector('a').getAttribute('onclick').includes(tabId)
    );
    if (activeLink) {
        activeLink.classList.add('is-active');
    }
}

// Initialize by showing the first tab
document.addEventListener('DOMContentLoaded', () => {
    tabs('hello'); // Set the default active tab
});
