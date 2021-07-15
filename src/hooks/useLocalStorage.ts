import React, { useEffect, useMemo, useState } from 'react';

const BASE_NAME = 'healthy-scheduler-';

/**
 * Hook that on awake checks if  there is an item called X in localstorage
 * if yes, parse the item, if no, use the initialstate (if any)
 */
export default function useLocalStorage<T = any>(
  name: string,
  initialState?: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const prefixedName = useMemo(() => BASE_NAME + name, [name]);
  const [state, setState] = useState(() => {
    if (!process.browser) return;
    const lsItem = localStorage.getItem(prefixedName);
    if (lsItem) {
      if (typeof initialState === 'string') {
        return lsItem;
      }
      return JSON.parse(lsItem);
    }
    if (typeof initialState == 'function') {
      return initialState();
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof state === 'string') {
      localStorage.setItem(prefixedName, state);
      return;
    }
    localStorage.setItem(prefixedName, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
