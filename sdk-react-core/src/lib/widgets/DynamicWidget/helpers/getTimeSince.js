import { t } from 'i18next';

const getTimeSince = (date) => {
    const currentTime = Date.now();
    const timeDifference = currentTime - date.getTime();
    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
    if (timeDifference >= year) {
        const yearsAgo = Math.floor(timeDifference / year);
        return {
            unit: yearsAgo === 1 ? t('dyn_time_since.year') : t('dyn_time_since.years'),
            value: yearsAgo,
        };
    }
    if (timeDifference >= month) {
        const monthsAgo = Math.floor(timeDifference / month);
        return {
            unit: monthsAgo === 1
                ? t('dyn_time_since.month')
                : t('dyn_time_since.months'),
            value: monthsAgo,
        };
    }
    if (timeDifference >= day) {
        const daysAgo = Math.floor(timeDifference / day);
        return {
            unit: daysAgo === 1 ? t('dyn_time_since.day') : t('dyn_time_since.days'),
            value: daysAgo,
        };
    }
    if (timeDifference >= hour) {
        const hoursAgo = Math.floor(timeDifference / hour);
        return {
            unit: hoursAgo === 1 ? t('dyn_time_since.hour') : t('dyn_time_since.hours'),
            value: hoursAgo,
        };
    }
    if (timeDifference >= minute) {
        const minutesAgo = Math.floor(timeDifference / minute);
        return {
            unit: minutesAgo === 1
                ? t('dyn_time_since.minute')
                : t('dyn_time_since.minutes'),
            value: minutesAgo,
        };
    }
    const secondsAgo = Math.floor(timeDifference / 1000);
    return {
        unit: secondsAgo === 1
            ? t('dyn_time_since.second')
            : t('dyn_time_since.seconds'),
        value: secondsAgo,
    };
};

export { getTimeSince };
