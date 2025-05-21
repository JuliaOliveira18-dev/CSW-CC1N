function idade() {
    var idade = 5 
    if ( idade > 1 && idade < 11) {
        window.alert ("Você é criança" )
    }

    else if ( idade > 10 && idade < 15) {
        window.alert ("Você é adolescente")
    }

    else if ( idade > 14 && idade < 30) {
        window.alert ("Você é jovem")
    }

    else if ( idade > 29 && idade < 60) {
        window.alert ("Você é adulto")
    }

    else{
        window.alert ("Você é idoso")
    }
}