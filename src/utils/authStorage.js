import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawAccessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    );

    return rawAccessToken ? JSON.parse(rawAccessToken) : '';
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
  }

  async clearAccessToken() {
    await AsyncStorage.removeItem(
      `${this.namespace}:accessToken`
    );
  }
}

export default AuthStorage;