var topPosition = 200;
var leftPosition = -200;

// function runPuppy() 
// {
//     var runningSpeed = 5;
//     var puppy = document.getElementById("puppy");

//     var x = puppy.offsetTop;

// }


function runPuppy()
{
    var speed = 1;
    // document.getElementsById('puppy').offsetLeft;
    var y = document.getElementById('puppy').offsetTop;
    var x = document.getElementById('puppy').offsetLeft;
    //alert(x);

    for(var i=0;i<800;i++)
    {
        x=x+speed;
        document.getElementById('puppy').style.left = x + "px";
        await sleep(i*1000)
        //alert(x);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
