var a = prompt('Введите число, которое будем возводить в степень');
var n = prompt('Введите степень');

function pow(a, n) {
    var result = 1;
    
    if (n < 0) {
        for (var i = n; i <= -1; i++) {
            result *= a;
        }
        return 1 / result;
    }

    if (n === 0) {
        return result;
    }
    if (n > 0) {
        for (var i = 1; i <= n; i++) {
            result *= a;
        }
        return result;
    }
    
}

if (isNaN(a) || isNaN(n)) {
    alert('Введенные данные не верные, введите число');
} else {
    alert(pow(a, n));
}
