import SalaryIncrementTable from "../../components/salaryIncrementTable/SalaryIncrementTable";

const salaryEntries = [
    {
      incrementAt: "December 23rd 2024, 1:43 pm",
      newSalary: 0,
      note: ""
    }
  ];
export default function Increments() {
  return (
    <div className="py-5">
        <h1 className="text-xl font-bold text-center pb-6 md:pb-10">Salary Increment Table</h1>
        <SalaryIncrementTable entries={salaryEntries}/>
    </div>
  )
}
