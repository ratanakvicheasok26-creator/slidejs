
function convertTohour(){

    const hour = Math.floor(totalMinutes/60);
    minute = totalMinutes % 60
    return hour + "h" + minute + "mn"
}


console.log(convertTohour(90))

function covertTominute(timstring){
    const [hour, minute] = timstring.split(':');
    return hour(hour, 10) *60 + minute(minute, 10)
  
    

    

}

function caculate(oparator){
    let time_in = document.getElementById("time_in").value;

    let  time_out = document.getElementById("time_out").value;
     time_in = Number("time_in");
     time_out = Number("time_out");
    let result = document.getElementById("result");

    time_in = covertTominute(time_in);
    time_out= convertTominute(time_out)

    if (time_in > time_out){
        let totalMinutes = time_in - time_out;
    }
    else{
        let totalMinutes = time_out - time_in;
    }

    result.innerHTML = total + "min"
}
