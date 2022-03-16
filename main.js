//FORMART TIỀN VND
var currentFormat = new Intl.NumberFormat("vn-VN");



//------------------------------PHÉP SO SÁNH BẰNG (==)-----------------------
//so sánh giá trị
var number_1 = 10;
var number_2 = "10";
console.log(number_1 == number_2);


//------------------------------PHÉP SO SÁNH BẰNG (===)--------------------
//so sánh giá trị và so sánh kiểu dữ liệu
var number_3 = 10;
var number_4 = "10";
console.log(number_3 === number_4);

//------------------------------PHÉP SO SÁNH KHÁC (!=)--------------------
// so sánh giá trị dữ liệu có khác nhau hay không
var number_5 = 10;
var number_6 = 5;
console.log(number_5 != number_6);

//------------------------------PHÉP SO SÁNH KHÁC (!==)--------------------
// so sánh giá trị dữ liệu và kiểu dữ liệu có khác nhau hay không
var number_7 = 15;
var number_8 = "15";
console.log(number_7 !== number_8);

//------------------------------PHÉP SO SÁNH LỚN (>)--------------------
// so sánh giá trị dữ liệu lớn hơn
var number_9 = 20;
var number_10 = 1;
console.log(number_9 > number_10);

//------------------------------PHÉP SO SÁNH LỚN HƠN HOẶC BẰNG (>=)--------------------
// so sánh giá trị dữ liệu lớn hơn hoặc bằng nhau
var number_11 = 50;
var number_12 = 50;
console.log(number_11 >= number_12);

//------------------------------PHÉP SO SÁNH BÉ (<)--------------------
// so sánh giá trị dữ liệu bé hơn
var number_13 = 1;
var number_14 = 5;
console.log(number_13 < number_14);

//------------------------------PHÉP SO SÁNH BÉ HƠN HOẶC BẰNG (<=)--------------------
// so sánh giá trị dữ liệu bé hơn hoặc bằng nhau
var number_15 = 8;
var number_16 = 9;
console.log(number_15 <= number_16);

/**
 ------------------------------------SO SÁNH BIỂU THỨC-------------------------------
 (!): PHỦ ĐỊNH
 (&&): VÀ
 (||): HOẶC
 */

 //BIỂU THỨC VÀ (&&): ĐÚNG THÌ TẤT CẢ ĐỀU ĐÚNG, CÓ 1 SAI THÌ TẤT CẢ ĐỀU SAI
//  Nếu các biểu thức đều = true thì kết quả là true; 
//  Nếu như có 1 biểu thức sai thì kết quả là false;
var bieuthuc_1 = true;
var bieuthuc_2 = false;
console.log(bieuthuc_1 && bieuthuc_2);
//ví dụ 2:
console.log(7 > 4 && 9 < 5); // 1 sai => tất cả sai
console.log(7 > 4 && 9 > 5); // 2 đúng => tất cả đều đúng

//BIỂU THỨC HOẶC (||): CÓ 1 BIỂU THỨC ĐÚNG THÌ TẤT CẢ ĐỀU ĐÚNG.
//Nếu như 2 biểu thức đều sai = SAI.
var bieuthuc_3 = true;
var bieuthuc_4 = true;
console.log(bieuthuc_3 || bieuthuc_4);

//ví dụ:
console.log(4 > 5 || 1 < 2); // 1 đúng => tất cả đúng.
console.log(4 > 5 || 1 > 2); // cả 2 đều sai => tất cả sai.

//BIỂU THỨC PHỦ ĐỊNH (!)

var bieuthuc_5 = true;
console.log(!bieuthuc_5);

console.log(!(5 > 7 && 10 > 9));
console.log(!(5 < 7 && 10 > 9));


//--------------------------------- BIỂU THỨC ĐIỀU KIỆN (IF) --------------------------------

if(1 == 1)
{
    //hành động muốn thực hiện nếu hàm if() đúng
    console.log("hành động được thực hiện");
}

//ví dụ: chuyển số âm sang số dương
var d = -5;
if (d < 0) //xác định d là số âm
{
    d = -d; //nếu d < 0 là đúng thì gán cho d = -d => -d + -d = d (âm + âm = dương)
    console.log(d);
}

//--------------------------------- VÍ DỤ TÍNH TIỀN LÃI TÍN DỤNG --------------------------------
//ĐẦU VÀO: đã biết hằng số lãi 1.5%, nhập vào số tiền phải trả, tiền đã trả
//  var tienPhaiTra = document.getElementById("txtTienPhaiTra").value * 1;
//  var tienDaTra = document.getElementById("txtTienDaTra").value * 1;
//  const LAISUAT = 0.015; // 1.5% LÃI SUẤT
//  var tienPhat;
// //XỬ LÝ:
//      //dùng hàm điều kiện if để xử lý 2 vấn đề:
//      //nếu tiền phải trả = tiền đã trả:
//      if(tienDaTra >= tienPhaiTra)
//      {
//         var tinhTienPhat = document.getElementById("btnTinhTienPhat").onclick = function()
//         {
//             document.getElementById("divThongBaoTienPhat").innerHTML = "Không có tiền phạt!";
//         }
//      }
//      if(tienDaTra < tienPhaiTra)
//      {
//         var tinhTienPhat = document.getElementById("btnTinhTienPhat").onclick = function()
//         {
//             tienPhat = "Tiền phạt: " + (tienPhaiTra - tienDaTra) * LAISUAT;
//             document.getElementById("divThongBaoTienPhat").innerHTML = tienPhat;
//         }
//      }

var creditCardBalance = 100;
var payment = 50;
var balance = creditCardBalance - payment;

if(balance > 0)
{
    var pentaly = balance * (1.5/100);
    console.log("Tiền phạt là: "+pentaly);
}

//--------------------------------- BIỂU THỨC IF ELSE --------------------------------
 
if(1==1)
{
    //nếu if đúng
    console.log("hành động 1");
}
else
{
    //nếu if sai
    console.log("hành động 2");
}

//ví dụ tìm số lớn nhất trong 2 số
var d1 = 15;
var d2 = 10;
var bigger;

if (d1 > d2)
{
    bigger = d1;
}
else
{
    bigger = d2;
}
console.log("Số lớn nhất là: " + bigger);

// ví dụ tính giờ làm:
var luongTheoGio = 100000;
var soGioLam = 45;
const OT = 1.5;
var soGioOT = soGioLam - 40;
var tongLuong;

if(soGioLam > 40)
{   
    tongLuong = (soGioOT * (luongTheoGio * OT)) + (luongTheoGio * 40);
}
else
{
    tongLuong = soGioLam * luongTheoGio;
}
console.log("Tổng Lương: " + currentFormat.format(tongLuong) + " VND");

//--------------- TOÁN TỬ ĐIỀU KIỆN (TOÁN TỬ 3 NGÔI) --------------------------------
//VIẾT BÌNH THƯỜNG:
// if(1==1)
// {   
//     console.log("đúng");
// }
// else
// {
//     console.log("sai");
// }

//VIẾT 3 NGÔI:
//công thức: điều kiện ? "đúng" : "sai";
1 == 1 ? console.log("đúng") : console.log("sai");
//CHỈ ÁP DỤNG TOÁN TỬ 3 NGÔI KHI TRONG (IF ELSE)CHỈ CÓ 1 DÒNG CODE!!!

//--------------- BIỂU THỨC (IF - ELSE - IF) --------------------------------

//VÍ DỤ: ĐỌC SỐ:
var so = 9;
if(so == 1)
{
    console.log("Đây là số 1")
}
else if(so == 2)
{
    console.log("Đây là số 2")
}
else if(so == 3)
{
    console.log("Đây là số 3")
}
else
{
    console.log("Số khác")
}

//VÍ DỤ TÍNH ĐIỂM TRUNG BÌNH VÀ XẾP HẠNG HỌC LỰC
var hoTen = "Hồ Công Đức";
var diemToan = 9.5;
var diemLy = 5;
var diemHoa = 5;
var diemTB = (diemToan + diemLy + diemHoa)/3;

if(diemTB >= 8.5)
{
    console.log(hoTen + " đạt Giỏi!");
}
else if (6.5 <= diemTB && diemTB < 8.5)
{
    console.log(hoTen + " đạt Khá!");
}
else if (5 <= diemTB && diemTB <6.5)
{
    console.log(hoTen + " đạt Trung Bình!");
}
else if(diemTB < 5)
{
    console.log(hoTen + " đạt Yếu!");
}

//VÍ DỤ ĐI CHỢ:
var tenHang = "Rau xà lách";
var soLuongHang = 184;
var donGia = 5000;
const GIAMGIA1 = 0.08;
const GIAMGIA2 = 0.12;
var tienHang50 = donGia * soLuongHang;
var tongTienHang;

if(50 > soLuongHang)
{
    tongTienHang = tienHang50;
    console.log(tongTienHang);
}
else if (50 <= soLuongHang && soLuongHang <= 100)
{
    var soLuongHangHon50 = soLuongHang - 50;
    var soTienHangHon50 = soLuongHangHon50 * (donGia - (donGia * GIAMGIA1));
    tongTienHang = (donGia * 50) + soTienHangHon50;
    console.log(tongTienHang);
}
else if(soLuongHang > 100)
{
    var soLuongHangHon100 = soLuongHang - 100;
    var soTienHangHon50 = 50 * (donGia - (donGia * GIAMGIA1));
    var soTienHangHon100 = soLuongHangHon100 * (donGia - (donGia * GIAMGIA2));
    tongTienHang = (donGia * 50) + soTienHangHon50 + soTienHangHon100;
    console.log(tongTienHang);
}
