// Hàm Reset
function Reset() {
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("ketqua").value = null;
    document.getElementById("log").innerText = "";
  }
  
  // Hàm tính tổng
  function Sum() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = parseFloat(a) + parseFloat(b);
    check(a, b, s, "Tổng");
  }
  
  // Hàm tính trừ
  function Subtract() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = parseFloat(a) - parseFloat(b);
    check(a, b, s, "Hiệu");
  }
  
  // Hàm tính nhân
  function Multiply() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = parseFloat(a) * parseFloat(b);
    check(a, b, s, "Tích");
  }
  
  // Hàm tính chia
  function Divide() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    // Kiểm tra chia cho 0
    if (b == 0) {
      document.getElementById("log").innerText = "Vui lòng nhập b khác 0!";
      document.getElementById("ketqua").value = null;
      return;
    }
    var s = parseFloat(a) / parseFloat(b);
    check(a, b, s, "Thương");
  }
  
  // Hàm kiểm tra các giá trị có phải là số hay không
  function check(a, b, c, operation) {
    if (isNaN(c) == false) {
      document.getElementById("ketqua").value = c;
      document.getElementById("log").innerText = `${operation} là: ${c}`;
    } else {
      if (isNaN(a) && isNaN(b)) {
        document.getElementById("log").innerText = "Vui lòng nhập a và b ở dạng giá trị số!";
        document.getElementById("a").value = null;
        document.getElementById("b").value = null;
        document.getElementById("ketqua").value = null;
      } else {
        if (isNaN(a)) {
          document.getElementById("log").innerText = "Giá trị a không phải là số!";
          document.getElementById("a").value = null;
        } else if (isNaN(b)) {
          document.getElementById("log").innerText = "Giá trị b không phải là số!";
          document.getElementById("b").value = null;
        }
        document.getElementById("ketqua").value = null;
      }
    }
  }
  
  // Đăng ký các sự kiện cho các nút
  window.onload = function() {
    document.getElementById("cong").addEventListener("click", Sum);
    document.getElementById("tru").addEventListener("click", Subtract);
    document.getElementById("nhan").addEventListener("click", Multiply);
    document.getElementById("chia").addEventListener("click", Divide);
  }
  