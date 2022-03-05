const onIncDec = () =>{
    const sign = document.getElementById('incrementButton');
    if(sign.textContent === '+'){
         document.getElementById('paragraph').style='font-size:24px';
         sign.innerHTML = '-'
    }
    else{
        document.getElementById('paragraph').style='font-size:18px';
        sign.innerHTML = '+'

    }
}

