function submit(event){
    event.preventDefault()

    let income= document.getElementById('income').value
    let income_err=document.getElementById('income_err')
    let balance=document.getElementById('balance').value
    let balance_err= document.getElementById('balance_err')
    let loan = document.getElementById('loan').value
    let loan_err = document.getElementById('loan_err')
    let depositDate= document.getElementById('depositDate').value
    let depositDate_err= document.getElementById('depositDate_err')
    let collection= document.getElementById('collection').value
    let collection_err= document.getElementById('collection_err')
    let repayment= document.getElementById('repayment').value
    let repayment_err= document.getElementById('repayment_err')
    let select = document.getElementById('select')
    let loan_confirm = 45/100 * parseInt(income)
    let points = 0
    let newDate = new Date(depositDate)
    let newMonth = newDate.getMonth()
    let converted = newMonth.toString()
    let presentDate = new Date()
    let presentMonth = presentDate.getMonth()
    let converted_1 =presentMonth.toString()
    
    if(income ===''){
        income_err.innerText = '*This Field is Required'
    }else if(loan>loan_confirm){
        alert('Loan cannot be more than 45% of interest')
    }else{
        income_err.innerText = ''
    }
    
    if(loan === ''){
        loan_err.innerText = '*This Field is Required'
    }else{
        loan_err.innerText = ''
    }

    if(balance === ''){
        balance_err.textContent = '*This Field is Required'
    }else if(parseInt(balance)>parseInt(loan)){
        points += 10
        console.log(points)
    }else if(parseInt(balance)<parseInt(loan)){
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
        points += 5
    }else{
        points += 0
    }
    // fourth input
    
    if(collection === ''){
        collection_err.innerText = '*This Field is Required'
    }else if(collection >= 6){
        points += 10
        console.log(points)
    }else if(collection < 6){
        points += 0
        console.log(points)
    }else{
         collection_err.innerText = ''
    }
    
    if(repayment === ''){
        repayment_err.innerText='*This Field is Required'
    }else if(repayment < 6){
        points += 10
        console.log(points)
    }else if(repayment >= 6){
        points += 0
        console.log(points)
    }else{
        repayment_err.innerText = ''
    }

    
    
    if(select.value === ""){
        acct_type_err.innerText = '*This Field is Required'
    }else if(select.value === 'Savings'){
        points += 5
        console.log(points)
    }else if(select.value === 'Current'){
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