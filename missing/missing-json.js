var sketch = {
  "metadata": {
    "width": 933,
    "height": 528,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.7-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180827113948",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "3_Student Transformation File Updated 5.gsp",
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
        "title": "Translation",
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
          "Points": {
            "color": "black"
          },
          "Straights": {
            "color": "blue"
          },
          "Interior": {
            "color": "blue"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "blue"
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
              "font-weight": "bold",
              "font-style": "italic"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 12,
              "font-weight": "bold",
              "color": "navy"
            },
            "Action": {
              "label": {
                "font-family": "\"Times New Roman\", serif",
                "font-size": 24,
                "font-weight": "bold",
                "color": "blue"
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
              "x": 116,
              "y": 234
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
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
              "x": 164,
              "y": 397
            }
          },
          "latentVisibility": true,
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
              "x": 452,
              "y": 289
            }
          },
          "latentVisibility": true,
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
          "latentVisibility": true,
          "label": "vector",
          "style": {
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
          "latentVisibility": true,
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
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "15": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 11,
              "y": 13
            }
          },
          "textMFS": "<VL<T'Translation'>>",
          "style": {
            "selectable": false,
            "font-size": 36
          }
        },
        "16": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 22,
              "y": 481
            }
          },
          "label": "Hide Point A",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "color": "red"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A",
            "Show Point A"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "17": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "14"
          },
          "geom": {
            "loc": {
              "x": 171,
              "y": 481
            }
          },
          "label": "Hide Point A'",
          "style": {
            "selectable": false,
            "color": "green",
            "label": {
              "color": "green"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A'",
            "Show Point A'"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "18": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "2",
            "1": "3",
            "2": "4",
            "3": "13"
          },
          "geom": {
            "loc": {
              "x": 327,
              "y": 481
            }
          },
          "label": "Hide Vector",
          "style": {
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Vector",
            "Show Vector"
          ],
          "fade": true
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
          "Points": {
            "color": "lime"
          },
          "Straights": {
            "color": "blue"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "blue"
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
                "font-family": "\"Times New Roman\", serif",
                "font-size": 24,
                "font-weight": "bold",
                "color": "blue"
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
              "x": 439.11141418707,
              "y": 151.11867761897
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
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
              "x": 224,
              "y": 413
            }
          },
          "latentVisibility": true,
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
              "x": 552,
              "y": 207
            }
          },
          "latentVisibility": true,
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
          "latentVisibility": true,
          "label": "mirror",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -1,
              "labelOffsetY": -2,
              "labelParam": 0.46737690353352,
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
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "6": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": 15
            }
          },
          "textMFS": "<VL<T'Reflection'>>",
          "style": {
            "selectable": false,
            "font-size": 36,
            "font-style": "italic"
          }
        },
        "7": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 14,
              "y": 484
            }
          },
          "label": "Hide Point A",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "color": "red"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A",
            "Show Point A"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "8": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "5"
          },
          "geom": {
            "loc": {
              "x": 163,
              "y": 484
            }
          },
          "label": "Hide Point A'",
          "style": {
            "selectable": false,
            "color": "green",
            "label": {
              "color": "green"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A'",
            "Show Point A'"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "9": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "4",
            "1": "2",
            "2": "3"
          },
          "geom": {
            "loc": {
              "x": 319,
              "y": 484
            }
          },
          "label": "Hide Mirror",
          "style": {
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Mirror",
            "Show Mirror"
          ],
          "fade": true
        }
      }
    },
    {
      "metadata": {
        "title": "Rotation",
        "id": "3",
        "sketchRect": {
          "top": 3,
          "left": 0,
          "bottom": 531,
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
          "Points": {
            "color": "lime"
          },
          "Curves": {
            "color": "navy"
          },
          "Interior": {
            "color": "aqua"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "blue"
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
                "font-family": "\"Times New Roman\", serif",
                "font-size": 24,
                "font-weight": "bold",
                "color": "blue"
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
              "x": 682.80131619277,
              "y": 209.30205401938
            }
          },
          "latentVisibility": true,
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
              "x": 377.13803149789,
              "y": 168.76295376478
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
            "color": "red",
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
              "x": 235,
              "y": 98
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
              "x": 310,
              "y": 98
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -21,
              "color": "green"
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
          "value": 0.099631956239905,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "Drag",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": -45,
              "labelOffsetY": -46,
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
          "latentVisibility": true
        },
        "8": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "circle": "5",
            "p0": "4",
            "p1": "6"
          },
          "constraint": "ArcOnCircle",
          "latentVisibility": true
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
              "x": 448,
              "y": 11
            }
          },
          "latentVisibility": true,
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
          "latentVisibility": true
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
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "green"
            }
          }
        },
        "12": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "8"
          },
          "constraint": "ArcSector",
          "latentVisibility": true,
          "style": {
            "opacity": 0.49999237060547,
            "layerOrder": 0
          }
        },
        "13": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 6,
              "y": 10
            }
          },
          "textMFS": "<VL<T'Rotation'>>",
          "style": {
            "selectable": false,
            "font-size": 36,
            "font-style": "italic"
          }
        },
        "14": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "2"
          },
          "geom": {
            "loc": {
              "x": 14,
              "y": 477
            }
          },
          "label": "Hide Point A",
          "style": {
            "selectable": false,
            "color": "red",
            "label": {
              "color": "red"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A",
            "Show Point A"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "15": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 163,
              "y": 477
            }
          },
          "label": "Hide Point A'",
          "style": {
            "selectable": false,
            "color": "green",
            "label": {
              "color": "green"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A'",
            "Show Point A'"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "16": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 319,
              "y": 477
            }
          },
          "label": "Hide Point C",
          "style": {
            "selectable": false,
            "color": "black",
            "label": {
              "color": "black"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point C",
            "Show Point C"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "17": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6",
            "1": "7",
            "2": "8",
            "3": "9",
            "4": "10",
            "5": "12"
          },
          "geom": {
            "loc": {
              "x": 469,
              "y": 477
            }
          },
          "label": "Hide Angle",
          "style": {
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Angle",
            "Show Angle"
          ],
          "fade": true
        }
      }
    },
    {
      "metadata": {
        "title": "Dilation",
        "id": "4",
        "sketchRect": {
          "top": 6,
          "left": 0,
          "bottom": 534,
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
          "Points": {
            "color": "lime"
          },
          "Straights": {
            "color": "aqua"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "ActionButton": {
            "color": "blue"
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
                "font-family": "\"Times New Roman\", serif",
                "font-size": 24,
                "font-weight": "bold",
                "color": "blue"
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
              "x": 171,
              "y": 284
            }
          },
          "latentVisibility": true,
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
              "x": 598.97256993086,
              "y": 262.45054001536
            }
          },
          "latentVisibility": true,
          "label": "A",
          "style": {
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
              "x": 202,
              "y": 108
            }
          },
          "label": "C",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -37,
              "labelOffsetY": -21,
              "color": "red"
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 771,
              "y": 108
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
          "value": 0.20809585598607,
          "constraint": "PointOnPath",
          "latentVisibility": true,
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
              "labelOffsetY": 5,
              "color": "red"
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
              "x": 317,
              "y": 27
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
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
          "latentVisibility": true,
          "label": "A'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "6"
          },
          "constraint": "Segment",
          "latentVisibility": true
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "4"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "navy"
          }
        },
        "14": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 13,
              "y": 11
            }
          },
          "textMFS": "<VL<T'Dilation'>>",
          "style": {
            "selectable": false,
            "font-size": 36,
            "font-style": "italic"
          }
        },
        "15": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "2"
          },
          "geom": {
            "loc": {
              "x": 19,
              "y": 484
            }
          },
          "label": "Hide Point A",
          "style": {
            "color": "red",
            "label": {
              "color": "red"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A",
            "Show Point A"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "16": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "11"
          },
          "geom": {
            "loc": {
              "x": 168,
              "y": 484
            }
          },
          "label": "Hide Point A'",
          "style": {
            "color": "green",
            "label": {
              "color": "green"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point A'",
            "Show Point A'"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "17": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 324,
              "y": 484
            }
          },
          "label": "Hide Point C",
          "style": {
            "color": "black",
            "label": {
              "color": "black"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point C",
            "Show Point C"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "18": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "6",
            "1": "10",
            "2": "12",
            "3": "13"
          },
          "geom": {
            "loc": {
              "x": 474,
              "y": 484
            }
          },
          "label": "Hide Scale Factor",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Scale Factor",
            "Show Scale Factor"
          ],
          "fade": true
        }
      }
    }
  ]
};