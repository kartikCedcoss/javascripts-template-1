function func1(){
    var l = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    x=parseInt(l);
    y=parseInt(b);
    document.getElementById("result2").innerHTML = "Parameter is "+ l*b +" "+ "sq. mtr "  ;
    document.getElementById("result1").innerHTML = "Area is "+ 2*(x+y) +" "+ "sq. mtr "  ;
     

}
