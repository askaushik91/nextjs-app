'use client';

const REACT_DEVTOOLS_ASYNC_INFO_ERROR =
  'We are cleaning up async info that was not on the parent Suspense boundary. This is a bug in React.';

declare global {
  interface Window {
    __gillOrganicsDevConsoleFilterInstalled?: boolean;
  }
}

function installDevConsoleFilter() {
  if (
    typeof window === 'undefined' ||
    process.env.NODE_ENV !== 'development' ||
    window.__gillOrganicsDevConsoleFilterInstalled
  ) {
    return;
  }

  const originalConsoleError = console.error.bind(console);

  console.error = (...args: unknown[]) => {
    const message = args
      .map((arg) => {
        if (typeof arg === 'string') {
          return arg;
        }

        if (arg instanceof Error) {
          return arg.message;
        }

        return '';
      })
      .join(' ');

    if (message.includes(REACT_DEVTOOLS_ASYNC_INFO_ERROR)) {
      return;
    }

    originalConsoleError(...args);
  };

  window.__gillOrganicsDevConsoleFilterInstalled = true;
}

export function DevConsoleFilter() {
  installDevConsoleFilter();

  return null;
}
