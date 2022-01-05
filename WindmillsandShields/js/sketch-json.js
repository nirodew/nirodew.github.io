var sketch = {
  "metadata": {
    "width": 862,
    "height": 536,
    "wsp-version": "4.6.2",
    "wsp-build-number": "1047",
    "wsp-build-stamp": "139b185f240a/20200428221119",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Windmills and Shields.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "all",
      "pagecontrol": true,
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
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 862
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
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 123,
              "y": 214
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 190,
              "y": 213
            }
          },
          "style": {
            "color": "aqua"
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
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "5",
            "circle": "4"
          },
          "constraint": "Intersection2"
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "8"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "8"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": -3.5756669360236124,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "7"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "3"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "15",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "mirror": "8"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 0.2453942921338103,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 1.1948681740750628,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "18",
            "p1": "19"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "21": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "20"
          },
          "value": 0.21974909946263338,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "21"
          },
          "constraint": "Segment"
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "25",
            "line1": "24"
          },
          "constraint": "Intersection",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "21",
            "center": "26"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27",
            "center": "26"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "27"
          },
          "constraint": "Segment"
        },
        "30": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "28"
          },
          "constraint": "Segment"
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 541,
              "y": 236
            }
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 679,
              "y": 239
            }
          },
          "label": "C",
          "style": {
            "color": "aqua"
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
            "hidden": true
          }
        },
        "36": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "33",
            "p1": "34"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "37": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "34",
            "p1": "33"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "37",
            "circle": "36"
          },
          "constraint": "Intersection2",
          "label": "B"
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "40"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "41",
            "line": "40"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "38"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "44": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "38",
            "p1": "43"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "44",
            "line1": "42"
          },
          "constraint": "Intersection",
          "label": "D",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "45"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "47": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "42"
          },
          "value": 0.023144125673088357,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "48": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "42"
          },
          "value": -3.988672215737515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "49": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "47",
            "p1": "48"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "50": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "49"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "50"
          },
          "constraint": "Segment"
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "50",
            "p1": "34"
          },
          "constraint": "Segment"
        },
        "53": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "39"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "35"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "41",
            "p1": "50"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "56": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "53",
            "radius": "55"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "53",
            "line": "39"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "58": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "57",
            "circle": "56"
          },
          "constraint": "Intersection1"
        },
        "59": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "54",
            "radius": "55"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "60": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "54",
            "line": "35"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "60",
            "circle": "59"
          },
          "constraint": "Intersection2"
        },
        "62": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "58"
          },
          "constraint": "Segment"
        },
        "63": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "58",
            "p1": "33"
          },
          "constraint": "Segment"
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "61"
          },
          "constraint": "Segment"
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "61",
            "p1": "34"
          },
          "constraint": "Segment"
        },
        "66": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Windmill-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "67": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 561,
              "y": 342
            }
          },
          "textMFS": "<VL<T'Shield-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "68": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "27",
            "1": "1",
            "2": "28",
            "3": "2",
            "4": "21",
            "5": "6"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "yellow",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "58",
            "1": "33",
            "2": "61",
            "3": "34",
            "4": "50",
            "5": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>",
          "style": {
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'1. __________ windmills are shields.'><0><T'2.  __________ shields are windmills.'>>",
          "style": {
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
          "top": 2,
          "left": 0,
          "bottom": 538,
          "right": 862
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
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 123,
              "y": 214
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 190,
              "y": 213
            }
          },
          "style": {
            "color": "aqua"
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
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "5",
            "circle": "4"
          },
          "constraint": "Intersection2"
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "8"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "8"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": -3.5756669360236124,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "9",
            "p1": "11"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "13",
            "line": "7"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "3"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "15",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "mirror": "8"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 0.2453942921338103,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "12"
          },
          "value": 1.1948681740750628,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "18",
            "p1": "19"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "21": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "20"
          },
          "value": 0.21974909946263338,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "21"
          },
          "constraint": "Segment"
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "25",
            "line1": "24"
          },
          "constraint": "Intersection",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "21",
            "center": "26"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27",
            "center": "26"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "27"
          },
          "constraint": "Segment"
        },
        "30": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "28"
          },
          "constraint": "Segment"
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 652,
              "y": 303
            }
          },
          "label": "G"
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 730,
              "y": 177
            }
          },
          "style": {
            "color": "aqua"
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
            "hidden": true
          }
        },
        "36": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "33",
            "p1": "34"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "37": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "34",
            "p1": "33"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "36",
            "circle": "37"
          },
          "constraint": "Intersection1",
          "label": "E"
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "34"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "40"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "41",
            "line": "40"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "38"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "44": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "43"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "44",
            "line1": "42"
          },
          "constraint": "Intersection",
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33",
            "mirror": "40"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "45"
          },
          "scaleFactor": 0.85,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45",
            "center": "46"
          },
          "scaleFactor": 0.85,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "49": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "48",
            "p1": "47"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "50": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "35"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "50"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "51",
            "line1": "42"
          },
          "constraint": "Intersection",
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "53": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "49"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "54": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "53"
          },
          "constraint": "Segment"
        },
        "55": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "53",
            "p1": "38"
          },
          "constraint": "Segment"
        },
        "56": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "53",
            "center": "52"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "57": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "56"
          },
          "constraint": "Segment"
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "56",
            "p1": "33"
          },
          "constraint": "Segment"
        },
        "59": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "56",
            "center": "52"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "60": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "59",
            "p1": "34"
          },
          "constraint": "Segment"
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "33",
            "p1": "59"
          },
          "constraint": "Segment"
        },
        "62": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Windmill-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 596,
              "y": 349
            }
          },
          "textMFS": "<VL<T'Shield-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "64": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "27",
            "1": "1",
            "2": "28",
            "3": "2",
            "4": "21",
            "5": "6"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "yellow",
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "65": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>",
          "style": {
            "selectable": false
          }
        },
        "66": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'3. __________ windmills are shields.'><0><T'4.  __________ shields are windmills.'>>",
          "style": {
            "selectable": false
          }
        },
        "67": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "56",
            "1": "33",
            "2": "59",
            "3": "34",
            "4": "53",
            "5": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 2
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
          "right": 862
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
              "x": 141,
              "y": 219
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 184,
              "y": 220
            }
          },
          "label": "C",
          "style": {
            "color": "aqua"
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
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "5",
            "circle": "4"
          },
          "constraint": "Intersection2",
          "label": "B"
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "6"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "8"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "8"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "6"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "6",
            "p1": "11"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "12",
            "line1": "10"
          },
          "constraint": "Intersection",
          "label": "D",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.023144125673088357,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": -3.988672215737515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "15",
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
          "value": 0.4249985909547926,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "3"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "24": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "21",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "21",
            "line": "7"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "25",
            "circle": "24"
          },
          "constraint": "Intersection1"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "22",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "22",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "28",
            "circle": "27"
          },
          "constraint": "Intersection2"
        },
        "30": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "26"
          },
          "constraint": "Segment"
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "29"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 624,
              "y": 137
            }
          },
          "label": "G"
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 563,
              "y": 254
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "36": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "35"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "37": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "34",
            "p1": "35"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "35",
            "p1": "34"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "37",
            "circle": "38"
          },
          "constraint": "Intersection1",
          "label": "E"
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "39"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "39",
            "p1": "35"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "41"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "43": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "42",
            "line": "41"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35",
            "center": "39"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "39",
            "p1": "44"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "45",
            "line1": "43"
          },
          "constraint": "Intersection",
          "label": "F",
          "style": {
            "hidden": true
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "mirror": "41"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "47",
            "center": "46"
          },
          "scaleFactor": 0.85,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "49": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "47"
          },
          "scaleFactor": 0.85,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "49",
            "p1": "48"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "36"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "52": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "39",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "53": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "52",
            "line1": "43"
          },
          "constraint": "Intersection",
          "label": "H",
          "style": {
            "hidden": true
          }
        },
        "54": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "55": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "35",
            "p1": "54"
          },
          "constraint": "Segment"
        },
        "56": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "54",
            "p1": "39"
          },
          "constraint": "Segment"
        },
        "57": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "54",
            "center": "53"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "58": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "39",
            "p1": "57"
          },
          "constraint": "Segment"
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "57",
            "p1": "34"
          },
          "constraint": "Segment"
        },
        "60": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "57",
            "center": "53"
          },
          "angle": -2.0943951023932,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true
        },
        "61": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "60",
            "p1": "35"
          },
          "constraint": "Segment"
        },
        "62": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "34",
            "p1": "60"
          },
          "constraint": "Segment"
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Windmill-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "64": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 574,
              "y": 345
            }
          },
          "textMFS": "<VL<T'Shield-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "65": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "26",
            "1": "1",
            "2": "29",
            "3": "2",
            "4": "18",
            "5": "6"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "66": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>",
          "style": {
            "selectable": false
          }
        },
        "67": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'5. __________ windmills are shields.'><0><T'6.  __________ shields are windmills.'>>",
          "style": {
            "selectable": false
          }
        },
        "68": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "57",
            "1": "34",
            "2": "60",
            "3": "35",
            "4": "54",
            "5": "39"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "lime",
            "opacity": 1,
            "layerOrder": 2
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
          "right": 862
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
              "x": 484,
              "y": 215
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 613,
              "y": 218
            }
          },
          "label": "C",
          "style": {
            "color": "aqua"
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
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "5",
            "circle": "4"
          },
          "constraint": "Intersection2",
          "label": "B"
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "6"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "8"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "8"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "6"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "6",
            "p1": "11"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "12",
            "line1": "10"
          },
          "constraint": "Intersection",
          "label": "D",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": 0.023144125673088357,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "16": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "10"
          },
          "value": -3.988672215737515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "15",
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
          "value": 0.04978756768268143,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "18"
          },
          "constraint": "Segment"
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "21": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "7"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "3"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "24": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "21",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "21",
            "line": "7"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "25",
            "circle": "24"
          },
          "constraint": "Intersection1"
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "22",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "22",
            "line": "3"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "28",
            "circle": "27"
          },
          "constraint": "Intersection2"
        },
        "30": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "26"
          },
          "constraint": "Segment"
        },
        "31": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "29"
          },
          "constraint": "Segment"
        },
        "33": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "34": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 94,
              "y": 357
            }
          },
          "textMFS": "<VL<T'Windmill-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "35": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 504,
              "y": 321
            }
          },
          "textMFS": "<VL<T'Shield-maker'>>",
          "style": {
            "selectable": false
          }
        },
        "36": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "26",
            "1": "1",
            "2": "29",
            "3": "2",
            "4": "18",
            "5": "6"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "lime",
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 14
            }
          },
          "textMFS": "<VL<T'Drag each blue vertex for the two hexagons.'><0>>",
          "style": {
            "selectable": false
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 411
            }
          },
          "textMFS": "<VL<T'Based upon what happens when you drag the blue vertices, fill in each blank with ALL, SOME, or NO.'><0><T'7. __________ windmills are shields.'><0><T'8.  __________ shields are windmills.'>>",
          "style": {
            "selectable": false
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 185,
              "y": 203
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 127,
              "y": 204
            }
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "39"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "42": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "40",
            "p1": "39"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "43": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "39",
            "p1": "40"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "43",
            "circle": "42"
          },
          "constraint": "Intersection2"
        },
        "45": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "44"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "44",
            "p1": "39"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "46"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "48": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "47",
            "line": "46"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "49": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "48"
          },
          "value": 0.023144125673088357,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "50": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "48"
          },
          "value": -3.988672215737515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "51": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "49",
            "p1": "50"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true
          }
        },
        "52": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "51"
          },
          "value": 0.4349432594599004,
          "constraint": "PointOnPath",
          "style": {
            "color": "aqua"
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "44",
            "p1": "52"
          },
          "constraint": "Segment"
        },
        "54": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "39"
          },
          "constraint": "Segment"
        },
        "55": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "45"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "56": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "41"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "47",
            "p1": "52"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "58": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "55",
            "radius": "57"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "55",
            "line": "45"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "60": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "59",
            "circle": "58"
          },
          "constraint": "Intersection1"
        },
        "61": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "56",
            "radius": "57"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "56",
            "line": "41"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "62",
            "circle": "61"
          },
          "constraint": "Intersection2"
        },
        "64": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "44",
            "p1": "60"
          },
          "constraint": "Segment"
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "60",
            "p1": "40"
          },
          "constraint": "Segment"
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "40",
            "p1": "63"
          },
          "constraint": "Segment"
        },
        "67": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "63",
            "p1": "39"
          },
          "constraint": "Segment"
        },
        "68": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "60",
            "1": "40",
            "2": "63",
            "3": "39",
            "4": "52",
            "5": "44"
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