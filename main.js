const fastChargingRate = 4500;
const waitingQueue = ["29A-112.33", "30E-889.12", "51K-678.99"];

// SỬA LỖI 1: Dùng shift() thay vì pop() để tuân thủ nguyên tắc hàng đợi FIFO (Vào trước ra trước)
const nextVehicle = waitingQueue.shift();
console.log("Xe được điều phối vào sạc:", nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

// SỬA LỖI 2: Đổi điều kiện i <= completedSessionsKwh.length thành i < completedSessionsKwh.length
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log("Tổng sản lượng:", totalKwh, "kWh");
console.log("Tổng doanh thu:", totalRevenue, "VNĐ");
