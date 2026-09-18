"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { TransactionRow } from "@/components/financial/TransactionRow";
import { transactionService } from "@/services";
import type { Transaction } from "@/types";
import { Receipt } from "lucide-react";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  useEffect(() => {
    transactionService.getRecentTransactions(50).then(setTransactions);
  }, []);

  return (
    <div className="pb-10">
      <PageHeader
        title="Transactions"
        description="A single, unified transaction history across every SynxEx vertical."
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-0">
            {!transactions ? (
              <div className="space-y-2 p-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : transactions.length === 0 ? (
              <EmptyState icon={Receipt} title="No transactions yet" description="Activity across every vertical will appear here." />
            ) : (
              transactions.map((t) => <TransactionRow key={t.id} transaction={t} />)
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
