import { Suspense } from 'react';
import SoalBulkForm from '@/components/bank-soal/SoalBulkForm';

export default function BuatSoalPage() {
  return (
    <Suspense fallback={<div className="p-6">Memuat...</div>}>
      <SoalBulkForm />
    </Suspense>
  );
}
