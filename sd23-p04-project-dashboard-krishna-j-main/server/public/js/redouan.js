// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(
//   );
// });

// app.listen(3000, () => {
//     console.log("listening at 3000");
// });


console.log("redouan");
// variables
const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart-1');
const ctx2 = document.getElementById('myChart-2');
const ctx4 = document.getElementById('myChart-4');
const ctx3 = document.getElementById('myChart-3');

const ctx5 = document.getElementById('myChart-5');
//fetch from json
fetch("/json/redouan.json")
    .then(myData => myData.json())
    .then(myJsonData => createCharts(myJsonData))


//functions
function createCharts(data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'den-haag graden celcius januari',
                data: data[0].denhaag,
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

//charts
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['2023-1', '2023-2', '2023-3', '2023-4', '2023-5', '2023-6'],
            datasets: [{
                label: 'limburg graden celcius',
                data: [4, 3, 7, 9, 16, 20],
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



    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'rotterdam juli graden celcius',
                data: ["14", "12", "23", "11", "12", "20"],
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
