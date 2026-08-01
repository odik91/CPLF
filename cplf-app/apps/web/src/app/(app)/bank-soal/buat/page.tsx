import { Suspense } from 'react';
import SoalForm from '@/components/bank-soal/SoalForm';

export default function BuatSoalPage() {
  return (
    <Suspense fallback={<div className="p-6">Memuat...</div>}>
      <SoalForm mode="create" />
    </Suspense>
  );
}
