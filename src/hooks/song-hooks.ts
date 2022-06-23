import { useEffect, useState } from 'react';

import { ENDPOINTS } from '../constants/api';
import { httpGet } from '../services/https';

const useItunesApi = (searchParams: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      // replace whitespace with +
      const searchKey = searchParams ? searchParams.replace(/\s+/g, '+') : '""';

      const url = `${ENDPOINTS.GET_SONGS}${searchKey}`;

      const response = await httpGet(url);

      if (response) {
        setData(response.results);
      }
      setLoading(false);
    };

    getSongs();
  }, [searchParams]);
  
  
  return { searchParams, data, loading };
}

export {
  useItunesApi,
}