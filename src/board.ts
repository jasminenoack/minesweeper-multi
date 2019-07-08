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
    this.board[index].cleared = true;
    if (!this.minesSet) {
      this.minesSet = true;
      this.setMines();
    }
  }

  private setMines() {
    let minesSet = 0;
    while (minesSet < this.mines && this.width * this.height > 1) {
      const randomCellIndex = this.getRandomCell();
      const randomCell = this.board[randomCellIndex];
      if (!randomCell.cleared) {
        randomCell.mineCount++;
        minesSet++;
      }
    }
  }

  private getRandomCell() {
    return Math.floor(Math.random() * this.height * this.width);
  }
}

// levels
// 8 X 8 X 10
// 16 X 16 X 40
// 24 X 24 X 99
