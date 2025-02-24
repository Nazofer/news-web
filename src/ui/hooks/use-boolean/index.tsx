import { useState, useCallback, useMemo } from 'react';

export interface UseBooleanOutput {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
  setFalse(): void;
  setTrue(): void;
  toggle(): void;
}

const useBoolean = (defaultValue?: boolean): UseBooleanOutput => {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return useMemo(
    () => ({ value, setValue, setTrue, setFalse, toggle }),
    [value, setTrue, setFalse, toggle]
  );
};

export default useBoolean;
