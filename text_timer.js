let lessonsArray = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.", "If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.", "If you compare the software object with a real-world object, they have very similar characteristics.", "Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.", "So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.", "A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.", "Following are some of the important topics that need to be discussed when looking into classes of the Java Language.", "A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following", "In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.", "A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let originalTextTag = document.querySelector('#original-text');
let textAreaBoxTag = document.querySelector('#text-area');
let secondsTag = document.querySelector('#seconds');
let minutesTag = document.querySelector('#minutes');
let resetBtn = document.querySelector('#reset')
let milliSecondsTag = document.querySelector('#m-seconds');
let congoTag = document.querySelector('#congo')
let congratsSection = document.querySelector('.cong-section');
let claps = document.querySelector('#claps')
let z = document.getElementById("dog");
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let count = 0;
let timerRunning = false;
let interval = null;


let startTimer = () => {

    count++;
    minutes = Math.floor((count / 100) / 60);
    seconds = Math.floor((count / 100) - (minutes * 60));
    milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));

    minutesTag.innerText = leadingZero(minutes);
    secondsTag.innerText = leadingZero(seconds);
    milliSecondsTag.innerText = leadingZero(milliSeconds);
}


let leadingZero = (time) => {
    if (time < 10) {
        return '0' + time;
    }
    else {
        return time;
    }
}

textAreaBoxTag.addEventListener('keyup', function () {
    let textEnteredLength = textAreaBoxTag.value.length;
    if (textEnteredLength === 1 && !timerRunning) {
        interval = setInterval(startTimer, 10);
        timerRunning = true;

    }
    let originalText = originalTextTag.innerText;
    let textEntered = textAreaBoxTag.value;
    let partialText = originalText.substr(0, textEntered.length);
    evaluateText(originalText, textEntered, partialText);
});


let evaluateText = (originalText, textEntered, partialText) => {
    if (textEntered === '') {
        applyColors('grey');
    }
    else {
        if (originalText === textEntered) {
            claps.play();
            applyColors('green');
            congoTag.style.display = 'block';
            clearInterval(interval);
        }
        else {
            if (textEntered === partialText) {
                applyColors('blue');
            }
            else {
                
                {
                    z.play();
                }
                applyColors('red');
            }
        }
    }
}

//apply colors

let applyColors = (color) => {
    textAreaBoxTag.style.borderColor = color;
    textAreaBoxTag.style.boxShadow = `0 0 10px ${color}`;
}

resetBtn.addEventListener('click', function () {
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    count = 0;
    clearInterval(interval);
    minutesTag.innerText = "0" + minutes;
    secondsTag.innerText = "0" + seconds;
    milliSecondsTag.innerText = "0" + milliSeconds;
})
//change Text

let changeText = (index) => {
    let lessonText = lessonsArray[index];
    originalTextTag.innerText = lessonText;
}