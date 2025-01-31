import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

import { createClient } from '@supabase/supabase-js'


export default async function Page() {
    const supabase = createClient('https://aqcafpwcamkcohbacxln.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxY2FmcHdjYW1rY29oYmFjeGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMTAzMzMsImV4cCI6MjA1Mzg4NjMzM30.62zB-1wQ4u8EPeuWereicgMzlltnohHGGvQaQcgGqjs')

    const { data, error } = await supabase
        .from('invoices')
        .select()
    if (error) {
        console.error(error);
    }
    console.log(data)
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                仪表板
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="已收款" value={totalPaidInvoices} type="collected" /> */}
                {/* <Card title="待处理" value={totalPendingInvoices} type="pending" /> */}
                {/* <Card title="总发票数" value={numberOfInvoices} type="invoices" /> */}
                {/* <Card
          title="总客户数"
          value={numberOfCustomers}
          type="customers"
        /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <RevenueChart revenue={revenue}  /> */}
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </div>
        </main>
    );
}