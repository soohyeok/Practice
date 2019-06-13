using System;
namespace InheritanceChallenge
{
    /*
    Inheritance Challenge 2 - Employees, Bosses and Trainees
   Create a main class with a Main Method, then a base class Employee with the 
   properties Name, FirstName, Salary and the methods Work() and Pause().

Create a deriving class boss with the propertie CompanyCar and the method Lead().
Create another deriving class of employees - trainees with the
properties WorkingHours and SchoolHourse and a method Learn().

Override the methods Work() of the trainee class so that it indicates the working hours of the trainee.

Don’t forget to create the constructors.

Create an object of each of the three classes (with arbitrary values)

and call the methods, Lead() of Boss and Work() of Trainee.

Just print out the respective text, what the respective employees do.
*/

    public class Employee
    {
        protected string Name { get; set; }
        protected string FirstName { get; set; }
        protected double Salary { get; set; }
        protected bool IsWorking { get; set; }

        public Employee()
        {
            Name = "Lee";
            FirstName = "Soohyeok";
            Salary = 20000.00;
            IsWorking = true;
        }

        public Employee(string name, string firstName, double salary)
        {
            this.Name = name;
            this.FirstName = firstName;
            this.Salary = salary;
            this.IsWorking = true;
        }

        public virtual void Work()
        {
            if (this.IsWorking)
            {
                Console.WriteLine("EWork: Name: {0} , FirstName: {1}, Salary: {2} is already Working!", this.Name, this.FirstName, this.Salary);
            }
            else
            {
                this.IsWorking = true;
                Console.WriteLine("EWork: Name: {0} , FirstName: {1}, Salary: {2} is now Working!", this.Name, this.FirstName, this.Salary);
            }
        }
        public virtual void Pause()
        {
            if (this.IsWorking)
            {
                this.IsWorking = false;
                Console.WriteLine("EPause: Name: {0} , FirstName: {1}, Salary: {2} is Fired!", this.Name, this.FirstName, this.Salary);
            }
            else
            {
                Console.WriteLine("EPause: Name: {0} , FirstName: {1}, Salary: {2} is already Fired!", this.Name, this.FirstName, this.Salary);
            }
        }
    }
}
