const api_url = `http://localhost:21262/`

async function getContent() {
    try {
        const response = await fetch(api_url)
        return await response.json()
    } catch (error) {
        console.log(error)
        return false
    }
}

chartIt()

async function chartIt() {
    const response = await getContent();
    if (response) {
        let memoryChart = new Chart(document.getElementById("memory-chart"), {
            type: 'line',
            data: {
                labels: response.xMemory,
                datasets: [
                    {
                        label: 'Memory',
                        borderColor: '#00a389',
                        cubicInterpolationMode: 'default',
                        tension: 0.4,
                        data: response.memory
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
                labels: response.xVisitors,
                datasets: [
                    {
                        label: 'Visitors',
                        borderColor: '#ff5c5c',
                        cubicInterpolationMode: 'default',
                        tension: 0.4,
                        data: response.visitors
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
                labels: response.xNewUser,
                datasets: [
                    {
                        label: 'Visitors',
                        borderColor: '#ac56db',
                        cubicInterpolationMode: 'default',
                        tension: 0.4,
                        data: response.newUser
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
                labels: response.xServerReq,
                datasets: [
                    {
                        label: 'Web Server A',
                        borderColor: '#00a389',
                        backgroundColor: '#00a389',
                        cubicInterpolationMode: 'default',
                        tension: 0.4,
                        data: response.serverReqA
                    },
                    {
                        label: 'Web Server B',
                        borderColor: '#ffbb54',
                        backgroundColor: '#ffbb54',
                        cubicInterpolationMode: 'default',
                        tension: 0.4,
                        data: response.serverReqB
                    }
                ]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function (item) {
                                return
                            },
                            afterTitle: function (item) {
                                // console.log(item);

                                let request = item[0].parsed.y;

                                if (request) {
                                    return request + ' Request'
                                } else {
                                    return
                                }
                            },
                            label: function(item) {
                                // console.log(item);

                                return 'From ' + item.dataset.label
                            },
                            labelTextColor: function(item) {
                                let color = item.dataset.borderColor
                                
                                if (color) {
                                    return color
                                } else {
                                    return
                                }
                            }
                        },
                        titleColor: '#000000',
                        titleFont: {
                            weight: 500,
                            size: 16,
                            family: "'Poppins', sans-serif"
                        },
                        bodyFont: {
                            weight: 500,
                            size: 10,
                            family: "'Poppins', sans-serif"
                        },
                        borderColor: '#a3a3a310',
                        borderWidth: 3,
                        displayColors: false,
                        titleAlign: 'center',
                        bodyAlign: 'center',
                        backgroundColor: '#ffffff',
                        padding: 18,
                        intersect: false
                    },
                    legend: {
                        // display: false,
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
                labels: response.xVisitors2,
                datasets: [
                    {
                        label: 'Visitors',
                        backgroundColor: '#ab54db50',
                        hoverBackgroundColor: '#ab54db',
                        borderRadius: 10,
                        borderSkipped: false,
                        data: response.visitors2
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function (item) {
                                return
                            },
                            afterTitle: function (item) {
                                // console.log(item);

                                let index = item[0].dataset.data;

                                if (index) {
                                    let total = index.reduce((x,y) => x + y);
                                    let number = index[item[0].dataIndex];
                                    let percentage = (number / total) * 100;

                                    if (parseFloat(percentage)>(parseInt(percentage)+0.5)) {
                                        return parseInt(percentage) + 1 + '%'
                                    } else {
                                        return parseInt(percentage) + '%'
                                    }
                                } else {
                                    return
                                }
                            },
                            label: function(item) {
                                // console.log(item);

                                let visitorsLabel = item.parsed.y;
                                return visitorsLabel + ' Visitors'
                            }
                        },
                        titleFont: {
                            weight: 500,
                            size: 14,
                            family: "'Poppins', sans-serif"
                        },
                        bodyFont: {
                            weight: 500,
                            size: 10,
                            family: "'Poppins', sans-serif"
                        },
                        bodyColor: '#b7dbf9',
                        displayColors: false,
                        titleAlign: 'center',
                        bodyAlign: 'center',
                        backgroundColor: '#464255',
                        padding: 14
                    },
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
                labels: response.xSummary,
                datasets: [
                    {
                        label: 'Chart Summary',
                        backgroundColor: ['#ab54db','#ef9a91','#f1e6b9'],
                        borderRadius: 50,
                        data: response.summaryShow
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
                labels: response.xServerStatus,
                datasets: [
                    {
                        label: 'Visitors',
                        backgroundColor: ['#ff5b5b', '#00a389', '#00a389', '#ffbb54', '#00a389', '#ff5b5b','#00a389'],
                        borderRadius: 20,
                        borderSkipped: false,
                        barThickness: 10,
                        data: response.serverStatus
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
    } else {
        console.log('Backend fail')
    }
    document.getElementById("fixed-server-number").innerHTML = response.summary[0]
    document.getElementById("down-servers-number").innerHTML = response.summary[1]
    document.getElementById("running-number").innerHTML = response.summary[2]
}


