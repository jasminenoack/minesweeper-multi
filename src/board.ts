interface Spot {
  cleared: boolean;
  index: number;
  // neighbors: number[];
  mineCount: number;
  neighboringMines?: number;
}

export class Board {
  private mines: number;
  private height: number;
  private width: number;
  public board: Spot[];
  public minesSet: boolean;
  private maxMines = 10;
  public lost: boolean;
  public won: boolean;

  constructor(height = 8, width = 8, mines = 10) {
    this.mines = mines;
    this.height = height;
    this.width = width;
    this.board = [];
    for (let i = 0; i < this.height * this.width; i++) {
      this.board.push({
        cleared: false,
        index: i,
        mineCount: 0,
      });
    }
  }

  /**
   * Clear the space at the index
   * @param index
   */
  public clear(index: number) {
    const spot = this.board[index];
    spot.cleared = true;
    if (!this.minesSet) {
      this.minesSet = true;
      this.setMines();
    }
    if (spot.mineCount) {
      this.lost = true;
    } else if (this.checkWin()) {
      this.won = true;
    }
  }

  /**
   * Set the placement of all of the mines
   */
  private setMines() {
    let minesSet = 0;
    while (minesSet < this.mines && this.width * this.height > 1) {
      const randomCellIndex = this.getRandomCell();
      const randomCell = this.board[randomCellIndex];
      if (!randomCell.cleared && randomCell.mineCount < this.maxMines) {
        randomCell.mineCount++;
        minesSet++;
      } else {
        let cellsAvailable = false;
        this.board.forEach((spot) => {
          if (!spot.cleared && spot.mineCount < this.maxMines) {
            cellsAvailable = true;
          }
        });
        if (!cellsAvailable) {
          break;
        }
      }
    }
  }

  /**
   * Choose a random cell in the puzzle
   */
  private getRandomCell() {
    return Math.floor(Math.random() * this.height * this.width);
  }

  /**
   * Checks if all the non-mine cells are clear and no mine cells are clear
   */
  private checkWin() {
    let won = true;
    this.board.forEach((spot) => {
      if (!spot.cleared && !spot.mineCount) {
        won = false;
      }
    });
    return won;
  }
}

// levels
// 8 X 8 X 10
// 16 X 16 X 40
// 24 X 24 X 99
