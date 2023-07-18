const form = document.querySelector('form');
// This uscase will give u empty value
// const height = parseInt(document.querySelector('.height').value);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const resultsRange = document.querySelector('#results-range');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `BMI: ${bmi}`;
        
        if (bmi < 18.6) {
            resultsRange.innerHTML = `UNDERWEIGHT`
        }else if(bmi > 24.9){
            resultsRange.innerHTML = `OVERWEIGHT`
        }else if (18.6 < bmi <  24.9) {
            resultsRange.innerHTML = `NORMAL`
        }
    }
})