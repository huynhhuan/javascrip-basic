let a=['lienquan','freefire','pubg','tocchien']
for(let i=0; i<a.length; i++){
    console.log('nhung tua game pho bien:',a[i]);
    console.log('top: ',i+1,a[i])
}
// console.log('top: ',0+1,a[0])
// console.log('top: ',1+1,a[1])
// console.log('top: ',2+1,a[2])
// console.log('top: ',3+1,a[3])
let i=0;
// while(i< a.length){
//     console.log('top: ',i+1,a[i]);
//     i++;
// }
do{
    console.log('top: ',i+1,a[i]);
    i++;
}
while(i<0);