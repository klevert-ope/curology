'use client';

import {useScrollSmoother} from '@/hooks/ui/useScrollSmoother';
import ScrollThumb from '@/components/ui/ScrollThumb';
import {QueryClient, QueryClientProvider,} from 'react-query';
import S1 from '@/components/sections/S1';
import S2 from "@/components/sections/S2";


export default function Home() {
    const queryClient = new QueryClient();
    useScrollSmoother();
    return (
        <QueryClientProvider client={queryClient}>
            <div id='smooth-wrapper'>
                <div id='smooth-content'>
                    <main>
                        <S1 src='images/curology-apply%20ad.webp'/>
                        <S2/>
                    </main>
                </div>
            </div>
            <ScrollThumb/>
        </QueryClientProvider>
    );
}
