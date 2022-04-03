export interface Transaction {
    amount: number,
    date: string | Date,
    description: string,
    from: string,
    id: string,
    status: string,
    title: string,
    to: string
}