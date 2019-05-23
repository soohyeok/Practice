using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Money Maker!");
      
    	Console.Write("Enter $ amount to convert to coins: ");
      double money = Convert.ToDouble(Console.ReadLine());
      Console.WriteLine($"{money} is equal to...");
      double qtr = 0.25;
      double qtrs = Math.Floor(money / qtr);
      money -= qtrs * qtr; 
      double dim = 0.10;
      double dims = Math.Floor(money / dim);
      money -= dims * dim;
      double nik = 0.05;
      double niks = Math.Floor(money / nik);
      money -= niks * nik;
      double pen = 0.01;
      double pens = Math.Floor(money / pen);
      money -= pens * pen;
      
      Console.WriteLine($"Quarters: {qtrs}");
      Console.WriteLine($"Dimes: {dims}");
      Console.WriteLine($"Nickels: {niks}");
      Console.WriteLine($"Pennies: {pens}");
    }
  }
}
