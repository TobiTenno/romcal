import { Precedence, ProperCycle } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Sweden extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    elizabeth_hesselblad_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  };
}
