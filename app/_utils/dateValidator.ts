const currentDate = (): string => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	const yyyy = today.getFullYear();

	const todayDate = `${yyyy}-${mm}-${dd}`;
	return todayDate;
};

function dateDiffInDays(a: Date, b: Date): number {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const runValidation = (a: string, b: string): boolean => {
	if (a.length <= 0 || b.length <= 0) return false;
	let isValid = false;
	const today = currentDate();
	if (today === a) {
		return isValid;
	}
	let difference = null;
	difference = dateDiffInDays(new Date(a), new Date(b));
	if (difference) {
		if (difference <= 0) {
			return isValid;
		}
	}

	isValid = true;
	return isValid;
};
