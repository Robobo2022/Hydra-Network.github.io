function copyToClipboard() {
    const codeElement = document.querySelector("#next-section .loadstring code");
    const codeText = codeElement.innerText;
    
    navigator.clipboard.writeText(codeText)
}