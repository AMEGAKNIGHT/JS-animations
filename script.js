function myMove() {
    var elem = document.getElementById("myAnimation")  //принимает значения с анимации 
    var pos = 100; //изначальная точка
    var id = setInterval(frame, 10) //frame - функция или строка выпол. кода. 10 - интервал в м.сек. Он выполняет код повторно с заданым интервалом пока не будет остановлен командой 
    function frame () {
        if (pos == 344) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


