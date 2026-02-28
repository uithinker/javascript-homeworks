function submit(e) {
    e.preventDefault();

    const nums = [];
    document.querySelectorAll('[type="number"]').forEach(item => {
        nums.push(Number(item.value));
    });

    operator = document.getElementById('operator').value;
    result = 0;
    switch(operator) {
        case '+': {
            result = nums[0] + nums[1];
            break;
        }
        case '-': {
            result = nums[0] - nums[1];
            break;
        }
        case '*': {
            result = nums[0] * nums[1];
            break;
        }
        case '/': {
            if (nums[1] === 0) {
                throw new Error("На ноль делить нельзя!");
            }
            result = nums[0] / nums[1];
            break;
        }
    }

    const answerField = document.querySelector('.answer');
    answerField.innerHTML = `Ответ: ${result}`;
}