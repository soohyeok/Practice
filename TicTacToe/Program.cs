using System;

namespace Array_TicTacToe
{
    class Program
    {
        private static void Main(string[] args)
        {
            bool forever = true;

            Console.WriteLine("Welcome to TicTacToe!");

            int playerNum = 0;

            Console.WriteLine("Which player will start first? player 1 or player 2?");

            string typedIn = Console.ReadLine();
            if (typedIn == "1" || typedIn == "2")
            {
                playerNum = int.Parse(typedIn);
            }

            do
            {
                if (playerNum == 1 || playerNum == 2)
                {
                    Console.WriteLine("Game has Started");
                    Console.WriteLine("Play the game by entering the field # of your choice on your turn");
                    //start instance of game
                    TicTacToe newGame = new TicTacToe(playerNum);
                    //play game and get winner
                    int Winner = newGame.Game(playerNum);

                    if (Winner == 0)
                    {
                        Console.WriteLine("The game has tied");
                    }
                    else
                    {
                        //Announce Winner and ask if they want to play another game
                        Console.WriteLine("Player {0} has won the game!", Winner);
                        Console.WriteLine("Winner Player {0} will start on the next game", Winner);
                        playerNum = Winner; // Switch player num so winner starts
                    }
                   
                    Console.WriteLine("Input 'y' to play another or 'n' to exit the game");
                   
                    string YorN = "";
                    bool repeat = true;
                    while (repeat)
                    {
                        YorN = Console.ReadLine();
                        if ((YorN != "y" && YorN == "n") || (YorN != "n" && YorN == "y"))
                        {
                            repeat = false;
                            if (YorN == "n")
                            {
                                forever = false;
                            }
                        }
                        else
                        {
                            Console.WriteLine("Invalid Input!");
                            Console.WriteLine("Input 'y' to continue or 'n' to exit the game");
                        }
                    }

                }
                else
                {
                    Console.WriteLine("Invalid input! Please input \"1\" or \"2\"");
                    Console.WriteLine("Please input player #: 1 or 2 and press Enter");
                }
            } while (forever);

            Console.WriteLine("Thank you for playing the game");
            Console.WriteLine();

        }
    }
}
