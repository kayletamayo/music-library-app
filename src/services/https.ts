import { Alert } from 'react-native';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const httpGet = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
