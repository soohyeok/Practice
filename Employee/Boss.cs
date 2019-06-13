using System;
namespace InheritanceChallenge
{
    public class Boss:Employee
    {
        protected string CompanyCar { get; set; }

        public Boss() {
            CompanyCar = "Honda Civic";
        }

        public Boss(string name, string firstName, double salary, string companyCar)
        {
            this.Name = name;
            this.FirstName = firstName;
            this.Salary = salary;
            this.IsWorking = true;
            // imp
            this.CompanyCar = companyCar;
        }

        public override void Work()
        {
            if (this.IsWorking)
            {
                Console.WriteLine("BWork: Name: {0} , FirstName: {1}, Salary: {2}, CompanyCar = {3} is already Working!", this.Name, this.FirstName, this.Salary, this.CompanyCar);
            }
            else
            {
                this.IsWorking = true;
                Console.WriteLine("BWork: Name: {0} , FirstName: {1}, Salary: {2}, CompanyCar = {3} is now Working!", this.Name, this.FirstName, this.Salary, this.CompanyCar);
            }
        }
        public override void Pause()
        {
            if (this.IsWorking)
            {
                this.IsWorking = false;
                Console.WriteLine("BPause: Name: {0} , FirstName: {1}, Salary: {2}, CompanyCar = {3} is Fired!", this.Name, this.FirstName, this.Salary, this.CompanyCar);
            }
            else
            {
                Console.WriteLine("BPause: Name: {0} , FirstName: {1} is already Fired!", this.Name, this.FirstName);
            }
        }
        public void Lead()
        {
            if (this.IsWorking)
            {
                Console.WriteLine("BLead: Boss {0} {1} is driving {2}", this.Name, this.FirstName, this.CompanyCar);
            }
            else
            {
                Console.WriteLine("BLead: {0} {1} is not working at the company.", this.Name, this.FirstName);
            }
        }
    }
}
