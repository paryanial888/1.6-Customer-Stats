// Alexander Paryani
// 15 APR 2024
// JavaScript Customer Stats

// Input
const peakTime1 = parseInt(prompt('How many customors did you get at peak time #1: '));
const peakTime2 = parseInt(prompt('How many customors did you get at peak time #2: '));
const peakTime3 = parseInt(prompt('How many customors did you get at peak time #3: '));
const peakTime4 = parseInt(prompt('How many customors did you get at peak time #4: '));

const totalNumberCustomers = peakTime1 + peakTime2 + peakTime3 + peakTime4;

// Process
const averageNumberCustomers = totalNumberCustomers / 4;
const msg = 
`
Rolling W Feed Store Customer Statistics

Number of Customers (First Hour): ${peakTime1}
Number of Customers (Second Hour): ${peakTime2}
Number of Customers (Third Hour): ${peakTime3}
Number of Customers (Fourth Hour): ${peakTime4}

Total Customers Over Four Hours: ${totalNumberCustomers}
AVG Number of Customers Per Hour: ${averageNumberCustomers}
`

// Output
console.log(msg);