---
author: ["yingwang"]
categories:
  - Personal
title: "Year in Review: Fitness"
date: "2018-12-31T03:28:01-05:00"
draft: false
chart: true
---

I think I drank too many organic chocolate milks after I had switched companies,
and after realizing I was _comfortably_ overweight, I opted to keep track of how
my weight and waist sizes were shifting throughout the year. After 9 months of
continual tracking, here's some charts visualizing how those metrics have
progressed over time.

Some idiosyncracies:

- Still working out some kinks in [Chart.js](https://chartjs.org), but the
  title isn't appearing correctly for line charts and neither are the axis
  labels. Apologies to all former professors.

- Line breaks are for when I failed to record data for a particular day.

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-04-11",
      "2018-04-12",
      "2018-04-13",
      "2018-04-14",
      "2018-04-15",
      "2018-04-16",
      "2018-04-17",
      "2018-04-18",
      "2018-04-19",
      "2018-04-20",
      "2018-04-21",
      "2018-04-22",
      "2018-04-23",
      "2018-04-24",
      "2018-04-25",
      "2018-04-26",
      "2018-04-27",
      "2018-04-28",
      "2018-04-29",
      "2018-04-30"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          184.3,
          175.6,
          180.4,
          177.7,
          179.0,
          180.4,
          176.4,
          178.5,
          177.1,
          179.9,
          177.5,
          178.7,
          180.4,
          178.7,
          177.6,
          "N/A",
          176.3,
          180.7,
          180.9,
          179.9
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          "N/A",
          34.5,
          33.5,
          35.5,
          "N/A",
          35.6,
          35.6,
          36.6,
          36.8,
          35.6,
          35.6,
          "N/A",
          34.6,
          35.6,
          35.8,
          35.6
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-05-01",
      "2018-05-02",
      "2018-05-03",
      "2018-05-04",
      "2018-05-05",
      "2018-05-06",
      "2018-05-07",
      "2018-05-08",
      "2018-05-09",
      "2018-05-10",
      "2018-05-11",
      "2018-05-12",
      "2018-05-13",
      "2018-05-14",
      "2018-05-15",
      "2018-05-16",
      "2018-05-17",
      "2018-05-18",
      "2018-05-19",
      "2018-05-20",
      "2018-05-21",
      "2018-05-22",
      "2018-05-23",
      "2018-05-24",
      "2018-05-25",
      "2018-05-26",
      "2018-05-27",
      "2018-05-28",
      "2018-05-29",
      "2018-05-30",
      "2018-05-31"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          180.6,
          "N/A",
          174.8,
          177.1,
          176.0,
          177.8,
          "N/A",
          "N/A",
          174.6,
          172.3,
          "N/A",
          172.3,
          172.4,
          169.6,
          171.3,
          168.3,
          171.8,
          "N/A",
          170.9,
          "N/A",
          170.0,
          "N/A",
          178.0,
          "N/A",
          173.2,
          "N/A",
          169.8,
          "N/A",
          "N/A",
          171.6
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          35.8,
          "N/A",
          37.0,
          34.5,
          34.7,
          36.0,
          "N/A",
          "N/A",
          36.0,
          36.0,
          "N/A",
          34.8,
          36.0,
          34.7,
          34.7,
          34.7,
          34.7,
          "N/A",
          34.7,
          "N/A",
          34.7,
          "N/A",
          33.5,
          "N/A",
          35.8,
          "N/A",
          35.0,
          "N/A",
          "N/A",
          35.0
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-06-01",
      "2018-06-02",
      "2018-06-03",
      "2018-06-04",
      "2018-06-05",
      "2018-06-06",
      "2018-06-07",
      "2018-06-08",
      "2018-06-09",
      "2018-06-10",
      "2018-06-11",
      "2018-06-12",
      "2018-06-13",
      "2018-06-14",
      "2018-06-15",
      "2018-06-16",
      "2018-06-17",
      "2018-06-18",
      "2018-06-19",
      "2018-06-20",
      "2018-06-21",
      "2018-06-22",
      "2018-06-23",
      "2018-06-24",
      "2018-06-25",
      "2018-06-26",
      "2018-06-27",
      "2018-06-28",
      "2018-06-29",
      "2018-06-30"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          171.6,
          167.2,
          166.7,
          169.2,
          165.7,
          170.6,
          170.6,
          169.0,
          165.5,
          167.0,
          171.1,
          167.5,
          164.8,
          166.6,
          "N/A",
          164.5,
          164.0,
          "N/A",
          165.8,
          168.1,
          168.0,
          167.8,
          163.4,
          164.0,
          164.8,
          168.8,
          166.0,
          163.1,
          167.3,
          163.1
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          34.8,
          33.5,
          32.5,
          35.0,
          34.0,
          36.0,
          36.0,
          35.0,
          34.0,
          33.5,
          36.0,
          35.0,
          33.5,
          34.5,
          "N/A",
          33.5,
          32.5,
          "N/A",
          34.0,
          35.0,
          36.0,
          35.0,
          32.5,
          32.5,
          33.5,
          33.5,
          33.5,
          32.5,
          35.0,
          33.0
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-07-01",
      "2018-07-02",
      "2018-07-03",
      "2018-07-04",
      "2018-07-05",
      "2018-07-06",
      "2018-07-07",
      "2018-07-08",
      "2018-07-09",
      "2018-07-10",
      "2018-07-11",
      "2018-07-12",
      "2018-07-13",
      "2018-07-14",
      "2018-07-15",
      "2018-07-16",
      "2018-07-17",
      "2018-07-18",
      "2018-07-19",
      "2018-07-20",
      "2018-07-21",
      "2018-07-22",
      "2018-07-23",
      "2018-07-24",
      "2018-07-25",
      "2018-07-26",
      "2018-07-27",
      "2018-07-28",
      "2018-07-29",
      "2018-07-30",
      "2018-07-31"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          165.0,
          163.8,
          163.9,
          161.2,
          162.9,
          161.7,
          162.0,
          165.1,
          163.4,
          161.7,
          159.8,
          161.8,
          162.6,
          160.6,
          "N/A",
          161.5,
          161.7,
          161.2,
          164.2,
          160.9,
          162.4,
          161.9,
          163.9,
          160.5,
          160.3,
          162.9,
          161.4,
          162.4,
          161.6,
          159.2,
          161.3
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          32.5,
          33.0,
          33.5,
          32.5,
          32.5,
          33.5,
          32.5,
          32.5,
          31.5,
          33.5,
          33.5,
          33.5,
          33.5,
          31.5,
          "N/A",
          32.5,
          32.5,
          32.5,
          34.5,
          32.5,
          33.5,
          31.0,
          33.5,
          33.5,
          33.5,
          33.5,
          32.5,
          32.5,
          32.5,
          31.5,
          32.5
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-08-01",
      "2018-08-02",
      "2018-08-03",
      "2018-08-04",
      "2018-08-05",
      "2018-08-06",
      "2018-08-07",
      "2018-08-08",
      "2018-08-09",
      "2018-08-10",
      "2018-08-11",
      "2018-08-12",
      "2018-08-13",
      "2018-08-14",
      "2018-08-15",
      "2018-08-16",
      "2018-08-17",
      "2018-08-18",
      "2018-08-19",
      "2018-08-20",
      "2018-08-21",
      "2018-08-22",
      "2018-08-23",
      "2018-08-24",
      "2018-08-25",
      "2018-08-26",
      "2018-08-27",
      "2018-08-28",
      "2018-08-29",
      "2018-08-30",
      "2018-08-31"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          "N/A",
          159.3,
          159.8,
          158.4,
          159.8,
          162.4,
          161.6,
          161.7,
          160.7,
          159.7,
          159.3,
          161.5,
          160.3,
          161.5,
          159.9,
          159.2,
          160.3,
          159.8,
          163.4,
          160.9,
          162.7,
          158.4,
          165.1,
          161.2,
          159.5,
          159.5,
          160.1,
          163.8,
          161.0,
          160.5,
          159.5
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          "N/A",
          31.5,
          32.5,
          31.0,
          31.0,
          33.0,
          32.0,
          32.5,
          32.5,
          32.5,
          31.5,
          32.5,
          32.5,
          32.5,
          31.5,
          31.0,
          31.0,
          32.0,
          33.5,
          32.5,
          33.5,
          32.5,
          33.5,
          32.5,
          32.5,
          32.5,
          31.5,
          33.5,
          33.5,
          32.5,
          32.0
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-09-01",
      "2018-09-02",
      "2018-09-03",
      "2018-09-04",
      "2018-09-05",
      "2018-09-06",
      "2018-09-07",
      "2018-09-08",
      "2018-09-09",
      "2018-09-10",
      "2018-09-11",
      "2018-09-12",
      "2018-09-13",
      "2018-09-14",
      "2018-09-15",
      "2018-09-16",
      "2018-09-17",
      "2018-09-18",
      "2018-09-19",
      "2018-09-20",
      "2018-09-21",
      "2018-09-22",
      "2018-09-23",
      "2018-09-24",
      "2018-09-25",
      "2018-09-26",
      "2018-09-27",
      "2018-09-28",
      "2018-09-29",
      "2018-09-30"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          165.3,
          160.6,
          165.3,
          160.4,
          159.0,
          162.6,
          160.7,
          159.3,
          160.4,
          158.5,
          159.1,
          160.9,
          161.4,
          161.8,
          156.9,
          156.6,
          157.5,
          162.1,
          159.8,
          159.9,
          158.7,
          159.4,
          158.7,
          159.3,
          159.9,
          157.6,
          159.9,
          159.3,
          158.8,
          161.6
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          34.5,
          33.5,
          35.0,
          32.0,
          33.5,
          32.5,
          32.5,
          32.5,
          32.5,
          31.5,
          31.5,
          31.5,
          33.5,
          33.5,
          32.5,
          31.0,
          32.5,
          34.5,
          32.5,
          32.5,
          33.5,
          32.5,
          34.5,
          32.5,
          34.5,
          34.5,
          33.5,
          33.5,
          31.0,
          33.5
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-10-01",
      "2018-10-02",
      "2018-10-03",
      "2018-10-04",
      "2018-10-05",
      "2018-10-06",
      "2018-10-07",
      "2018-10-08",
      "2018-10-09",
      "2018-10-10",
      "2018-10-11",
      "2018-10-12",
      "2018-10-13",
      "2018-10-14",
      "2018-10-15",
      "2018-10-16",
      "2018-10-17",
      "2018-10-18",
      "2018-10-19",
      "2018-10-20",
      "2018-10-21",
      "2018-10-22",
      "2018-10-23",
      "2018-10-24",
      "2018-10-25",
      "2018-10-26",
      "2018-10-27",
      "2018-10-28",
      "2018-10-29",
      "2018-10-30",
      "2018-10-31"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          161.8,
          159.9,
          160.1,
          161.9,
          160.6,
          158.7,
          160.9,
          164.7,
          159.4,
          166.1,
          160.5,
          159.7,
          156.3,
          159.1,
          160.4,
          161.7,
          158.4,
          158.0,
          160.4,
          159.6,
          159.2,
          159.7,
          157.5,
          157.1,
          158.6,
          157.7,
          159.5,
          159.2,
          160.9,
          158.0,
          161.9
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          32.5,
          32.5,
          32.5,
          32.5,
          33.5,
          32.5,
          32.5,
          33.5,
          32.5,
          34.5,
          32.5,
          32.5,
          32.0,
          32.5,
          33.5,
          33.5,
          32.5,
          32.5,
          32.5,
          33.5,
          33.5,
          32.5,
          32.5,
          32.5,
          32.5,
          32.5,
          32.5,
          32.5,
          33.5,
          33.5,
          32.5
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-11-01",
      "2018-11-02",
      "2018-11-03",
      "2018-11-04",
      "2018-11-05",
      "2018-11-06",
      "2018-11-07",
      "2018-11-08",
      "2018-11-09",
      "2018-11-10",
      "2018-11-11",
      "2018-11-12",
      "2018-11-13",
      "2018-11-14",
      "2018-11-15",
      "2018-11-16",
      "2018-11-17",
      "2018-11-18",
      "2018-11-19",
      "2018-11-20",
      "2018-11-21",
      "2018-11-22",
      "2018-11-23",
      "2018-11-24",
      "2018-11-25",
      "2018-11-26",
      "2018-11-27",
      "2018-11-28",
      "2018-11-29",
      "2018-11-30"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          159.3,
          159.4,
          159.0,
          157.8,
          158.1,
          164.4,
          160.7,
          159.5,
          159.5,
          156.5,
          158.8,
          158.1,
          160.7,
          161.9,
          159.5,
          157.8,
          159.7,
          157.4,
          159.1,
          159.5,
          163.0,
          168.0,
          165.0,
          165.0,
          165.0,
          165.0,
          165.0,
          162.8,
          160.2,
          160.3
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          32.5,
          32.5,
          32.5,
          32.5,
          31.5,
          34.5,
          32.5,
          33.5,
          31.5,
          31.5,
          32.5,
          31.5,
          33.5,
          33.5,
          32.5,
          32.5,
          32.5,
          32.5,
          33.5,
          32.5,
          32.5,
          34.8,
          32.5,
          32.5,
          33.5,
          33.5,
          34.5,
          33.5,
          32.5,
          32.5
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

```chart
{
  "type": "line",
  "data": {
    "labels": [
      "2018-12-01",
      "2018-12-02",
      "2018-12-03",
      "2018-12-04",
      "2018-12-05",
      "2018-12-06",
      "2018-12-07",
      "2018-12-08",
      "2018-12-09",
      "2018-12-10",
      "2018-12-11",
      "2018-12-12",
      "2018-12-13",
      "2018-12-14",
      "2018-12-15",
      "2018-12-16",
      "2018-12-17",
      "2018-12-18",
      "2018-12-19",
      "2018-12-20",
      "2018-12-21",
      "2018-12-22",
      "2018-12-23",
      "2018-12-24",
      "2018-12-25",
      "2018-12-26",
      "2018-12-27",
      "2018-12-28",
      "2018-12-29",
      "2018-12-30",
      "2018-12-31"
    ],
    "datasets": [
      {
        "fill": "false",
        "borderColor": "red",
        "label": "Weight (lbs)",
        "yAxisID": "A",
        "data": [
          160.8,
          162.0,
          163.4,
          163.6,
          163.0,
          160.8,
          165.8,
          159.8,
          161.9,
          166.2,
          164.4,
          161.0,
          162.8,
          161.5,
          162.4,
          161.9,
          161.0,
          163.8,
          161.4,
          159.1,
          161.9,
          164.2,
          160.0,
          160.0,
          160.0,
          162.5,
          162.5,
          165.0,
          165.0,
          165.0,
          165.0
        ]
      },
      {
        "fill": "false",
        "borderColor": "blue",
        "label": "Waist size (in)",
        "yAxisID": "B",
        "data": [
          32.5,
          32.5,
          33.5,
          33.5,
          32.5,
          32.5,
          33.5,
          32.5,
          32.5,
          33.5,
          33.5,
          32.5,
          33.5,
          32.5,
          32.5,
          33.5,
          32.5,
          33.5,
          32.5,
          32.5,
          32.5,
          34.5,
          33.5,
          33.5,
          35.0,
          33.5,
          33.5,
          33.5,
          33.5,
          33.5,
          33.5
        ]
      }
    ]
  },
  "options": {
    "scales": {
      "xAxes": [
        {
          "type": "time",
          "time": {
            "unit": "day",
            "unitStepSize": 1,
            "displayFormats": {
              "day": "MMM DD"
            }
          }
        }
      ],
      "yAxes": [
        {
          "id": "A",
          "type": "linear",
          "position": "left"
        },
        {
          "id": "B",
          "type": "linear",
          "position": "right"
        }
      ]
    }
  }
}
```

What insights could I glean from the data?

- I know that when I did a good bit of running this summer (5 mile circuits
  with a running club), and combined that with some accidental intermittent
  fasting, I was able to **reduce my weight by about 5-10 lbs per month**.
  This can be shown in the charts for June and July. It doesn't appear as
  though going to the gym and doing strength training helps as much with
  regards to losing weight (or maybe I'm just not trying hard enough there).
  This seems to be a healthy expectation to set for myself; I don't think I
  have _that_ much weight left to lose before I can be considered healthy.
  Hence, I should do more running.

- Both weight and waist size data are extremely noisy when viewed on a day by
  day basis; therefore, I should not try to measure any results until at least
  one month has gone by, otherwise I might get false positives or false
  negatives and skew my emotional bearing unnecessarily.

- Breaks, such as a week off for Thanksgiving and two weeks off for Christmas,
  are prime times to gain weight; I think I definitely gained at least five
  pounds during Thanksgiving break that I have yet to work off. Continue to
  exercise and _do something_ to ensure weight gain isn't a concern during
  those off hours.

---

Achievements wise, \**I lost *19.3lbs\* since April of this year. I have also lost
about 2-3 inches in waist size since the beginning of the year as well. I
definitely think this is a good sign in terms of measuring for certain "life
KPIs"; you optimize what you measure. I think going into next year, I will see
if I can measure body fat percentage more carefully, and see if that comes down
as well.

Oh, and also make the data machine-readable; I use a calendar template on Google
Sheets to write down my data, and CSV exports from that template are _not_
machine-readable. Using a simple empty sheet would save any hours of painful
data entry.

---

One last (and very important) data sheet I did not mention in these charts was
my gratitude journal, a stream of consciousness consisting of what I was
grateful for on that particular day. It could be something as simple as sleeping
in, to multiple events chronicling a happy day's agenda. Maybe in the future I
will do a word cloud or other type of analysis to see what I've generally been
grateful for throughout the year, but right now I'm happy just writing stuff
down.
