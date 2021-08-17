# This package exists for the soul purpose of creating a shared space for type definitions
Note: Temporary workaround until Knapsack is able to write the type definitions to the respective package dist directories

## React
An example implementation below:

```
import { ButtonProps } from '@knapsack-cloud/workspace-shared-types';

export const Button: React.FC<ButtonProps> = ({
  disabled,
  size,
  style,
  children
}) => {
  return (
    <button disabled={ disabled } className={`ex-button ex-button--size-${size} ex-button--${style}`}>{ children }</button>
  );
};
```