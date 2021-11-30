import { useEffect, useState } from 'react';

import useIsMounted from './useIsMounted';

const animateElementHeight = ({ element, height }) => {
  return requestAnimationFrame(() => {
    element.style.height = height + 'px';
  });
};

function useCollapse(targetRef) {
  const [expanded, setExpanded] = useState(false);
  const isMounted = useIsMounted();

  // Make sure the targetElement has correct style
  useEffect(() => {
    const targetedElement = targetRef?.current;
    if (!targetedElement) return;

    // add style
    targetedElement.style.transition = 'height 0.2s ease-in-out';
    targetedElement.style.overflow = 'hidden';
    targetedElement.style.height = '1px';
  }, []);

  // Trigger this Effect for next update (expanded changes)
  useEffect(() => {
    const targetedElement = targetRef?.current;
    if (!targetedElement || !isMounted()) return;

    const currentHeight = expanded ? 0 : targetedElement.scrollHeight;
    const toHeight = expanded ? targetedElement.scrollHeight : 0;

    targetedElement.style.height = currentHeight + 'px';

    let animatedId;

    if (currentHeight !== toHeight) {
      animatedId = animateElementHeight({
        element: targetedElement,
        height: toHeight,
      });
    }

    return () => {
      animatedId && window.cancelAnimationFrame(animatedId);
    };
  }, [expanded, targetRef]);

  return { expanded, setExpanded };
}

export default useCollapse;
