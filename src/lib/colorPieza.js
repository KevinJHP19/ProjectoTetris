export default function colorPieza(pieza){

    switch(pieza){
        case 1: {

            return 'bg-secondary'
        }
        case 2: {
            return 'bg-primary'
        }
        case 3:{
            return 'bg-danger'
        }
        case 4:{
            return 'bg-warning'
        }
        case 5:{
            return 'bg-success'
        }
        case 6:{
            return 'bg-info'
        }
        case 7:{
            return 'bg-light'
        }
        case 8:{
            return 'bg-info-subtle'
        }
        default:{
            return 'bg-dark'
        }

    }



}