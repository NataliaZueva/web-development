document.addEventListener('DOMContentLoaded', e => {
    const height = 8;
    const width = 8;
    const bombscount = 15;

    startGame(width, height, bombscount);

    function startGame(width, height, bombscount) {
        const ms = document.querySelector('.ms');
        const cellsCount = width * height;
        ms.innerHTML = '<button></button>'.repeat(cellsCount);
        const msCell = [...ms.childNodes];

        let closedCount = cellsCount;

        
        ms.addEventListener('contextmenu', (e) =>{
            const t = e.target
            if (t.tagName !== 'BUTTON') {
                return;
            }
            const index = msCell.indexOf(t);
            const column = index % width;
            const row = Math.floor(index / width);
            flagged(row, column);
            
        });

        ms.addEventListener('click', (e) =>{
            const t = e.target
            if (t.tagName !== 'BUTTON') {
                return;
            }
            const index = msCell.indexOf(t);
            const column = index % width;
            const row = Math.floor(index / width);
            open(row, column);
        });

        const bombs = [...Array(cellsCount).keys()]
            .sort(() => Math.random() - 0.5)
            .slice(0, bombscount);

        

        function isValid(row, column) {
            return row >= 0 
            && column >= 0
            && column < width
            && row < height

        }

        function getCount(row, column) {
            let count = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (isBoms(row + y, column + x)) {
                        count++
                    }
                }
            }
            return count;
        }

        function flagged (row, column) {
            if (!isValid(row, column)) return;

            const index = row * width + column;
            const cell = msCell[index];

            cell.innerHTML = '🤍';
        }

        function open (row, column) {
            if (!isValid(row, column)) return;

            const index = row * width + column;
            const cell = msCell[index];

            if (cell.disabled === true) return;

            cell.disabled = true;
            
            if (isBoms(row, column)) {
                cell.innerHTML = '💥';
                // alert('Loss');
                console.log('Loss');
                return;
            }
        
            closedCount--;
            if (closedCount <= bombscount) {
                alert('Win');
                return;
            }

            const count = getCount(row, column);
            if (count !== 0) {
                cell.innerHTML = count;
                return;
            } 

            if (!flagged (row, column)) {
                cell.innerHTML = ' ';
            }

            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    open(row + y, column + x);
                }
            }
            
        }

        function isBoms(row, column) {
            if (!isValid(row, column)) return false;
            const index = row * width + column;
            return bombs.includes(index);
        }  
    }
   
});