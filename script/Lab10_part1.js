// var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
// var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

// var curFontColor=1;
// var curBgColor=1;


function changeColor(){

    var radio = document.getElementsByName('color');
    for(var i=0,length = radio.length;i<length;i++)
    {
        if(radio[i].checked)
        {
            document.getElementById('text').style.color = radio[i].value;
            //alert(radio[i].value);
        }
    }

}


function changeBg()
{
    var selectOpt = document.getElementById('colorsel').value;
    // var strSelect = selectOpt.value;
    document.getElementById('td_text').style.background = selectOpt;
}
