function saludar(nombre){
    console.log(arguments);
    console.log('Hola '+nombre);
}

const saludar2=function (nombre){
    console.log('Hola '+nombre);
}

saludar('Angelo',40,true,'Costa Rica');
saludar2('Angelo');

const saludarFlecha = () => {
    console.log('Hola Flecha');
}
const saludarFlecha2=(nombre)=>{
    console.log('Hola '+nombre);
}

saludarFlecha();
saludarFlecha2('Angelo');

function getAleatorio(){
    return Math.random();
}

const getAleatorioFlecha=()=>Math.random();

console.log(getAleatorioFlecha());