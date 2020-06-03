//Autor Juan Jose Guerrero

function Function1(arr){
    
    let total = 0;
    let arraynuevo=[];

    for (let i = 0; i < arr.lenght; i++) {
        total=1;
        
        for (let j = 0; j < arr.lenght; j++) {

            if(arr[i] !== arr[j]){

                total = total * arr[j];
                
            }
        }
        arraynuevo.push(total);
    }
    return arraynuevo;
}


function imprimir(){
    const a = [2,3,4,6];
    const b = [123,67,890,4];
    const c = [2,3,7,9,4,5,6,9,12];


    console.log(Function1(a));
    console.log(Function1(b));
    console.log(Function1(c));
}