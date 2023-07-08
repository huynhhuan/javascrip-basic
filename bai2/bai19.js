// for làm thay đổi mảng còn map tạo ra một mảng mới




let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<arr.length;i++){
//     arr[i]=arr[i]*arr[i];
// }
// console.log('so chinh phuong:',arr);
let maparr=arr.map((item,index) =>{
    item=item*item;
    return item;
})
console.log('so chinh phuong:',arr);
console.log('so chinh phuong maparr:',maparr);
