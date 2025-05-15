import { AxiosError } from 'axios';
import { action, makeObservable, observable } from 'mobx';
import ApiRequest from '../utils/AxiosReq';
import { getCookie, setCookie } from 'cookies-next';

interface AuthState {
  UserID: string;
  Username: string;
  UserTypeID: number;
  email?: string;
  phone_number?: number | string;
  ProfilePic: string;
}

interface DataProps {
  email: string;
  password: string;
}

export interface AuthErrorResponse {
  status: number;
  reason: string;
  valid: 'NO' | string;
}

export interface UserData {
  _id: string;
  first_name: string;
  last_name: string;
  user_name: string;
  phone_number: number;
  email: string;
  account_type: 'Admin' | 'User' | string; // Add more roles as needed
  createdAt: string;
  updatedAt: string;
  profile_pic: string;
}

export interface AuthResponse {
  status: number;
  results: {
    userData: UserData;
    token: string;
  };
  valid: 'YES';
}

class AuthStore {
  userInfo: AuthState = {
    UserID: '',
    Username: '',
    email: '',
    UserTypeID: 0,
    phone_number: '',
    ProfilePic: '',
  };
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      isLoading: observable,
      errorMessage: observable,
      reset: action.bound,
      setUserInfo: action.bound,
      setErrorMessage: action.bound,
      SignIn: action.bound,
      SignOut: action.bound,
      IsLoggedIn: action.bound,
    });

    this.IsLoggedIn();
  }

  reset() {
    this.userInfo = {
      UserID: '',
      Username: '',
      email: '',
      UserTypeID: 0,
      phone_number: '',
      ProfilePic: '',
    };
  }

  setUserInfo(data: Partial<AuthState>) {
    this.userInfo = {
      ...this.userInfo,
      ...data, // Merge existing userInfo with new data
    };
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  async SignIn(data: DataProps) {
    try {
      this.isLoading = true;

      const requestData = {
        user_name: data.email,
        password: data.password,
      };

      const resp = await ApiRequest<AuthResponse>(
        'api/user/login',
        'POST',
        requestData,
      );

      setCookie('userInfo', JSON.stringify(resp.results.userData));

      setCookie('token', JSON.stringify(resp.results.token));

      this.isLoading = false;
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';

      if (typeof error === 'object' && error !== null && 'reason' in error) {
        errorMessage =
          typeof error.reason === 'string' ? error.reason : errorMessage;
      }

      this.errorMessage = errorMessage;

      this.isLoading = false;

      console.log('An unknown error occurred', error as Error);
    }
  }

  async SignOut() {
    this.reset();
  }

  async IsLoggedIn() {
    const userInfo = getCookie('userInfo');
  }
}

export const authStore = new AuthStore();
