import { perksData, columns } from "../../constant/PerksItem";
export default function Perks() {
  return (
    <div className="bg-white rounded-md shadow">
      <div className="p-4">
        <div className="w-full">
          <h1 className="text-center text-xl font-bold py-5 text-gray-700">
            Perks Table
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-base font-medium text-gray-900"
                    >
                      {column.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {perksData.length > 0 ? (
                  perksData.map((item, index) => (
                    <tr
                      key={item.id || index}
                      className="border-b border-gray-200"
                    >
                      <td className="px-6 py-4 text-gray-700">
                        {item.createdAt}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.title}</td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.amount || ""}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
