let memoryChart = new Chart(document.getElementById("memory-chart"), {
    type: 'line',
    data: {
        labels: ["1","2","3","4","5","6","7","8","9","10"],
        datasets: [
            {
                label: 'Memory',
                borderColor: '#a3a3a3',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
                data: [5,4,5,1,6,3,7,2.8,5,6]
            }
        ]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
            
        }
    }
})