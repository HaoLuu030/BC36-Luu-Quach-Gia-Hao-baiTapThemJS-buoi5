/*Bài 1:
 * Input:
 *Thông tin cá nhân: Họ tên, tổng thu nhập, số người phụ thuộc

 Công thức tính thu nhập chịu thuế
 *
 * Process:
 *
 * Lấy input: var name = ...; var yearlyIncome  = ...; var dependences = ..., var taxableIncome = ...; var incomeTax = ...;
 * 
 * Tính thu nhập chịu thuế: 
 * 
 * taxableIncome = yearlyIncome - 4000000 - dependences * 1600000;
 *
 * So sánh thu nhập chịu thuế với điều kiện ở từng mốc (60000000, 120000000, 210000000, 384000000, 624000000, 960000000) => tiền thuế mà người này phải đóng.
 *
 * 
 *
 *
 *
 * Output: Kết quả thuế thu nhập cá nhân
 */

 function ex1() {
    var name = "Huỳnh Văn Tèo";
    var yearlyIncome = 180000000;
    var dependences = 5;
    var taxableIncome = yearlyIncome - 4000000 - dependences * 1600000;
    var incomeTax = "";
  
    if (taxableIncome <= 60000000) {
      incomeTax = taxableIncome * 5 / 100;
    } else if (taxableIncome <= 120000000) {
      incomeTax = taxableIncome * 10 / 100;
    } else if (taxableIncome <= 210000000) {
      incomeTax = taxableIncome * 15 / 100;
    } else if (taxableIncome <= 384000000) {
      incomeTax = taxableIncome * 20 / 100;
    } else if (taxableIncome <= 624000000) {
      incomeTax = taxableIncome * 25 / 100;
    } else if (taxableIncome <= 960000000) {
      incomeTax = taxableIncome * 30 / 100;
    } else {
      incomeTax = taxableIncome * 35 / 100;
    }
  
    console.log("Thuế thu nhập cá nhân của " + name + " là " + incomeTax + " (VND)");
  }


  /******************************************** */


  /**
 * Bài 2:
 * Input:
 *Thông tin khách hàng: loại khách hàng, số kênh cơ bản, số kênh cao cấp, phí dịch vụ cơ bản, phí thuê kênh cao cấp

 Công thức tính thuế
 *
 * Process:
 *
 * Lấy input: var type = "nhà dân", var billHandling; var BasicPlanFee; varPremiumChannelfee; var basicPlanConnections (chỉ áp dụng cho doanh nghiệp); var premiumChannelConnections ; var totalFee;
 *
 *Process:
 *Xét điều kiện xem type là nhà dân hay doanh *nghiệp:

* + Nếu là nhà dân 
=> chi phí dịch vụ tương ứng (phí xử lý hóa đơn: 4.5$; phí dịch vụ cơ bản: 20.5$; thuê kênh cao cấp: 7.5$/ kênh)

=> Tính số tiền theo công thức: 

totalFee = billHandling + basicPlanFee + premiumChannelFee * premiumChannelConnections

+ Nếu là doanh nghiệp
=> chi phí dịch vụ tương ứng  (Phí xử lý hóa đơn: 15$, phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối; thuê kênh cao cấp: 50$ / kênh)

Xét xem số kết nối (basicPlanConnections) có lớn hơn 10 hay không:

Nếu không => basicPlanFee = 75;

=> Tính số tiền theo công thức: 

totalFee = billHandling + basicPlanFee + premiumChannelFee * premiumChannelConnections

Nếu có: => basicPlanFee = 75 + (basicPlanConnections - 10)
 *
=> Tính số tiền theo công thức: 

totalFee = billHandling + basicPlanFee + premiumChannelFee * premiumChannelConnections
 *
 *
 *
 * Output: Kết quả thuế thu nhập cá nhân
 */

function ex2() {
    var type = "nhà dân";
    var billHandling;
    var basicPlanFee;
    var premiumChannelFee;
    var basicPlanConnections;
    var premiumChannelConnections = 50;
    var totalFee;
  
    if ((type = "nhà dân")) {
      billHandling = 4.5;
      basicPlanFee = 20.5;
      premiumChannelFee = 7.5;
      totalFee = billHandling + basicPlanFee + premiumChannelFee * premiumChannelConnections;
    } else if ((type = "doanh nghiệp")) {
      billHandling = 15;
      premiumChannelFee = 50;
      if (basicPlanConnections <= 10) {
        basicPlanFee = 75;
      } else {
        basicPlanFee = 75 + (basicPlanConnections - 10) * 5;
      }
      totalFee = billHandling + basicPlanFee + premiumChannelFee * premiumChannelConnections;
    }
    console.log(" Kết quả bài 4: Phí cáp: $" + totalFee);
  }