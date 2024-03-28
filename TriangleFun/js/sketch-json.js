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
            "color": "aqua"
          },
          "Straights": {
            "color": "aqua"
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
              "font-size": 14,
              "font-style": "italic",
              "color": "blue"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
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
              "x": 832,
              "y": 389
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
              "x": 382,
              "y": 70
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
          "style": {
            "color": "yellow",
            "radius": 6
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
            "hidden": true,
            "color": "lime"
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
            "hidden": true,
            "color": "lime"
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
          "style": {
            "color": "lime",
            "radius": 6
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
            "hidden": true
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
            "hidden": true
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
          "style": {
            "radius": 6
          }
        }
      }
    }
  ]
};