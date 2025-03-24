let num=prompt("mời bạn nhập số: ");
if(num<0||isNaN(num)){
    console.log("số không hợp lệ");
}else{
for(let i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);
    }
}
}