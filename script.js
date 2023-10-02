function calculate() {
    const celsius = +document.querySelector('#n1').value;
    const result = document.querySelector('#result');

    const fahren = (celsius *  9/5) + 32;

    console.log(fahren);

    result.innerHTML = `${celsius}°C equivalem à ${fahren}°F`

    if(celsius == 0) {
        alert('Adicione um número para iniciar!');
        return result.innerHTML = 'Nada para mostrar!';
    }
}