import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isTodayDate from 'dayjs/plugin/isToday';
import isTomorrowDate from 'dayjs/plugin/isTomorrow';
import isYesterdayDate from 'dayjs/plugin/isYesterday';
import localeData from 'dayjs/plugin/localeData';
import minMax from 'dayjs/plugin/minMax';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(isTodayDate);
dayjs.extend(isTomorrowDate);
dayjs.extend(isYesterdayDate);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(minMax);
dayjs.extend(localeData);
