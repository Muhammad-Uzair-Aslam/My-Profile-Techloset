import { useState } from "react";
import { data } from '../constant/ProfileData';

export const useProfileForm = () => {
  const [formData, setFormData] = useState({
    username: data.name,
    maritalStatus: "Single",
    education: data.education,
    contactNumber: data.info.mobile,
    address: data.info.address,
    bankName: data.bank.bankName,
    branchCode: data.bank.branchCode || "",
    accountHolderName: data.bank.accountHolderName || "",
    accountNumber: data.bank.accountNumber || "",
    ibanNumber: data.bank.ibanNumber || "",
    accountType: data.bank.accountType || "ASAAN",
    nationality: "Pakistan",
    dualNationality: "No",
    countryOfBirth: "Pakistan",
    cityOfBirth: "Faisalabad",
    countryOfResidence: "Pakistan",
    visuallyImpaired: "No",
    motherMaidenName: "",
    husbandName: "",
    citizenTaxResident: "No",
    pep: "No",
    permanentCity: "Faisalabad",
    typeOfAddress: "PARENTS",
    nextOfKinName: "",
    nextOfKinRelation: "",
    nextOfKinMobile: "",
    facebook: data.socialLinks.Facebook,
    linkedin: data.socialLinks.LinkedIn,
    skype: data.socialLinks.Skype,
    github: data.socialLinks.Github,
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return { formData, updateField };
};
