import { __rest } from '../../../../../_virtual/_tslib.js';
import { useRef, useState, useCallback, useEffect } from 'react';
import { animationFrameTimeout, clearAnimationFrameTimeout } from '../../functions/animationFrameTimeout/animationFrameTimeout.js';
import { useTransitionEvents } from '../useTransitionEvents/useTransitionEvents.js';

const DEFAULT_DURATION = 100;
// The hook inspired by https://github.com/reactjs/react-transition-group/blob/master/src/Transition.js
const useTransition = (_a) => {
    var { isShown, inDuration, outDuration, duration = DEFAULT_DURATION, delay, inDelay, outDelay, animateOnMount = true } = _a, events = __rest(_a, ["isShown", "inDuration", "outDuration", "duration", "delay", "inDelay", "outDelay", "animateOnMount"]);
    const initialStage = animateOnMount ? 'UNMOUNT' : 'ENTERED';
    const animationFrameTimeoutIdRef = useRef({ id: -1 });
    const timeoutIdRef = useRef({ id: -1 });
    const [stage, setStage] = useState(initialStage);
    const [mount, setMount] = useState(!animateOnMount);
    const [currentDuration, setCurrentDuration] = useState(duration);
    const performTransition = (runTransition, transitionDelay) => {
        if (transitionDelay) {
            timeoutIdRef.current = animationFrameTimeout(runTransition, transitionDelay);
        }
        else {
            runTransition();
        }
    };
    const performEnter = useCallback(() => {
        const animationDuration = inDuration || duration;
        setCurrentDuration(animationDuration);
        setMount(true);
        setStage('ENTERING');
        animationFrameTimeoutIdRef.current = animationFrameTimeout(() => {
            setStage('ENTERED');
        }, animationDuration);
    }, [duration, inDuration]);
    const performExit = useCallback(() => {
        const animationDuration = outDuration || duration;
        setCurrentDuration(animationDuration);
        setStage('EXITING');
        animationFrameTimeoutIdRef.current = animationFrameTimeout(() => {
            setMount(false);
            setStage('UNMOUNT');
        }, animationDuration);
    }, [duration, outDuration]);
    useEffect(() => {
        if (isShown && stage !== 'ENTERED') {
            const enterDelay = inDelay || delay;
            performTransition(performEnter, enterDelay);
        }
        else if (!isShown && stage !== 'UNMOUNT') {
            const exitDelay = outDelay || delay;
            performTransition(performExit, exitDelay);
        }
        return () => {
            clearAnimationFrameTimeout(animationFrameTimeoutIdRef.current);
            clearAnimationFrameTimeout(timeoutIdRef.current);
        };
    }, [inDelay, outDelay, performEnter, performExit, isShown, delay, stage]);
    useTransitionEvents(stage, events);
    return { currentDuration, mount, stage };
};

export { DEFAULT_DURATION, useTransition };
