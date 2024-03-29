import { useLayoutEffect, useEffect } from 'react';

// https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export { useIsomorphicLayoutEffect };
