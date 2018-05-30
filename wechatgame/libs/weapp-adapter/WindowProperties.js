const { screenWidth, screenHeight, devicePixelRatio } = wx.getSystemInfoSync()

export const innerWidth = screenWidth
export const innerHeight = screenHeight
export { devicePixelRatio }
export const screen = {
  width: screenWidth,
  height: screenHeight,
  availWidth: innerWidth,
  availHeight: innerHeight,
  availLeft: 0,
  availTop: 0,
}

var performance = wx.getPerformance ? wx.getPerformance() : null;
performance.now = function () {
    return Date.now();
};

export const ontouchstart = null
export const ontouchmove = null
export const ontouchend = null
