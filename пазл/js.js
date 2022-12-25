window.addEventListener('DOMContentLoaded', () => {
    let game = document.getElementById('pazzle-game');
    let source = document.querySelector('.pazzle-source');
    let result = document.querySelector('.pazzle-result');

    const width = 9;
    const height = 6;
    const size = 50;

    game.style.gridTemplateColumns = `repeat(${width}, ${size})`;

    let tiles = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let cell = document.createElement('div');
            cell.x = x;
            cell.y = y;
            cell.style.width = `${size}px`
            cell.style.height = `${size}px`
            result.append(cell);

            let tile = document.querySelector('div');
            tile.className = 'pazzle-item'
            tile.x = x;
            tile.y = y;
            tile.style.backgroundPosition = `${-x * size}px ${-y * size}px`;
            tile.style.backgroundImage = `url(${imageUrl})`;
            tile.style.width = `${size}px`
            tile.style.height = `${size}px`
            game.append(tile);
            tiles[y].push(tile);
        };
    };

    let srcWidth = source.offsetWidth;
    let srcHeight = source.offsetHeight;

    for (let i = 0; i < 1000; i++) {
        let randX = Math.round(Math.random() * (width - 1));
        let randY = Math.round(Math.random() * (height - 1));
        let randTile = tiles[randY][randX];

        let posLeft = Math.round(Math.random() * (srcWidth - size));
        let posTop = Math.round(Math.random() * (srcHeight - size));

        randTile.style.position = 'absolute';
        randTile.style.left = `${posLeft}px`;
        randTile.style.top = `${posTop}px`;


        source.append(randTile);
    }

    source.addEventListener('mousedown', e => {
        let target = e.target;

        if (target.classList.conteins('pazzle-item')) {
            e.preventDefault();

            for (let tile of course.children) {
                tile.style.zIndex = 0;
            }
            target.style.zIndex = 10;

            let lastX = e.clientX;
            let lastY = e.clientY;

            let checkMove = e => {
                let deffX = e.clientX - lastX;
                let deffY = e.clientY - lastY;
                targer.style.top = `${target.offsetTop + deffY}px`;
                target.style.left = `${target.offsetLeft + deffX}px`;
                lastX = e.clientX;
                lastY = e.clientY;
            }
            let checkUp = e => {
                document.removeEventListener('mousemove', checkMove);
                document.removeEventListener('mouseup', checkUp);
            }
            document.addEventListener('mousemove', checkMove);
            document.addEventListener('mouseup', checkUp);

            let checkOver = e => {
                let t = e.targer;
                if (t.classList.conteins('.pazzle-cell')) {
                    if (t.x === target.x && t.y === target.y) {
                        target.style.position = 'relatative';
                        target.style.top = 0;
                        target.style.left = 0;
                        t.append(target);
                    }
                }
            }

            result.addEventListener('mouseUp', checkOver)
        }
    })

});