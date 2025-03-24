import experienceLetter from "../../assets/letter.png";
import { useExperienceLetter } from "../../hooks/useExperienceLetter";
export default function ExperienceLetterRequest() {
  const { handleSubmit, reason, setReason } = useExperienceLetter();
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center mb-8">
        <div className="w-64 h-64 mb-4">
          <img
            src={experienceLetter}
            alt="Experience letter illustration"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-medium text-gray-700 mt-2">
          Request for your Experience letter
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason for requesting experience letter..."
            className="w-full border-b-2 border-gray-800 py-2 px-3 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors font-medium uppercase text-sm"
          >
            REQUEST
          </button>
        </div>
      </form>
    </div>
  );
}
