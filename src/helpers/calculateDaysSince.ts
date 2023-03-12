
// This function takes a date string as input and calculates the number of days since that date
// It returns a string that represents how many days ago that date was

export function calculateDaysSince(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const timeDiff = now.getTime() - date.getTime();
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (diffDays < 1) {
        const diffHours = Math.floor(timeDiff / (1000 * 3600));
        return `${diffHours} hours ago`;
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        return `${diffWeeks} weeks ago`;
    } else {
        const diffMonths = Math.floor(diffDays / 30);
        const diffDaysInMonth = diffDays % 30;
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return `on ${month.slice(0,3)} ${day}`;
    }
}




