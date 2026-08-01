'use client';

import { use } from 'react';
import SoalForm from '@/components/bank-soal/SoalForm';

export default function EditSoalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <SoalForm mode="edit" soalId={id} />;
}
