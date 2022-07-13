function calcular(){
    let sex= document.getElementsByName('radsex');
    let peso= Number(document.getElementById('peso').value);
    let altura= Number(document.getElementById('altura').value);
    let idade= Number(document.getElementById('idade').value);
    let res = document.getElementById('res')
    if(peso <=0 || altura <=0 || idade <=0){
        window.alert('ERRO. Verifique o valor digitado')
    }if (sex[0].checked){
        let gasto = Math. round(1.3*(66.47+(13.75*peso)+(5*altura)-(6.8*idade)))
        res.innerHTML=`O seu gasto calorico diario é de <strong>${gasto} Kcals</strong>`
    }if (sex[1].checked){
        let gasto = Math. round(1.3*(66.47+(13.75*peso)+(5*altura)-(6.8*idade)))
        res.innerHTML=`O seu gasto calorico diario é de  <strong>${gasto} Kcals</strong>`
}}