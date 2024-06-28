// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(
//   );
// });

// app.listen(3000, () => {
//     console.log("listening at 3000");
// });


console.log("Xander");

const ctx = document.getElementById('myChart');
fetch("/json/xander.json")
  .then(myData => myData.json())
  .then(myJsonData => createCharts(myJsonData))

function createCharts(data) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2019', '2020', '2021', '2022'],
      datasets: [{
        label: 'Bitcoin',
        data: data[0].xander,
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


  const ctx1 = document.getElementById('myChart-1');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Ethereum',
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


  const ctx2 = document.getElementById('myChart-2');

  new Chart(ctx2, {
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


