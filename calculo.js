function calcular() {
    let cotas = document.getElementById('cotas').value;
    let diasr = document.getElementById('diasr').value;
    let ultv = document.getElementById('ultv').value;
    let vat = document.getElementById('vat').value;
    let resp = document.getElementById('resp');

    let pecas = document.getElementById('qpecas').value
    let atvc = document.getElementById('atvc').value
    let atvs = document.getElementById('atvs').value
    let bolad = document.getElementById('bolad').value
    
    // Convertendo os valores para números
    cotas = parseFloat(cotas);
    diasr = parseFloat(diasr);
    ultv = parseFloat(ultv);
    vat = parseFloat(vat);
    pecas = parseFloat(pecas)
    atvc = parseFloat(atvc)
    atvs = parseFloat(atvs)
    bolad = parseFloat(bolad)

    // Verificando se os valores são números válidos
    if (!isNaN(cotas) && !isNaN(diasr) && !isNaN(ultv) && !isNaN(vat) && !isNaN(pecas) && !isNaN(atvc) && !isNaN(atvs) && !isNaN(bolad) ) {
        // Calculando o resultado
        let acumo = ultv + vat;
        let cota2 = (acumo / cotas).toFixed(2)
        let vdcota = ((cotas - acumo) / diasr).toFixed(2)
        let totalat = atvc + atvs
        let pa = (pecas / atvc).toFixed(2)
        let va = (vat / atvc).toFixed(2)
        let adc = (bolad / atvc).toFixed(2)
        let tc = (atvc / totalat).toFixed(2)

        // Exibindo o resultado na div
        resp.innerHTML = `ACUMULADO: <strong>${acumo}</strong>,  %COTA: <strong>${cota2}</strong>,  VDCOTA: <strong>${vdcota}</strong>,  TOTAL AT: <strong>${totalat}</strong>,  PA: <strong>${pa}</strong>,  VA: <strong>${va}</strong>,  %ADIC <strong>${adc}</strong>,  TC: <strong>${tc}</strong>`;

        resp.style.display= 'block'
    } else {
        resp.textContent = "Por favor, insira valores numéricos válidos em todos os campos.";

        resp.style.display= 'block'
    }
}
