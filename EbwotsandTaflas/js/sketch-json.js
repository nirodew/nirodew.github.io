var sketch = {
  "metadata": {
    "width": 868,
    "height": 536,
    "wsp-version": "4.6.2",
    "wsp-build-number": "1047",
    "wsp-build-stamp": "139b185f240a/20200428221119",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Ebwot and Tafla D2.gsp",
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
      "disablescrolling": true,
      "removeinaccessibleobjects": false
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
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 868
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
            "color": "fuchsia"
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
              "x": 94,
              "y": 351
            }
          },
          "textMFS": "<VL<T'Ebwot-maker'>>"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 561,
              "y": 342
            }
          },
          "textMFS": "<VL<T'Tafla-maker'>>"
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>"
        },
        "4": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'1. __________ ebwots are taflas.'><0><T'2.  __________ taflas are ebwots'>>"
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 203,
              "y": 328
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 77,
              "y": 325
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "5"
          },
          "constraint": "Segment"
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "6",
            "p1": "5"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "center": "6"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "center": "6"
          },
          "angle": -1.4835298641952,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "11": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "8",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "11"
          },
          "value": 0.088558370099568,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "14": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "14",
            "line": "7"
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
            "source": "13",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "17"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "13",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "7",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "16",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 660,
              "y": 325
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 537,
              "y": 322
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "24"
          },
          "constraint": "Segment"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "25",
            "p1": "24"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "center": "25"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "center": "25"
          },
          "angle": -3.0543261909901,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "30": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "27",
            "p0": "28",
            "p1": "29"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "30"
          },
          "value": 0.60625751731052,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "31"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "26"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "33",
            "line": "26"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "36"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "26",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "35",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "43": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "6",
            "1": "5",
            "2": "17",
            "3": "22",
            "4": "20",
            "5": "12"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "31",
            "1": "25",
            "2": "24",
            "3": "36",
            "4": "41",
            "5": "39"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 868
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
            "color": "fuchsia"
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
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Ebwot-maker'>>"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 561,
              "y": 342
            }
          },
          "textMFS": "<VL<T'Tafla-maker'>>"
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>"
        },
        "4": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'1. __________ ebwots are taflas.'><0><T'2.  __________ taflas are ebwots'>>"
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 537,
              "y": 322
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 660,
              "y": 325
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "Segment"
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -3.0543261909901,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "11": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "8",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "11"
          },
          "value": 0.60625751731052,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "14": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "14",
            "line": "7"
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
            "source": "13",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "17"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "13",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "7",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "16",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 83,
              "y": 340
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 206,
              "y": 343
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "25"
          },
          "constraint": "Segment"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "24",
            "p1": "25"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "center": "24"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "center": "24"
          },
          "angle": -3.0543261909901,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "30": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "27",
            "p0": "28",
            "p1": "29"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "30"
          },
          "value": 0.027437572445532,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "31"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "26"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "33",
            "line": "26"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "36"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "26",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "35",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "43": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "39",
            "1": "31",
            "2": "24",
            "3": "25",
            "4": "36",
            "5": "41"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "12",
            "1": "5",
            "2": "6",
            "3": "17",
            "4": "22",
            "5": "20"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 868
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
            "color": "fuchsia"
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
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Ebwot-maker'>>"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 561,
              "y": 342
            }
          },
          "textMFS": "<VL<T'Tafla-maker'>>"
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>"
        },
        "4": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'1. __________ ebwots are taflas.'><0><T'2.  __________ taflas are ebwots'>>"
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 77,
              "y": 325
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 203,
              "y": 328
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "Segment"
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -1.4835298641952,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "11": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "8",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "11"
          },
          "value": 0.088558370099568,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "14": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "14",
            "line": "7"
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
            "source": "13",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "17"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "13",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "7",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "16",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 313
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 542,
              "y": 312
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "24"
          },
          "constraint": "Segment"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "25",
            "p1": "24"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "center": "25"
          },
          "angle": -3.0543261909901,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "center": "25"
          },
          "angle": -1.6580627893946,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "30": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "27",
            "p0": "29",
            "p1": "28"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "30"
          },
          "value": 0.43767290634377,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "31"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "26"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "33",
            "line": "26"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "36"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "26",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "35",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "43": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "20",
            "1": "12",
            "2": "5",
            "3": "6",
            "4": "17",
            "5": "22"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "31",
            "1": "25",
            "2": "24",
            "3": "36",
            "4": "39",
            "5": "41"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 868
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
            "color": "fuchsia"
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
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Ebwot-maker'>>"
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 561,
              "y": 342
            }
          },
          "textMFS": "<VL<T'Tafla-maker'>>"
        },
        "3": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>"
        },
        "4": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'1. __________ ebwots are taflas.'><0><T'2.  __________ taflas are ebwots'>>"
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 550,
              "y": 327
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 673,
              "y": 330
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "Segment"
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "center": "5"
          },
          "angle": -3.0543261909901,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "11": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "8",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "11"
          },
          "value": 0.51956378186604,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "14": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "14",
            "line": "7"
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
            "source": "13",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "12",
            "mirror": "15"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "17"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "13",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "5",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "7",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "16",
            "mirror": "18"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 82,
              "y": 335
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 208,
              "y": 338
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "26": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "25"
          },
          "constraint": "Segment"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "24",
            "p1": "25"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "center": "24"
          },
          "angle": -1.1344640137963,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "center": "24"
          },
          "angle": -1.4835298641952,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua"
          }
        },
        "30": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "27",
            "p0": "28",
            "p1": "29"
          },
          "constraint": "ArcOnCircle",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "30"
          },
          "value": 0.088558370099568,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "31"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "26"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "yellow"
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "33",
            "line": "26"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "mirror": "34"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "37": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "36"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "32",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "26",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "35",
            "mirror": "37"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true
        },
        "43": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "31",
            "1": "24",
            "2": "25",
            "3": "36",
            "4": "41",
            "5": "39"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "rgb(138,102,217)",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "12",
            "1": "5",
            "2": "6",
            "3": "17",
            "4": "22",
            "5": "20"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        }
      }
    }
  ]
};