import { Suspense } from 'react';
import BuatMateriForm from './buat-form';

export default function BuatMateriPage() {
  return (
    <Suspense fallback={<div className="p-6">Memuat...</div>}>
      <BuatMateriForm />
    </Suspense>
  );
}
