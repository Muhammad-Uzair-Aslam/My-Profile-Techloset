import { ProfileHeaderProps } from "../../types/types";

const BankDetails = ({ data }: ProfileHeaderProps) => {
  return (
    <div>
      <h1 className="text-lg font-semibold mb-6 text-gray-800">Bank Details</h1>
      <div className="flex lg:gap-32">
        <div className="min-w-0 text-gray-800">
          <div className="py-1 font-semibold">Bank Name</div>
          <div className="py-1 font-semibold truncate">Account Holder Name</div>
          <div className="py-1 font-semibold">Branch Code</div>
          <div className="py-1 font-semibold">Account Number</div>
          <div className="py-1 font-semibold">IBAN Number</div>
          <div className="py-1 font-semibold">Account Type</div>
        </div>
        <div className="min-w-0 text-gray-500">
          <div className="py-1 truncate">{data.bank.bankName}</div>
          <div className="py-1 truncate">
            {data.bank.accountHolderName || "-"}
          </div>
          <div className="py-1 truncate">{data.bank.branchCode || "-"}</div>
          <div className="py-1 truncate">{data.bank.accountNumber || "-"}</div>
          <div className="py-1 truncate">{data.bank.ibanNumber || "-"}</div>
          <div className="py-1 truncate">{data.bank.accountType || "-"}</div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
