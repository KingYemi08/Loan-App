function submit(event){
    event.preventDefault()

    let income= parseInt(document.getElementById('income').value)
    let income_err=document.getElementById('income_err')
    let balance= parseInt(document.getElementById('balance').value)
    let balance_err= document.getElementById('balance_err')
    let loan = parseInt(document.getElementById('loan').value)
    let loan_err = document.getElementById('loan_err')
    let depositDate= document.getElementById('depositDate').value
    let depositDate_err= document.getElementById('depositDate_err')
    let collection= document.getElementById('collection').value
    let collection_err= document.getElementById('collection_err')
    let repayment= parseInt(document.getElementById('repayment').value)
    let repayment_err= document.getElementById('repayment_err')
    // let acct_type= document.getElementById('acct_type').value
    // let acct_type_err= document.getElementById('acct_type_err')
    let select = document.getElementById('select')
    let loan_confirm = 45/100 * income
    let points = 0
    let newDate = new Date(depositDate)
    let newMonth = newDate.getMonth()
    let converted = newMonth.toString()
    let presentDate = new Date()
    let presentMonth = presentDate.getMonth()
    let converted_1 =presentMonth.toString()
    console.log(typeof(income))
    
    if(income ===''){
        income_err.innerText = '*This Field is Required'
    }else if(loan>loan_confirm){
        console.log('gh')
    }else{
        income_err.innerText = ''
    }
    
    if(loan === ''){
        loan_err.innerText = '*This Field is Required'
    }else{
        loan_err.innerText = ''
    }

    if(balance === ''){
        balance_err.innerText = '*This Field is Required'
    }else if(balance>loan){
        points += 10
        console.log(points)
    }else if(balance<loan){
        points -= 10
        console.log(points)
    }else{
        balance_err.innerText = ''
    }

    if(depositDate ===''){
        depositDate_err.innerText = '*This Field is Required'
    }else{
        depositDate_err.innerText = ''
    }

    if(converted_1 === converted){
        console.log('confirm')
        points += 5
        console.log(points)
    }else{
        points += 0
    }
    // fourth input


    if(repayment ===''){
        repayment_err.innerText = '*This Field is Required'
    }else if(repayment<6){
        points += 5
        console.log(points)
    }else if(repayment>6){
        points += 0
    }else{
        repayment_err.innerText = ''
    }

    if(select.value ===""){
        acct_type_err.innerText = '*This Field is Required'
    }else if(select.value === 'Savings'){
        console.log('sharp')
        points += 5
        console.log(points)
    }else if(select.value === 'Current'){
        console.log('blunt')
        points += 10
        console.log(points)
    }else{
        acct_type_err = ''
    }


    if(points>=30){
        alert('Congratulations, loan has been granted')
        window.location.reload()
    }else{
        alert('Sorry, loan not granted')
    }
    
}