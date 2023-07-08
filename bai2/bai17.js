// callback: thực hiện ngay sau khi gọi bởi vì js không đồng bộ tức là chạy nhiều code cùng lúc,
// setTimeout: delay thời gian tính bằng miliseconds,
// setInterval: lặp vô hạn theo thời gian
let sum=(a, b, callback) => {
    let tong=a+b;
    // setTimeout(()=>{
    //     callback(tong);},5000)
    let i=0;
    let time=setInterval(()=>{
        callback(tong);
        i++;
        if(i===5){
            clearInterval(time);
        }
    },1000)
    
    }
    
let printsum=(message) =>{
    console.log('check sum: ',message);
}
sum(10,4,printsum)
