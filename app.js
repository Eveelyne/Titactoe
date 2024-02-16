let cells = document.querySelectorAll('.cell');
let resetButton = document.querySelector('.btn');
/* un tour égale à 1, l'autre tour 2...Tour 1 pair X, tour impair 0*/
let turn = 1;

for(let cell of cells){
    cell.addEventListener('click', () => {
        if(!cell.textContent){
            /*modulo divise en deux et retourne true, sinon retourne false. Alterne à chaque tour.*/
            if(turn % 2){
                cell.textContent = 'X';
            }
            else{
                cell.textContent = '0';
            }
            /*incrémente le tour*/
            turn++;
        }
    });
}

/* On peut faire ça aussi dans le for :
        if(!cell.textContent){
            cell.textContent = turn % 2 ? 'X' : 'O';
*/


/*boucler dans le tableau pour vider les cellule*/
resetButton.addEventListener('click', () => {
    for(let cell of cells){
        cell.textContent = '';
    }
    turn = 1;
})


