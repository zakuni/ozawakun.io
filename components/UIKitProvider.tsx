'use client';

import { useEffect } from 'react';

export default function UIKitProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const loadUIkit = async () => {
      const UIkit = (await import('uikit')).default;
      const Icons = (await import('uikit/dist/js/uikit-icons')).default;
      UIkit.use(Icons);
    };
    loadUIkit();
  }, []);

  return <>{children}</>;
}
