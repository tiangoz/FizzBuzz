function print() {
    var num = parseInt(document.getElementById("num").value);
    if (validar(num) == true) {
        for (i=1; i<=num; i++) {
            if(i % 3 == 0){
                if (i % 5 == 0){
                    document.write("\n\n<b> FIZZ-BUZZ </b><br/>");
                } else {
                    document.write("\n\n<b> FIZZ </b><br/>");
                }
            }else if (i % 5 == 0){
                document.write("\n\n<b> BUZZ </b><br/>");
            }else {
                document.write("\n\n<b>"+ i +"</b><br/>");
            }
        }
    }
    else{
        document.write('Imprime MAL');
    }

}

function validar(num) {
    if (num < 1) {
        alert('Favor, Escriba un número mayor a: ' + num);
    } else if (num > 1000) {
        alert('Favor, Escriba un número menor a: ' + num );
    } else {
        return true;
    }
}