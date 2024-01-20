/* import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts'; */
import { Suspense } from 'react';
import { RevenueChartSkeleton, 
  LatestInvoicesSkeleton, 
  CardSkeleton, } from '@/app/ui/skeletons'; 
 import { createClient } from '@/utils/supabase/server';
 import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: notes } = await supabase.from("notes").select()
  
  return (
    
    <main>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <h1 className= "mb-4 text-xl md:text-2xl">
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton/>}>
          {/*<CardWrapper/>*/}
          </Suspense> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/*<Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>} />
          <LatestInvoices/>
        <Suspense/> */}
      </div>
    </main>
  );
}