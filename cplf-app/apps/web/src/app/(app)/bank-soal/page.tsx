import { Suspense } from 'react';
import BankSoalHub from './hub';

export default function BankSoalPage() {
  return (
    <Suspense fallback={<div className="p-6">Memuat...</div>}>
      <BankSoalHub />
    </Suspense>
  );
}
