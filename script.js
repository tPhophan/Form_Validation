const frmEl = document.querySelector('#frm');
const inputUserEl = document.querySelector('#username');
const inputEmailEl = document.querySelector('#email');
const inputPassEl = document.querySelector('#password');
const inputConfirmPassEl = document.querySelector('#confirm-Password');

frm.addEventListener('submit', function(e){
    e.preventDefault();
    ft_checkInput(inputUserEl, inputEmailEl, inputPassEl, inputConfirmPassEl);
    ft_checkPassword(inputPassEl, inputConfirmPassEl);
    ft_checkInputLength(inputUserEl,5,15);
    ft_checkInputLength(inputPassEl,5,15);
})

function ft_showError(input, message){
    const frmControlEl= input.parentElement;
    frmControlEl.className = 'frm-control error';
    const small = frmControlEl.querySelector('small');
    small.innerText = message;
}

function ft_showSuccess(input){
    const frmControlEl= input.parentElement;
    frmControlEl.className = 'frm-control success';
}

function ft_validateEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function ft_checkInput(...inputArray){
    inputArray.forEach(function(input){
        if (input.value.trim() === ''){
            ft_showError(input, `กรุณาป้อนข้อมูล ${ft_getInputCase(input)}`);
        }
        else if ((input.id === 'email') && (!ft_validateEmail(inputEmailEl.value.trim()))){
            ft_showError(inputEmailEl,'อีเมล์ไม่ถูกต้อง');
        }
        else{
            ft_showSuccess(input);
        }
    });
}

function ft_getInputCase(input){
    let mystr = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    if (input.id === 'email'){
        mystr = 'E-mail'
        return mystr
    }
    else{
        return mystr.replace('-',' ')
    }
}

function ft_checkPassword(password1, password2){
    if (password1.value !== password2.value)
        ft_showError(inputConfirmPassEl, 'รหัสผ่านไม่ตรงกัน');
}

function ft_checkInputLength(input, min, max){
    const valueInput = input.value;
    if (min > valueInput.length){
        ft_showError(input, `${ft_getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`);
    }
    else if (max < valueInput.length){
        ft_showError(input, `${ft_getInputCase(input)} ต้องน้อยกว่า ${max} ตัวอักษร`);
    }
    else{
        ft_showSuccess(input);
    }
}
