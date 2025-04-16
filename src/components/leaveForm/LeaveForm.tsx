import Dropdown from '../dropDown/DropDown';
import InputField from '../inputField/InputField';
import DatePicker from '../datePicker/DatePicker';
import { LeaveFormProps } from '../../types/types';
import { useLeaveForm } from '../../hooks/useLeaveForm';

export default function LeaveForm({ initialDate, onClose }: LeaveFormProps) {
  const {
    formData,
    leaveTypes,
    titles,
    handleChange,
    handleInputChange,
    handleSubmit,
    handleCancel,
  } = useLeaveForm({ initialDate, onClose });

  return (
    <div className="w-full pl-3 md:pl-0">
      <form onSubmit={handleSubmit}>
        <Dropdown
          label="Type"
          options={leaveTypes}
          defaultOption="Please select type"
          value={formData.type}
          onChange={(value) => handleChange('type', value)}
        />

        <Dropdown
          label="Title"
          options={titles}
          defaultOption="Please select title"
          value={formData.title}
          onChange={(value) => handleChange('title', value)}
        />

        <InputField
          label="Description"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleInputChange}
          aria-label="Leave description"
        />

        <DatePicker
          label="Start Date"
          initialDate={formData.startDate}
          onChange={(date) => handleChange('startDate', date)}
        />
        <DatePicker
          label="End Date"
          initialDate={formData.endDate}
          onChange={(date) => handleChange('endDate', date)}
        />

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 font-medium rounded"
          >
            Add Leave
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}