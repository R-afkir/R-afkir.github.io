// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(
//   );
// });

// app.listen(3000, () => {
//     console.log("listening at 3000");
// });


console.log("krishna");

//variables
const ctx = document.querySelector('#myChart');
 const ctx1 = document.getElementById('myChart-1');

//fetch
fetch("/json/krishna.json")
    .then(myData => myData.json())
    .then(myJsonData => createCharts(myJsonData))


//function
function createCharts(data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'rod wave monthly listeners',
                data: data[0].rod,
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    //charts
   
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'J cole monthly listeners',
                data: ["40000000", "46000000", "43000000", "45000000", "42000000", "50000000"],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx2 = document.getElementById('myChart-2');

    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'kendrick lamar monthly listeners',
                data: [20000000, 24000000, 25000000, 30000000, 35000000, 75000000],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('myChart-3');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx4 = document.getElementById('myChart-4');
    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx5 = document.getElementById('myChart-5');
    new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
