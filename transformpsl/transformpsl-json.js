var sketch = {
  "metadata": {
    "width": 903,
    "height": 529,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.6-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180312145504",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Student Transformation File PSL Updated.gsp",
    "start-page": "1",
    "authorPreferences": {
      "styleWidget": "none",
      "visibilityWidget": "none"
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
        "title": "Translation",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 529,
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
            "color": "lime"
          },
          "Straights": {
            "color": "green"
          },
          "Interior": {
            "color": "blue"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "purple"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-style": "italic",
              "color": "green"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "font-style": "italic"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "navy"
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif",
                "color": "purple"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36
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
              "x": 156,
              "y": 342
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": 5,
              "color": "red"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 205,
              "y": 483
            }
          },
          "label": "B",
          "style": {
            "color": "aqua"
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 586,
              "y": 340
            }
          },
          "label": "A",
          "style": {
            "color": "aqua"
          }
        },
        "4": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "3"
          },
          "constraint": "Segment",
          "label": "vector",
          "style": {
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": 5,
              "labelParam": 0.45252472670484,
              "color": "blue"
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "4"
          },
          "value": 0.15169962923924,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "3"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(32,32,64)"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "8": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "3",
            "p1": "7"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "6",
            "circle": "8"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "9",
            "center": "3"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "10",
            "center": "3"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "9",
            "center": "3"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "13": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "12",
            "1": "10",
            "2": "3",
            "3": "11"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "opacity": 1,
            "layerOrder": 0
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "p0": "2",
            "p1": "3"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "15": {
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
          "expression": "0.0001 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 4,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "14",
            "radius": "15"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "17": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "16"
          },
          "value": 0.56496278376953,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 220,
              "y": 275
            }
          },
          "latentVisibility": true,
          "label": "B",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -36,
              "labelOffsetY": -15,
              "color": "red"
            }
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 386,
              "y": 368
            }
          },
          "latentVisibility": true,
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -34,
              "color": "red"
            }
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "18",
            "p1": "19"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "18",
            "p0": "2",
            "p1": "3"
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
            "source": "19",
            "p0": "2",
            "p1": "3"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 650,
              "y": 28
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.0001 cm",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "precision": 4,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
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
        "26": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "24"
          },
          "value": 0.063697708601258,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "B'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 5
            }
          }
        },
        "27": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "25"
          },
          "value": 0.6529662844297,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "C'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -31
            }
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "27"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 180,
              "y": 430
            }
          },
          "latentVisibility": true,
          "label": "E",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -5,
              "color": "red"
            }
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 126,
              "y": 485
            }
          },
          "latentVisibility": true,
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -5,
              "color": "red"
            }
          }
        },
        "31": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "29",
            "p1": "30"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "label": "k",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29",
            "p0": "2",
            "p1": "3"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "p0": "2",
            "p1": "3"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "34": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "33",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "32",
            "radius": "23"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "36": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "34"
          },
          "value": 0.17218543046358,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -5
            }
          }
        },
        "37": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "35"
          },
          "value": 0.66209906308176,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "E'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 4,
              "labelOffsetY": -5
            }
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "36",
            "p1": "37"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "17"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Points",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "color": "black"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Points",
            "Show Points"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "40": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "18",
            "1": "20",
            "2": "19",
            "3": "26",
            "4": "28",
            "5": "27"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 29
            }
          },
          "label": "Show Segments",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "color": "black"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Segments",
            "Show Segments"
          ],
          "fade": true
        },
        "41": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "29",
            "1": "31",
            "2": "36",
            "3": "37",
            "4": "38",
            "5": "30"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 53
            }
          },
          "label": "Show Lines",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "color": "black"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Lines",
            "Show Lines"
          ],
          "fade": true
        },
        "42": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": 93
            }
          },
          "textMFS": "<S#24S2<VL<T'Translation'>>>"
        }
      }
    },
    {
      "metadata": {
        "title": "Reflection",
        "id": "2",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 529,
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
            "color": "lime"
          },
          "Straights": {
            "color": "green"
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
              "font-size": 36,
              "font-style": "italic",
              "color": "green"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "navy"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36
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
              "x": 293,
              "y": 178
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "red"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 336,
              "y": 392
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 531,
              "y": 183
            }
          },
          "style": {
            "color": "aqua"
          }
        },
        "4": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "2",
            "p1": "3"
          },
          "constraint": "Line",
          "label": "mirror",
          "style": {
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 0,
              "labelOffsetY": 0,
              "labelParam": 0.51287069441886,
              "color": "blue"
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "mirror": "4"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
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
          "expression": "0.0001 cm",
          "label": "t[1]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "5",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "7"
          },
          "value": 0.1509871610425,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -8,
              "labelOffsetY": 5
            }
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 131.38927373755,
              "y": 420.09047071207
            }
          },
          "latentVisibility": true,
          "label": "B",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -37,
              "labelOffsetY": -16,
              "color": "red"
            }
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 269.38927373755,
              "y": 237.09047071207
            }
          },
          "latentVisibility": true,
          "label": "C",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -25,
              "color": "red"
            }
          }
        },
        "11": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "10"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "9",
            "mirror": "4"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "10",
            "mirror": "4"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "14": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "13",
            "radius": "6"
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
            "p0": "12",
            "radius": "6"
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
            "path": "14"
          },
          "value": 0.11014130069887,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "C'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -3,
              "labelOffsetY": -46
            }
          }
        },
        "17": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "15"
          },
          "value": 0.40449114267836,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "B'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -38,
              "labelOffsetY": 5
            }
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "16",
            "p1": "17"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 408,
              "y": 94
            }
          },
          "latentVisibility": true,
          "label": "E",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -9,
              "color": "red"
            }
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 152,
              "y": 360
            }
          },
          "latentVisibility": true,
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -9,
              "color": "red"
            }
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "19",
            "p1": "20"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "20",
            "mirror": "4"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "23": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "19",
            "mirror": "4"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "24": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "22",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "23",
            "radius": "6"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "24"
          },
          "value": 0.79838166208172,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -1,
              "labelOffsetY": 1
            }
          }
        },
        "27": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "25"
          },
          "value": 0.79838741151955,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "E'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -2,
              "labelOffsetY": 1
            }
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "26",
            "p1": "27"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "8"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Points",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Points",
            "Show Points"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "30": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "9",
            "1": "10",
            "2": "11",
            "3": "16",
            "4": "18",
            "5": "17"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 29
            }
          },
          "label": "Show Segments",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Segments",
            "Show Segments"
          ],
          "fade": true
        },
        "31": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "19",
            "1": "21",
            "2": "20",
            "3": "28",
            "4": "26",
            "5": "27"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 53
            }
          },
          "label": "Show Lines",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Lines",
            "Show Lines"
          ],
          "fade": true
        },
        "32": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 9,
              "y": 96
            }
          },
          "textMFS": "<VL<T'Reflection'>>",
          "style": {
            "font-size": 36,
            "font-style": "italic"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "Rotation",
        "id": "3",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 529,
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
            "color": "lime"
          },
          "Straights": {
            "color": "green"
          },
          "Curves": {
            "color": "navy"
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
              "font-size": 36,
              "font-style": "italic",
              "color": "green"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "navy"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36
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
              "x": 263,
              "y": 365
            }
          },
          "label": "C",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "black"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 480.29291581204,
              "y": 427.532256374
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "red"
            }
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 176,
              "y": 139
            }
          },
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
              "x": 293,
              "y": 139
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -21
            }
          }
        },
        "5": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "3",
            "p1": "4"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "green",
            "line-style": "dashed"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.096981272826076,
          "constraint": "PointOnPath",
          "label": "Drag",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -27,
              "color": "navy"
            }
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "8": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "5",
            "p0": "4",
            "p1": "6"
          },
          "constraint": "ArcOnCircle"
        },
        "9": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "arc": "8"
          },
          "constraint": "MeasurementArcAngle",
          "geom": {
            "loc": {
              "x": 388,
              "y": 77
            }
          },
          "label": "Angle",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "6"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "1",
            "angle": "9"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 21,
              "y": 206
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.0001 cm",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "precision": 3,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "13": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "11",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "13"
          },
          "value": 0.32299661454227,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 368.8434080836,
              "y": 230.77578775276
            }
          },
          "latentVisibility": true,
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": -43,
              "color": "red"
            }
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 450,
              "y": 410
            }
          },
          "latentVisibility": true,
          "label": "B",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -24,
              "labelOffsetY": 2,
              "color": "red"
            }
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "15",
            "p1": "16"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "1",
            "angle": "9"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "center": "1",
            "angle": "9"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "20": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "18",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "21": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "19",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "22": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "20"
          },
          "value": 0.027008880886258,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -7,
              "labelOffsetY": -46
            }
          }
        },
        "23": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "21"
          },
          "value": 0.66518143253884,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "B'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -20,
              "labelOffsetY": 5
            }
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "22",
            "p1": "23"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 303,
              "y": 514
            }
          },
          "latentVisibility": true,
          "label": "E",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -4,
              "color": "red"
            }
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 408,
              "y": 326
            }
          },
          "latentVisibility": true,
          "label": "F",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": -4,
              "color": "red"
            }
          }
        },
        "27": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "25",
            "p1": "26"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "center": "1",
            "angle": "9"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "center": "1",
            "angle": "9"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "30": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "28",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "29",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "30"
          },
          "value": 0.52393801652924,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "F'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -44,
              "labelOffsetY": -16
            }
          }
        },
        "33": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "31"
          },
          "value": 0.69658497878964,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "E'",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -47,
              "labelOffsetY": -5
            }
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "32",
            "p1": "33"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "14",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "Show Points",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Points",
            "Show Points"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "36": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "16",
            "1": "17",
            "2": "22",
            "3": "23",
            "4": "24",
            "5": "15"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 29
            }
          },
          "label": "Show Segments",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Segments",
            "Show Segments"
          ],
          "fade": true
        },
        "37": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "25",
            "1": "26",
            "2": "27",
            "3": "32",
            "4": "33",
            "5": "34"
          },
          "geom": {
            "loc": {
              "x": 10,
              "y": 53
            }
          },
          "label": "Show Lines",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Lines",
            "Show Lines"
          ],
          "fade": true
        },
        "38": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "8"
          },
          "constraint": "ArcSector",
          "style": {
            "opacity": 0.49999237060547,
            "layerOrder": 0
          }
        },
        "39": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 96
            }
          },
          "textMFS": "<VL<T'Rotation'>>",
          "style": {
            "font-size": 36,
            "font-style": "italic"
          }
        }
      }
    },
    {
      "metadata": {
        "title": "Dilation",
        "id": "4",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 529,
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
              "font-size": 36,
              "font-style": "italic",
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 36,
              "font-weight": "bold",
              "color": "navy"
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
              "font-family": "\"Arial\", sans-serif",
              "font-size": 36
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
              "x": 141,
              "y": 315
            }
          },
          "label": "C",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "black"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 317,
              "y": 288
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 191,
              "y": 148
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -37,
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
              "x": 760,
              "y": 148
            }
          },
          "style": {
            "hidden": true,
            "color": "black"
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
            "hidden": true,
            "color": "navy"
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.60001149746235,
          "constraint": "PointOnPath",
          "label": "Drag",
          "style": {
            "color": "navy",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": 5,
              "color": "navy"
            }
          }
        },
        "7": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": 0.39866629436789,
          "constraint": "PointOnPath",
          "label": "D",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": 5
            }
          }
        },
        "8": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "3",
            "obj0": "7"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 30,
              "y": 215
            }
          },
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "9": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "3",
            "obj0": "6"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 30,
              "y": 263
            }
          },
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 183,
              "y": 65
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "Scale Factor",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "1",
            "measure": "10"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "green"
            }
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 35,
              "y": 66
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.0001 cm",
          "label": "t[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "precision": 4,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "13": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "11",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "13"
          },
          "value": 0.52853897573529,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "green"
            }
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 391,
              "y": 304
            }
          },
          "latentVisibility": true,
          "label": "D",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": -42
            }
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 283,
              "y": 440
            }
          },
          "latentVisibility": true,
          "label": "B",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -27,
              "labelOffsetY": 1
            }
          }
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "15",
            "p1": "16"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 333,
              "y": 384
            }
          },
          "latentVisibility": true,
          "label": "F",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -4
            }
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 244,
              "y": 453
            }
          },
          "latentVisibility": true,
          "label": "E",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -3
            }
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "18",
            "p1": "19"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "16",
            "center": "1",
            "measure": "10"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "1",
            "measure": "10"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "23": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "18",
            "center": "1",
            "measure": "10"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "19",
            "center": "1",
            "measure": "10"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "25": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "22",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "26": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "21",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "24",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "23",
            "radius": "12"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "25"
          },
          "value": 0.12501493066131,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": -26,
              "labelOffsetY": -45,
              "color": "green"
            }
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "26"
          },
          "value": 0.12488174077578,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "B'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": -43,
              "labelOffsetY": -26,
              "color": "green"
            }
          }
        },
        "31": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "27"
          },
          "value": 0.20896023438215,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "E'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": -4,
              "color": "green"
            }
          }
        },
        "32": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "28"
          },
          "value": 0.65337076937163,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "F'",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -4,
              "color": "green"
            }
          }
        },
        "33": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "30"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "34": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "32",
            "p1": "31"
          },
          "constraint": "Line",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "35": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "14",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 16,
              "y": 23
            }
          },
          "label": "Show Points",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Points",
            "Show Points"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "36": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "15",
            "1": "16",
            "2": "17",
            "3": "30",
            "4": "29",
            "5": "33"
          },
          "geom": {
            "loc": {
              "x": 16,
              "y": 47
            }
          },
          "label": "Show Segments",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Segments",
            "Show Segments"
          ],
          "fade": true
        },
        "37": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "18",
            "1": "20",
            "2": "32",
            "3": "34",
            "4": "19",
            "5": "31"
          },
          "geom": {
            "loc": {
              "x": 16,
              "y": 71
            }
          },
          "label": "Show Lines",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Lines",
            "Show Lines"
          ],
          "fade": true
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "6"
          },
          "constraint": "Segment"
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "4"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "40": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 105
            }
          },
          "textMFS": "<VL<T'Dilation'>>",
          "style": {
            "font-size": 36,
            "font-style": "italic"
          }
        }
      }
    }
  ]
};