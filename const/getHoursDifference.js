export function getHoursDifference(targetTime) {
	// Convert the target time to a JavaScript Date object
	const targetDate = new Date(targetTime);

	// Get the current time
	const currentDate = new Date();

	// Calculate the time difference in milliseconds
	const timeDifference = currentDate - targetDate;

	// Convert the time difference to hours
	let hoursDifference = timeDifference / (1000 * 60 * 60);

	// Ensure the result is a whole number
	hoursDifference = Math.floor(hoursDifference);

	// If the difference is greater than or equal to 24 hours, convert to days
	if (hoursDifference >= 24) {
		const daysDifference = Math.floor(hoursDifference / 24);
		return `${daysDifference} d`;
	}

	return `${hoursDifference} h`;
}
