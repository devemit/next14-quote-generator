import { QuoteProps } from './types';

export default async function getQuotes() {
  const res = await fetch('https://type.fit/api/quotes');
  if (!res.ok) throw new Error('failed to fetch');
  return res.json();
}
