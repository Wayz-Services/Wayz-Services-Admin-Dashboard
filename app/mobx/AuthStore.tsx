import { AxiosError } from "axios";
import { action, makeObservable, observable } from "mobx";
import ApiRequest from "../utils/AxiosReq";

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

class AuthStore {
  userInfo: AuthState = {
    UserID: "",
    Username: "",
    email: "",
    UserTypeID: 0,
    phone_number: "",
    ProfilePic: "",
  };
  isLoading: boolean = false;
  errorMessage: string = "";

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      isLoading: observable,
      reset: action.bound,
      setUserInfo: action.bound,
      setIsLoading: action.bound,
      SignIn: action.bound,
      SignOut: action.bound,
    });
  }

  reset() {
    this.userInfo = {
      UserID: "",
      Username: "",
      email: "",
      UserTypeID: 0,
      phone_number: "",
      ProfilePic: "",
    };
  }

  setUserInfo(data: Partial<AuthState>) {
    this.userInfo = {
      ...this.userInfo,
      ...data, // Merge existing userInfo with new data
    };
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  async SignIn(data: DataProps) {
    try {
      this.setIsLoading(true);

      const requestData = {
        usernamex: data.email,
        passwordx: data.password,
      };

      const resp = await ApiRequest<any>("login.php", "POST", requestData);

      if (resp?.error) {
        this.setErrorMessage(resp?.error); // Set the error message
        this.setIsLoading(false);
        return;
      }

      console.log(resp);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        this.setIsLoading(false);

        console.log("Login error", error.message);
      } else {
        this.setIsLoading(false);

        console.log("An unknown error occurred", error as Error);
      }
    }
  }

  async SignOut() {
    this.reset();
  }
}

export const authStore = new AuthStore();
