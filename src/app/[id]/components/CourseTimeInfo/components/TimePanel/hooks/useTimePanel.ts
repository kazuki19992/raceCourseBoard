export const useTimePanel = () => {
  /**
   * 分, 秒, ミリ秒の配列を生成する
   */
  const generateTimeArray = (time: string) => {
    if (!/^(\d:)?\d{2}\.\d+$/.test(time)) {
      return [];
    }
    const timeArray = time.replace(":", ".").split(".");
    if (timeArray.length > 2 && timeArray[0] === "0") {
      timeArray[0] = "_";
    }
    return timeArray;
  };

  return {
    generateTimeArray,
  };
};
