const radios = document.querySelectorAll('input[name="theme"]');
const body = document.body;

radios.forEach((radio, index)=> {
    radio.addEventListener("change", () => {
        body.classList.remove('theme-1', 'theme-2', 'theme-3')
        body.classList.add(`theme-${index + 1}`)
    })
})

const display = document.getElementById("display");
const btn = document.querySelectorAll('.btn');

btn.forEach((button)=>{
    button.addEventListener('click', () => {
        const value = button.innerText;

        if(value === "RESET") {
            display.value ="";
        }else if (value === "DEL") {
            display.value = display.value.slice(0, -1)
        }else if(value === "=") {
            try{
                const expression = display.value.replace(/x/g, "*"); 
                display.value = eval(expression);
            }catch (error) {
                display.value = "Error"
            }
        } else {
            display.value += value
        }
    });
});
