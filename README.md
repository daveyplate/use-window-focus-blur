# use-window-focus-blur

Fixes the issue with blue outlines appearing when the window gets refocused in certain UI frameworks (NextUI).

# Installation

```bash
npm install @daveyplate/use-window-focus-blur
```

# Usage

```jsx
import { useWindowFocusBlur } from '@daveyplate/use-window-focus-blur'

function App() {
  useWindowFocusBlur()

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
```