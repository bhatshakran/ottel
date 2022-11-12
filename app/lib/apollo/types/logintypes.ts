export interface LogInArgs {
  input: {
    name: string;
    password: string;
  };
}

export interface User {
  id: number;
  name: string;
  /* passwordHash: string;
  avatar: string;
  income: number;
  walletId: string;
  bookings?: any[]; */
}
