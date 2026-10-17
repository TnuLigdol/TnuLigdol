import data from '@/DB/2026-10-party-positions.json';

export type Party = {
  id: string;
  name: string;
  full: string;
  letter: string;
  type: 'reported' | 'unknown';
  status: string;
  text: string;
  budget: string;
  time: string;
  owner: string;
  detail: string[];
  sources: { title: string; url: string }[];
  registry: string;
};
export type PartyData = {
  checked_at: string;
  scope: string;
  disclaimer: string;
  parties: Party[];
};
export const partyData = data as PartyData;
export const sortedParties = [...partyData.parties].sort(
  (a, b) => Number(b.type === 'reported') - Number(a.type === 'reported') || a.name.localeCompare(b.name, 'he')
);
