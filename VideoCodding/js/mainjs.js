function thuchienpheptoan(a,b,pt)
{
kq=""
switch(pt)
{
case "+":
kq = a+b;
break;
case "-":
kq = a-b;
break;
case "*":
kq = a*b;
break;
case "/":
kq = a/b;
break;
default:
kq = "Phep toan khong hop le";
break;
}
return kq;
}