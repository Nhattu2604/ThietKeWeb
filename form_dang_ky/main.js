function togglePassword(fieldId, icon) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";  // Hiển thị mật khẩu
        
        // Thay đổi icon thành mắt mở
        icon.classList.remove('bx-low-vision');  // Loại bỏ icon mắt nhắm
        icon.classList.add('bx-show');  // Thêm icon mắt mở
    } else {
        field.type = "password";  // Ẩn mật khẩu
        
        // Thay đổi icon thành mắt nhắm
        icon.classList.remove('bx-show');  // Loại bỏ icon mắt mở
        icon.classList.add('bx-low-vision');  // Thêm icon mắt nhắm
    }
}


function hienThiDangKy() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function kiemTraDangNhap() {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (user === "" || pass === "") {
        alert("Vui lòng cung cấp thông tin");
        return;
    }

    alert("Đăng nhập thành công!");
}

function kiemTraDangKy() {
    const user = document.getElementById("regUser").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass = document.getElementById("regPass").value;
    const pass2 = document.getElementById("regPass2").value;

    if (!user || !email || !pass || !pass2) {
        alert("Không được bỏ trống thông tin nào!");
        return false;
    }

    if (user.length < 4) {
        alert("Tên đăng nhập phải có ít nhất 4 ký tự!");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return false;
    }

    if (pass.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự!");
        return false;
    }

    if (pass !== pass2) {
        alert("Mật khẩu nhập lại không khớp!");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}
