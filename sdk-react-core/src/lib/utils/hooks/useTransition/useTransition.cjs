'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var animationFrameTimeout = require('../../functions/animationFrameTimeout/animationFrameTimeout.cjs');
var useTransitionEvents = require('../useTransitionEvents/useTransitionEvents.cjs');

const DEFAULT_DURATION = 100;
// The hook inspired by https://github.com/reactjs/react-transition-group/blob/master/src/Transition.js
const useTransition = (_a) => {
    var { isShown, inDuration, outDuration, duration = DEFAULT_DURATION, delay, inDelay, outDelay, animateOnMount = true } = _a, events = _tslib.__rest(_a, ["isShown", "inDuration", "outDuration", "duration", "delay", "inDelay", "outDelay", "animateOnMount"]);
    const initialStage = animateOnMount ? 'UNMOUNT' : 'ENTERED';
    const animationFrameTimeoutIdRef = React.useRef({ id: -1 });
    const timeoutIdRef = React.useRef({ id: -1 });
    const [stage, setStage] = React.useState(initialStage);
    const [mount, setMount] = React.useState(!animateOnMount);
    const [currentDuration, setCurrentDuration] = React.useState(duration);
    const performTransition = (runTransition, transitionDelay) => {
        if (transitionDelay) {
            timeoutIdRef.current = animationFrameTimeout.animationFrameTimeout(runTransition, transitionDelay);
        }
        else {
            runTransition();
        }
    };
    const performEnter = React.useCallback(() => {
        const animationDuration = inDuration || duration;
        setCurrentDuration(animationDuration);
        setMount(true);
        setStage('ENTERING');
        animationFrameTimeoutIdRef.current = animationFrameTimeout.animationFrameTimeout(() => {
            setStage('ENTERED');
        }, animationDuration);
    }, [duration, inDuration]);
    const performExit = React.useCallback(() => {
        const animationDuration = outDuration || duration;
        setCurrentDuration(animationDuration);
        setStage('EXITING');
        animationFrameTimeoutIdRef.current = animationFrameTimeout.animationFrameTimeout(() => {
            setMount(false);
            setStage('UNMOUNT');
        }, animationDuration);
    }, [duration, outDuration]);
    React.useEffect(() => {
        if (isShown && stage !== 'ENTERED') {
            const enterDelay = inDelay || delay;
            performTransition(performEnter, enterDelay);
        }
        else if (!isShown && stage !== 'UNMOUNT') {
            const exitDelay = outDelay || delay;
            performTransition(performExit, exitDelay);
        }
        return () => {
            animationFrameTimeout.clearAnimationFrameTimeout(animationFrameTimeoutIdRef.current);
            animationFrameTimeout.clearAnimationFrameTimeout(timeoutIdRef.current);
        };
    }, [inDelay, outDelay, performEnter, performExit, isShown, delay, stage]);
    useTransitionEvents.useTransitionEvents(stage, events);
    return { currentDuration, mount, stage };
};

exports.DEFAULT_DURATION = DEFAULT_DURATION;
exports.useTransition = useTransition;
