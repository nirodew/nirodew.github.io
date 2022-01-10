var sketch = {
  "metadata": {
    "width": 933,
    "height": 528,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.7-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180827113948",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "3_Student Transformation File Updated 4.gsp",
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
            "color": "lime"
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
              "x": 149,
              "y": 315
            }
          },
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
              "x": 205,
              "y": 394
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
              "x": 471,
              "y": 234
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
            "label": {
              "showLabel": true,
              "labelOffsetX": -2,
              "labelOffsetY": -3,
              "labelParam": 0.4690730208809,
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
            "selectable": false,
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
              "x": 7,
              "y": 11
            }
          },
          "textMFS": "<VL<T'Translation'>>",
          "style": {
            "selectable": false
          }
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
              "x": 393.11141418707,
              "y": 124.11867761897
            }
          },
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
              "x": 207,
              "y": 406
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
              "x": 492,
              "y": 189
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
              "x": 371,
              "y": 369
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
              "x": 644.13803149789,
              "y": 394.76295376478
            }
          },
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
              "x": 198,
              "y": 114
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
              "x": 315,
              "y": 114
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
          "value": 0.084824728531281,
          "constraint": "PointOnPath",
          "label": "Drag",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -38,
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
          "constraint": "Segment"
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
              "x": 445,
              "y": 20
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
          "constraint": "Segment"
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
              "x": 582.97256993086,
              "y": 197.45054001536
            }
          },
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
          "value": 0.18173381732175,
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
          "constraint": "Segment"
        },
        "13": {
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
        }
      }
    }
  ]
};