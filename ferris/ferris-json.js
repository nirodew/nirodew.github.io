var sketch = {
  "metadata": {
    "width": 919,
    "height": 515,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.6-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180312145504",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "2_Ferris Wheel B.gsp",
    "start-page": "1",
    "authorPreferences": {
      "styleWidget": "none",
      "visibilityWidget": "none"
    }
  },
  "resources": {
    "fontList": [
      "\"Arial\", sans-serif",
      "\"Times New Roman\", serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 6,
          "left": 2,
          "bottom": 521,
          "right": 921
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
          "Straights": {
            "color": "blue"
          },
          "Interior": {
            "color": "maroon"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold",
              "font-style": "italic"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 48
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
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
              "x": 172,
              "y": 485
            }
          },
          "label": "Gro",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1079,
              "y": 485
            }
          },
          "label": "und",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "style": {
            "color": "navy"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.54465270121279,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "6": {
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
          "expression": "1.50000002 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "6"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "Bottom",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -17,
              "labelOffsetY": -19,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 29
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5.00000013 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "8"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Bottom'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "10": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "9",
            "p1": "7"
          },
          "constraint": "CircleFromTwoPoints"
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.75,
          "constraint": "PointOnPath",
          "label": "You",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "12": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 18,
              "y": 15
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 3,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 306,
              "y": 171
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 331,
              "y": 171
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
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
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "16": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "17": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "14",
            "p1": "13"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "16"
          },
          "constraint": "Intersection2",
          "label": "G",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "21": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "14",
            "1": "13",
            "2": "18"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 0
          }
        },
        "22": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "11"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "opacity": 0.74999618530273,
            "layerOrder": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "23"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "25",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "23",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "28"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "30": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "28",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "25"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "K",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "L",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "30",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "M",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "26",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "N",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "33"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 0.74999618530273,
            "layerOrder": 2
          }
        },
        "37": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "27"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "red",
            "opacity": 0.74999618530273,
            "layerOrder": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.62513781697905,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "39": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "38"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "3",
            "circle": "39"
          },
          "constraint": "Intersection1",
          "label": "P",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.60749724366042,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "43"
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
            "obj": "3",
            "circle": "44"
          },
          "constraint": "Intersection1",
          "label": "R",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "43"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "48": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "45",
            "1": "40",
            "2": "9"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 4
          }
        },
        "49": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "9",
            "1": "43",
            "2": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 5
          }
        },
        "50": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "11",
            "obj0": "3"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 10,
              "y": 94
            }
          },
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 10,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "52": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 59
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "53": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "35"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(255,128,0)",
            "opacity": 0.74999618530273,
            "layerOrder": 6
          }
        },
        "54": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "25"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "opacity": 0.74999618530273,
            "layerOrder": 7
          }
        },
        "55": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "32"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 8
          }
        },
        "56": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "34"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "fuchsia",
            "opacity": 0.74999618530273,
            "layerOrder": 9
          }
        },
        "57": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "28"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "green",
            "opacity": 0.74999618530273,
            "layerOrder": 10
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "27"
          },
          "constraint": "Segment",
          "label": "j",
          "style": {
            "width": 1
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 43,
              "y": 8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*10/1 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Right",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "63",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Top",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Left",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 377
            }
          },
          "label": "Move You -> Bottom",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Bottom"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 3
        },
        "67": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "63",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 398
            }
          },
          "label": "Move You -> Right",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Right"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "68": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "64",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 419
            }
          },
          "label": "Move You -> Top",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Top"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "69": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 440
            }
          },
          "label": "Move You -> Left",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Left"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0,
          "towardInitialDestination": true
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 459,
              "y": 7
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/1 cm",
          "label": "Bottom of Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "8"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 84
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "60",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "You",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0
            },
            "radius": 2
          }
        },
        "73": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.75536091204071,
          "constraint": "PointOnPath",
          "label": "T",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 31,
              "y": 325
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 805,
              "y": 325
            }
          },
          "label": "Y",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "74",
            "p1": "75"
          },
          "constraint": "Line",
          "style": {
            "hidden": true
          }
        },
        "77": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "76"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "Z",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "78": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "74",
            "obj0": "77"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 665,
              "y": 358
            }
          },
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 273
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 0.75,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 665,
              "y": 404
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "74",
            "1": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 294
            }
          },
          "label": "Move Z -> X",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Z -> X"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "82": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "79",
            "1": "12"
          },
          "geom": {
            "loc": {
              "x": 32,
              "y": 364
            }
          },
          "label": "Animate",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Animate"
          ]
        },
        "83": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 333,
              "y": 68
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*3",
          "label": "Time",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "84": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "66"
          },
          "geom": {
            "loc": {
              "x": 32,
              "y": 396
            }
          },
          "label": "Reset",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 711,
              "y": 83
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "speed",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "85",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 552,
              "y": 137
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "86",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 30,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 79,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 255,
              "y": 156
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 38,
              "y": 251
            }
          },
          "textMFS": "<VL<T'Ferris Wheel =  '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "91": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "62",
            "1": "89"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 10,
              "y": 39
            }
          },
          "textMFS": "<VL<H<T'Ferris Wheel = '><?1xC0001<H<T'50'>>><?1x2<H<T' feet'>>>>>",
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "92": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 639,
              "y": 131
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "93": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 660,
              "y": 245
            }
          },
          "textMFS": "<VL<T'Bottom of Ferris'><T'Wheel = '><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "93",
            "1": "70",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 11,
              "y": 86
            }
          },
          "textMFS": "<H<?1x1<H<T'Bottom of Ferris'><T' '><T'Wheel = '>>><?1xC0002<H<T'3'>>><?1x3<H<T' feet'>>>>",
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "95": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 658,
              "y": 125
            }
          },
          "textMFS": "<VL<T'Time = '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "96": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 223,
              "y": 132
            }
          },
          "textMFS": "<VL<T' seconds'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "97": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "95",
            "1": "83",
            "2": "96"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 11,
              "y": 133
            }
          },
          "textMFS": "<VL<H<?1x1<H<T'Time = '>>><SR100G1L1<?1xC0002<H<T'0'>>>><?1x3<H<T' seconds'>>>>>",
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal"
          }
        },
        "98": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 32,
              "y": 428
            }
          },
          "textMFS": "<S#18R1G1L1<VL<T'Situation #1'>>>",
          "style": {
            "font-family": 0,
            "font-style": "normal"
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "42",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "B[1]",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -5,
              "color": "black"
            },
            "radius": 2
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 6,
          "left": 2,
          "bottom": 521,
          "right": 921
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
          "Straights": {
            "color": "blue"
          },
          "Interior": {
            "color": "maroon"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold",
              "font-style": "italic",
              "color": "red"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 48
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
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
              "x": 229,
              "y": 492
            }
          },
          "label": "Gro",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1136,
              "y": 492
            }
          },
          "label": "und",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "style": {
            "color": "navy"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.50937155457552,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "6": {
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
          "expression": "1.50000002 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "6"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "Bottom",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -17,
              "labelOffsetY": -19,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 29
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5.00000013 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "8"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Bottom'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "10": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "9",
            "p1": "7"
          },
          "constraint": "CircleFromTwoPoints"
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.25,
          "constraint": "PointOnPath",
          "label": "You",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "12": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 18,
              "y": 15
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 6,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 363,
              "y": 178
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 388,
              "y": 178
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
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
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "16": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "17": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "14",
            "p1": "13"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "16"
          },
          "constraint": "Intersection2",
          "label": "G",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "21": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "14",
            "1": "13",
            "2": "18"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 0
          }
        },
        "22": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "11"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "opacity": 0.74999618530273,
            "layerOrder": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "23"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "25",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "23",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "28"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "30": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "28",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "25"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "K",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "L",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "30",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "M",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "26",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "N",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "33"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 0.74999618530273,
            "layerOrder": 2
          }
        },
        "37": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "27"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "red",
            "opacity": 0.74999618530273,
            "layerOrder": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.58985667034179,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "39": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "38"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "3",
            "circle": "39"
          },
          "constraint": "Intersection1",
          "label": "P",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.60749724366042,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "43"
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
            "obj": "3",
            "circle": "44"
          },
          "constraint": "Intersection1",
          "label": "R",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "43"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "48": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "45",
            "1": "40",
            "2": "9"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 4
          }
        },
        "49": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "9",
            "1": "43",
            "2": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 5
          }
        },
        "50": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "11",
            "obj0": "3"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 10,
              "y": 94
            }
          },
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 10,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "52": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 59
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "53": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "35"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(255,128,0)",
            "opacity": 0.74999618530273,
            "layerOrder": 6
          }
        },
        "54": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "25"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "opacity": 0.74999618530273,
            "layerOrder": 7
          }
        },
        "55": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "32"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 8
          }
        },
        "56": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "34"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "fuchsia",
            "opacity": 0.74999618530273,
            "layerOrder": 9
          }
        },
        "57": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "28"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "green",
            "opacity": 0.74999618530273,
            "layerOrder": 10
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "27"
          },
          "constraint": "Segment",
          "label": "j",
          "style": {
            "width": 1
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 43,
              "y": 8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*10/1 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Right",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "63",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Top",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Left",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 377
            }
          },
          "label": "Move You -> Bottom",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Bottom"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "67": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "63",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 398
            }
          },
          "label": "Move You -> Right",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Right"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "68": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "64",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 419
            }
          },
          "label": "Move You -> Top",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Top"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 5
        },
        "69": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 440
            }
          },
          "label": "Move You -> Left",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Left"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0,
          "towardInitialDestination": true
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 420,
              "y": 10
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/1 cm",
          "label": "Bottom of Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "8"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 84
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "60",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "You",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0
            },
            "radius": 2
          }
        },
        "73": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.75536091204071,
          "constraint": "PointOnPath",
          "label": "T",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 31,
              "y": 325
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 805,
              "y": 325
            }
          },
          "label": "Y",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "74",
            "p1": "75"
          },
          "constraint": "Line",
          "style": {
            "hidden": true
          }
        },
        "77": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "76"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "Z",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "78": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "74",
            "obj0": "77"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 665,
              "y": 358
            }
          },
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 273
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 0.75,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 665,
              "y": 404
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "74",
            "1": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 294
            }
          },
          "label": "Move Z -> X",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Z -> X"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "82": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "79",
            "1": "12"
          },
          "geom": {
            "loc": {
              "x": 24,
              "y": 376
            }
          },
          "label": "Animate",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Animate"
          ]
        },
        "83": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 333,
              "y": 68
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*3",
          "label": "Time",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "84": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "66"
          },
          "geom": {
            "loc": {
              "x": 31,
              "y": 144
            }
          },
          "label": "Reset",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 711,
              "y": 83
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "speed",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "85",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 552,
              "y": 137
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "86",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 30,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 79,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "68"
          },
          "geom": {
            "loc": {
              "x": 24,
              "y": 408
            }
          },
          "label": "Reset",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 38,
              "y": 246
            }
          },
          "textMFS": "<VL<T'Ferris Wheel '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "91": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 68,
              "y": 420
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "92": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "90",
            "1": "62",
            "2": "91"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 11,
              "y": 40
            }
          },
          "textMFS": "<VL<H<?1x1<H<T'Ferris Wheel '>>><T'= '><?1xC0002<H<T'50'>>><?1x3<H<T' feet'>>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "93": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 227,
              "y": 137
            }
          },
          "textMFS": "<VL<T'Bottom of Ferris'><T'Wheel = '><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "94": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 683,
              "y": 121
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "95": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "93",
            "1": "70",
            "2": "94"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 11,
              "y": 87
            }
          },
          "textMFS": "<H<?1x1<H<T'Bottom of Ferris'><T' '><T'Wheel = '>>><?1xC0002<H<T'3'>>><?1x3<H<T' feet'>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "96": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 227,
              "y": 142
            }
          },
          "textMFS": "<VL<T'Time = '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "97": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 726,
              "y": 135
            }
          },
          "textMFS": "<VL<T' seconds'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "98": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "83",
            "2": "97"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 11,
              "y": 134
            }
          },
          "textMFS": "<VL<H<?1x1<H<T'Time = '>>><SR100G1L1<?1xC0002<H<T'0'>>>><?1x3<H<T' seconds'>>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "99": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "92",
            "1": "95",
            "2": "98"
          },
          "geom": {
            "loc": {
              "x": 30,
              "y": 176
            }
          },
          "label": "Hide Merged Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Merged Text",
            "Show Text Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "100": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 440
            }
          },
          "textMFS": "<VL<T'Situation #2'>>",
          "style": {
            "font-family": 0,
            "font-style": "normal",
            "color": "black"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": -75,
          "left": 2,
          "bottom": 440,
          "right": 921
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
          "Straights": {
            "color": "blue"
          },
          "Interior": {
            "color": "maroon"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36,
              "color": "red"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 48,
              "color": "red"
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
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
              "x": 238,
              "y": 413
            }
          },
          "label": "Gro",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1145,
              "y": 413
            }
          },
          "label": "und",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "style": {
            "color": "navy"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.50937155457552,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 19,
              "y": 35
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.50000002 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "6"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "Bottom",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -17,
              "labelOffsetY": -19,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 67
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.00000013 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "8"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Bottom'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "10": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "9",
            "p1": "7"
          },
          "constraint": "CircleFromTwoPoints"
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "You",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "12": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 18,
              "y": 15
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 9,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 372,
              "y": 99
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 397,
              "y": 99
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
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
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "16": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "17": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "14",
            "p1": "13"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "16"
          },
          "constraint": "Intersection2",
          "label": "G",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "21": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "14",
            "1": "13",
            "2": "18"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 0
          }
        },
        "22": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "11"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "opacity": 0.74999618530273,
            "layerOrder": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "23"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "25",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "23",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "28"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "30": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "28",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "25"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "K",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "L",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "30",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "M",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "26",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "N",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "33"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 0.74999618530273,
            "layerOrder": 2
          }
        },
        "37": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "27"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "red",
            "opacity": 0.74999618530273,
            "layerOrder": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.58985667034179,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "39": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "38"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "3",
            "circle": "39"
          },
          "constraint": "Intersection1",
          "label": "P",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.60749724366042,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "43"
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
            "obj": "3",
            "circle": "44"
          },
          "constraint": "Intersection1",
          "label": "R",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "43"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "48": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "45",
            "1": "40",
            "2": "9"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 4
          }
        },
        "49": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "9",
            "1": "43",
            "2": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 5
          }
        },
        "50": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "11",
            "obj0": "3"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 10,
              "y": 94
            }
          },
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 10,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "52": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 59
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "53": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "35"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(255,128,0)",
            "opacity": 0.74999618530273,
            "layerOrder": 6
          }
        },
        "54": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "25"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "opacity": 0.74999618530273,
            "layerOrder": 7
          }
        },
        "55": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "32"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 8
          }
        },
        "56": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "34"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "fuchsia",
            "opacity": 0.74999618530273,
            "layerOrder": 9
          }
        },
        "57": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "28"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "green",
            "opacity": 0.74999618530273,
            "layerOrder": 10
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "27"
          },
          "constraint": "Segment",
          "label": "j",
          "style": {
            "width": 1
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 11,
              "y": -7
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*10/1 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Right",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "63",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Top",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Left",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 377
            }
          },
          "label": "Move You -> Bottom",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Bottom"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "67": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "63",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 398
            }
          },
          "label": "Move You -> Right",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Right"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 5
        },
        "68": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "64",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 419
            }
          },
          "label": "Move You -> Top",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Top"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 3
        },
        "69": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 440
            }
          },
          "label": "Move You -> Left",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Left"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0,
          "towardInitialDestination": true
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 448,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/1 cm",
          "label": "Bottom of Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "8"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 84
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "60",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "You",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0
            },
            "radius": 2
          }
        },
        "73": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.75536091204071,
          "constraint": "PointOnPath",
          "label": "T",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 31,
              "y": 325
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 805,
              "y": 325
            }
          },
          "label": "Y",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "74",
            "p1": "75"
          },
          "constraint": "Line",
          "style": {
            "hidden": true
          }
        },
        "77": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "76"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "Z",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "78": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "74",
            "obj0": "77"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 665,
              "y": 358
            }
          },
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 273
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 0.75,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 665,
              "y": 404
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "74",
            "1": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 294
            }
          },
          "label": "Move Z -> X",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Z -> X"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "82": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "79",
            "1": "12"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 306
            }
          },
          "label": "Animate",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Animate"
          ]
        },
        "83": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 333,
              "y": 68
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*3",
          "latentVisibility": true,
          "label": "Time",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "84": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "66"
          },
          "geom": {
            "loc": {
              "x": 31,
              "y": 144
            }
          },
          "label": "Reset",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 711,
              "y": 83
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "speed",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "85",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 552,
              "y": 137
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "86",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 30,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 79,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "67"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 338
            }
          },
          "label": "Reset",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 41,
              "y": 254
            }
          },
          "textMFS": "<VL<T'Ferris Wheel = '>>",
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "91": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 570,
              "y": 187
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "92": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "90",
            "1": "62",
            "2": "91"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 14,
              "y": -35
            }
          },
          "textMFS": "<H<?1x1<H<T'Ferris Wheel = '>>><?1xC0002<H<T'40'>>><?1x3<H<T' feet'>>>>",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "93": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 344,
              "y": 172
            }
          },
          "textMFS": "<VL<T'Bottom of Ferris'><T'Wheel = '><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "94": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 878,
              "y": 132
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "95": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "93",
            "1": "70",
            "2": "94"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 14,
              "y": 12
            }
          },
          "textMFS": "<H<?1x1<H<T'Bottom of Ferris'><T' '><T'Wheel = '>>><?1xC0002<H<T'5'>>><?1x3<H<T' feet'>>>>",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "96": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "92",
            "1": "95",
            "2": "83"
          },
          "geom": {
            "loc": {
              "x": 31,
              "y": 172
            }
          },
          "label": "Hide Text Objects",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Text Objects",
            "Show Text Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "97": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 370
            }
          },
          "textMFS": "<VL<T'Situation #3'>>",
          "style": {
            "font-size": 24,
            "font-weight": "bold",
            "color": "black"
          }
        },
        "98": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "83"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 14,
              "y": 59
            }
          },
          "textMFS": "<VL<H<SR1G1L1<T'Time ='>><T' '><?1xC0001<H<T'0'>>><T' '><SR1G1L1<T'seconds'>>>>"
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 67,
          "left": 2,
          "bottom": 582,
          "right": 921
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
          "Straights": {
            "color": "blue"
          },
          "Interior": {
            "color": "maroon"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold",
              "font-style": "italic",
              "color": "red"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 48
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif"
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
              "x": 207,
              "y": 548
            }
          },
          "label": "Gro",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1114,
              "y": 548
            }
          },
          "label": "und",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "style": {
            "color": "navy"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.50937155457552,
          "constraint": "PointOnPath",
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "gray"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 19,
              "y": 35
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.00000002 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "distance": "6"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "Bottom",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -17,
              "labelOffsetY": -19,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 67
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.50000013 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "distance": "8"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Bottom'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "10": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "9",
            "p1": "7"
          },
          "constraint": "CircleFromTwoPoints"
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "You",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "12": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 18,
              "y": 15
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 0.75,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "backward"
            }
          ]
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 341,
              "y": 234
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 366,
              "y": 234
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
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
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "16": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "p1": "14"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "17": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "14",
            "p1": "13"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "17",
            "circle": "16"
          },
          "constraint": "Intersection2",
          "label": "G",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 18,
              "font-weight": "normal",
              "color": "lime"
            },
            "radius": 2
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "21": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "14",
            "1": "13",
            "2": "18"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 0
          }
        },
        "22": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "11"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "opacity": 0.74999618530273,
            "layerOrder": 1
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "23"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "25",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "23",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "24",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "28"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "30": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "28",
            "B": "9",
            "C": "11"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "27",
            "B": "9",
            "C": "25"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "K",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "L",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "30",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "M",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "26",
            "circle": "10"
          },
          "constraint": "Intersection2",
          "label": "N",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "33"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 0.74999618530273,
            "layerOrder": 2
          }
        },
        "37": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "27"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "red",
            "opacity": 0.74999618530273,
            "layerOrder": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.58985667034179,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "39": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "38"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "3",
            "circle": "39"
          },
          "constraint": "Intersection1",
          "label": "P",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.60749724366042,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "4",
            "p1": "43"
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
            "obj": "3",
            "circle": "44"
          },
          "constraint": "Intersection1",
          "label": "R",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "45",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "43"
          },
          "constraint": "Segment",
          "style": {
            "color": "gray"
          }
        },
        "48": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "45",
            "1": "40",
            "2": "9"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 4
          }
        },
        "49": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "9",
            "1": "43",
            "2": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "gray",
            "opacity": 0.74999618530273,
            "layerOrder": 5
          }
        },
        "50": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "11",
            "obj0": "3"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 10,
              "y": 94
            }
          },
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 10,
              "y": 140
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "style": {
            "hidden": true,
            "font-size": 24,
            "font-weight": "bold",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "52": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6"
          },
          "geom": {
            "loc": {
              "x": 20,
              "y": 59
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "53": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "35"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "rgb(255,128,0)",
            "opacity": 0.74999618530273,
            "layerOrder": 6
          }
        },
        "54": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "25"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "opacity": 0.74999618530273,
            "layerOrder": 7
          }
        },
        "55": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "32"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "yellow",
            "opacity": 0.74999618530273,
            "layerOrder": 8
          }
        },
        "56": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "34"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "fuchsia",
            "opacity": 0.74999618530273,
            "layerOrder": 9
          }
        },
        "57": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "source": "21",
            "p0": "18",
            "p1": "28"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "green",
            "opacity": 0.74999618530273,
            "layerOrder": 10
          }
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "27"
          },
          "constraint": "Segment",
          "label": "j",
          "style": {
            "width": 1
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 11,
              "y": -7
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*10/1 cm",
          "label": "Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Right",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "63",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Top",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "center": "9"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "label": "Left",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 377
            }
          },
          "label": "Move You -> Bottom",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Bottom"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "67": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "63",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 398
            }
          },
          "label": "Move You -> Right",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Right"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 1
        },
        "68": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "64",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 419
            }
          },
          "label": "Move You -> Top",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Top"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 3
        },
        "69": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 440
            }
          },
          "label": "Move You -> Left",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move You -> Left"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0,
          "towardInitialDestination": true
        },
        "70": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 448,
              "y": -6
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2/1 cm",
          "label": "Bottom of Ferris Wheel",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "71": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "8"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 84
            }
          },
          "label": "Animate Distance Parameter",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Distance Parameter"
          ],
          "animationStates": [
            {
              "rate": 18.897638320923,
              "timeInterval": 1,
              "repeat": true,
              "motionType": "both",
              "lowerParamBound": 0,
              "upperParamBound": 3779.5275878906,
              "discrete": true
            }
          ]
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "60",
            "circle": "10"
          },
          "constraint": "Intersection1",
          "label": "You",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0
            },
            "radius": 2
          }
        },
        "73": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.75536091204071,
          "constraint": "PointOnPath",
          "label": "T",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 31,
              "y": 325
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 805,
              "y": 325
            }
          },
          "label": "Y",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "74",
            "p1": "75"
          },
          "constraint": "Line",
          "style": {
            "hidden": true
          }
        },
        "77": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "76"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "Z",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 12,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "78": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "74",
            "obj0": "77"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 665,
              "y": 358
            }
          },
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "79": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 273
            }
          },
          "label": "Animate Point",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point"
          ],
          "animationStates": [
            {
              "rate": 0.75,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "80": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 665,
              "y": 404
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*4",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "81": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "74",
            "1": "77"
          },
          "geom": {
            "loc": {
              "x": 17,
              "y": 294
            }
          },
          "label": "Move Z -> X",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Z -> X"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "82": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "79",
            "1": "12"
          },
          "geom": {
            "loc": {
              "x": 26,
              "y": 448
            }
          },
          "label": "Animate",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Animate"
          ]
        },
        "83": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 333,
              "y": 68
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*3",
          "label": "Time",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "84": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "66"
          },
          "geom": {
            "loc": {
              "x": 31,
              "y": 144
            }
          },
          "label": "Reset",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "85": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 711,
              "y": 83
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "speed",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "86": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "85",
            "1": "78"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 552,
              "y": 137
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "86",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 30,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80",
            "1": "85"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 79,
              "y": 278
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/\u03c0 cm*@1",
          "style": {
            "hidden": true,
            "font-size": 36,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "81",
            "1": "67"
          },
          "geom": {
            "loc": {
              "x": 26,
              "y": 480
            }
          },
          "label": "Reset",
          "style": {
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ]
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 262,
              "y": 169
            }
          },
          "textMFS": "<VL<T'Ferris Wheel = '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "91": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 189,
              "y": 309
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "92": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "90",
            "1": "62",
            "2": "91"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 17,
              "y": 105
            }
          },
          "textMFS": "<H<?1x1<H<T'Ferris Wheel = '>>><?1xC0002<H<T'25'>>><?1x3<H<T' feet'>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "93": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 291,
              "y": 162
            }
          },
          "textMFS": "<VL<T'Bottom of Ferris'><T'Wheel = '><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "94": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 615,
              "y": 111
            }
          },
          "textMFS": "<VL<T' feet'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "95": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "93",
            "1": "70",
            "2": "94"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 17,
              "y": 151
            }
          },
          "textMFS": "<H<?1x1<H<T'Bottom of Ferris'><T' '><T'Wheel = '>>><?1xC0002<H<T'2'>>><?1x3<H<T' feet'>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "96": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 228,
              "y": 158
            }
          },
          "textMFS": "<VL<T'Time = '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "97": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 626,
              "y": 147
            }
          },
          "textMFS": "<VL<T' seconds '>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "98": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "96",
            "1": "83",
            "2": "97"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 17,
              "y": 197
            }
          },
          "textMFS": "<VL<H<?1x1<H<T'Time = '>>><SR100G1L1<?1xC0002<H<T'0'>>>><?1x3<H<T' seconds '>>>>>",
          "latentVisibility": true,
          "style": {
            "font-family": 0,
            "font-size": 36,
            "font-weight": "normal",
            "font-style": "normal",
            "color": "black"
          }
        },
        "99": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "92",
            "1": "95",
            "2": "98"
          },
          "geom": {
            "loc": {
              "x": 31,
              "y": 172
            }
          },
          "label": "Hide Text Objects",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Text Objects",
            "Show Text Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "100": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 26,
              "y": 512
            }
          },
          "textMFS": "<VL<T'Situation #4'>>",
          "style": {
            "font-family": 0,
            "font-style": "normal",
            "color": "black"
          }
        }
      }
    }
  ]
};