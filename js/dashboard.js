// Add an event listener to each radio button
const radioButtons = document.querySelectorAll('input[name="radio-group"]');
const cards = document.querySelectorAll('.card');
const boxDsh = document.querySelector('.boxDsh');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        // Set opacity for all cards
        cards.forEach(card => {
            card.style.opacity = '0.5';
            card.classList.remove('highlighted'); // Remove highlighted class from all cards
        });

        // Set opacity to 1 for the selected card and add highlighted class
        const selectedCard = document.querySelector(`[for="${this.id}"]`).closest('.card');
        if (selectedCard) {
            selectedCard.style.opacity = '1';
            selectedCard.classList.add('highlighted');
        }

        // Add opDIV class to boxDsh
        boxDsh.classList.add('opDIV');
    });
});

/**************apex*******/
var options = {
chart: {
width: "100%",
height: 380,
type: "bar",
},
plotOptions: {
bar: {
horizontal: true,
},
},
dataLabels: {
enabled: false,
},
stroke: {
width: 0,
colors: ["#fff"],
},
series: [
{
data: [44, 55, 41, 64, 22, 43, 21],
},
],
xaxis: {
categories: [
"Korea",
"Canada",
"Poland",
"Italy",
"France",
"Japan",
"China",
],
},

tooltip: {
custom: function ({ series, seriesIndex, dataPointIndex, w }) {
return (
'<div class="arrow_box">' +
"<span>" +
w.globals.labels[dataPointIndex] +
": " +
series[seriesIndex][dataPointIndex] +
"</span>" +
"</div>"
);
},
},
colors: ["#8c68cd", "#FFBD33", "#33FF49", "#33B3FF", "#B033FF", "#FF33F9", "#33FFF4"], // Specify custom bar colors here
};

var chart = new ApexCharts(document.querySelector("#apex-chart"), options);

chart.render();
var options = {
chart: {
height: 410,
type: "radialBar"
},
plotOptions: {
circle: {
    dataLabels: {
        showOn: "hover"
    }
}
},
series: [44, 55, 67, 83],
labels: ["Apples", "Oranges", "Bananas", "Berries"]
};

var chart1 = new ApexCharts(document.querySelector("#chart"), options);
chart1.render();


var stackedOptions = {
chart: {
type: 'bar',
stacked: true,
shadow: {
enabled: true,
blur: 1,
opacity: 0.5
}
},
plotOptions: {
bar: {
horizontal: true,
barHeight: '62%',
},
},
dataLabels: {
enabled: false
},
stroke: {
width: 0,
},
series: [
{
name: 'Marine Sprite',
data: [44, 55, 41, 37, 22, 43, 21]
},
{
name: 'Striking Calf',
data: [53, 32, 33, 52, 13, 43, 32]
},
{
name: 'Tank Picture',
data: [12, 17, 11, 9, 15, 11, 20]
},
{
name: 'Bucket Slope',
data: [9, 7, 5, 8, 6, 9, 4]
}
],

title: {
text: ''
},
xaxis: {
categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
},
yaxis: {
title: {
text: undefined
},
},
tooltip: {
shared: false,
y: {
formatter: function(val) {
return val + "K"
}
}
},
fill: {
type: 'pattern',
opacity: 1,
pattern: {
style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'],
}
},
states: {
hover: {
filter: 'none'
}
},
legend: {
position: 'right',
show: false
}
}
var stackedBarChart = new ApexCharts(
document.querySelector("#stackedBarChart"),
stackedOptions
);

stackedBarChart.render();

/*********************/
var options = {
series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
chart: {
type: 'polarArea',
},
stroke: {
colors: ['#fff']
},
fill: {
opacity: 0.8
},
responsive: [{
breakpoint: 480,
options: {
chart: {
  width: 200
},
legend: {
  position: 'bottom'
}
}
}]
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();
/*********************/
var options = {
  series: [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
],
  chart: {
  height: 350,
  type: 'line',
  dropShadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 0.2
  },
  toolbar: {
    show: false
  }
},
colors: ['#77B6EA', '#545454'],
dataLabels: {
  enabled: true,
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Average High & Low Temperature',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 1
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  title: {
    text: 'Month'
  }
},
yaxis: {
  title: {
    text: 'Temperature'
  },
  min: 5,
  max: 40
},
legend: {
  position: 'top',
  horizontalAlign: 'right',
  floating: true,
  offsetY: -25,
  offsetX: -5
}
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();
/***********************/
var options = {
  series: [{
  name: 'PRODUCT A',
  data: [44, 55, 41, 67, 22, 43]
}, {
  name: 'PRODUCT B',
  data: [13, 23, 20, 8, 13, 27]
}, {
  name: 'PRODUCT C',
  data: [11, 17, 15, 15, 21, 14]
}, {
  name: 'PRODUCT D',
  data: [21, 7, 25, 13, 22, 8]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT', '01/06/2011 GMT'
  ],
},
legend: {
  position: 'right',
  offsetY: 40
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();
/**************************/
var options = {
  series: [
  {
    name: "",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
],
  chart: {
  type: 'bar',
  height: 350,
},
plotOptions: {
  bar: {
    borderRadius: 0,
    horizontal: true,
    distributed: true,
    barHeight: '80%',
    isFunnel: true,
  },
},
colors: [
  '#F44F5E',
  '#E55A89',
  '#D863B1',
  '#CA6CD8',
  '#B57BED',
  '#8D95EB',
  '#62ACEA',
  '#4BC3E6',
],
dataLabels: {
  enabled: true,
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] 
  },
  dropShadow: {
    enabled: true,
  },
},
title: {
  text: 'Pyramid Chart',
  align: 'middle',
},
xaxis: {
  categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
},
legend: {
  show: false,
},
};

var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();
/*******************/
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();

/*******************/
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();

/****************/
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 380,
  type: 'donut',
},
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
},
legend: {
  formatter: function(val, opts) {
    return val + " - " + opts.w.globals.series[opts.seriesIndex]
  }
},

responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart10"), options);
chart.render();

/*********************/
var options = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#chart11"), options);
chart.render();