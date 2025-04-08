import { PerkItem } from "../types/types";
export const perksData: PerkItem[] = [
    { id: '1', createdAt: 'January 15, 2025', title: 'Performance Bonus', amount: '$500' },
    { id: '2', createdAt: 'March 22, 2025', title: 'Annual Increment', amount: '$1,200' }
  ];
  
export const columns = [
    {
      name: 'Date',
      selector: 'createdAt',
    },
    {
      name: 'Title',
      selector: 'title',
    },
    {
      name: 'Amount',
      selector: 'amount',
    }
  ];