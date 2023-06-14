/** Tạo 1 mảng rỗng để chứa tất cả các giá trị từ input nhập vào 
 * dom lấy giá trị từ input
 * push vào trong mảng rỗng chứa giá trị
 * In ra ngoài màn hình
 */
const arrNumbers = [];

document.getElementById("btnThemSo").onclick = function () {
  var themSo = document.getElementById("nhapSoN").value * 1;
  arrNumbers.push(themSo);
  document.getElementById("xuatBtnThemSo").innerHTML = arrNumbers;
};
// tính tổng số dương
/**
 * Input : từ người dùng nhập vào 
 * progress : tạo 1 biến sum có giá trị bằng 0; tạo 1 biến hứng giá trị của chiều dài mảng khi người dùng nhập vào; chạy vòng lặp lấy giá trị từng phần tử ở trong mảng sau đó cho cộng lại với nhau
 * output xuất ra ngoài màn hình tổng số dương
 */
function tongSoDuong() {
  var sum = 0;
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    sum += number;
  }
  document.getElementById(
    "xuatKetQuaTongSoDuong"
  ).innerHTML = `tổng số dương là ${sum}`;
}
document.getElementById("btnTongSoDuong").onclick = tongSoDuong;
// đếm số dương
/**
 * input lấy giá trị người dùng nhập vào 
 * progress : tạo 1 biến đếm gán cho nó bằng 0; duyệt mảng đếm từng phần tử trong mảng; qua 1 số thì biến đếm sẽ cộng thêm 1
 * output : in biến đếm ra ngoài màn hình 
 */
function demSoDuong() {
  var dem = 0;
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    dem++;
  }
  document.getElementById(
    "xuatKetQuaDemSoDuong"
  ).innerHTML = `số dương : ${dem} `;
}
document.getElementById("btnDemSoDuong").onclick = demSoDuong;
//số nhỏ nhất
/**
 * input : lấy giá trị từ người dùng nhập vào mảng 
 * progress : dặt 1 cờ coi như giá trị mang chỉ số số index là 0 trong mang coi như là số nhỏ nhất; duyệt mảng tạo 1 biến number hứng tất cả các giá trị trong mảng, chạy qua index nào có số number < min thi sau đó gán min bằng number
 * output : in ra màn hình
 */
function soNhoNhat() {
  var min = arrNumbers[0];
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    if (number < min) {
      min = number;
    }
  }
  document.getElementById(
    "xuatKetQuaSoNhoNhat"
  ).innerHTML = `Số nhỏ nhất là ${min}`;
}
document.getElementById("btnSoNhoNhat").onclick = soNhoNhat;
// số dương nhỏ nhất
// tương tự bài ở trên nhưng ta có thêm điều kiện là number phải lớn hơn 0
function soDuongNhoNhat() {
  var min = arrNumbers[0];
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    if (number < min && number > 0) {
      min = number;
    }
  }
  document.getElementById(
    "xuatKetQuaSoDuongNhoNhat"
  ).innerHTML = ` số dương nhỏ nhất ${min}`;
}
document.getElementById("btnSoDuongNhoNhat").onclick = soDuongNhoNhat;
// số chẵn cuối cùng trong mảng
/**
 * input : lấy giá trị người dùng nhập vào; nếu không có số chẵn nào thì trả kết quả về -1
 * progress : tạo 1 biến cho số chẵn lớn nhất là -1; duyệt mạng tạo 1 biến number hứng hết giá trị của mảng trả về; nếu number chia hết cho 2 bằng 0 thì number là số chẵn; nếu ko có số chẵn nào thì return ra -1
 * output in ra màn hình 
 */
function soChanCuoiCung(maxChan) {
  var maxChan = -1;
  length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    if (number % 2 === 0) {
      maxChan = number;
    }
  }
  return maxChan;
}
document.getElementById("btnSoChanCuoicung").onclick = function () {
  var soChan = soChanCuoiCung();
  document.getElementById(
    "xuatKetSoChanCuoiCung"
  ).innerHTML = ` ${soChan}`; 
};
// thay đổi vị trí
/**
 * input giá trị người dùng nhập vào
 * tạo 1 hàm truyền vào 3 tham số là mảng; 2 tham số còn lại lần lượt là vị trí index; tạo 1 biến arr hứng giá trị của mảng; sử dụng thuật toán bubble sort để thay đổi vị trí giá trị trong mảng
 * output : in ra màn hình
 */
function hoanDoiViTriTrongMang(arr, soThuNhat, soThuHai) {
  var soThuNhat = document.getElementById("soThuNhat").value * 1;
  var soThuHai = document.getElementById("soThuHai").value * 1;
  var arr = arrNumbers ;
  var giaTri = arrNumbers[soThuNhat] ;
  arrNumbers[soThuNhat] = arrNumbers[soThuHai] ; 
  arrNumbers[soThuHai] = giaTri
  document.getElementById("xuatHoanDoi").innerHTML = arr
}
document.getElementById("btnHoanDoi").onclick = hoanDoiViTriTrongMang;

// sắp xếp tăng
/**
 * input : lấy giá trị từ người dùng nhập vào mảng; 
 * progress : tạo 1 mảng rỗng để hứng giá trị; khi duyệt mảng bằng vòng lặp người dùng nhập vào; sau đó push các giá trị vào mảng rỗng vừa tạo; dùng hàm sort truyền vào tham số a và b và return ra a - b  chúng ta sẽ có mảng đã đc sắp xếp
 * output: in ra ngoài màn hình
 */
function sapXepTangDan() {
  var arrSapXep = [] ;
  var length = arrNumbers.length ;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    arrSapXep.push(number) ;
  }
  arrSapXep.sort(function(a,b){
    return a - b;
  });
  document.getElementById("xuatKetQuaSapXepTang").innerHTML = arrSapXep ;
}
document.getElementById("btnSapXepTang").onclick = sapXepTangDan

// tìm số nguyên tố đầu tiên trong mảng 
/**
 * input : giá trị người dùng nhập vào trong mảng
 * progress : viết 1 hàm check xem số đó có phải là số nguyên tố không; số nguyên tố có 2 ước;  sau đó viết hàm tìm số nguyên tố đầu tiên nếu là số nguyên tố dầu tiên sẽ return ra số đầu tiên vào không tìm đến số thứ 2; nếu không có só nguyên tô nào thì sẽ return ra -1
 * output: in ra ngoài màn hình
 */
function checkSNT(uoc) {
  if(uoc < 2 ) {
    return false
  }else  {
    for (var i = 2; i < Math.sqrt(uoc); i++) {
      if (uoc % 2 == 0) {
        return false
      }
    }
  }
  return true ;
}
function timSoNTDauTien() {
  var length = arrNumbers.length ;
  for(var i = 0; i < length; i++) {
    var number = arrNumbers[i] ;
    if(checkSNT(number) == true ) {
      return number
    }
  }
  return -1; 
}
document.getElementById("btnTimSoNguyenTo").onclick = function() {
  var soNTDauTien = timSoNTDauTien();
  document.getElementById("xuatKetQuaSoNguyenTo").innerHTML = `số nguyên tố đầu tiên trong mảng là ${soNTDauTien}`
}
// nhập thêm 1 mảng số thực; đếm có bao nhiêu số nguyên
/**
 * input : tạo ra 1 mảng mới và nhập vào mảng 
 * progress :tao ra 1 biến đếm để giá trị bằng 0; sau duyệt mảng kết hợp với dùng hàm number.isinteger kiểm tra xem nó có phải là số nguyên tố không; nếu đúng thì biến đếm cộng thêm 1
 * output in ra ngoài màn hình
 */
const mangSoMoiTao = [] ;
document.getElementById("btnXuatMangMoi").onclick = function() {
  var mangMoiTao = document.getElementById("mangSoThuc").value * 1 ;
  mangSoMoiTao.push(mangMoiTao) ;
  document.getElementById("xuatMangMoiTao").innerHTML = mangSoMoiTao ;
}
function demSoNguyen() {
  var count = 0 ;
  var length = mangSoMoiTao.length ;
  for(var i = 0; i < length; i++) {
    var soMoi = mangSoMoiTao[i]; 
    if(Number.isInteger(soMoi) == true) {
      count++
    }
  }
  document.getElementById("xuatMangMoi").innerHTML = `số lượng số nguyên là ${count}`
}
document.getElementById("btnDemMangMoi").onclick = demSoNguyen ;
//so sánh số dương và số âm
/**
 * input lấy giá trị người dùng nhập vào 
 * progress : tạo 2 biến số dương và số âm để đếm giá trị số dương và số âm người dùng nhập vào; duyệt mảng kết hợp với điều kiện là nếu giá trị trong mảng lớn hơn 0 thì số dương được cộng thêm 1 người lại nhỏ hơn thì cộng vào biến số âm
 * output xuất ra màn hình ngoài
 */
function soSanh(soDuong,soAm) {
  var soDuong = 0 ;
  var soAm = 0 ; 
  var length = arrNumbers.length ;
  for(var i = 0; i < length; i++) {
    var number = arrNumbers[i] ;
    if (number > 0){
      soDuong++
    } else {
      soAm++
    }
  }
  if (soDuong > soAm ) {
    document.getElementById("soSanhNao").innerHTML = `số lương số dương là ${soDuong} và số âm là ${soAm} nên số dương > số âm`
  } else if (soDuong == soAm) {
    document.getElementById("soSanhNao").innerHTML = `số lương số dương là ${soDuong} và số âm là ${soAm} nên số dương = số âm`
  } else {
    document.getElementById("soSanhNao").innerHTML = `số lương số dương là ${soDuong} và số âm là ${soAm} nên số dương < số âm`
  }
}
document.getElementById("btnSoSanhNao").onclick = soSanh
