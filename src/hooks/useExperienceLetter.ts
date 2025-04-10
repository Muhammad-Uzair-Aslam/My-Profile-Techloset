 import { useState } from "react";
 export const useExperienceLetter=()=>{
    const [reason, setReason] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted reason:', reason);
    alert('Request submitted successfully!');
    setReason('');
  };
  return{
    handleSubmit,
    reason,
    setReason
  }
 }
 
