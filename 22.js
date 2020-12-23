const fs = require('fs');
const input = fs.readFileSync('./inputs/22.txt', 'utf-8').trim().split('\n\n');

const players = input.map(i => i.split(':\n')[1].split('\n').map(Number));

while (players.every(p => p.length)) {
	let plays = players.map(p => p.shift());
	let winner = plays.indexOf(Math.max(...plays));
	players[winner].push(...plays.sort((a, b) => a > b ? -1 : 1));
}

console.log('PART 1', players.find(p => p.length).map((c, i, a) => c * (a.length - i)).reduce((a, b) => a + b, 0));
