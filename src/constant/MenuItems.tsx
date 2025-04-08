import { CiGrid41 } from "react-icons/ci";
import { MenuItem } from "../types/types";
import { TfiMedallAlt } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { FaCreditCard } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

export const menuItems: MenuItem[] = [
  { id: "profile", label: "Profile", icon: <CiGrid41 size={20} /> },
  {
    id: "attendance",
    label: "Attendance",
    icon: <IoRocketOutline size={20} />,
  },
  { id: "events", label: "Events", icon: <SlCalender size={20} /> },
  { id: "leaves", label: "Leaves", icon: <SlCalender size={20} /> },
  { id: "promotions", label: "Promotions", icon: <TfiMedallAlt size={20} /> },
  { id: "paystub", label: "Paystub", icon: <FaCreditCard size={20} /> },
  { id: "perks", label: "Perks", icon: <ImProfile size={18} /> },
  { id: "increments", label: "Increments", icon: <ImProfile size={18} /> },
  { id: "documents", label: "Documents", icon: <GrDocument size={20} /> },
  { id: "contract", label: "Contract", icon: <ImProfile size={18} /> },
  { id: "leavePolicy", label: "Leave Policy", icon: <ImProfile size={18} /> },
  {
    id: "experienceLetter",
    label: "Experience Letter",
    icon: <ImProfile size={18} />,
  },
  { id: "letters", label: "Letters", icon: <ImProfile size={18} /> },
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
