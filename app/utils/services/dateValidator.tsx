const currentDate = (): string => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  let todayDate = yyyy + '-' + mm + '-' + dd;
  return todayDate;
};

function dateDiffInDays(a: Date, b: Date): number {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const runValidation = (a: string, b: string): Boolean => {
  let isValid = false;
  const today = currentDate();
  console.log(today, 'today');
  console.log(a, 'a');
  if (today === a) {
    console.log('Not possible to book for today');
    return isValid;
  }
  let difference = null;
  difference = dateDiffInDays(new Date(a), new Date(b));
  if (difference) {
    if (difference <= 0) {
      console.log('Booking not possible, Kindly check your booking dates');
      return isValid;
    }
  }

  isValid = true;
  return isValid;
};
