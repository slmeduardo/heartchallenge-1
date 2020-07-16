function calcular() {
    let valortotal = document.querySelector('input#num-valor-total');
    let horasdia = document.querySelector('input#num-horas-dia');
    let diassemana = document.querySelector('input#num-dias-semana');
    let diasferias = document.querySelector('input#num-dias-ferias');
    let resultado = document.querySelector('div#res')

    let valorProjeto = parseFloat(valortotal.value);
    let horasDiarias = parseInt(horasdia.value);
    let diasEfetivos = parseFloat(diassemana.value);
    let diasFerias  = parseFloat(diasferias.value);

    if (!valorProjeto || !diasEfetivos || !horasDiarias || !diasFerias) {
        alert('Campo vazio ou número inválido');
    }   else if (horasDiarias > 24) {
        alert('Campo vazio ou número inválido');
    }   else if (diasEfetivos > 7) {
        alert('Campo vazio ou número inválido');
    }   else {
        let result = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
        resultado.innerHTML = `O valor do projeto será de ${result.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`
    }
}
