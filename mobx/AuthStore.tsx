import { action, makeObservable, observable } from 'mobx';
import ApiRequest from '../utils/AxiosReq';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

interface DataProps {
  account: string;
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
  account_type: 'Admin';
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
  userInfo: UserData = {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    phone_number: 0,
    email: '',
    account_type: 'Admin',
    createdAt: '',
    updatedAt: '',
    profile_pic: '',
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
      setIsLoading: action.bound,
      setErrorMessage: action.bound,
      SignIn: action.bound,
      SignOut: action.bound,
      IsLoggedIn: action.bound,
    });

    this.IsLoggedIn();
  }

  reset() {
    this.userInfo = {
      _id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      phone_number: 0,
      email: '',
      account_type: 'Admin',
      createdAt: '',
      updatedAt: '',
      profile_pic: '',
    };
  }

  setUserInfo(data: Partial<UserData>) {
    this.userInfo = {
      ...this.userInfo,
      ...data, // Merge existing userInfo with new data
    };
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  async SignIn(data: DataProps) {
    try {
      this.isLoading = true;

      const requestData = {
        user_name: data.account,
        password: data.password,
      };

      const resp = await ApiRequest<AuthResponse>(
        'api/user/login',
        'POST',
        requestData,
      );

      setCookie('userInfo', JSON.stringify(resp.results.userData));

      setCookie('token', JSON.stringify(resp.results.token));

      return true;
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred';

      if (typeof error === 'object' && error !== null && 'reason' in error) {
        errorMessage =
          typeof error.reason === 'string' ? error.reason : errorMessage;
      }

      this.errorMessage = errorMessage;

      this.isLoading = false;

      console.log('An unknown error occurred', error as Error);

      return false;
    }
  }

  async SignOut() {
    this.reset();
    console.log('Sign out called');

    deleteCookie('userInfo');
    deleteCookie('token');

    return true;
  }

  async IsLoggedIn() {
    const userInfo = getCookie('userInfo');
  }
}

export const authStore = new AuthStore();
