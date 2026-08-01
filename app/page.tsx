import { redirect } from 'next/navigation';

// TEMPORARY: sends visitors to the archived WordPress site while the Next.js
// rebuild is finished. TODO: replace with real React components, piece by
// piece (see tmp-consider-deleting/page.tsx.bak).
export default function Home() {
  redirect('/web/20250703135957/https%3A/tnuligdol.co.il/index.html');
}
