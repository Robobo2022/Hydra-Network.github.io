function copyCode() {
  const code = document.querySelector(".Codeblock");
  const trimmedText = code.textContent.trim();
  const tempElement = document.createElement("textarea");
  tempElement.value = trimmedText;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);  
}
