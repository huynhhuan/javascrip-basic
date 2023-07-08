let a=['mu','mc','liver','chelsea'];
let i=0;
while(i<a.length){
    // console.log('top: ',i+1,a[i]);
    // i++;
    i++;
    if(a[i]==='liver'){
        console.log('top: ',i+1,a[i]);
        continue;
    }
    console.log('check, ',i)
}