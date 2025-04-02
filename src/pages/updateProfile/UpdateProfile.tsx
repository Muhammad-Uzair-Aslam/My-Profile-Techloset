import { useProfileForm } from '../../hooks/useUpdateProfile';
import Dropdown from '../../components/dropDown/DropDown';
import DatePicker from '../../components/datePicker/DatePicker';
import InputField from '../../components/inputField/InputField';
import {
  accountTypes,
  countries,
  city as cities,
  dualNationality as dualNationalityOptions,
  typesOfAddress,
  kinRelation,
  bankOptions,
  educationOptions,
  yesNoOptions,
  maritalOptions,
} from '../../constant/UpdateProfile';
import { SlSocialFacebook } from 'react-icons/sl';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { CiInstagram } from 'react-icons/ci';
import { data } from '../../constant/ProfileData';

export default function ProfilePage() {
  const { formData, updateField } = useProfileForm();

  return (
    <div className="max-w-5xl mx-auto p-4 text-gray-500">
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <div className="mr-4">
            <img
              src={data.imageUrl}
              alt="Profile Photo"
              className="w-16 h-16 rounded-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800">{formData.username}</h2>
            <div className="relative inline-block mt-4">
              <input
                type="file"
                id="file-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => console.log(e.target.files)}
              />
              <label
                htmlFor="file-upload"
                className="mt-2 px-6 py-2 border border-indigo-500 rounded-md text-sm text-indigo-500 hover:bg-gray-50 cursor-pointer"
              >
                Change
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={(e) => updateField('username', e.target.value)}
          />
          <DatePicker label="Date of Birth" initialDate={data.info.birthDate} />
          <Dropdown
            label="Marital Status"
            options={maritalOptions}
            defaultOption="Select Status"
            value={formData.maritalStatus}
            onChange={(value) => updateField('maritalStatus', value)}
          />
          <Dropdown
            label="Education"
            options={educationOptions}
            defaultOption="Select Education"
            value={formData.education}
            onChange={(value) => updateField('education', value)}
          />
          <InputField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={(e) => updateField('contactNumber', e.target.value)}
          />
          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={(e) => updateField('address', e.target.value)}
          />
          <Dropdown
            label="Bank Name"
            options={bankOptions}
            defaultOption="Select Bank"
            value={formData.bankName}
            onChange={(value) => updateField('bankName', value)}
          />
          <InputField
            label="Account Holder Name"
            name="accountHolderName"
            value={formData.accountHolderName}
            placeholder="Account Holder"
            onChange={(e) => updateField('accountHolderName', e.target.value)}
          />
          <InputField
            label="Branch Code"
            name="branchCode"
            value={formData.branchCode}
            placeholder="Branch Code"
            onChange={(e) => updateField('branchCode', e.target.value)}
          />
          <InputField
            label="Account Number"
            name="accountNumber"
            value={formData.accountNumber}
            placeholder="Account Number"
            onChange={(e) => updateField('accountNumber', e.target.value)}
          />
          <InputField
            label="IBAN Number"
            name="ibanNumber"
            value={formData.ibanNumber}
            placeholder="IBAN Number"
            onChange={(e) => updateField('ibanNumber', e.target.value)}
          />
          <Dropdown
            label="Account Type"
            options={accountTypes}
            defaultOption="Select Account Type"
            value={formData.accountType}
            onChange={(value) => updateField('accountType', value)}
          />
          <Dropdown
            label="Nationality"
            options={countries}
            defaultOption="Select Country"
            value={formData.nationality}
            onChange={(value) => updateField('nationality', value)}
          />
          <Dropdown
            label="Dual Nationality"
            options={dualNationalityOptions}
            defaultOption="Select Option"
            value={formData.dualNationality}
            onChange={(value) => updateField('dualNationality', value)}
          />
          <Dropdown
            label="Country of Birth"
            options={countries}
            defaultOption="Select Country"
            value={formData.countryOfBirth}
            onChange={(value) => updateField('countryOfBirth', value)}
          />
          <Dropdown
            label="City of Birth"
            options={cities}
            defaultOption="Select City"
            value={formData.cityOfBirth}
            onChange={(value) => updateField('cityOfBirth', value)}
          />
          <Dropdown
            label="Country of Residence"
            options={countries}
            defaultOption="Select Country"
            value={formData.countryOfResidence}
            onChange={(value) => updateField('countryOfResidence', value)}
          />
          <Dropdown
            label="Customer Visually Impaired"
            options={dualNationalityOptions}
            defaultOption="Select Option"
            value={formData.visuallyImpaired}
            onChange={(value) => updateField('visuallyImpaired', value)}
          />
          <DatePicker label="CNIC Issue Date" initialDate="19-03-2019" />
          <DatePicker label="CNIC Expiry Date" initialDate="12-03-2029" />
          <InputField
            label="Mother's Maiden Name"
            name="motherMaidenName"
            value={formData.motherMaidenName}
            placeholder="Mother's Maiden Name"
            onChange={(e) => updateField('motherMaidenName', e.target.value)}
          />
          <InputField
            label="Husband Name"
            name="husbandName"
            value={formData.husbandName}
            placeholder="Husband Name"
            onChange={(e) => updateField('husbandName', e.target.value)}
          />
          <Dropdown
            label="Citizen Tax Resident Other Than Pakistan"
            options={yesNoOptions}
            defaultOption="Select Option"
            value={formData.citizenTaxResident}
            onChange={(value) => updateField('citizenTaxResident', value)}
          />
          <Dropdown
            label="PEP"
            options={yesNoOptions}
            defaultOption="Select Option"
            value={formData.pep}
            onChange={(value) => updateField('pep', value)}
          />
          <Dropdown
            label="Permanent City"
            options={cities}
            defaultOption="Select City"
            value={formData.permanentCity}
            onChange={(value) => updateField('permanentCity', value)}
          />
          <Dropdown
            label="Types of Address"
            options={typesOfAddress}
            defaultOption="Select Type"
            value={formData.typeOfAddress}
            onChange={(value) => updateField('typeOfAddress', value)}
          />
          <InputField
            label="Next of Kin Name"
            name="nextOfKinName"
            value={formData.nextOfKinName}
            placeholder="Next of Kin Name"
            onChange={(e) => updateField('nextOfKinName', e.target.value)}
          />
          <Dropdown
            label="Next of Kin Relation"
            options={kinRelation}
            defaultOption="Select Kin Relation"
            value={formData.nextOfKinRelation}
            onChange={(value) => updateField('nextOfKinRelation', value)}
          />
          <InputField
            label="Next of Kin Mobile Number"
            name="nextOfKinMobile"
            value={formData.nextOfKinMobile}
            placeholder="03xx-xxxxxxx"
            onChange={(e) => updateField('nextOfKinMobile', e.target.value)}
          />
          <InputField
            label="Facebook"
            name="facebook"
            value={formData.facebook}
            onChange={(e) => updateField('facebook', e.target.value)}
            prefixIcon={<SlSocialFacebook className="w-5 h-5 text-gray-500" />}
          />
          <InputField
            label="LinkedIn"
            name="linkedin"
            value={formData.linkedin}
            onChange={(e) => updateField('linkedin', e.target.value)}
            prefixIcon={<FiLinkedin className="w-5 h-5 text-gray-500" />}
          />
          <InputField
            label="Skype"
            name="skype"
            value={formData.skype}
            onChange={(e) => updateField('skype', e.target.value)}
            prefixIcon={<CiInstagram className="w-5 h-5 text-gray-500" />}
          />
          <InputField
            label="GitHub"
            name="github"
            value={formData.github}
            onChange={(e) => updateField('github', e.target.value)}
            prefixIcon={<FiGithub className="w-5 h-5 text-gray-500" />}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={()=>{}}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
        <button
          onClick={()=>{}}
          className="px-5 mx-5 rounded-lg py-2 text-amber-500 hover:bg-amber-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
}