'use client';

import S1 from '@/src/components/pages/S1';
import S2 from '@/src/components/pages/S2';
import { useScrollSmoother } from '@/src/hooks/Ui/useScrollSmoother';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home () {
  useScrollSmoother ();
  const queryClient = new QueryClient ();

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <S1 src='images/curology-apply%20ad.webp' />
        <S2 />
        <section id='tests3'></section>
      </main>
    </QueryClientProvider>
  );
}
