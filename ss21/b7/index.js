let principal = 1000;
let lai = 1 / 100;
let month = 3;
let tongtien = principal;
for (let i = 1; i <= month; i++) {
    let tienlaicuoi = tongtien * lai;
    tongtien += tienlaicuoi;
}
let totalInterest = tongtien - principal;
console.log(`Tiền lãi ${totalInterest.toFixed(3)}`);
console.log(`Tổng số tiền ${tongtien.toFixed(3)}`);
