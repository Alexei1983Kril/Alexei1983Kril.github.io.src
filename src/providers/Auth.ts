interface IAuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    password: null | string;
    signin(username: string, password: string): Promise<void>;
    signout(): Promise<void>;
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const FakeApiAuthProvider: IAuthProvider = {
    isAuthenticated: false,
    username: null,
    password: null,
    async signin(username: string, password: string) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        ApiAuthProvider.isAuthenticated = true;
        ApiAuthProvider.username = username;
        ApiAuthProvider.password = password;
    },
    async signout() {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        ApiAuthProvider.isAuthenticated = false;
        ApiAuthProvider.username = "";
        ApiAuthProvider.password = "";
    },
};

export const ApiAuthProvider: IAuthProvider = {
    ...FakeApiAuthProvider,
};
