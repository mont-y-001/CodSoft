document.addEventListener('DOMContentLoaded', function() {
    const inputDisplay = document.getElementById('inputDisplay');
    const outputDisplay = document.getElementById('outputDisplay');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;

            if (!isNaN(action) || action === '.') {
                currentInput += action;
                inputDisplay.value += action;
            } else if (action === 'clear') {
                currentInput = '';
                expression = '';
                inputDisplay.value = '';
                outputDisplay.value = '';
            } else if (action === 'del') {
                currentInput = currentInput.slice(0, -1);
                inputDisplay.value = inputDisplay.value.slice(0, -1);
            } else if (action === 'equals') {
                expression += currentInput;
                let result = evaluate(expression);
                outputDisplay.value = result;
                currentInput = result.toString();
                expression = '';
            } else if (action === 'log' || action === 'sqrt' || action === 'exp') {
                if (currentInput) {
                    currentInput = specialOperation(currentInput, action);
                    inputDisplay.value = currentInput;
                    outputDisplay.value = currentInput;
                    expression = '';
                }
            } else {
                expression += currentInput + getOperatorSymbol(action);
                inputDisplay.value += getOperatorSymbol(action);
                currentInput = '';
            }
        });
    });

    function evaluate(expression) {
        try {
            return new Function('return ' + expression)();
        } catch {
            return 'Error';
        }
    }

    function specialOperation(input, operation) {
        input = parseFloat(input);
        switch (operation) {
            case 'log':
                return Math.log10(input).toString();
            case 'sqrt':
                return Math.sqrt(input).toString();
            case 'exp':
                return Math.exp(input).toString();
            default:
                return '';
        }
    }

    function getOperatorSymbol(operator) {
        switch (operator) {
            case 'add':
                return '+';
            case 'subtract':
                return '-';
            case 'multiply':
                return '*';
            case 'divide':
                return '/';
            case 'power':
                return '**';
            default:
                return '';
        }
    }
});