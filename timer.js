function clock() {
    var timer = document.getElementById("timer");
    var date = new Date();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // var meridiane = "AM";

    // if (minutes < 10)
    //     minutes = "0" + minutes;
    
    // if (seconds < 10)
    //     seconds = "0" + seconds;
    
    // if (hours > 12) {
    //     hours -= 12;
    //     meridiane = "PM";
    // }
    
    // var currentTime =  hours + ":" + minutes + ":" + seconds + " " + meridiane;
    timer.innerHTML = date.toLocaleTimeString();

    setTimeout(clock, 1000);
}
clock();