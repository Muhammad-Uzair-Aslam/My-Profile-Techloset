import { tableData } from "../../constant/TableRows";
import downloadIcon from "../../assets/download.png";
import { RxCaretSort } from "react-icons/rx";
import "../../App.css";

export default function Attendence() {
  return (
    <div className="md:px-0 md:py-3 px-4 py-2">
      <div className="mb-5">
        <h1 className="text-[20px] font-semibold text-[#071437]">Attendance</h1>
        <p className="text-[14px] font-normal text-[#4B5675]">
          Check your monthly attendance
        </p>
      </div>
      <div className="bg-white shadow-sm border border-[#DBDFE9] rounded-[6px] overflow-hidden">
        <div className="flex justify-between items-center p-4 flex-wrap gap-2">
          <h2 className="text-[14px] font-[500] text-[#071437]">
            Billing and Invoicing
          </h2>
          <button className="text-sm flex justify-center items-center gap-1 border border-[#DBDFE9] px-4 py-2 rounded-md text-[#4B5675] hover:bg-gray-100">
            <img src={downloadIcon} alt="Download Icon" />
            Download PDF
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm border border-[#F1F1F4]">
            <thead className="bg-[#FCFCFC] text-[#4B5675]">
              <tr>
                <th className="px-4 py-3 text-left font-medium border border-[#F1F1F4]">
                  <input type="checkbox" className="custom-checkbox" />
                </th>
                <th className="px-4 py-3 text-left font-medium border border-[#F1F1F4]">
                  Employee
                </th>
                <th className="px-4 py-3 flex items-center gap-1 text-left font-medium border border-[#F1F1F4]">
                  <span>Date</span>
                  <button className="cursor-pointer">
                    <RxCaretSort size={15} />
                  </button>
                </th>
                <th className="px-4 py-3 items-center text-left font-medium border border-[#F1F1F4]">
                  <span> Check-In & Check-Out </span>
                  <button className="cursor-pointer ">
                    <RxCaretSort size={15} />
                  </button>
                </th>
                <th className="px-4 py-3 text-left font-medium border border-[#F1F1F4] min-w-[150px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-[#252F4A] text-[14px] font-[400]">
              {tableData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 border border-[#F1F1F4]">
                    <input type="checkbox" className="custom-checkbox" />
                  </td>
                  <td className="px-4 py-4 border border-[#F1F1F4] whitespace-nowrap overflow-hidden text-ellipsis">
                    {entry.name}
                  </td>
                  <td className="px-4 py-4 border border-[#F1F1F4] whitespace-nowrap overflow-hidden text-ellipsis">
                    {entry.date}
                  </td>
                  <td className="px-4 py-4 border border-[#F1F1F4] whitespace-nowrap">
                    {entry.time}
                  </td>
                  <td className="px-4 py-4 border border-[#F1F1F4] min-w-[150px]">
                    <span
                      className={`px-2 py-1 rounded-[4px] border text-xs font-medium ${entry.color}`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center p-4 text-sm text-[#4B5675] flex-wrap gap-2">
          <div>
            Show
            <select className="mx-2 border px-2 py-1 rounded">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            per page
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 ">←</button>
            <span className="px-2 ">1</span>
            <span className="py-1 px-2 bg-[#F1F1F4] rounded">2</span>
            <button className="px-2 py-1 ">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
