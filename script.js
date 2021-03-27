let checkAge = document.querySelector('.age__check');
checkAge.addEventListener('pointerdown', function () {
    let age = +prompt("Еnter your age!")
    if (age <= 18) {
        alert("You are too young, you need to learn!")
    } else if (age <= 50) {
        alert("You need to go working!")
    } else if (age <= 59) {
        alert("You will soon retire")
    } else if (age <= 150) {
        alert("You are retire")
    } else if (age = isNaN) {
        alert("This is not a numbers!")
    } else {
        alert("Something's wrong!")
    }
})


let checkTime = document.querySelector('.time__check');
checkTime.addEventListener('pointerdown', function () {
    let time = +prompt("What time is it now?")
    switch (time) {
        case 0:
            alert("it's midnight now")
            break;
        case 1:
            alert("it's one o'clock in the morning")
            break;
        case 2:
            alert("it's two o'clock in the morning")
            break;
        case 3:
            alert("it's three o'clock in the morning")
            break;
        case 4:
            alert("it's four o'clock in the morning")
            break;
        case 5:
            alert("it's five o'clock in the morning")
            break;
        case 6:
            alert("it's six o'clock in the morning")
            break;
        case 7:
            alert("it's seven o'clock in the morning")
            break;
        case 8:
            alert("it's eight o'clock in the morning")
            break;
        case 9:
            alert("it's nine o'clock in the morning")
            break;
        case 10:
            alert("it's ten o'clock in the morning")
            break;
        case 11:
            alert("it's eleven o'clock in the morning")
            break;
        case 12:
            alert("It's noon!")
            break;
        case 13:
            alert("it's one o'clock in the afternoon")
            break;
        case 14:
            alert("it's two o'clock in the afternoon")
            break;
        case 15:
            alert("it's three o'clock in the afternoon")
            break;
        case 16:
            alert("it's four o'clock in the afternoon")
            break;
        case 17:
            alert("it's five o'clock in the afternoon")
            break;
        case 18:
            alert("it's six o'clock in the evening")
            break;
        case 19:
            alert("it's seven o'clock in the evening")
            break;
        case 20:
            alert("it's eight o'clock in the evening")
            break;
        case 21:
            alert("it's nine o'clock in the evening")
            break;
        case 22:
            alert("it's ten o'clock in the evening")
            break;
        case 23:
            alert("it's eleven o'clock in the evening")
            break;
        case isNaN:
            alert("Enter only number!")
            break;
        case (time > 23 || time < 0):
            alert("There is no such time!")
            break;
        default: alert("Something's wrong!")
            break;
    }
    console.log(time);

})

let findFact = document.querySelector('.find__fact')
findFact.addEventListener('pointerdown', function () {
    let num = +prompt('Enter number!')
    let answer = num
    for (let i = 1; i < answer; i++) {
        num *= i
        console.log(num)
    }
    alert(num)
})

let exponentiation = document.querySelector('.exponentiation');
exponentiation.addEventListener('pointerdown', function () {
    let number = 5,
        degree = 3,
        result = number
    for (let i = 1; i < degree; i++) {
        result *= number
    }
})

let buildStairs = document.querySelector('.build__stairs');
buildStairs.addEventListener('pointerdown', function () {
    let stairsAmount = prompt('Enter amount of stairs')
    firstSymbol = prompt('Enter first symbol of stairs')
    lastSymbol = prompt('Enter last symbol of stairs')
    for (let i = 0; i <= stairsAmount; i++) {
        lastSymbol = i == 0 ? lastSymbol : firstSymbol + lastSymbol
        console.log(lastSymbol);
    }
})

let randomNum = document.querySelector('.random__num');
randomNum.addEventListener('pointerdown', function () {
    // function random() {
    //    return Math.floor(Math.random() * 15 + 1)
    // }

    // for (let i = 0; i < 100; i++) {
    //     let randomList = random() + " random"
    //     console.info(randomList)
    // }
    function random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }
    for (let i = 0; i < 10; i++) {
        let num1 =   random(1,10)
        let num2 =   random(1,10)
        let symbol = random(1,4)
        let example, result
        if (symbol == 1) {
            example = num1 + ' * ' + num2 + ' = ' + ' ? '
            result = num1 * num2
        }else if(symbol == 2){
            example = num1 + ' + ' + num2 + ' = ' + ' ? '
            result = num1 + num2
        }else if(symbol == 3){
            example = num1 + ' - ' + num2 + ' = ' + ' ? '
            result = num1 - num2
        }else if(symbol == 4){
            example = num1 + ' / ' + num2 + ' = ' + ' ? '
            result = num1 / num2
        }
        example = +prompt(example)
        if (example == result) {
            alert("That's right")
        }else{
            alert('Go to school dummy! The correct answer was ' + result)
        }
    }
})