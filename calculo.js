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
        let cota2 = acumo / cotas
        let vdcota = (cotas - acumo) / diasr
        let totalat = atvc + atvs
        let pa = pecas / atvc
        let va = vat / atvc
        let adc = bolad / atvc
        let tc = atvc / totalat

        // Exibindo o resultado na div
        resp.textContent = `Acumulado: ${acumo}  %COTA: ${cota2}  VDCOTA: ${vdcota}  TOTAL AT: ${totalat}  PA: ${pa}  VA: ${va}  %ADIC ${adc}  TC: ${tc}`;
    } else {
        resp.textContent = "Por favor, insira valores numéricos válidos em todos os campos.";
    }
}
