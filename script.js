let count = 0;
let target = 1000000;
let speed = 10000;

let counter = setInterval(() => {
    count += speed;
    document.getElementById("subs").innerText = count.toLocaleString() + "+";

    if (count >= target) {
        clearInterval(counter);
        document.getElementById("subs").innerText = "57K+";
    }
}, 30);
