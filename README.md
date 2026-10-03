# Phân tích lỗi & Lập bảng Test Cases

## 1. Phân tích lỗi

*   **Lỗi sai logic điều phối xe (Lỗi Hàng đợi - FIFO):** 
    *   *Đoạn code sai:* `const nextVehicle = waitingQueue.pop();`
    *   *Nguyên nhân:* Hàm `pop()` lấy ra phần tử nằm ở cuối mảng (xe đến muộn nhất). Đối với hàng đợi (Queue), nguyên tắc phải là xe đến trước phục vụ trước (First In First Out).
    *   *Cách sửa:* Thay `pop()` bằng hàm `shift()` để lấy phần tử ở đầu mảng (xe đến sớm nhất).
*   **Lỗi vượt quá chỉ số mảng (Out of bounds) gây ra kết quả NaN:**
    *   *Đoạn code sai:* `for (let i = 0; i <= completedSessionsKwh.length; i++)`
    *   *Nguyên nhân:* Mảng có độ dài là `length`, chỉ số lớn nhất của mảng là `length - 1`. Khi điều kiện vòng lặp là `i <= length`, tại vòng lặp cuối, biến `i` sẽ bằng `length`. Trình duyệt truy cập `completedSessionsKwh[length]` sẽ trả về giá trị `undefined`. Phép toán `totalKwh += undefined` sẽ tạo ra giá trị `NaN` (Not a Number), từ đó tính toán doanh thu `totalRevenue` cũng bị lỗi `NaN`.
    *   *Cách sửa:* Đổi điều kiện vòng lặp thành `i < completedSessionsKwh.length`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào (completedSessionsKwh) | Kết quả sai thực tế (Lỗi NaN) | Kết quả đúng mong đợi |
| :--- | :--- | :--- | :--- |
| Mảng rỗng | `[]` | Tổng sản lượng: NaN kWh<br>Tổng doanh thu: NaN VNĐ | Tổng sản lượng: 0 kWh<br>Tổng doanh thu: 0 VNĐ |
| Mảng có 1 phần tử | `[10.5]` | Tổng sản lượng: NaN kWh<br>Tổng doanh thu: NaN VNĐ | Tổng sản lượng: 10.5 kWh<br>Tổng doanh thu: 47250 VNĐ |