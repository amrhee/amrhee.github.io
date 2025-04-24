document.querySelector("form").addEventListener("submit", function (e) {
e.preventDefault();
const firstName = document.getElementById("First name").value.trim();
const lastName = document.getElementById("last name").value.trim();
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const gender = document.querySelector("input[name='gender']:checked");
if (!firstName || !lastName || !username || !email || !password) {
    alert("من فضلك، املأ جميع الحقول.");
    return;
}
if (!gender) {
    alert("من فضلك، اختر النوع (ذكر أو أنثى).");
    return;
}
if (password.length < 6 || password.length > 20) {
    alert("كلمة السر يجب أن تكون بين 6 و 20 حرف.");
    return;
}
window.location.href="Ahmed.html";
});