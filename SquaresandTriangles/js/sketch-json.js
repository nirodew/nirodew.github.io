var sketch = {
  "metadata": {
    "width": 903,
    "height": 554,
    "wsp-version": "4.6.2",
    "wsp-build-number": "1047",
    "wsp-build-stamp": "139b185f240a/20200428221119",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Squares & Triangles.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "pagecontrol": true,
      "wsplogo": true,
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Times New Roman\", serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 1,
          "bottom": 554,
          "right": 904
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
            "color": "navy"
          },
          "Straights": {
            "color": "gray"
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
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 18
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 26
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -27,
              "labelOffsetY": -14
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 425,
              "y": 26
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
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
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.5819397993311036,
          "constraint": "PointOnPath",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 5
            }
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.6812996605429698,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "7": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "6",
            "path": "5"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 417,
              "y": 25
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 422,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "k",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8",
            "1": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 416,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "Base",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 403,
              "y": 360
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1033,
              "y": 360
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "10",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 0.14761904761904762,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -28,
              "labelOffsetY": -4
            }
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 19,
              "y": 18
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Base",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "15": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "14"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "12",
            "circle": "15"
          },
          "constraint": "Intersection2",
          "label": "H",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -1
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
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 68
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 528,
              "y": 68
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "20"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "22": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "21"
          },
          "value": 0.43532338308457713,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "22"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "23"
          },
          "value": 0.6171428571428571,
          "constraint": "PointOnPath",
          "label": "H",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 5
            }
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "24",
            "path": "23"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 947,
              "y": 25
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 949,
              "y": -8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "j",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "26",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 947,
              "y": 48
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 6,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Height",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "28"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "18",
            "circle": "29"
          },
          "constraint": "Intersection1",
          "label": "K",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -2,
              "labelOffsetY": -31
            }
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "30",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "33": {
          "kind": "AngleMarker",
          "genus": "AngleMarker",
          "parents": {
            "p0": "30",
            "p1": "16",
            "p2": "13"
          },
          "constraint": "AngleMarker_Simple",
          "style": {
            "selectable": false
          }
        },
        "34": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 996,
              "y": 292
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "31"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 29,
              "y": 383
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "32"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 94,
              "y": 81
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 996,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 996,
              "y": 351
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "37",
            "1": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 935,
              "y": 409
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 997,
              "y": 475
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "41": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "39"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "41"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 29,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[4]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "46": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 442
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "45",
            "1": "46"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 500
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 558
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "49": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "47"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "50",
            "circle": "49"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "49"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "54": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "52",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[5]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "56",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 198
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0/1 cm)-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "60": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "58"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "62": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "63": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "32"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "32",
            "circle": "60"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "64",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "8",
            "2": "9",
            "3": "25",
            "4": "26",
            "5": "27",
            "6": "34",
            "7": "35",
            "8": "36",
            "9": "37",
            "10": "38",
            "11": "39",
            "12": "40",
            "13": "45",
            "14": "46",
            "15": "47",
            "16": "48",
            "17": "56",
            "18": "57",
            "19": "58",
            "20": "59"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
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
          "bottom": 554,
          "right": 903
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
            "color": "navy"
          },
          "Straights": {
            "color": "gray"
          },
          "Interior": {
            "color": "yellow"
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
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 18
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 26
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -27,
              "labelOffsetY": -14
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 425,
              "y": 26
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
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
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.5819397993311036,
          "constraint": "PointOnPath",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 5
            }
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.8307249478992916,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "7": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "6",
            "path": "5"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 417,
              "y": 25
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 422,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "k",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8",
            "1": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 416,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "Base",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 399,
              "y": 351
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1029,
              "y": 351
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "10",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 0.14761904761904762,
          "constraint": "PointOnPath",
          "label": "I",
          "style": {
            "color": "red"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 19,
              "y": 18
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Base",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "15": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "14"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "12",
            "circle": "15"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "color": "red"
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 68
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 528,
              "y": 68
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "20"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "22": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "21"
          },
          "value": 0.43532338308457713,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "22"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "navy"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "23"
          },
          "value": 0.72,
          "constraint": "PointOnPath",
          "label": "H",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 5
            }
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "24",
            "path": "23"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 947,
              "y": 25
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 949,
              "y": -8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "j",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "26",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 947,
              "y": 48
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 6,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Height",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "28"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "18",
            "circle": "29"
          },
          "constraint": "Intersection1",
          "label": "K",
          "style": {
            "color": "red"
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "30",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "33": {
          "kind": "AngleMarker",
          "genus": "AngleMarker",
          "parents": {
            "p0": "30",
            "p1": "16",
            "p2": "13"
          },
          "constraint": "AngleMarker_Simple"
        },
        "34": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 996,
              "y": 292
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "31"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 29,
              "y": 383
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "32"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 94,
              "y": 81
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 996,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 996,
              "y": 351
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "37",
            "1": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 935,
              "y": 409
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 997,
              "y": 475
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "41": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "39"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "41"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "43",
            "circle": "44"
          },
          "constraint": "Intersection2",
          "style": {
            "radius": 1.5
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "45",
            "line": "43"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "46"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "46",
            "line1": "47"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 1.5
          }
        },
        "49": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "45"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "48"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "48",
            "p1": "16"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "49",
            "circle": "41"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "52",
            "line": "49"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "51",
            "line1": "53"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "42",
            "line": "49"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "56": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "50",
            "line1": "55"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "54"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "42",
            "p1": "56"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "41",
            "2": "42",
            "3": "52",
            "4": "53",
            "5": "54",
            "6": "55",
            "7": "56",
            "8": "57",
            "9": "58",
            "preimage0": "37",
            "map0image0": "39",
            "depth": "40"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "60": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "57",
            "map": "59"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "61": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "58",
            "map": "59"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 29,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[4]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 442
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "62",
            "1": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 500
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 558
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "66": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "64"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "67": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "67",
            "circle": "66"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "66"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "70": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "71": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "67",
            "circle": "71"
          },
          "constraint": "Intersection2",
          "style": {
            "radius": 1.5
          }
        },
        "73": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "72",
            "line": "67"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "70",
            "line1": "73"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 1.5
          }
        },
        "75": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "72"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "72",
            "p1": "74"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "74",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "69",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "79": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "68",
            "line": "75"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "77",
            "line1": "79"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "76",
            "line1": "78"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "82": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "69",
            "p1": "81"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "68",
            "p1": "80"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "84": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "64",
            "1": "66",
            "2": "68",
            "3": "69",
            "4": "78",
            "5": "79",
            "6": "80",
            "7": "81",
            "8": "82",
            "9": "83",
            "preimage0": "62",
            "map0image0": "64",
            "depth": "65"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "85": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "82",
            "map": "84"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "86": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "84"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "87": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "13",
            "1": "45",
            "2": "48",
            "3": "16"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "aqua",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "88": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "16",
            "1": "72",
            "2": "74",
            "3": "30"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "89": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[5]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "89",
            "1": "90"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 198
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0/1 cm)-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "91"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "94": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "95": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "96": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "32"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "94",
            "circle": "96"
          },
          "constraint": "Intersection2",
          "style": {
            "radius": 1.5
          }
        },
        "98": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "97",
            "line": "94"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "95",
            "line1": "98"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 1.5
          }
        },
        "100": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "97"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "101": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "97",
            "p1": "99"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "102": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "99",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "100",
            "circle": "93"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "32",
            "circle": "93"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "103",
            "line": "100"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "104",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "107": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "101",
            "line1": "106"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "108": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "102",
            "line1": "105"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "109": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "108"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "110": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "107",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "111": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "91",
            "1": "93",
            "2": "103",
            "3": "104",
            "4": "105",
            "5": "106",
            "6": "107",
            "7": "108",
            "8": "109",
            "9": "110",
            "preimage0": "89",
            "map0image0": "91",
            "depth": "92"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "112": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "109",
            "map": "111"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "113": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "110",
            "map": "111"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "114": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "13",
            "1": "30",
            "2": "99",
            "3": "97"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "lime",
            "opacity": 1,
            "layerOrder": 2
          }
        },
        "115": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "8",
            "2": "9",
            "3": "25",
            "4": "26",
            "5": "27",
            "6": "34",
            "7": "35",
            "8": "36",
            "9": "37",
            "10": "38",
            "11": "39",
            "12": "40",
            "13": "62",
            "14": "63",
            "15": "64",
            "16": "65",
            "17": "89",
            "18": "90",
            "19": "91",
            "20": "92"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
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
          "bottom": 554,
          "right": 903
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
            "color": "navy"
          },
          "Straights": {
            "color": "gray"
          },
          "Interior": {
            "color": "yellow"
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
              "font-family": "\"Times New Roman\", serif"
            },
            "Caption": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 18
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 26
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -27,
              "labelOffsetY": -14
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 425,
              "y": 26
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
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
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.5819397993311036,
          "constraint": "PointOnPath",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 5
            }
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.7100352927268778,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "7": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "6",
            "path": "5"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 417,
              "y": 25
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 422,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "latentVisibility": true,
          "label": "k",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8",
            "1": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 416,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "Base",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 402,
              "y": 352
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1032,
              "y": 352
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "10",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 0.14761904761904762,
          "constraint": "PointOnPath",
          "label": "I",
          "style": {
            "color": "red"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 19,
              "y": 18
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Base",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "15": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "14"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "12",
            "circle": "15"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "color": "red"
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 68
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 528,
              "y": 68
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "20"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "line-style": "dashed"
          }
        },
        "22": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "21"
          },
          "value": 0.43532338308457713,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "19",
            "p1": "22"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "23"
          },
          "value": 0.6171428571428571,
          "constraint": "PointOnPath",
          "label": "H",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 5
            }
          }
        },
        "25": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "24",
            "path": "23"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 947,
              "y": 25
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 949,
              "y": -8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "latentVisibility": true,
          "label": "j",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "26",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 947,
              "y": 48
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0*@1)+1",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "28": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 6,
              "y": 58
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "label": "Height",
          "style": {
            "selectable": false,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "29": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "28"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "18",
            "circle": "29"
          },
          "constraint": "Intersection1",
          "label": "K",
          "style": {
            "color": "red"
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "30",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "33": {
          "kind": "AngleMarker",
          "genus": "AngleMarker",
          "parents": {
            "p0": "30",
            "p1": "16",
            "p2": "13"
          },
          "constraint": "AngleMarker_Simple"
        },
        "34": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "17"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 996,
              "y": 292
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "35": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "31"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 29,
              "y": 383
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "36": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "32"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 94,
              "y": 81
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 996,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 996,
              "y": 351
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "37",
            "1": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 935,
              "y": 409
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 997,
              "y": 475
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "41": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "39"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "41"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "17"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "16"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "43",
            "circle": "44"
          },
          "constraint": "Intersection2",
          "label": "L",
          "style": {
            "radius": 1.5
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "45",
            "line": "43"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "46"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "46",
            "line1": "47"
          },
          "constraint": "Intersection",
          "label": "M",
          "style": {
            "radius": 1.5
          }
        },
        "49": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "45"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "48"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "48",
            "p1": "16"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "49",
            "circle": "41"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "52",
            "line": "49"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "51",
            "line1": "53"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "42",
            "line": "49"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "56": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "50",
            "line1": "55"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "54"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "42",
            "p1": "56"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "41",
            "2": "42",
            "3": "52",
            "4": "53",
            "5": "54",
            "6": "55",
            "7": "56",
            "8": "57",
            "9": "58",
            "preimage0": "37",
            "map0image0": "39",
            "depth": "40"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "60": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "57",
            "map": "59"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "61": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "58",
            "map": "59"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 29,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[4]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "63": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 442
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "62",
            "1": "63"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 500
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "65": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "35"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 29,
              "y": 558
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/1 cm-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "66": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "radius": "64"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "67": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "67",
            "circle": "66"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "66"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "70": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "71": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "p1": "30"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "67",
            "circle": "71"
          },
          "constraint": "Intersection2",
          "label": "N",
          "style": {
            "radius": 1.5
          }
        },
        "73": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "72",
            "line": "67"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "70",
            "line1": "73"
          },
          "constraint": "Intersection",
          "label": "O",
          "style": {
            "radius": 1.5
          }
        },
        "75": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "72"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "72",
            "p1": "74"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "74",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "69",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "79": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "68",
            "line": "75"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "77",
            "line1": "79"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "76",
            "line1": "78"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "82": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "69",
            "p1": "81"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "68",
            "p1": "80"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "84": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "64",
            "1": "66",
            "2": "68",
            "3": "69",
            "4": "78",
            "5": "79",
            "6": "80",
            "7": "81",
            "8": "82",
            "9": "83",
            "preimage0": "62",
            "map0image0": "64",
            "depth": "65"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "85": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "82",
            "map": "84"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "86": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "83",
            "map": "84"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "87": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "13",
            "1": "45",
            "2": "48",
            "3": "16"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "aqua",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "88": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "16",
            "1": "72",
            "2": "74",
            "3": "30"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "89": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 109
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "t[5]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "89",
            "1": "90"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 198
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "36"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 94,
              "y": 256
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0/1 cm)-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "91"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "94": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "95": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "30",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "96": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "32"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "94",
            "circle": "96"
          },
          "constraint": "Intersection2",
          "label": "Q",
          "style": {
            "radius": 1.5
          }
        },
        "98": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "97",
            "line": "94"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "95",
            "line1": "98"
          },
          "constraint": "Intersection",
          "label": "P",
          "style": {
            "radius": 1.5
          }
        },
        "100": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "97"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "101": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "97",
            "p1": "99"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "102": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "99",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "100",
            "circle": "93"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "32",
            "circle": "93"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "103",
            "line": "100"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "104",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy"
          }
        },
        "107": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "101",
            "line1": "106"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "108": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "102",
            "line1": "105"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "109": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "108"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "110": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "107",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "111": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "91",
            "1": "93",
            "2": "103",
            "3": "104",
            "4": "105",
            "5": "106",
            "6": "107",
            "7": "108",
            "8": "109",
            "9": "110",
            "preimage0": "89",
            "map0image0": "91",
            "depth": "92"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "112": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "109",
            "map": "111"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "113": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "110",
            "map": "111"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "gray",
            "line-style": "solid",
            "width": 1
          }
        },
        "114": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "13",
            "1": "30",
            "2": "99",
            "3": "97"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "lime",
            "opacity": 1,
            "layerOrder": 2
          }
        },
        "115": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "8",
            "2": "9",
            "3": "25",
            "4": "26",
            "5": "27",
            "6": "34",
            "7": "35",
            "8": "36",
            "9": "37",
            "10": "38",
            "11": "39",
            "12": "40",
            "13": "62",
            "14": "63",
            "15": "64",
            "16": "65",
            "17": "89",
            "18": "90",
            "19": "91",
            "20": "92"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Measurements",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Measurements",
            "Show Measurements"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "116": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "87"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 31,
              "y": 219
            }
          },
          "label": "Blue Square",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "117": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "88"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 31,
              "y": 248
            }
          },
          "label": "Yellow Square",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "118": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "114"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 31,
              "y": 277
            }
          },
          "label": "Green Square",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": -48,
          "left": 0,
          "bottom": 506,
          "right": 903
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
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Arial\", sans-serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 18
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 10,
              "y": 36
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4 cm",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 440,
              "y": 272
            }
          },
          "label": "G",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -22,
              "labelOffsetY": -5
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "distance": "1"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "H",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 7,
              "labelOffsetY": 5
            }
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "4",
            "p1": "3"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "6",
            "circle": "5"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "6",
            "circle": "5"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.037471976259831646,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "4"
          },
          "constraint": "Segment"
        },
        "11": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "10"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 13,
              "y": 8
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "10"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "3"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "12",
            "circle": "13"
          },
          "constraint": "Intersection2",
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": 0
            }
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "14",
            "line": "12"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "14"
          },
          "constraint": "Segment"
        },
        "17": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "3",
            "line": "10"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "17",
            "line1": "15"
          },
          "constraint": "Intersection",
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -18,
              "labelOffsetY": 0
            }
          }
        },
        "19": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "3",
            "1": "18",
            "2": "14",
            "3": "4"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "aqua",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "20": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "19"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 11,
              "y": 124
            }
          },
          "label": "Blue Square",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "3"
          },
          "constraint": "Segment"
        },
        "23": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "10"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "23",
            "line": "10"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "5"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.3087192099504083,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "5",
            "p0": "9",
            "p1": "26"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "27"
          },
          "value": 0.7835214422227357,
          "constraint": "PointOnPath",
          "label": "K",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 1,
              "labelOffsetY": -24
            }
          }
        },
        "29": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "28",
            "p1": "4"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "3",
            "p1": "28"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "3"
          },
          "constraint": "Segment"
        },
        "32": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "28",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "33": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "3",
            "line": "31"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "33",
            "circle": "30"
          },
          "constraint": "Intersection2",
          "label": "D",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -24,
              "labelOffsetY": -14
            }
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "34"
          },
          "constraint": "Segment"
        },
        "36": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "34",
            "line": "33"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "37": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "32",
            "line1": "36"
          },
          "constraint": "Intersection",
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": -26
            }
          }
        },
        "38": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "3",
            "1": "28",
            "2": "37",
            "3": "34"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 2
          }
        },
        "39": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "38"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 11,
              "y": 182
            }
          },
          "label": "Green Square",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "37",
            "p1": "28"
          },
          "constraint": "Segment"
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "37"
          },
          "constraint": "Segment"
        },
        "42": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "31"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 14,
              "y": 64
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "28"
          },
          "constraint": "Segment"
        },
        "44": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "43"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "28",
            "line": "43"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "45",
            "circle": "29"
          },
          "constraint": "Intersection2",
          "label": "H",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -13
            }
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "46"
          },
          "constraint": "Segment"
        },
        "48": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "46",
            "line": "45"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "49": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "44",
            "line1": "48"
          },
          "constraint": "Intersection",
          "label": "G",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": 5
            }
          }
        },
        "50": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "4",
            "1": "49",
            "2": "46",
            "3": "28"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "yellow",
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "51": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "50"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 11,
              "y": 153
            }
          },
          "label": "Yellow Square",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "49",
            "p1": "4"
          },
          "constraint": "Segment"
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "46",
            "p1": "49"
          },
          "constraint": "Segment"
        },
        "54": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "43"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 13,
              "y": 36
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "55": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "12",
            "circle": "5"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true
          }
        },
        "56": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "55",
            "1": "28"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": -43
            }
          },
          "label": "Make Triangle Right",
          "constraint": "ActionButtonMove",
          "messages": [
            "Make Triangle Right"
          ],
          "rate": 3,
          "towardInitialDestination": true
        },
        "57": {
          "kind": "AngleMarker",
          "genus": "AngleMarker",
          "parents": {
            "p0": "28",
            "p1": "4",
            "p2": "3"
          },
          "constraint": "AngleMarker_Simple"
        }
      }
    }
  ]
};