using System;

namespace InheritanceChallenge
{
    class Program
    {
        static void Main(string[] args)
        {
            // employee test with no param
            Employee employee = new Employee();
            employee.Work();
            employee.Pause();
            employee.Pause();
            employee.Work();

            // employee test with param
            Employee _employee = new Employee("Lee", "ByoungSul", 80000.57);
            _employee.Work();
            _employee.Pause();
            _employee.Pause();
            _employee.Work();

            // Boss;
            Boss boss = new Boss();
            boss.Work();
            boss.Lead();
            boss.Pause();
            boss.Lead();
            boss.Pause();
            boss.Work();

            // Boss with param
            Boss _boss = new Boss("Choi", "YoungJun", 150000.78, "Tesla");
            _boss.Work();
            _boss.Lead();
            _boss.Pause();
            _boss.Lead();
            _boss.Pause();
            _boss.Work();

            //Trainee
            Trainees trainees = new Trainees();
            trainees.Work();
            trainees.Learn();
            trainees.Pause();
            trainees.Learn();
            trainees.Pause();
            trainees.Work();

            //Trainee with param
            Trainees _trainees = new Trainees("Leee", "HyeokSoo", 200000000, 13, 27);
            _trainees.Work();
            _trainees.Learn();
            _trainees.Pause();
            _trainees.Learn();
            _trainees.Pause();
            _trainees.Work();
        }
    }
}
