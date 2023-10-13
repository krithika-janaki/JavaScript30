
const nameInput = document.querySelector('input[name="name"]');
    const dateInput = document.querySelector('input[name="date"]');
    const phoneNumber = document.querySelector('input[name="phone"]');
    nameInput.addEventListener('keyup', handleNameInput);
    dateInput.addEventListener('keyup', handleDateInput);
    phoneNumber.addEventListener('keyup', handlePhoneNumber);

    function handleNameInput(e) {
        //check for numbers or symbols and remove them 
        
        let start = this.selectionStart;
        let end = this.selectionEnd;
        let initalValueLength = this.value.length;
    
            let n = this.value.replace(/[^a-zA-Z\s]/g,'');
            this.value = n;
            if(initalValueLength > this.value.length) {
                end = end - 1; 
            }
            this.setSelectionRange(start, end) 
    }

    

    function handleDateInput(e) {
        function validate(input, max) {
            if(input.length === 1) {
                if(input <= 1) {
                    return input;
                } else if(input > 1) {
                    return '0' + input + '/';
                }    
            } else if (input.length === 2) {
                if (input > 12) {
                    return input[0];
                } else {
                    return input + '/'
                }
            }
        
        }

        function validate(input, max) {
            console.log('after slice');
            if(input.length === 1) {
                if(input <= 1) {
                    return input;
                } else if(input > 1) {
                    return '0' + input + '/';
                }    
            } else if (input.length === 2) {
                if (input > 30) {
                    return input[0];
                } else {
                    return input + '/';
                }
            }
        return '';
        }
        // let input = this.value;
        // const arr = input.split('/').map((v,i) => {
        //     return v.replace(/[^\d]/g, '');
        // });

        // if(arr[0]) arr[0] = arr[0];
        // if(arr[1]) arr[1] = arr[1];
        // console.log('after', arr);
        // const output = arr.map((v, i) => {
        //    return (i<2 && v.length === 2) ? v +'/' : v;
        // });

        // this.value = output.join('');
        let input = this.value.replace(/[\D]/g, '');
        let size = input.length;
        var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
        console.log('input', input);
        if(size > 0) {
            console.log('input before 1 =', input);
            input = validate(input.slice(0,2), 12) + input.slice(2);
            console.log('input after 1 =', input);
        }
        // if (size === 2 && deleteKey) {
        //     input = validate(input.slice(0,2), 12) + input.slice(2);
        // }
        if(size > 2) {
            console.log('input before 2 =', input);
            input = input.substring(0,3) + validate(input.slice(3, 5), 30) + input.slice(5);
            console.log('input after 2 =', input);
        }
        if(size > 4) {
            console.log('input before 3 =', input);
            input = input.substring(0,5) + '/' + input.substring(6);
        }
        if(deleteKey && this.selectionStart === 5) {
            input = input.substring(0,4) + input.substring(6);
        }
        this.value = input;
    }

    function handlePhoneNumber(e) {
        // var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
        // console.log('this.value at the top', this.value);
        // input = this.value.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
        // var size = input.length;
        // if (size>0) {
        //     input="("+input
        // }
        // if (size>3) {
        //     console.log('input before 3', input);
        //     input=input.slice(0,4)+") "+input.slice(4)
        //     console.log('input after 3', input);
        // }
        // if (size>6) {
        //     console.log('input before 6', input);
        //     input=input.slice(0,9)+"-" +input.slice(9)
        //     console.log('input after 6', input);
        // }
        // this.value = input;

        var ph = this.value.replace(/\D/g,'').substring(0,10);
        // Backspace and Delete keys
        var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
        if(deleteKey) {
            return;
        }
        var len = ph.length;
        console.log('len', len);
        if(len==0){
            ph=ph;
        }else if(len<3){
            ph='('+ph;
        }else if(len==3){
            ph = '('+ph + (deleteKey ? '' : ') ');
            console.log('ph at 3', ph);
        }else if(len<6){
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6);
        }else if(len==6){
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+ (deleteKey ? '' : '-');
        }else{
            ph='('+ph.substring(0,3)+') '+ph.substring(3,6)+'-'+ph.substring(6,10);
        }
        this.value = ph;
    }



   /* Testf for js */

const el = document.querySelector('input[name="name"]');
el.value = 'New Val**ue**'
el.dispatchEvent(new Event('keyup', { 'bubbles': true }));
console.log(el.value);
    