let deadline = new Date('May 31, 2023 00:00:00');
let intervalId, isActive = false;

function timerCount(){
    let now = new Date();
    const diff = deadline - now;
    document.getElementById("daysLeft").innerText = Math.floor(diff / (1000 * 3600 * 24))
    document.getElementById("hoursLeft").innerText = Math.floor(diff / (1000 * 3600) % 24)
    document.getElementById("minutesLeft").innerText = Math.floor((diff / 1000 / 60) % 60)
    document.getElementById("secondsLeft").innerText = Math.floor((diff / 1000) % 60)
    if (deadline.getFullYear() == now.getFullYear
        && deadline.getMonth() == now.getMonth
        && deadline.getDay() == now.getDay){
            clearInterval(intervalId)
            alert("Timer finished!")
        }

}

//Дописать обработки событий: когда 1 день, час и тд, чтобы было значение в единсетвенном числе, а при запуске таймера все во множественном

document.getElementById('submit').addEventListener('click', function(){
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let newDate = `${month} ${day}, ${year} 00:00:00`;
    if (newDate != 'Invalid Date' && new Date(`${newDate}`) > new Date && isActive == false){
        deadline = new Date(`${newDate}`);
        intervalId = setInterval(timerCount, 1000)
    }
    else {
        alert("Invalid Date was entered")
    }
})

