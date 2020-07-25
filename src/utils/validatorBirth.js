import { differenceInYears, parseISO } from 'date-fns';

const validatorBirth = birth => {
  const birthISO = parseISO(birth);
  const age = differenceInYears(new Date(), birthISO);

  return age > 12;
};

export default validatorBirth;
