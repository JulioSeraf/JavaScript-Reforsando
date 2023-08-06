const contText = (text)=>{
    if(String){
        console.log(text.length);
    }else if(typeof text == 'number'){
        console.log('No puede ser un Numero');
    }
    
}

contText(8)