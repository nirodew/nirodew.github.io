var sketch = {
  "metadata": {
    "width": 870,
    "height": 505,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.7-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180827113948",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Belong.gsp",
    "start-page": "1",
    "authorPreferences": {
      "styleWidget": "none",
      "visibilityWidget": "none",
      "labelWidget": "none"
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
          "bottom": 505,
          "right": 870
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 129,
              "y": 339
            }
          },
          "label": "C",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 53,
              "y": 118
            }
          },
          "label": "A",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 737,
              "y": 131
            }
          },
          "label": "B",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 761,
              "y": 384
            }
          },
          "label": "D",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -3,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 248,
              "y": 140
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 392,
              "y": 185
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "6"
          },
          "scaleFactor": 0.5,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "A'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "7"
          },
          "scaleFactor": 1.1111111111111,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "D'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3"
          },
          "angle": -0.78539816339745,
          "distance": 48.188976377953,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "B'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1"
          },
          "angle": 2.0943951023932,
          "distance": 85.03937007874,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "C'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
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
          "bottom": 505,
          "right": 870
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 390,
              "y": 323
            }
          },
          "label": "G",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 208,
              "y": 205
            }
          },
          "label": "E",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 489.93465489514,
              "y": 348.57560143096
            }
          },
          "label": "F",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 261,
              "y": 311
            }
          },
          "label": "H",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 359,
              "y": 67
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 378,
              "y": 184
            }
          },
          "label": "F",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 178,
              "y": 333
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 340,
              "y": 268
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 401,
              "y": 160
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 454,
              "y": 356
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "mirror": "10"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "F'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "mirror": "13"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "H'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "6"
          },
          "angle": -1.9198621771938,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "label": "E'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "center": "7"
          },
          "angle": 2.7052603405912,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "label": "G'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
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
          "bottom": 505,
          "right": 870
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 413,
              "y": 199
            }
          },
          "label": "K",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 639,
              "y": 177
            }
          },
          "label": "I",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 68.934654895139,
              "y": 158.57560143096
            }
          },
          "label": "L",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 190,
              "y": 279
            }
          },
          "label": "J",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2"
          },
          "angle": -2.164208272473,
          "distance": 56.692913385827,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "I'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 480,
              "y": 284
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 597,
              "y": 311
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "9": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "7",
            "p1": "8"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "mirror": "9"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "L'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 290,
              "y": 152
            }
          },
          "label": "G",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "center": "11"
          },
          "scaleFactor": 0.2,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "K'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 162,
              "y": 260
            }
          },
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "13"
          },
          "angle": 3.1415926535898,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "label": "J'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 505,
          "right": 870
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 73,
              "y": 155
            }
          },
          "label": "O",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 635,
              "y": 356
            }
          },
          "label": "M",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 71.934654895139,
              "y": 286.57560143096
            }
          },
          "label": "P",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 526,
              "y": 149
            }
          },
          "label": "N",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 7,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 346,
              "y": 122
            }
          },
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 544,
              "y": 245
            }
          },
          "label": "J",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 358,
              "y": 440
            }
          },
          "label": "H",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 211,
              "y": 429
            }
          },
          "label": "G",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "9"
          },
          "angle": -0.26179938779915,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "label": "N'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "center": "8"
          },
          "angle": 1.3962634015955,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "label": "O'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "center": "6"
          },
          "scaleFactor": 1.2,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "M'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "center": "7"
          },
          "scaleFactor": 0.75,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "P'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        }
      }
    },
    {
      "metadata": {
        "title": "5",
        "id": "5",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 505,
          "right": 870
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 18
            },
            "Caption": {
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 390,
              "y": 323
            }
          },
          "label": "S",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 208,
              "y": 205
            }
          },
          "label": "Q",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 433.19342820169,
              "y": 293.23634598492
            }
          },
          "label": "T",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 277,
              "y": 356
            }
          },
          "label": "R",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 371,
              "y": 275
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 557,
              "y": 213
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "7"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 496,
              "y": 150
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 624,
              "y": 342
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
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
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 92,
              "y": 392
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 292,
              "y": 238
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 327,
              "y": 128
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 438,
              "y": 313
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
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
          "style": {
            "hidden": true
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2",
            "mirror": "17"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "Q'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "mirror": "8"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "R'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "mirror": "11"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "S'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "mirror": "14"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "T'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        }
      }
    },
    {
      "metadata": {
        "title": "6",
        "id": "6",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 505,
          "right": 870
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
            "color": "rgb(192,133,74)"
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
              "font-family": "\"Times New Roman\", serif",
              "font-size": 24,
              "font-weight": "bold"
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
              "x": 343,
              "y": 263
            }
          },
          "label": "W",
          "style": {
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 206,
              "y": 220
            }
          },
          "label": "U",
          "style": {
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 489.93465489514,
              "y": 348.57560143096
            }
          },
          "label": "X",
          "style": {
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 631,
              "y": 260
            }
          },
          "label": "V",
          "style": {
            "color": "fuchsia",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "5": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": 8
            }
          },
          "textMFS": "<VL<T'Identify the transformations that go together and to which family they belong.'>>",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 291,
              "y": 144
            }
          },
          "label": "Y",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "7": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 125,
              "y": 370
            }
          },
          "label": "Z",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "7"
          },
          "angle": -0.26179938779915,
          "distance": 85.03937007874,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "Z'",
          "style": {
            "selectable": false,
            "color": "rgb(255,128,0)",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3"
          },
          "angle": -2.1816615649929,
          "distance": 113.38582677165,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "X'",
          "style": {
            "selectable": false,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2"
          },
          "angle": 1.5707963267949,
          "distance": 28.346456692913,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "U'",
          "style": {
            "selectable": false,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 317,
              "y": 238
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 485,
              "y": 238
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "mirror": "13"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "W'",
          "style": {
            "selectable": false,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 632,
              "y": 58
            }
          },
          "label": "I",
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "center": "15"
          },
          "scaleFactor": 0.8,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "label": "V'",
          "style": {
            "selectable": false,
            "color": "fuchsia",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 402,
              "y": 66
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "18": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 396,
              "y": 360
            }
          },
          "style": {
            "hidden": true,
            "radius": 6
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "17",
            "p1": "18"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "20": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "6",
            "mirror": "19"
          },
          "constraint": "Reflect",
          "shouldAutogenerateLabel": true,
          "label": "Y'",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 6
          }
        }
      }
    }
  ]
};