let num, le=0,chan=0;
for(let i=0;i<5;i++){
    num=+prompt(` mời bạn nhập số thứ ${i+1} là: `);
    if(num%2!=0){
        le++;
    }else{
        chan++;
    }
}
console.log(` tổng số lẻ là ${le}`);
console.log(` tổng số chẵn là ${chan}`);