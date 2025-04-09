var APP_DATA = {
  "scenes": [
    {
      "id": "0-vr",
      "name": "vr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.503057065813321,
          "pitch": 0.0347262438198932,
          "rotation": 0,
          "target": "1-vr_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vr_01",
      "name": "vr_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.513010142719077,
          "pitch": 0.06686281597943555,
          "rotation": 0,
          "target": "2-vr_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vr_02",
      "name": "vr_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.008256815750563362,
        "pitch": 0.02069609722914123,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.510136249352712,
          "pitch": 0.008836098754722244,
          "rotation": 0,
          "target": "0-vr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VR test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
