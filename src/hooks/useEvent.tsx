import { useEffect, useRef } from 'react';
type AnyFunction = (...args: any[]) => any;

export default function useEvent<TCallback extends AnyFunction>(callback: TCallback): TCallback {
  const latestRef = useRef<TCallback>();

  useEffect(() => {
    latestRef.current = callback;
  }, [callback]);

  const stableRef = useRef<TCallback>(null as any);

  if (!stableRef.current) {
    stableRef.current = function (this: any) {
      return latestRef.current?.apply(this, arguments as any);
    } as TCallback;
  }

  return stableRef.current;
}
