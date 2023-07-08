// key:value
let huan={
    name: 'huan',
    address:'Dn'
};
let b='name';
// vì sao dùng []?: bởi vì ngoặc sẽ biết chính xác cái key mình cần dùng còn dùng chấm thì ko 
// huan[b]='huynh'
huan.b='ba'
console.log('ten cua ban la gi',huan['name'], 'nha cua ban o dau',huan.address)
console.log('ten cua ban la gi',huan,huan['b'])
