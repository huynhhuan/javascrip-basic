// filter/find
// let arr=['1','2','3','4','5','6','7','8','9','10'];
let arr=[
    {name:'huan',class:'dh'},
    {name:'huana',class:'dh'},
    {name:'huanb',class:'lop'},
    {name:'huanc',class:'lop'},
    {name:'huand',class:'lop'},
]
let filter=arr.find((item,index)=>{
    // console.log('in ra item:',item,'in ra index:',index);
    return item && item.class==='dh';
})
console.log(filter)