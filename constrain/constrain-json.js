var sketch = {
  "metadata": {
    "width": 933,
    "height": 528,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.7-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180827113948",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Constrain.gsp",
    "start-page": "1",
    "authorPreferences": {
      "styleWidget": "none",
      "visibilityWidget": "none",
      "labelWidget": "none"
    }
  },
  "resources": {
    "fontList": [
      "\"Times New Roman\", serif",
      "\"Arial\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 528,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 249,
              "y": 347
            }
          },
          "label": "A",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -20,
              "labelOffsetY": -2
            }
          }
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "7",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "7",
            "radius": "3"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "8"
          },
          "value": 0.027239331406998,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 1,
              "labelOffsetY": 2
            }
          }
        },
        "11": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "7",
            "p1": "10"
          },
          "constraint": "Segment"
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "9"
          },
          "value": 0.12034437211046,
          "constraint": "PointOnPath",
          "label": "D",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -17,
              "labelOffsetY": -23
            }
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "7",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "14": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "12",
            "line": "11"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "10",
            "line": "13"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "15",
            "line1": "14"
          },
          "constraint": "Intersection",
          "label": "C",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -19
            }
          }
        },
        "17": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Parallelogram'>",
          "style": {
            "selectable": false
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "16"
          },
          "constraint": "Segment"
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "10"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "11"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 17,
              "y": 66
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "19"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 17,
              "y": 153
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "18"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 17,
              "y": 95
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "13"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 17,
              "y": 124
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "10",
            "p1": "7",
            "p2": "12"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 14,
              "y": 186
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "7",
            "p1": "10",
            "p2": "16"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 14,
              "y": 240
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "26": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "10",
            "p1": "16",
            "p2": "12"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 14,
              "y": 213
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "27": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "16",
            "p1": "12",
            "p2": "7"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 14,
              "y": 267
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 528,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Parallelogram'>",
          "style": {
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 344,
              "y": 345
            }
          },
          "label": "E",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -24,
              "labelOffsetY": -3
            }
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 666,
              "y": 342
            }
          },
          "label": "F",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 1,
              "labelOffsetY": 2
            }
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment"
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 410,
              "y": 167
            }
          },
          "label": "H",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -22,
              "labelOffsetY": -30
            }
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "11"
          },
          "constraint": "Segment"
        },
        "13": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "9",
            "line": "12"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "11",
            "line": "10"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "13",
            "line1": "14"
          },
          "constraint": "Intersection",
          "label": "G",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -25
            }
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "15"
          },
          "constraint": "Segment"
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "15",
            "p1": "9"
          },
          "constraint": "Segment"
        },
        "18": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "10"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "19": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "16"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "12"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "9",
            "p1": "8",
            "p2": "11"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 167
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "8",
            "p1": "9",
            "p2": "15"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 221
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "9",
            "p1": "15",
            "p2": "11"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 194
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "15",
            "p1": "11",
            "p2": "8"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 248
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 528,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Parallelogram'>",
          "style": {
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 255,
              "y": 296
            }
          },
          "label": "I",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -20,
              "labelOffsetY": -5
            }
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 608.5288568297,
              "y": 296.0455173281
            }
          },
          "label": "J",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 1,
              "labelOffsetY": 2
            }
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment"
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 651,
              "y": 113
            }
          },
          "label": "G",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 763,
              "y": 113
            }
          },
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "12",
            "p1": "11"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "15",
            "circle": "14"
          },
          "constraint": "Intersection1",
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Line",
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "source": "17",
            "center": "8",
            "A": "12",
            "B": "11",
            "C": "16"
          },
          "constraint": "Rotate3",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "18"
          },
          "value": 0.4021983302297,
          "constraint": "PointOnPath",
          "label": "L",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": -30
            }
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "19"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "19",
            "p0": "8",
            "p1": "9"
          },
          "constraint": "TranslateVector",
          "label": "K",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -23
            }
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "21"
          },
          "constraint": "Segment"
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "9"
          },
          "constraint": "Segment"
        },
        "24": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "10"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "22"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "26": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "20"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "27": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "23"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "28": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "9",
            "p1": "8",
            "p2": "19"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 167
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "29": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "9",
            "p1": "21",
            "p2": "19"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 193
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "30": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "21",
            "p1": "19",
            "p2": "8"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 219
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "31": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "8",
            "p1": "9",
            "p2": "21"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 245
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 1,
          "left": 0,
          "bottom": 529,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Parallelogram'>",
          "style": {
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 598,
              "y": 170
            }
          },
          "label": "G",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 708,
              "y": 227
            }
          },
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 842,
              "y": 82
            }
          },
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "11"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 284,
              "y": 299
            }
          },
          "label": "M",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -25,
              "labelOffsetY": -6
            }
          }
        },
        "14": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "10"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "15"
          },
          "value": 0.99939254133494,
          "constraint": "PointOnPath",
          "label": "N",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -3,
              "labelOffsetY": 3
            }
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "Segment"
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "center": "13",
            "A": "9",
            "B": "8",
            "C": "11"
          },
          "constraint": "Rotate3",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "19",
            "circle": "14"
          },
          "constraint": "Intersection2",
          "label": "P",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -16,
              "labelOffsetY": -31
            }
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "p0": "13",
            "p1": "16"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "p0": "13",
            "p1": "16"
          },
          "constraint": "TranslateVector",
          "label": "O",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -14
            }
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "20",
            "p1": "22"
          },
          "constraint": "Segment"
        },
        "24": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "23"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "20"
          },
          "constraint": "Segment"
        },
        "27": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "26"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "22"
          },
          "constraint": "Segment"
        },
        "29": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "28"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "30": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "16",
            "p1": "13",
            "p2": "20"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 167
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "31": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "16",
            "p1": "22",
            "p2": "20"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 193
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "32": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "13",
            "p1": "16",
            "p2": "22"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 219
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "33": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "22",
            "p1": "20",
            "p2": "13"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 245
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "5",
        "id": "5",
        "sketchRect": {
          "top": 1,
          "left": 0,
          "bottom": 529,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "TextGObject_BackgroundContrast": {
            "color": "purple"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Kite'>",
          "style": {
            "color": "purple",
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 589,
              "y": 62
            }
          },
          "label": "G",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 699,
              "y": 119
            }
          },
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 833,
              "y": -26
            }
          },
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "11"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 330,
              "y": 195
            }
          },
          "label": "T",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -26,
              "labelOffsetY": -18
            }
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 470,
              "y": 195
            }
          },
          "label": "R",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -18
            }
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "15"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "15"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "17"
          },
          "value": -0.028571428571429,
          "constraint": "PointOnPath",
          "label": "S",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -33
            }
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "14"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "17"
          },
          "value": 1.9428571428571,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "21"
          },
          "constraint": "Segment"
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "21"
          },
          "constraint": "Segment"
        },
        "24": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "22"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "23"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "26": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "20"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "27": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "19"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "28": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "13",
            "p1": "21",
            "p2": "14"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 16,
              "y": 171
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "29": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "21",
            "p1": "14",
            "p2": "18"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 16,
              "y": 225
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "30": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "14",
            "p1": "18",
            "p2": "13"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 16,
              "y": 198
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "31": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "18",
            "p1": "13",
            "p2": "21"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 16,
              "y": 252
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "6",
        "id": "6",
        "sketchRect": {
          "top": 1,
          "left": 0,
          "bottom": 529,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "TextGObject_BackgroundContrast": {
            "color": "purple"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 51
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 50
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 97
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 379,
              "y": 98
            }
          },
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Kite'>",
          "style": {
            "color": "purple",
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 589,
              "y": 62
            }
          },
          "label": "G",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 699,
              "y": 119
            }
          },
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 833,
              "y": -26
            }
          },
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "11"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 427.79428054106,
              "y": 103.06118862499
            }
          },
          "label": "W",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": -33
            }
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 356,
              "y": 252
            }
          },
          "label": "X",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -26,
              "labelOffsetY": -16
            }
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "Segment"
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 493,
              "y": 255
            }
          },
          "label": "V",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -15
            }
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "Segment"
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 422.21253594632,
              "y": 357.96085845138
            }
          },
          "label": "U",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 5
            }
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "15"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "20"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "19"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "14",
            "p1": "13",
            "p2": "16"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 167
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "26": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "14",
            "p1": "18",
            "p2": "16"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 193
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "27": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "13",
            "p1": "14",
            "p2": "18"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 219
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "28": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "13",
            "p1": "16",
            "p2": "18"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 245
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "16"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "29"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "29"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "31"
          },
          "value": -0.59809351368623,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "33": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "31"
          },
          "value": 1.2624880178933,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "34": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "33",
            "1": "18"
          },
          "geom": {
            "loc": {
              "x": 12,
              "y": 273
            }
          },
          "label": "Move Point",
          "style": {
            "hidden": true,
            "selectable": false
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Point"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 3
        },
        "35": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "32",
            "1": "13"
          },
          "geom": {
            "loc": {
              "x": 12,
              "y": 299
            }
          },
          "label": "Move Point",
          "style": {
            "hidden": true,
            "selectable": false
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Point"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 3
        }
      }
    },
    {
      "metadata": {
        "title": "7",
        "id": "7",
        "sketchRect": {
          "top": 1,
          "left": 0,
          "bottom": 529,
          "right": 933
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Selection": {
            "color": "fuchsia"
          },
          "TextGObject_BackgroundContrast": {
            "color": "purple"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold",
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 18,
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": 9
            }
          },
          "textMFS": "<T'Kite'>",
          "style": {
            "color": "purple",
            "selectable": false
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 833,
              "y": -26
            }
          },
          "label": "H"
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 363,
              "y": 184
            }
          },
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -27,
              "labelOffsetY": -21
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 511,
              "y": 186
            }
          },
          "label": "Z",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 7,
              "labelOffsetY": -20
            }
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "5"
          },
          "constraint": "Midpoint",
          "label": "O",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "6",
            "line": "5"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "6"
          },
          "angle": 1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "6",
            "p1": "8"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "9"
          },
          "value": 2.2791674274238,
          "constraint": "PointOnPath",
          "label": "X",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "11": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "10"
          },
          "constraint": "Segment"
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "10",
            "p1": "4"
          },
          "constraint": "Segment"
        },
        "13": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "11"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 111
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "14": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "12"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 139
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "15": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "3",
            "p1": "10",
            "p2": "4"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 167
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "6"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "g",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -33
            }
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "6",
            "p1": "16"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "17"
          },
          "value": 1.0430892824539,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 7,
              "labelOffsetY": -19
            }
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "4"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "19"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 55
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "20"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 12,
              "y": 83
            }
          },
          "style": {
            "color": "navy",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "4",
            "p1": "18",
            "p2": "3"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 193
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "18",
            "p1": "3",
            "p2": "10"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 219
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "p0": "10",
            "p1": "4",
            "p2": "18"
          },
          "constraint": "MeasurementAngle",
          "geom": {
            "loc": {
              "x": 12,
              "y": 245
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        }
      }
    }
  ]
};