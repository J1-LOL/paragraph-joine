function Get_Paragraph_1(){

var inputs = [];
for (var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("a" + i).value);
}

document.getElementById("s1").innerHTML = inputs.join(".");

};

function Get_Paragraph_2(){

    var inputs1 = [];
    for (var u = 1 ; u <=6 ; u++)
    {
        inputs1.push(document.getElementById("b" + u).value);
    }
    
    inputs1.join(".");
    
    document.getElementById("s2").innerHTML = inputs1.join(".");
    
    }