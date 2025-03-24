let num=prompt("mời bạn nhập số: ");
if(num<2||isNaN(num)){
    console.log("số ko hợp lệ");
}else{
    let check=0;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            check=1;
            break;
        }
    }
    if(check==1){
        console.log("số của bạn không phải là số nguyên tố");
    }else{
        console.log("số của bạn là số nguyên tố");
    }
}
colorize