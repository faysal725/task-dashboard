function handleFileUpload(input, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !input.files.length) return;

    // Clear old items (optional — remove this if you want to keep previous ones)
    container.innerHTML = '';

    // Loop through selected files
    Array.from(input.files).forEach(file => {
        const li = document.createElement('li');
        li.className = 'text-xs text-cyan-700';
        li.textContent = file.name;
        container.appendChild(li);
    });
}