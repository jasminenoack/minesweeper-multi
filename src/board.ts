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
}

// levels
// 8 X 8 X 10
// 16 X 16 X 40
// 24 X 24 X 99
