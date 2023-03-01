export interface Weight {
    id: number | null | undefined;
    weight: string;
    date: Date
}
export interface AddWeightInput {
    weight: number;
  }
  
export interface UpdateWeightInput {
    id: number;
    weight: number;
  }
    
export interface DeleteWeightInput {
    id: number;
  }
 export interface User {
    id: number;
    userName: string;
    email: string;
  }

  export interface SignInInput {
    email: string;
    password: string;
  }
  
  export interface SignUpInput {
    userName: string;
    email: string;
    password: string;
    confirmPassword:string;
    
  }
  export interface AuthResponse {
    token: string;
    user: User
  }
  