// Define a simple data structure for leaderboard entries
interface LeaderboardEntry {
    name: string;
    score: number;
}

// Sample leaderboard entries
const leaderboardData: LeaderboardEntry[] = [
    { name: "John", score: 500 },
    { name: "Alice", score: 700 },
    { name: "Bob", score: 600 },
];

// Function to render leaderboard
function renderLeaderboard(entries: LeaderboardEntry[]) {
    const leaderboardElement = document.getElementById('leaderboard');

    // Clear previous entries
    leaderboardElement.innerHTML = '';

    // Render new entries
    entries.forEach((entry) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name} - ${entry.score}`;
        leaderboardElement.appendChild(listItem);
    });
}

// Initial render
renderLeaderboard(leaderboardData);