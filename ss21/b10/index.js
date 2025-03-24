let num=prompt("mời bạn nhập số: ");
let count=2;
if(num<2||isNaN(num)){
    console.log("số không hợp lệ");
}else{
    while(count<num){
        let check=0;
        for(let i=2;i<=Math.sqrt(count);i++){
            if(count%2==0){
                check=1;
                break
            }
        }
        if(check==0){
            console.log(count);
        }
        count++;
    }
}