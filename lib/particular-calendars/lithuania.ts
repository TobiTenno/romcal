import { Precedence } from '@romcal/shared';

import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';
import { Europe } from './europe';

export class Lithuania extends CalendarDef {
  parentCalendar = Europe;

  inputs: Inputs = {
    george_matulaitis_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    casimir_of_poland: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 3, date: 4 },
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 3, date: 9 },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 23 },
    },

    andrew_bobola_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 16 },
    },

    our_lady_of_the_gate_of_dawn: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 11, date: 16 },
    },

    roch_of_montpellier: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 16 },
    },

    hyacinth_of_poland_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 17 },
    },

    nativity_of_the_blessed_virgin_mary: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
    },
  };
}
