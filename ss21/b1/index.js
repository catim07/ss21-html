let num, resutl=0;
for(let i=0;i<5;i++){
    num=+prompt(` mời bạn nhập số thứ ${i+1} là: `);
    if(num%2!=0){
        resutl+=num;
    }
}
console.log(` tổng số lẻ là ${resutl}`);