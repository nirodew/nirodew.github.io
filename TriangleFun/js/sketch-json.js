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
    "start-page": "1",
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
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": -2,
          "bottom": 476,
          "right": 952
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
            "color": "lime"
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
              "font-family": "\"Arial\", sans-serif"
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
              "x": 303,
              "y": 399
            }
          },
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 840,
              "y": 390
            }
          },
          "style": {
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
            "color": "navy"
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 361,
              "y": 86
            }
          },
          "style": {
            "color": "red"
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "1",
            "line": "5"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "7",
            "line1": "8"
          },
          "constraint": "Intersection",
          "label": "A",
          "style": {
            "color": "rgb(255,128,0)",
            "radius": 6
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "6"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "3"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "10",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "13",
            "line1": "12"
          },
          "constraint": "Intersection",
          "label": "C",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 1.5
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "11",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "10",
            "line": "6"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "15",
            "line1": "16"
          },
          "constraint": "Intersection",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "4",
            "B": "1",
            "C": "2"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Bisector",
          "parents": {
            "A": "1",
            "B": "4",
            "C": "2"
          },
          "constraint": "AngleBisector",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "18",
            "line1": "19"
          },
          "constraint": "Intersection",
          "label": "B",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 1.5
          }
        },
        "21": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 6,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Drag each vertex of the triangle. '><T'What do you notice? What do you wonder?'>>",
          "style": {
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": 55
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.25 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "23": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "distance": "22"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 1.5
          }
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "23",
            "center": "20"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 1.5
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "23",
            "p1": "24"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "center": "20"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 1.5
          }
        },
        "27": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "23"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "28": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "23",
            "1": "24",
            "2": "26"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "aqua",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "26"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "30": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": 87
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.25 cm",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "14",
            "distance": "30"
          },
          "angle": -0.7853981633974502,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 1.5
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "center": "14"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 1.5
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "center": "14"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 1.5
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33",
            "center": "14"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 1.5
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "36": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "32"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "33"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy",
            "width": 1
          }
        },
        "39": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "33",
            "1": "34",
            "2": "31",
            "3": "32"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 6,
              "y": 98
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.2 cm",
          "label": "t[3]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "17",
            "distance": "40"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41",
            "center": "17"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "17"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43",
            "center": "17"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "45": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "43",
            "p1": "41"
          },
          "constraint": "Segment",
          "style": {
            "width": 5
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "42",
            "p1": "44"
          },
          "constraint": "Segment",
          "style": {
            "width": 5
          }
        }
      }
    }
  ]
};