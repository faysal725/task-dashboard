
function loadPDF(url, pdfContainerId, modalId) {
    const pdfEmbed = document.getElementById(pdfContainerId);
    if (pdfEmbed) {
        pdfEmbed.src = url;
        console.log(`PDF loaded from: ${url}`);
        toggleModal(modalId)
    } else {
        //   console.error('No element found with class "pdf_container"');
        alert('No element found with class "pdf_container"')
    }
}