let a=+prompt("mời bạn nhập giá trị a:");
let b=+prompt("mời bạn nhập giá trị b:");
let c=+prompt("mời bạn nhập giá trị c:");
let denta=b*b-4*a*c;
if(denta<0){
    console.log("phương trình vô nghiệm");
}else if(denta==0){
    let kep=(-b/(2*a));
    console.log(` phương trình có nghiệm kép x1=x2=${kep}`);
}else{
    let x1=(-b-Math.sqrt(denta))/2*a;
    let x2=(-b+Math.sqrt(denta))/2*a;
    console.log(` phương trình có 2 nghiệp phân biệt
        x1=${x1}
        x2=${x2}`);
}