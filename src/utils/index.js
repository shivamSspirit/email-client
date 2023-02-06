export const removehtmltag = (emailbody) => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = emailbody;
    return tmp.textContent || tmp.innerText || "";
}
