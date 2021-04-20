const api_url = `http://localhost:21262/`

async function getContent() {
    try {
        const response = await fetch(api_url)
        const data = await response.json()
        const {memory, xMemory} = data
        console.log(memory, xMemory)
    } catch (error) {
        console.log(error)
    }
}

chartIt()

async function chartIt() {
    await getContent();
    let memoryChart = new Chart(document.getElementById("memory-chart"), {
        type: 'line',
        data: {
            labels: xMemory,
            datasets: [
                {
                    label: 'Memory',
                    borderColor: '#00a389',
                    cubicInterpolationMode: 'default',
                    tension: 0.4,
                    data: memory
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 4
                },
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
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


    let visitorsChart = new Chart(document.getElementById("visitors-chart"), {
        type: 'line',
        data: {
            labels: ["1","2","3","4","5","6","7","8","9","10","11"],
            datasets: [
                {
                    label: 'Visitors',
                    borderColor: '#ff5c5c',
                    cubicInterpolationMode: 'default',
                    tension: 0.4,
                    data: [4,4.2,3.9,5,3.3,4.8,3,5.6,4,4.1,2.2]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 4
                },
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
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



    let newUsersChart = new Chart(document.getElementById("new-users-chart"), {
        type: 'line',
        data: {
            labels: ["1","2","3","4","5","6","7","8","9","10","11"],
            datasets: [
                {
                    label: 'Visitors',
                    borderColor: '#ac56db',
                    cubicInterpolationMode: 'default',
                    tension: 0.4,
                    data: [5,4.7,5.1,4,5.5,3.8,5.8,5,5.3,5,4.7]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 4
                },
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
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




    let serverRequestChart = new Chart(document.getElementById("server-request-chart"), {
        type: 'line',
        data: {
            labels: ["14.00","14.10","14.20","14.30","14.40","14.50","14.60","15.00","15.10","15.20","15.30"],
            datasets: [
                {
                    label: 'Web Server A',
                    borderColor: '#00a389',
                    backgroundColor: '#00a389',
                    cubicInterpolationMode: 'default',
                    tension: 0.4,
                    data: [20,32,25,45,5,55,24,53,46,27,75]
                },
                {
                    label: 'Web Server B',
                    borderColor: '#ffbb54',
                    backgroundColor: '#ffbb54',
                    cubicInterpolationMode: 'default',
                    tension: 0.4,
                    data: [9,23,15,27,2,25,6,43,25,18,50]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        boxWidth: 12,
                        color: '#000000',
                        font: {
                            weight: 500,
                            family: "'Poppins', sans-serif"
                        }
                    },
                    align: 'end'
                }
            },
            layout: {
                padding: {
                    top: 30,
                    right: 25,
                    bottom: 25,
                    left: 25
                }
            },
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 4
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                x: {
                    grid: {
                        offset: true
                    }
                },
                y: {
                    min: 0,
                    max: 75,
                    ticks: {
                        stepSize: 25
                    }
                }
            }
        }
    })





    let visitors2Chart = new Chart(document.getElementById("visitors2-chart"), {
        type: 'bar',
        data: {
            labels: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            datasets: [
                {
                    label: 'Visitors',
                    backgroundColor: '#ab54db50',
                    hoverBackgroundColor: '#ab54db',
                    borderRadius: 10,
                    borderSkipped: false,
                    data: [1000,600,1300,982,480,1370,920]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    display: false,
                }
                
            }
        }
    })





    let summaryChart = new Chart(document.getElementById("summary-chart"), {
        type: 'doughnut',
        data: {
            labels: ["Fixed Servers", "Down Server", "Running"],
            datasets: [
                {
                    label: 'Chart Summary',
                    backgroundColor: ['#ab54db','#ef9a91','#f1e6b9'],
                    borderRadius: 50,
                    data: [1000,600,1300]
                }
            ]
        },
        options: {
            borderWidth: 0,
            cutout: 75,
            radius: 85,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        padding: 20,
                        boxWidth: 12,
                        color: '#000000',
                        font: {
                            weight: 500,
                            family: "'Poppins', sans-serif"
                        }
                    },
                    position: 'bottom'
                }
            }
        }
    })






    let serverStatusChart = new Chart(document.getElementById("server-status-chart"), {
        type: 'bar',
        data: {
            labels: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            datasets: [
                {
                    label: 'Visitors',
                    backgroundColor: ['#ff5b5b', '#00a389', '#00a389', '#ffbb54', '#00a389', '#ff5b5b','#00a389'],
                    borderRadius: 20,
                    borderSkipped: false,
                    barThickness: 10,
                    data: [3,5.5,5.5,3.8,5.3,2,6]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    position: 'right',
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 2,
                        callback: function(value, index, values) {
                            return value + ' AM'
                        }
                    }
                },
                x: {
                    barPercentage: 0.1,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    })

}
