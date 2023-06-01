var a=0;
const pic=[1,2,3,4,5,6,7,8,9];
btn1.addEventListener('click',()=>
{
    document.getElementById("image").src=`${pic[a]}.jpg`;
    console.log(pic[a]);
    a++;
    if(a==pic.length)
    {
        a=0;
    }
})
btn2.addEventListener('click',()=>
{
    document.getElementById("image").src=`${pic[a]}.jpg`;
    console.log(pic[a]);
    a++;
    if(a==pic.length)
    {
        a=0;
    }
})