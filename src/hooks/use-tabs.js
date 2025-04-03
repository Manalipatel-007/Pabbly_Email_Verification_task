import { useState } from 'react';

// ----------------------------------------------------------------------

export function useTabs(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event, newValue) => {
    setValue(newValue);
  };

  return { value, onChange };
}
