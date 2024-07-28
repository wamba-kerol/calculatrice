    const buttons = document.querySelectorAll('.button');
    const display = document.querySelector('.display');
    
  
    function factoriel(n){
        if(n==0){
            return 1;
        }else{
        return n*factoriel(n-1)
    }
}
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === '=') {
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                   

                    display.style.color = 'red';
                    display.innerHTML="toto tu joue avec qui"
                }
               
            } else if (value === 'C') {
                display.innerHTML = '';
             
            } else if (value === 'del') {
                display.innerHTML = display.innerHTML.slice(0, -1);
            } else if (value === '%') {
                
                if (display.innerHTML !== '') {
                    let result = eval(display.innerHTML);
                    result = result / 100;
                    display.innerHTML = result;
                }
            } else if (value === '!') {
                
                if (display.innerHTML !== '') {
                    let result = eval(display.innerHTML);
                    result = factoriel(result)
                    display.innerHTML = result;
                }
            }else {
                // Append value to the display
                display.innerHTML += value;
            }
        });
    });


