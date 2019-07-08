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

    it('generates mines after the first clear', () => {
      board.clear(1);
      let mines = 0;
      const spots = board.board;
      spots.forEach((spot) => {
        mines += spot.mineCount;
      });
      expect(mines).toEqual(10);
    });
  });

  describe('determines mine set', () => {
    it('should not move the mines after they are set', () => {
      board.clear(1);
      const mineCounts1 = [];
      const spots1 = board.board;
      spots1.forEach((spot) => {
        mineCounts1.push(spot.mineCount);
      });
      board.clear(2);
      const mineCounts2 = [];
      const spots2 = board.board;
      spots2.forEach((spot) => {
        mineCounts2.push(spot.mineCount);
      });
      expect(mineCounts1).toEqual(mineCounts2);
    });

    it('should not put a mine in a cleared cell', () => {
      board = new Board(5, 3, 100);
      board.clear(1);
      let mines = 0;
      const spots = board.board;
      spots.forEach((spot) => {
        mines += spot.mineCount;
      });
      expect(mines).toEqual(100);
      expect(board.board[1].mineCount).toEqual(0);
    });

    it('should set mines randomly', () => {
      board.clear(1);
      const mineCounts1 = [];
      const spots1 = board.board;
      spots1.forEach((spot) => {
        mineCounts1.push(spot.mineCount);
      });
      board = new Board();
      board.clear(1);
      const mineCounts2 = [];
      const spots2 = board.board;
      spots2.forEach((spot) => {
        mineCounts2.push(spot.mineCount);
      });
      expect(mineCounts1).not.toEqual(mineCounts2);
    });

    it('has a max 10 mines per cell', () => {
      board = new Board(2, 2, 100);
      board.clear(1);
      let mines = 0;
      const spots = board.board;
      spots.forEach((spot) => {
        mines += spot.mineCount;
      });
      expect(mines).toEqual(30);
      expect(board.board[1].mineCount).toEqual(0);
    });
  });

  describe('clear', () => {
    it('if you clear a mine you lose');

    it('if you clear all non mines you win');
  });
});
