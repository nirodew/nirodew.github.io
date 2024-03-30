var sketch = {
  "metadata": {
    "width": 954,
    "height": 476,
    "wsp-version": "4.6.2",
    "wsp-build-number": "1047",
    "wsp-build-stamp": "139b185f240a/20200428221119",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "TriangleFun.gsp",
    "start-page": "2",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "wsplogo": true,
      "uploadutil": true,
      "downloadutil": true,
      "disablescrolling": true,
      "removeinaccessibleobjects": false
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
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 476,
          "right": 954
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
          "Points": {
            "color": "rgb(255,128,0)"
          },
          "Interior": {
            "color": "lime"
          },
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18,
              "font-style": "italic",
              "color": "blue"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18,
              "font-weight": "bold",
              "font-style": "italic"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif",
                "font-weight": "bold"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 24
            }
          }
        },
        "snapToGrid": true,
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Drag each point. '><T'What do you notice? What do you wonder?'>>",
          "style": {
            "selectable": false
          }
        },
        "2": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 475,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "3": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "2"
          },
          "value": 37.79527559055118,
          "constraint": "HorizontalUnitPoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "4": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "2",
            "unitPoint": "3"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "5": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "3"
          },
          "constraint": "UnitPointInternalSquare",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "6": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "2",
            "unitPoint": "5"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "7": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "4",
            "axisY": "6"
          },
          "constraint": "CoordSys",
          "shape": "square",
          "style": {
            "grid": "gridlines",
            "selectable": false
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 399.40944881889754,
              "y": 122.61417322834632
            }
          },
          "label": "A",
          "style": {
            "radius": 6
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 626.1811023622049,
              "y": 311.59055118110246
            }
          },
          "label": "B",
          "style": {
            "color": "lime",
            "radius": 6
          }
        },
        "10": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "8",
            "coordSys": "7"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 8,
              "y": 55
            }
          },
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "11": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "9",
            "coordSys": "7"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 8,
              "y": 84
            }
          },
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "12": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "8",
            "coordSys": "7"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 8,
              "y": 113
            }
          },
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "13": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "9",
            "coordSys": "7"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 8,
              "y": 142
            }
          },
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "10",
            "1": "11",
            "2": "12",
            "3": "13"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 11,
              "y": 62
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0-@1)+abs(@2-@3)",
          "label": "Distance",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        }
      }
    }
  ]
};