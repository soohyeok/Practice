using System;
namespace InheritanceChallenge
{
    /*
     
    Inheritance Challenge 2 - Employees, Bosses and Trainees
Create a main class with a Main Method, then a base class Employee with the properties
Name, FirstName, Salary and the methods Work() and Pause().

Create a deriving class boss with the propertie CompanyCar and the method Lead(). Create another deriving class of employees - trainees with the properties WorkingHours and SchoolHourse and a method Learn().

Override the methods Work() of the trainee class so that it indicates the working hours of the trainee.

Don’t forget to create the constructors.

Create an object of each of the three classes (with arbitrary values)

and call the methods, Lead() of Boss and Work() of Trainee.

Just print out the respective text, what the respective employees do.

    */

    public class Trainees:Employee
    {
        protected string CompanyCar { get; set; }
        protected int WorkingHours { get; set; }
        protected int SchoolHours { get; set; }

        public Trainees()
        {
            WorkingHours = 9;
            SchoolHours = 12;
        }

        public Trainees(string name, string firstName, double salary, int workingHours, int schoolHours)
        {
            this.Name = name;
            this.FirstName = firstName;
            this.Salary = salary;
            this.IsWorking = true;
            // imp
            this.WorkingHours = workingHours;
            this.SchoolHours = schoolHours;
        }

        public override void Work()
        {
            if (this.IsWorking)
            {
                Console.WriteLine("TWork: Name: {0} , FirstName: {1}, Salary: {2}, WorkingHours = {3}, SchoolHours = {4} is already Working!", this.Name, this.FirstName, this.Salary, this.WorkingHours, this.SchoolHours);
            }
            else
            {
                this.IsWorking = true;
                Console.WriteLine("TWork: Name: {0} , FirstName: {1}, Salary: {2}, WorkingHours = {3}, SchoolHours = {4} is now Working!", this.Name, this.FirstName, this.Salary, this.WorkingHours, this.SchoolHours);
            }
        }
        public override void Pause()
        {
            if (this.IsWorking)
            {
                this.IsWorking = false;
                Console.WriteLine("TPause: Name: {0} , FirstName: {1}, Salary: {2}, WorkingHours = {3}, SchoolHours = {4} is Fired!", this.Name, this.FirstName, this.Salary, this.WorkingHours, this.SchoolHours);
            }
            else
            {
                Console.WriteLine("TPause: Name: {0} , FirstName: {1} is already Fired!", this.Name, this.FirstName);
            }
        }
        public void Learn()
        {
            if (this.IsWorking)
            {
                Console.WriteLine("TLearn: Traineee {0} {1} is working {2} hours and schooling {3} hours", this.Name, this.FirstName, this.WorkingHours, this.SchoolHours);
            }
            else
            {
                Console.WriteLine("TLearn: {0} {1} is not working at the company.", this.Name, this.FirstName);
            }
        }

    }
}
