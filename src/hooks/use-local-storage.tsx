import { useState, useEffect } from 'react';
import { sampleScheduledTweets, samplePostedTweets } from '@/data/sample-data';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        if (item) {
          return JSON.parse(item);
        }
        if (key === 'scheduled-tweets') {
          window.localStorage.setItem(key, JSON.stringify(sampleScheduledTweets));
          return sampleScheduledTweets as any;
        }
        if (key === 'posted-tweets') {
          window.localStorage.setItem(key, JSON.stringify(samplePostedTweets));
          return samplePostedTweets as any;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return initialValue;
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      }
    } catch (error) {
      console.log(error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  return [storedValue, setValue];
}