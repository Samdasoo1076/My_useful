document.addEventListener("DOMContentLoaded", function () {
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultText = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {
        const width = parseFloat(widthInput.value);
        const height = parseFloat(heightInput.value);

        const shapeRadio = document.querySelector('input[name="shape"]:checked');
        const shape = shapeRadio.getAttribute('aria-label');

        if (!isNaN(width) && !isNaN(height)) {
            if (shape === "직사각형") {
                const area = width * height;
                const perimeter = 2 * (width + height);
                resultText.innerText = `너비: ${width}, 높이: ${height}, 면적: ${area}, 둘레: ${perimeter}`;
            } else if (shape === "원") {
                const radius = width / 2;
                const area = Math.PI * Math.pow(radius, 2);
                const circumference = 2 * Math.PI * radius;
                const squareRootOfPi = Math.sqrt(Math.PI);
                resultText.innerText = `반지름: ${radius}, 면적: ${area}, 둘레: ${circumference}, √π (루트 파이): ${squareRootOfPi.toFixed(4)}`;
            }
        } else {
            resultText.innerText = "제발 올바른 숫자를 입력하세요.";
        }
    });
});