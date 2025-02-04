export default function colorPieza(pieza){

    switch(pieza){
        case 1: {

            return 'bg-secondary'
        }
        case 2: {
            return 'bg-l'
        }
        case 3:{
            return 'bg-j'
        }
        case 4:{
            return 'bg-cuadrado'
        }
        case 5:{
            return 'bg-t'
        }
        case 6:{
            return 'bg-s'
        }
        case 7:{
            return 'bg-z'
        }
        case 8:{
            return 'bg-palo'
        }
        default:{
            return 'bg-dark'
        }

    }



}