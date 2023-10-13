const textField = document.querySelector("input");
let finalCursor;

function handleOnInput(event) {
    let inputVal = this.value;
    var kcode = event.keyCode;
    let cursorFirst = event.target.selectionStart;

    if(kcode === 8 && (cursorFirst === 1 || cursorFirst === 4 || cursorFirst === 8)) {
        console.log({cursorFirst})
            console.log('in here')
            event.preventDefault();
            finalCursor = cursorFirst;
            
    } 

        inputVal = inputVal.replace(/[^0-9]/g, "").slice(0, 10);

    let res = '';

    if(inputVal.length > 0) {
        res = '(' + inputVal.slice(0,3);
    }

    if(inputVal.length > 3) {
        res = res + ')' + inputVal.slice(3,6)
    }

    if(inputVal.length > 6) {
        res = res + '-' + inputVal.slice(6)
    }
    
   this.value = res;
   (finalCursor >= 0) ? this.setSelectionRange(finalCursor, finalCursor) : cursorFirst;

    
}

textField.addEventListener('keyup', handleOnInput);