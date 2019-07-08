import * as _ from 'lodash';
import { Board } from '../src/board';

describe('Board', function() {
  let board: Board;
  beforeEach(() => {
    board = new Board();
  });

  describe('create a board', () => {
    it('creates with a height and width', () => {
      expect(board.board.length).toEqual(64);
    });

    it('creates with a height and width', () => {
      board = new Board(10, 10);
      expect(board.board.length).toEqual(100);
    });

    it('creates with a custom height and width', () => {
      board = new Board(10, 10);
      expect(board.board.length).toEqual(100);
      board = new Board(5, 7);
      expect(board.board.length).toEqual(35);
    });

    it('has no mines before first clear', () => {
      let mines = 0;
      const spots = board.board;
      spots.forEach((spot) => {
        mines += spot.mineCount;
      });
      expect(mines).toEqual(0);
    });

    it('generates mines after the first clear');

    it('creates a board with mines');

    it('creates a board with custom mines');
  });
});
