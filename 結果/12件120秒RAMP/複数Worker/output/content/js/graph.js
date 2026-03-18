/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3603.0, "minX": 0.0, "maxY": 32291.0, "series": [{"data": [[0.0, 3603.0], [0.1, 3603.0], [0.2, 3603.0], [0.3, 3603.0], [0.4, 3603.0], [0.5, 3603.0], [0.6, 3603.0], [0.7, 3603.0], [0.8, 3603.0], [0.9, 4140.0], [1.0, 4140.0], [1.1, 4140.0], [1.2, 4140.0], [1.3, 4140.0], [1.4, 4140.0], [1.5, 4140.0], [1.6, 4140.0], [1.7, 4163.0], [1.8, 4163.0], [1.9, 4163.0], [2.0, 4163.0], [2.1, 4163.0], [2.2, 4163.0], [2.3, 4163.0], [2.4, 4163.0], [2.5, 5447.0], [2.6, 5447.0], [2.7, 5447.0], [2.8, 5447.0], [2.9, 5447.0], [3.0, 5447.0], [3.1, 5447.0], [3.2, 5447.0], [3.3, 5447.0], [3.4, 5644.0], [3.5, 5644.0], [3.6, 5644.0], [3.7, 5644.0], [3.8, 5644.0], [3.9, 5644.0], [4.0, 5644.0], [4.1, 5644.0], [4.2, 6559.0], [4.3, 6559.0], [4.4, 6559.0], [4.5, 6559.0], [4.6, 6559.0], [4.7, 6559.0], [4.8, 6559.0], [4.9, 6559.0], [5.0, 7614.0], [5.1, 7614.0], [5.2, 7614.0], [5.3, 7614.0], [5.4, 7614.0], [5.5, 7614.0], [5.6, 7614.0], [5.7, 7614.0], [5.8, 7614.0], [5.9, 8893.0], [6.0, 8893.0], [6.1, 8893.0], [6.2, 8893.0], [6.3, 8893.0], [6.4, 8893.0], [6.5, 8893.0], [6.6, 8893.0], [6.7, 9104.0], [6.8, 9104.0], [6.9, 9104.0], [7.0, 9104.0], [7.1, 9104.0], [7.2, 9104.0], [7.3, 9104.0], [7.4, 9104.0], [7.5, 9309.0], [7.6, 9309.0], [7.7, 9309.0], [7.8, 9309.0], [7.9, 9309.0], [8.0, 9309.0], [8.1, 9309.0], [8.2, 9309.0], [8.3, 9309.0], [8.4, 9754.0], [8.5, 9754.0], [8.6, 9754.0], [8.7, 9754.0], [8.8, 9754.0], [8.9, 9754.0], [9.0, 9754.0], [9.1, 9754.0], [9.2, 10317.0], [9.3, 10317.0], [9.4, 10317.0], [9.5, 10317.0], [9.6, 10317.0], [9.7, 10317.0], [9.8, 10317.0], [9.9, 10317.0], [10.0, 10366.0], [10.1, 10366.0], [10.2, 10366.0], [10.3, 10366.0], [10.4, 10366.0], [10.5, 10366.0], [10.6, 10366.0], [10.7, 10366.0], [10.8, 10366.0], [10.9, 10553.0], [11.0, 10553.0], [11.1, 10553.0], [11.2, 10553.0], [11.3, 10553.0], [11.4, 10553.0], [11.5, 10553.0], [11.6, 10553.0], [11.7, 11077.0], [11.8, 11077.0], [11.9, 11077.0], [12.0, 11077.0], [12.1, 11077.0], [12.2, 11077.0], [12.3, 11077.0], [12.4, 11077.0], [12.5, 11077.0], [12.6, 11226.0], [12.7, 11226.0], [12.8, 11226.0], [12.9, 11226.0], [13.0, 11226.0], [13.1, 11226.0], [13.2, 11226.0], [13.3, 11226.0], [13.4, 11724.0], [13.5, 11724.0], [13.6, 11724.0], [13.7, 11724.0], [13.8, 11724.0], [13.9, 11724.0], [14.0, 11724.0], [14.1, 11724.0], [14.2, 11911.0], [14.3, 11911.0], [14.4, 11911.0], [14.5, 11911.0], [14.6, 11911.0], [14.7, 11911.0], [14.8, 11911.0], [14.9, 11911.0], [15.0, 11911.0], [15.1, 12030.0], [15.2, 12030.0], [15.3, 12030.0], [15.4, 12030.0], [15.5, 12030.0], [15.6, 12030.0], [15.7, 12030.0], [15.8, 12030.0], [15.9, 12316.0], [16.0, 12316.0], [16.1, 12316.0], [16.2, 12316.0], [16.3, 12316.0], [16.4, 12316.0], [16.5, 12316.0], [16.6, 12316.0], [16.7, 12808.0], [16.8, 12808.0], [16.9, 12808.0], [17.0, 12808.0], [17.1, 12808.0], [17.2, 12808.0], [17.3, 12808.0], [17.4, 12808.0], [17.5, 12808.0], [17.6, 13426.0], [17.7, 13426.0], [17.8, 13426.0], [17.9, 13426.0], [18.0, 13426.0], [18.1, 13426.0], [18.2, 13426.0], [18.3, 13426.0], [18.4, 13566.0], [18.5, 13566.0], [18.6, 13566.0], [18.7, 13566.0], [18.8, 13566.0], [18.9, 13566.0], [19.0, 13566.0], [19.1, 13566.0], [19.2, 13605.0], [19.3, 13605.0], [19.4, 13605.0], [19.5, 13605.0], [19.6, 13605.0], [19.7, 13605.0], [19.8, 13605.0], [19.9, 13605.0], [20.0, 13793.0], [20.1, 13793.0], [20.2, 13793.0], [20.3, 13793.0], [20.4, 13793.0], [20.5, 13793.0], [20.6, 13793.0], [20.7, 13793.0], [20.8, 13793.0], [20.9, 14060.0], [21.0, 14060.0], [21.1, 14060.0], [21.2, 14060.0], [21.3, 14060.0], [21.4, 14060.0], [21.5, 14060.0], [21.6, 14060.0], [21.7, 14752.0], [21.8, 14752.0], [21.9, 14752.0], [22.0, 14752.0], [22.1, 14752.0], [22.2, 14752.0], [22.3, 14752.0], [22.4, 14752.0], [22.5, 15126.0], [22.6, 15126.0], [22.7, 15126.0], [22.8, 15126.0], [22.9, 15126.0], [23.0, 15126.0], [23.1, 15126.0], [23.2, 15126.0], [23.3, 15126.0], [23.4, 15411.0], [23.5, 15411.0], [23.6, 15411.0], [23.7, 15411.0], [23.8, 15411.0], [23.9, 15411.0], [24.0, 15411.0], [24.1, 15411.0], [24.2, 15658.0], [24.3, 15658.0], [24.4, 15658.0], [24.5, 15658.0], [24.6, 15658.0], [24.7, 15658.0], [24.8, 15658.0], [24.9, 15658.0], [25.0, 15825.0], [25.1, 15825.0], [25.2, 15825.0], [25.3, 15825.0], [25.4, 15825.0], [25.5, 15825.0], [25.6, 15825.0], [25.7, 15825.0], [25.8, 15825.0], [25.9, 15946.0], [26.0, 15946.0], [26.1, 15946.0], [26.2, 15946.0], [26.3, 15946.0], [26.4, 15946.0], [26.5, 15946.0], [26.6, 15946.0], [26.7, 16365.0], [26.8, 16365.0], [26.9, 16365.0], [27.0, 16365.0], [27.1, 16365.0], [27.2, 16365.0], [27.3, 16365.0], [27.4, 16365.0], [27.5, 16512.0], [27.6, 16512.0], [27.7, 16512.0], [27.8, 16512.0], [27.9, 16512.0], [28.0, 16512.0], [28.1, 16512.0], [28.2, 16512.0], [28.3, 16512.0], [28.4, 16620.0], [28.5, 16620.0], [28.6, 16620.0], [28.7, 16620.0], [28.8, 16620.0], [28.9, 16620.0], [29.0, 16620.0], [29.1, 16620.0], [29.2, 16938.0], [29.3, 16938.0], [29.4, 16938.0], [29.5, 16938.0], [29.6, 16938.0], [29.7, 16938.0], [29.8, 16938.0], [29.9, 16938.0], [30.0, 17047.0], [30.1, 17047.0], [30.2, 17047.0], [30.3, 17047.0], [30.4, 17047.0], [30.5, 17047.0], [30.6, 17047.0], [30.7, 17047.0], [30.8, 17047.0], [30.9, 17098.0], [31.0, 17098.0], [31.1, 17098.0], [31.2, 17098.0], [31.3, 17098.0], [31.4, 17098.0], [31.5, 17098.0], [31.6, 17098.0], [31.7, 17138.0], [31.8, 17138.0], [31.9, 17138.0], [32.0, 17138.0], [32.1, 17138.0], [32.2, 17138.0], [32.3, 17138.0], [32.4, 17138.0], [32.5, 17376.0], [32.6, 17376.0], [32.7, 17376.0], [32.8, 17376.0], [32.9, 17376.0], [33.0, 17376.0], [33.1, 17376.0], [33.2, 17376.0], [33.3, 17376.0], [33.4, 17586.0], [33.5, 17586.0], [33.6, 17586.0], [33.7, 17586.0], [33.8, 17586.0], [33.9, 17586.0], [34.0, 17586.0], [34.1, 17586.0], [34.2, 17645.0], [34.3, 17645.0], [34.4, 17645.0], [34.5, 17645.0], [34.6, 17645.0], [34.7, 17645.0], [34.8, 17645.0], [34.9, 17645.0], [35.0, 18022.0], [35.1, 18022.0], [35.2, 18022.0], [35.3, 18022.0], [35.4, 18022.0], [35.5, 18022.0], [35.6, 18022.0], [35.7, 18022.0], [35.8, 18022.0], [35.9, 18417.0], [36.0, 18417.0], [36.1, 18417.0], [36.2, 18417.0], [36.3, 18417.0], [36.4, 18417.0], [36.5, 18417.0], [36.6, 18417.0], [36.7, 18693.0], [36.8, 18693.0], [36.9, 18693.0], [37.0, 18693.0], [37.1, 18693.0], [37.2, 18693.0], [37.3, 18693.0], [37.4, 18693.0], [37.5, 18917.0], [37.6, 18917.0], [37.7, 18917.0], [37.8, 18917.0], [37.9, 18917.0], [38.0, 18917.0], [38.1, 18917.0], [38.2, 18917.0], [38.3, 18917.0], [38.4, 18967.0], [38.5, 18967.0], [38.6, 18967.0], [38.7, 18967.0], [38.8, 18967.0], [38.9, 18967.0], [39.0, 18967.0], [39.1, 18967.0], [39.2, 19160.0], [39.3, 19160.0], [39.4, 19160.0], [39.5, 19160.0], [39.6, 19160.0], [39.7, 19160.0], [39.8, 19160.0], [39.9, 19160.0], [40.0, 19160.0], [40.1, 19183.0], [40.2, 19183.0], [40.3, 19183.0], [40.4, 19183.0], [40.5, 19183.0], [40.6, 19183.0], [40.7, 19183.0], [40.8, 19183.0], [40.9, 19236.0], [41.0, 19236.0], [41.1, 19236.0], [41.2, 19236.0], [41.3, 19236.0], [41.4, 19236.0], [41.5, 19236.0], [41.6, 19236.0], [41.7, 19415.0], [41.8, 19415.0], [41.9, 19415.0], [42.0, 19415.0], [42.1, 19415.0], [42.2, 19415.0], [42.3, 19415.0], [42.4, 19415.0], [42.5, 19415.0], [42.6, 19443.0], [42.7, 19443.0], [42.8, 19443.0], [42.9, 19443.0], [43.0, 19443.0], [43.1, 19443.0], [43.2, 19443.0], [43.3, 19443.0], [43.4, 19443.0], [43.5, 19443.0], [43.6, 19443.0], [43.7, 19443.0], [43.8, 19443.0], [43.9, 19443.0], [44.0, 19443.0], [44.1, 19443.0], [44.2, 19513.0], [44.3, 19513.0], [44.4, 19513.0], [44.5, 19513.0], [44.6, 19513.0], [44.7, 19513.0], [44.8, 19513.0], [44.9, 19513.0], [45.0, 19513.0], [45.1, 19667.0], [45.2, 19667.0], [45.3, 19667.0], [45.4, 19667.0], [45.5, 19667.0], [45.6, 19667.0], [45.7, 19667.0], [45.8, 19667.0], [45.9, 19878.0], [46.0, 19878.0], [46.1, 19878.0], [46.2, 19878.0], [46.3, 19878.0], [46.4, 19878.0], [46.5, 19878.0], [46.6, 19878.0], [46.7, 19993.0], [46.8, 19993.0], [46.9, 19993.0], [47.0, 19993.0], [47.1, 19993.0], [47.2, 19993.0], [47.3, 19993.0], [47.4, 19993.0], [47.5, 19993.0], [47.6, 20195.0], [47.7, 20195.0], [47.8, 20195.0], [47.9, 20195.0], [48.0, 20195.0], [48.1, 20195.0], [48.2, 20195.0], [48.3, 20195.0], [48.4, 20304.0], [48.5, 20304.0], [48.6, 20304.0], [48.7, 20304.0], [48.8, 20304.0], [48.9, 20304.0], [49.0, 20304.0], [49.1, 20304.0], [49.2, 20393.0], [49.3, 20393.0], [49.4, 20393.0], [49.5, 20393.0], [49.6, 20393.0], [49.7, 20393.0], [49.8, 20393.0], [49.9, 20393.0], [50.0, 20393.0], [50.1, 20478.0], [50.2, 20478.0], [50.3, 20478.0], [50.4, 20478.0], [50.5, 20478.0], [50.6, 20478.0], [50.7, 20478.0], [50.8, 20478.0], [50.9, 20784.0], [51.0, 20784.0], [51.1, 20784.0], [51.2, 20784.0], [51.3, 20784.0], [51.4, 20784.0], [51.5, 20784.0], [51.6, 20784.0], [51.7, 21681.0], [51.8, 21681.0], [51.9, 21681.0], [52.0, 21681.0], [52.1, 21681.0], [52.2, 21681.0], [52.3, 21681.0], [52.4, 21681.0], [52.5, 21681.0], [52.6, 21741.0], [52.7, 21741.0], [52.8, 21741.0], [52.9, 21741.0], [53.0, 21741.0], [53.1, 21741.0], [53.2, 21741.0], [53.3, 21741.0], [53.4, 21872.0], [53.5, 21872.0], [53.6, 21872.0], [53.7, 21872.0], [53.8, 21872.0], [53.9, 21872.0], [54.0, 21872.0], [54.1, 21872.0], [54.2, 22099.0], [54.3, 22099.0], [54.4, 22099.0], [54.5, 22099.0], [54.6, 22099.0], [54.7, 22099.0], [54.8, 22099.0], [54.9, 22099.0], [55.0, 22099.0], [55.1, 22113.0], [55.2, 22113.0], [55.3, 22113.0], [55.4, 22113.0], [55.5, 22113.0], [55.6, 22113.0], [55.7, 22113.0], [55.8, 22113.0], [55.9, 22411.0], [56.0, 22411.0], [56.1, 22411.0], [56.2, 22411.0], [56.3, 22411.0], [56.4, 22411.0], [56.5, 22411.0], [56.6, 22411.0], [56.7, 22429.0], [56.8, 22429.0], [56.9, 22429.0], [57.0, 22429.0], [57.1, 22429.0], [57.2, 22429.0], [57.3, 22429.0], [57.4, 22429.0], [57.5, 22429.0], [57.6, 22572.0], [57.7, 22572.0], [57.8, 22572.0], [57.9, 22572.0], [58.0, 22572.0], [58.1, 22572.0], [58.2, 22572.0], [58.3, 22572.0], [58.4, 22749.0], [58.5, 22749.0], [58.6, 22749.0], [58.7, 22749.0], [58.8, 22749.0], [58.9, 22749.0], [59.0, 22749.0], [59.1, 22749.0], [59.2, 22772.0], [59.3, 22772.0], [59.4, 22772.0], [59.5, 22772.0], [59.6, 22772.0], [59.7, 22772.0], [59.8, 22772.0], [59.9, 22772.0], [60.0, 22772.0], [60.1, 22810.0], [60.2, 22810.0], [60.3, 22810.0], [60.4, 22810.0], [60.5, 22810.0], [60.6, 22810.0], [60.7, 22810.0], [60.8, 22810.0], [60.9, 22817.0], [61.0, 22817.0], [61.1, 22817.0], [61.2, 22817.0], [61.3, 22817.0], [61.4, 22817.0], [61.5, 22817.0], [61.6, 22817.0], [61.7, 23270.0], [61.8, 23270.0], [61.9, 23270.0], [62.0, 23270.0], [62.1, 23270.0], [62.2, 23270.0], [62.3, 23270.0], [62.4, 23270.0], [62.5, 23270.0], [62.6, 23296.0], [62.7, 23296.0], [62.8, 23296.0], [62.9, 23296.0], [63.0, 23296.0], [63.1, 23296.0], [63.2, 23296.0], [63.3, 23296.0], [63.4, 23335.0], [63.5, 23335.0], [63.6, 23335.0], [63.7, 23335.0], [63.8, 23335.0], [63.9, 23335.0], [64.0, 23335.0], [64.1, 23335.0], [64.2, 23841.0], [64.3, 23841.0], [64.4, 23841.0], [64.5, 23841.0], [64.6, 23841.0], [64.7, 23841.0], [64.8, 23841.0], [64.9, 23841.0], [65.0, 23841.0], [65.1, 24937.0], [65.2, 24937.0], [65.3, 24937.0], [65.4, 24937.0], [65.5, 24937.0], [65.6, 24937.0], [65.7, 24937.0], [65.8, 24937.0], [65.9, 25051.0], [66.0, 25051.0], [66.1, 25051.0], [66.2, 25051.0], [66.3, 25051.0], [66.4, 25051.0], [66.5, 25051.0], [66.6, 25051.0], [66.7, 25133.0], [66.8, 25133.0], [66.9, 25133.0], [67.0, 25133.0], [67.1, 25133.0], [67.2, 25133.0], [67.3, 25133.0], [67.4, 25133.0], [67.5, 25133.0], [67.6, 25271.0], [67.7, 25271.0], [67.8, 25271.0], [67.9, 25271.0], [68.0, 25271.0], [68.1, 25271.0], [68.2, 25271.0], [68.3, 25271.0], [68.4, 25680.0], [68.5, 25680.0], [68.6, 25680.0], [68.7, 25680.0], [68.8, 25680.0], [68.9, 25680.0], [69.0, 25680.0], [69.1, 25680.0], [69.2, 25913.0], [69.3, 25913.0], [69.4, 25913.0], [69.5, 25913.0], [69.6, 25913.0], [69.7, 25913.0], [69.8, 25913.0], [69.9, 25913.0], [70.0, 25913.0], [70.1, 26126.0], [70.2, 26126.0], [70.3, 26126.0], [70.4, 26126.0], [70.5, 26126.0], [70.6, 26126.0], [70.7, 26126.0], [70.8, 26126.0], [70.9, 26158.0], [71.0, 26158.0], [71.1, 26158.0], [71.2, 26158.0], [71.3, 26158.0], [71.4, 26158.0], [71.5, 26158.0], [71.6, 26158.0], [71.7, 26508.0], [71.8, 26508.0], [71.9, 26508.0], [72.0, 26508.0], [72.1, 26508.0], [72.2, 26508.0], [72.3, 26508.0], [72.4, 26508.0], [72.5, 26508.0], [72.6, 26767.0], [72.7, 26767.0], [72.8, 26767.0], [72.9, 26767.0], [73.0, 26767.0], [73.1, 26767.0], [73.2, 26767.0], [73.3, 26767.0], [73.4, 26884.0], [73.5, 26884.0], [73.6, 26884.0], [73.7, 26884.0], [73.8, 26884.0], [73.9, 26884.0], [74.0, 26884.0], [74.1, 26884.0], [74.2, 27158.0], [74.3, 27158.0], [74.4, 27158.0], [74.5, 27158.0], [74.6, 27158.0], [74.7, 27158.0], [74.8, 27158.0], [74.9, 27158.0], [75.0, 27343.0], [75.1, 27343.0], [75.2, 27343.0], [75.3, 27343.0], [75.4, 27343.0], [75.5, 27343.0], [75.6, 27343.0], [75.7, 27343.0], [75.8, 27343.0], [75.9, 27390.0], [76.0, 27390.0], [76.1, 27390.0], [76.2, 27390.0], [76.3, 27390.0], [76.4, 27390.0], [76.5, 27390.0], [76.6, 27390.0], [76.7, 27394.0], [76.8, 27394.0], [76.9, 27394.0], [77.0, 27394.0], [77.1, 27394.0], [77.2, 27394.0], [77.3, 27394.0], [77.4, 27394.0], [77.5, 27575.0], [77.6, 27575.0], [77.7, 27575.0], [77.8, 27575.0], [77.9, 27575.0], [78.0, 27575.0], [78.1, 27575.0], [78.2, 27575.0], [78.3, 27575.0], [78.4, 27765.0], [78.5, 27765.0], [78.6, 27765.0], [78.7, 27765.0], [78.8, 27765.0], [78.9, 27765.0], [79.0, 27765.0], [79.1, 27765.0], [79.2, 28041.0], [79.3, 28041.0], [79.4, 28041.0], [79.5, 28041.0], [79.6, 28041.0], [79.7, 28041.0], [79.8, 28041.0], [79.9, 28041.0], [80.0, 28073.0], [80.1, 28073.0], [80.2, 28073.0], [80.3, 28073.0], [80.4, 28073.0], [80.5, 28073.0], [80.6, 28073.0], [80.7, 28073.0], [80.8, 28073.0], [80.9, 28125.0], [81.0, 28125.0], [81.1, 28125.0], [81.2, 28125.0], [81.3, 28125.0], [81.4, 28125.0], [81.5, 28125.0], [81.6, 28125.0], [81.7, 28189.0], [81.8, 28189.0], [81.9, 28189.0], [82.0, 28189.0], [82.1, 28189.0], [82.2, 28189.0], [82.3, 28189.0], [82.4, 28189.0], [82.5, 28261.0], [82.6, 28261.0], [82.7, 28261.0], [82.8, 28261.0], [82.9, 28261.0], [83.0, 28261.0], [83.1, 28261.0], [83.2, 28261.0], [83.3, 28261.0], [83.4, 28403.0], [83.5, 28403.0], [83.6, 28403.0], [83.7, 28403.0], [83.8, 28403.0], [83.9, 28403.0], [84.0, 28403.0], [84.1, 28403.0], [84.2, 28562.0], [84.3, 28562.0], [84.4, 28562.0], [84.5, 28562.0], [84.6, 28562.0], [84.7, 28562.0], [84.8, 28562.0], [84.9, 28562.0], [85.0, 28595.0], [85.1, 28595.0], [85.2, 28595.0], [85.3, 28595.0], [85.4, 28595.0], [85.5, 28595.0], [85.6, 28595.0], [85.7, 28595.0], [85.8, 28595.0], [85.9, 28655.0], [86.0, 28655.0], [86.1, 28655.0], [86.2, 28655.0], [86.3, 28655.0], [86.4, 28655.0], [86.5, 28655.0], [86.6, 28655.0], [86.7, 28688.0], [86.8, 28688.0], [86.9, 28688.0], [87.0, 28688.0], [87.1, 28688.0], [87.2, 28688.0], [87.3, 28688.0], [87.4, 28688.0], [87.5, 28757.0], [87.6, 28757.0], [87.7, 28757.0], [87.8, 28757.0], [87.9, 28757.0], [88.0, 28757.0], [88.1, 28757.0], [88.2, 28757.0], [88.3, 28757.0], [88.4, 28771.0], [88.5, 28771.0], [88.6, 28771.0], [88.7, 28771.0], [88.8, 28771.0], [88.9, 28771.0], [89.0, 28771.0], [89.1, 28771.0], [89.2, 28919.0], [89.3, 28919.0], [89.4, 28919.0], [89.5, 28919.0], [89.6, 28919.0], [89.7, 28919.0], [89.8, 28919.0], [89.9, 28919.0], [90.0, 28999.0], [90.1, 28999.0], [90.2, 28999.0], [90.3, 28999.0], [90.4, 28999.0], [90.5, 28999.0], [90.6, 28999.0], [90.7, 28999.0], [90.8, 28999.0], [90.9, 29086.0], [91.0, 29086.0], [91.1, 29086.0], [91.2, 29086.0], [91.3, 29086.0], [91.4, 29086.0], [91.5, 29086.0], [91.6, 29086.0], [91.7, 29108.0], [91.8, 29108.0], [91.9, 29108.0], [92.0, 29108.0], [92.1, 29108.0], [92.2, 29108.0], [92.3, 29108.0], [92.4, 29108.0], [92.5, 29445.0], [92.6, 29445.0], [92.7, 29445.0], [92.8, 29445.0], [92.9, 29445.0], [93.0, 29445.0], [93.1, 29445.0], [93.2, 29445.0], [93.3, 29445.0], [93.4, 29529.0], [93.5, 29529.0], [93.6, 29529.0], [93.7, 29529.0], [93.8, 29529.0], [93.9, 29529.0], [94.0, 29529.0], [94.1, 29529.0], [94.2, 29594.0], [94.3, 29594.0], [94.4, 29594.0], [94.5, 29594.0], [94.6, 29594.0], [94.7, 29594.0], [94.8, 29594.0], [94.9, 29594.0], [95.0, 29860.0], [95.1, 29860.0], [95.2, 29860.0], [95.3, 29860.0], [95.4, 29860.0], [95.5, 29860.0], [95.6, 29860.0], [95.7, 29860.0], [95.8, 29860.0], [95.9, 30027.0], [96.0, 30027.0], [96.1, 30027.0], [96.2, 30027.0], [96.3, 30027.0], [96.4, 30027.0], [96.5, 30027.0], [96.6, 30027.0], [96.7, 30445.0], [96.8, 30445.0], [96.9, 30445.0], [97.0, 30445.0], [97.1, 30445.0], [97.2, 30445.0], [97.3, 30445.0], [97.4, 30445.0], [97.5, 31376.0], [97.6, 31376.0], [97.7, 31376.0], [97.8, 31376.0], [97.9, 31376.0], [98.0, 31376.0], [98.1, 31376.0], [98.2, 31376.0], [98.3, 31376.0], [98.4, 31404.0], [98.5, 31404.0], [98.6, 31404.0], [98.7, 31404.0], [98.8, 31404.0], [98.9, 31404.0], [99.0, 31404.0], [99.1, 31404.0], [99.2, 32291.0], [99.3, 32291.0], [99.4, 32291.0], [99.5, 32291.0], [99.6, 32291.0], [99.7, 32291.0], [99.8, 32291.0], [99.9, 32291.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 3600.0, "maxY": 3.0, "series": [{"data": [[3600.0, 1.0], [4100.0, 2.0], [5400.0, 1.0], [5600.0, 1.0], [6500.0, 1.0], [7600.0, 1.0], [8800.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [9300.0, 1.0], [10300.0, 2.0], [10500.0, 1.0], [11200.0, 1.0], [11000.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [12000.0, 1.0], [12300.0, 1.0], [12800.0, 1.0], [13600.0, 1.0], [13400.0, 1.0], [13700.0, 1.0], [13500.0, 1.0], [14000.0, 1.0], [14700.0, 1.0], [15100.0, 1.0], [15600.0, 1.0], [15800.0, 1.0], [15400.0, 1.0], [16300.0, 1.0], [15900.0, 1.0], [17000.0, 2.0], [17300.0, 1.0], [16500.0, 1.0], [17100.0, 1.0], [16600.0, 1.0], [16900.0, 1.0], [18400.0, 1.0], [17500.0, 1.0], [17600.0, 1.0], [18000.0, 1.0], [18900.0, 2.0], [19100.0, 2.0], [19400.0, 3.0], [18600.0, 1.0], [19200.0, 1.0], [19500.0, 1.0], [20100.0, 1.0], [19800.0, 1.0], [19900.0, 1.0], [19600.0, 1.0], [20300.0, 2.0], [20400.0, 1.0], [20700.0, 1.0], [21800.0, 1.0], [22000.0, 1.0], [21600.0, 1.0], [22400.0, 2.0], [21700.0, 1.0], [22100.0, 1.0], [22500.0, 1.0], [23200.0, 2.0], [22700.0, 2.0], [23300.0, 1.0], [22800.0, 2.0], [23800.0, 1.0], [25200.0, 1.0], [25000.0, 1.0], [25100.0, 1.0], [24900.0, 1.0], [26500.0, 1.0], [26100.0, 2.0], [25600.0, 1.0], [25900.0, 1.0], [27300.0, 3.0], [27100.0, 1.0], [27500.0, 1.0], [26800.0, 1.0], [26700.0, 1.0], [28600.0, 2.0], [28200.0, 1.0], [28500.0, 2.0], [28400.0, 1.0], [28100.0, 2.0], [27700.0, 1.0], [28000.0, 2.0], [29500.0, 2.0], [29100.0, 1.0], [29000.0, 1.0], [28900.0, 2.0], [28700.0, 2.0], [29400.0, 1.0], [29800.0, 1.0], [30400.0, 1.0], [30000.0, 1.0], [31400.0, 1.0], [31300.0, 1.0], [32200.0, 1.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 120.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 120.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 120.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.77380226E12, "maxY": 6.0, "series": [{"data": [[1.77380244E12, 4.538461538461539], [1.77380256E12, 1.3333333333333333], [1.77380226E12, 2.25], [1.77380238E12, 6.0], [1.77380232E12, 4.615384615384615], [1.7738025E12, 3.2727272727272725]], "isOverall": false, "label": "worker1-OllamaThreadGroup", "isController": false}, {"data": [[1.77380244E12, 4.75], [1.77380256E12, 1.75], [1.77380226E12, 2.142857142857143], [1.77380238E12, 6.0], [1.77380232E12, 4.615384615384615], [1.7738025E12, 3.454545454545454]], "isOverall": false, "label": "worker2-OllamaThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380256E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 10037.6, "minX": 1.0, "maxY": 27537.600000000006, "series": [{"data": [[1.0, 10037.6], [2.0, 10945.533333333335], [4.0, 18580.0], [5.0, 23944.120000000003], [3.0, 17143.375], [6.0, 27537.600000000006]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}, {"data": [[4.199999999999998, 20435.133333333335]], "isOverall": false, "label": "HTTP リクエスト-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 27.766666666666666, "minX": 1.77380226E12, "maxY": 236.7, "series": [{"data": [[1.77380244E12, 229.3], [1.77380256E12, 62.11666666666667], [1.77380226E12, 138.93333333333334], [1.77380238E12, 235.48333333333332], [1.77380232E12, 236.7], [1.7738025E12, 225.16666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77380244E12, 99.16666666666667], [1.77380256E12, 27.766666666666666], [1.77380226E12, 59.5], [1.77380238E12, 99.16666666666667], [1.77380232E12, 103.13333333333334], [1.7738025E12, 87.26666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380256E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9482.066666666668, "minX": 1.77380226E12, "maxY": 28636.679999999997, "series": [{"data": [[1.77380244E12, 25417.8], [1.77380256E12, 9578.142857142857], [1.77380226E12, 9482.066666666668], [1.77380238E12, 28636.679999999997], [1.77380232E12, 17328.307692307695], [1.7738025E12, 20047.272727272728]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380256E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 9481.866666666665, "minX": 1.77380226E12, "maxY": 28636.559999999998, "series": [{"data": [[1.77380244E12, 25417.719999999998], [1.77380256E12, 9578.0], [1.77380226E12, 9481.866666666665], [1.77380238E12, 28636.559999999998], [1.77380232E12, 17328.192307692305], [1.7738025E12, 20047.09090909091]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380256E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.77380226E12, "maxY": 10.533333333333333, "series": [{"data": [[1.77380244E12, 2.7200000000000006], [1.77380256E12, 0.0], [1.77380226E12, 10.533333333333333], [1.77380238E12, 3.48], [1.77380232E12, 2.0], [1.7738025E12, 2.318181818181818]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380256E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3603.0, "minX": 1.77380226E12, "maxY": 32291.0, "series": [{"data": [[1.77380244E12, 28999.0], [1.77380256E12, 15411.0], [1.77380226E12, 15126.0], [1.77380238E12, 32291.0], [1.77380232E12, 23296.0], [1.7738025E12, 24937.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77380244E12, 28830.2], [1.77380256E12, 15411.0], [1.77380226E12, 14213.400000000001], [1.77380238E12, 31387.2], [1.77380232E12, 22294.0], [1.7738025E12, 23689.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77380244E12, 28999.0], [1.77380256E12, 15411.0], [1.77380226E12, 15126.0], [1.77380238E12, 32291.0], [1.77380232E12, 23296.0], [1.7738025E12, 24937.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77380244E12, 28975.0], [1.77380256E12, 15411.0], [1.77380226E12, 15126.0], [1.77380238E12, 32024.899999999998], [1.77380232E12, 23104.55], [1.7738025E12, 24772.6]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77380244E12, 19878.0], [1.77380256E12, 5447.0], [1.77380226E12, 3603.0], [1.77380238E12, 23270.0], [1.77380232E12, 11724.0], [1.7738025E12, 15825.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77380244E12, 26126.0], [1.77380256E12, 10317.0], [1.77380226E12, 9754.0], [1.77380238E12, 28655.0], [1.77380232E12, 17118.0], [1.7738025E12, 19555.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 20435.5, "minX": 1.0, "maxY": 20435.5, "series": [{"data": [[1.0, 20435.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 20435.0, "minX": 1.0, "maxY": 20435.0, "series": [{"data": [[1.0, 20435.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.77380226E12, "maxY": 0.5333333333333333, "series": [{"data": [[1.77380244E12, 0.38333333333333336], [1.77380256E12, 0.05], [1.77380226E12, 0.35], [1.77380238E12, 0.38333333333333336], [1.77380232E12, 0.5333333333333333], [1.7738025E12, 0.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380256E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77380226E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.77380244E12, 0.4166666666666667], [1.77380256E12, 0.11666666666666667], [1.77380226E12, 0.25], [1.77380238E12, 0.4166666666666667], [1.77380232E12, 0.43333333333333335], [1.7738025E12, 0.36666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380256E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77380226E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.77380244E12, 0.4166666666666667], [1.77380256E12, 0.11666666666666667], [1.77380226E12, 0.25], [1.77380238E12, 0.4166666666666667], [1.77380232E12, 0.43333333333333335], [1.7738025E12, 0.36666666666666664]], "isOverall": false, "label": "HTTP リクエスト-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380256E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.77380226E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.77380244E12, 0.4166666666666667], [1.77380256E12, 0.11666666666666667], [1.77380226E12, 0.25], [1.77380238E12, 0.4166666666666667], [1.77380232E12, 0.43333333333333335], [1.7738025E12, 0.36666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380256E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

