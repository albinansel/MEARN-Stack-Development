function prime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            break;
        }
        else {
            return num;
        }
    }

    var number;
    for (number = 5; number <= 25; number++) {
        res = prime(number);
        console.log(res);
    }
}



