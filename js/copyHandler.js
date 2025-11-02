function copyText(id) {
    let link = document.getElementById(id);
    if (link) {
        // Copy href to clipboard
        navigator.clipboard.writeText(link.href).then(() => {
            // alert("Copied: " + link.href); // Optional feedback
            Toastify({
                text: "Coppied",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        })
            .catch(err => {
                Toastify({
                    text: err,
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: red,
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            });
    } else {
        alert("No link found inside container!");
    }
}