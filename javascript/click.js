document.addEventListener("DOMContentLoaded", function() {
    const loadstringElement = document.querySelector("#next-section .loadstring");

    if (loadstringElement) {
        loadstringElement.addEventListener("click", function() {
            const oldText = this.textContent;

            this.classList.add("clicked");
            this.textContent = "copied";

            setTimeout(() => {
                this.textContent = oldText;
                this.classList.remove("clicked");
            }, 1000);
        });
    }
});