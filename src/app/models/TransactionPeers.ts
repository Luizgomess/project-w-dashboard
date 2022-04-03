export interface TransactionPeers {
    transactionType: 'from' | 'to',
    from: string;
    amount: number;
}