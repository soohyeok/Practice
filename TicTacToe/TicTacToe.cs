using System;
using System.Linq;

namespace Array_TicTacToe
{
    public class TicTacToe
    {
        private const char player1 = 'O';
        private const char player2 = 'X';
        private char[] board;
        private int player;

        public TicTacToe(int playerNum)
        {
            board = new char[] { '1', '2', '3', '4', '5', '6', '7', '8', '9' };
            player = playerNum;
        }

        private void DisplayBoard()
        {
            //clear screen
            Console.Clear();

            char[] arr = this.board;
            //display board
            Console.WriteLine("     |     |     |");
            Console.WriteLine("  {0}  |  {1}  |  {2}  |", arr[0], arr[1], arr[2]);
            Console.WriteLine("_____|_____|_____|");
            Console.WriteLine("     |     |     |");
            Console.WriteLine("  {0}  |  {1}  |  {2}  |", arr[3], arr[4], arr[5]);
            Console.WriteLine("_____|_____|_____|");
            Console.WriteLine("     |     |     |");
            Console.WriteLine("  {0}  |  {1}  |  {2}  |", arr[6], arr[7], arr[8]);
            Console.WriteLine("_____|_____|_____|");

        }

        public int Game(int playerNum)
        {
            do
            {
                DisplayBoard();
                UserTurn(playerNum);
                if(playerNum == 1)
                {
                    playerNum = 2;
                }
                else
                {
                    playerNum = 1;
                }
            } while (GameEnd() == -1);

            DisplayBoard();
            return GameEnd();
        }

        private void UserTurn(int playerNum)
        {
            char userInput;
            if(playerNum == 1)
            {
                userInput = player1;
            }
            else
            {
                userInput = player2;
            }
            Console.WriteLine("Player {0}, Please enter the position number to place {1}", playerNum, userInput);

            bool inputCheck = true;
            do
            {
                if (int.TryParse(Console.ReadLine(), out int positionNum))
                {
                    if (positionNum <= 9 && positionNum >= 1)
                    {
                        if (this.board[positionNum-1] != player1 && this.board[positionNum-1] != player2)
                        {
                            this.board[positionNum - 1] = userInput;
                            inputCheck = false;
                        }
                        else
                        {
                            Console.WriteLine("This slot is already taken.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid Input! Please choose from number 1~9");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid Input! Please a number");
                }
            } while (inputCheck);
        }

        private int GameEnd()
        {
            //Player 1 Win Check
            if (new[] { this.board[0], this.board[1], this.board[2] }.All(x => x == player1) || //horizontal 1
                new[] { this.board[3], this.board[4], this.board[5] }.All(x => x == player1) || //horizontal 2
                new[] { this.board[6], this.board[7], this.board[8] }.All(x => x == player1) || //horizontal 3
                new[] { this.board[0], this.board[3], this.board[6] }.All(x => x == player1) || //vertical 1
                new[] { this.board[1], this.board[4], this.board[7] }.All(x => x == player1) || //vertical 2
                new[] { this.board[2], this.board[5], this.board[8] }.All(x => x == player1) || //vertical 3
                new[] { this.board[0], this.board[4], this.board[8] }.All(x => x == player1) || //diagonal 1
                new[] { this.board[2], this.board[4], this.board[6] }.All(x => x == player1)    //diagonal 2
                )
            {
                return 1;
            }
            // Player 2 Win Check
            else if(
                new[] { this.board[0], this.board[1], this.board[2] }.All(x => x == player2) || //horizontal 1
                new[] { this.board[3], this.board[4], this.board[5] }.All(x => x == player2) || //horizontal 2
                new[] { this.board[6], this.board[7], this.board[8] }.All(x => x == player2) || //horizontal 3
                new[] { this.board[0], this.board[3], this.board[6] }.All(x => x == player2) || //vertical 1
                new[] { this.board[1], this.board[4], this.board[7] }.All(x => x == player2) || //vertical 2
                new[] { this.board[2], this.board[5], this.board[8] }.All(x => x == player2) || //vertical 3
                new[] { this.board[0], this.board[4], this.board[8] }.All(x => x == player2) || //diagonal 1
                new[] { this.board[2], this.board[4], this.board[6] }.All(x => x == player2)    //diagonal 2
                )
            {
                return 2;
            }
            else if(
                this.board[0] == '1' ||
                this.board[1] == '2' ||
                this.board[2] == '3' ||
                this.board[3] == '4' ||
                this.board[4] == '5' ||
                this.board[5] == '6' ||
                this.board[6] == '7' ||
                this.board[7] == '8' ||
                this.board[8] == '9' 
                )
            {
                return -1;
            }
            else
            {
                return 0;
            }
        }
    }
}
