export interface LogInArgs {
  input: {
    name: string;
    password: string;
  };
}

export interface LogInWithGoogleArgs {
  input: {
    name: string;
    contact: string;
    avatar: string;
  };
}

export interface BookingArgs {
  input: {
    userId: number;
    hotelId: number;
  };
}

export interface getUserArgs {
  input: {
    id: number;
  };
}

export interface User {
  id: number;
  name: string;
}
