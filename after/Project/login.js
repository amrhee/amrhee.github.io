document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();   
    if (!username || !email || !password) {
      alert("من فضلك، املأ جميع الحقول.");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert("كلمة السر يجب أن تكون بين 6 و 20 حرف.");
      return;
    }window.location.href="Ahmed.html";}
);