import Brick from './brick.js';

export const level1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

export function buildLevel1(game, level1) {
    let bricks = [];

    level1.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1){
                let position = {
                    x: 80 * brickIndex,
                    y: 35 + 24 * rowIndex
                };
                bricks.push(new Brick(game, position));
            }
        });
    });

    return bricks;
}