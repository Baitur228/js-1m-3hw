let userNum = prompt('Введите число') 

const checkNum = (nam) => {
    let result = ''
    if(nam < 0){
        result = 'число отрецательно'
    }else{
        result = 'число полажительно'
    }

    return result
}

console.log(checkNum(userNum));


// dop dz\

let count = prompt('Введите число')

let g = 0;

for(let i = 0; i < count; i++){

    switch(g){
        case 0:{
            document.write("<div class='block red'></div>")
            g++
            break
        }
        case 1:{
            document.write("<div class='block yellow'></div>")
            g++
            break
        }
        default:{
            document.write("<div class='block green'></div>")
            g = 0
        }
    }

}
