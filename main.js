let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const categories = document.getElementById('categories');
    const age = document.getElementById('age');
    const datetime = document.getElementById('datetime');
    const activity = document.getElementById('activity');
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;


    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Height is required';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Weight is required';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = 'Over weight : ' + bmi;
        }else if(bmi >= 30 && bmi <= 39.9){
            result.innerHTML = 'Obesity : ' + bmi;
        }else if(bmi <= 40 ){
            result.innerHTML = 'Extremely Obesity : ' + bmi;
        }else{
        alert('The form has errors');
        result.innerHTML = '';
        }
    }
    document.getElementById("demo")= "<strong>Details : </strong> " + name + "   ,   "  + gender + "   ,   "  + age +"   ,   " + categories + "   ,   " + datetime + "   ,   " + activity;
});