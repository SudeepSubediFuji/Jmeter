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
        data: {"result": {"minY": 5121.0, "minX": 0.0, "maxY": 33494.0, "series": [{"data": [[0.0, 5121.0], [0.1, 5121.0], [0.2, 5121.0], [0.3, 5121.0], [0.4, 5121.0], [0.5, 5121.0], [0.6, 5121.0], [0.7, 5121.0], [0.8, 5121.0], [0.9, 5823.0], [1.0, 5823.0], [1.1, 5823.0], [1.2, 5823.0], [1.3, 5823.0], [1.4, 5823.0], [1.5, 5823.0], [1.6, 5823.0], [1.7, 6572.0], [1.8, 6572.0], [1.9, 6572.0], [2.0, 6572.0], [2.1, 6572.0], [2.2, 6572.0], [2.3, 6572.0], [2.4, 6572.0], [2.5, 7125.0], [2.6, 7125.0], [2.7, 7125.0], [2.8, 7125.0], [2.9, 7125.0], [3.0, 7125.0], [3.1, 7125.0], [3.2, 7125.0], [3.3, 7125.0], [3.4, 7856.0], [3.5, 7856.0], [3.6, 7856.0], [3.7, 7856.0], [3.8, 7856.0], [3.9, 7856.0], [4.0, 7856.0], [4.1, 7856.0], [4.2, 7914.0], [4.3, 7914.0], [4.4, 7914.0], [4.5, 7914.0], [4.6, 7914.0], [4.7, 7914.0], [4.8, 7914.0], [4.9, 7914.0], [5.0, 8598.0], [5.1, 8598.0], [5.2, 8598.0], [5.3, 8598.0], [5.4, 8598.0], [5.5, 8598.0], [5.6, 8598.0], [5.7, 8598.0], [5.8, 8598.0], [5.9, 9385.0], [6.0, 9385.0], [6.1, 9385.0], [6.2, 9385.0], [6.3, 9385.0], [6.4, 9385.0], [6.5, 9385.0], [6.6, 9385.0], [6.7, 9918.0], [6.8, 9918.0], [6.9, 9918.0], [7.0, 9918.0], [7.1, 9918.0], [7.2, 9918.0], [7.3, 9918.0], [7.4, 9918.0], [7.5, 10208.0], [7.6, 10208.0], [7.7, 10208.0], [7.8, 10208.0], [7.9, 10208.0], [8.0, 10208.0], [8.1, 10208.0], [8.2, 10208.0], [8.3, 10208.0], [8.4, 10538.0], [8.5, 10538.0], [8.6, 10538.0], [8.7, 10538.0], [8.8, 10538.0], [8.9, 10538.0], [9.0, 10538.0], [9.1, 10538.0], [9.2, 10605.0], [9.3, 10605.0], [9.4, 10605.0], [9.5, 10605.0], [9.6, 10605.0], [9.7, 10605.0], [9.8, 10605.0], [9.9, 10605.0], [10.0, 11003.0], [10.1, 11003.0], [10.2, 11003.0], [10.3, 11003.0], [10.4, 11003.0], [10.5, 11003.0], [10.6, 11003.0], [10.7, 11003.0], [10.8, 11003.0], [10.9, 12756.0], [11.0, 12756.0], [11.1, 12756.0], [11.2, 12756.0], [11.3, 12756.0], [11.4, 12756.0], [11.5, 12756.0], [11.6, 12756.0], [11.7, 12852.0], [11.8, 12852.0], [11.9, 12852.0], [12.0, 12852.0], [12.1, 12852.0], [12.2, 12852.0], [12.3, 12852.0], [12.4, 12852.0], [12.5, 12852.0], [12.6, 13160.0], [12.7, 13160.0], [12.8, 13160.0], [12.9, 13160.0], [13.0, 13160.0], [13.1, 13160.0], [13.2, 13160.0], [13.3, 13160.0], [13.4, 13480.0], [13.5, 13480.0], [13.6, 13480.0], [13.7, 13480.0], [13.8, 13480.0], [13.9, 13480.0], [14.0, 13480.0], [14.1, 13480.0], [14.2, 13806.0], [14.3, 13806.0], [14.4, 13806.0], [14.5, 13806.0], [14.6, 13806.0], [14.7, 13806.0], [14.8, 13806.0], [14.9, 13806.0], [15.0, 13806.0], [15.1, 13910.0], [15.2, 13910.0], [15.3, 13910.0], [15.4, 13910.0], [15.5, 13910.0], [15.6, 13910.0], [15.7, 13910.0], [15.8, 13910.0], [15.9, 14189.0], [16.0, 14189.0], [16.1, 14189.0], [16.2, 14189.0], [16.3, 14189.0], [16.4, 14189.0], [16.5, 14189.0], [16.6, 14189.0], [16.7, 14630.0], [16.8, 14630.0], [16.9, 14630.0], [17.0, 14630.0], [17.1, 14630.0], [17.2, 14630.0], [17.3, 14630.0], [17.4, 14630.0], [17.5, 14630.0], [17.6, 14747.0], [17.7, 14747.0], [17.8, 14747.0], [17.9, 14747.0], [18.0, 14747.0], [18.1, 14747.0], [18.2, 14747.0], [18.3, 14747.0], [18.4, 15343.0], [18.5, 15343.0], [18.6, 15343.0], [18.7, 15343.0], [18.8, 15343.0], [18.9, 15343.0], [19.0, 15343.0], [19.1, 15343.0], [19.2, 15489.0], [19.3, 15489.0], [19.4, 15489.0], [19.5, 15489.0], [19.6, 15489.0], [19.7, 15489.0], [19.8, 15489.0], [19.9, 15489.0], [20.0, 16623.0], [20.1, 16623.0], [20.2, 16623.0], [20.3, 16623.0], [20.4, 16623.0], [20.5, 16623.0], [20.6, 16623.0], [20.7, 16623.0], [20.8, 16623.0], [20.9, 17393.0], [21.0, 17393.0], [21.1, 17393.0], [21.2, 17393.0], [21.3, 17393.0], [21.4, 17393.0], [21.5, 17393.0], [21.6, 17393.0], [21.7, 17842.0], [21.8, 17842.0], [21.9, 17842.0], [22.0, 17842.0], [22.1, 17842.0], [22.2, 17842.0], [22.3, 17842.0], [22.4, 17842.0], [22.5, 18068.0], [22.6, 18068.0], [22.7, 18068.0], [22.8, 18068.0], [22.9, 18068.0], [23.0, 18068.0], [23.1, 18068.0], [23.2, 18068.0], [23.3, 18068.0], [23.4, 18495.0], [23.5, 18495.0], [23.6, 18495.0], [23.7, 18495.0], [23.8, 18495.0], [23.9, 18495.0], [24.0, 18495.0], [24.1, 18495.0], [24.2, 18559.0], [24.3, 18559.0], [24.4, 18559.0], [24.5, 18559.0], [24.6, 18559.0], [24.7, 18559.0], [24.8, 18559.0], [24.9, 18559.0], [25.0, 18820.0], [25.1, 18820.0], [25.2, 18820.0], [25.3, 18820.0], [25.4, 18820.0], [25.5, 18820.0], [25.6, 18820.0], [25.7, 18820.0], [25.8, 18820.0], [25.9, 18859.0], [26.0, 18859.0], [26.1, 18859.0], [26.2, 18859.0], [26.3, 18859.0], [26.4, 18859.0], [26.5, 18859.0], [26.6, 18859.0], [26.7, 18874.0], [26.8, 18874.0], [26.9, 18874.0], [27.0, 18874.0], [27.1, 18874.0], [27.2, 18874.0], [27.3, 18874.0], [27.4, 18874.0], [27.5, 18951.0], [27.6, 18951.0], [27.7, 18951.0], [27.8, 18951.0], [27.9, 18951.0], [28.0, 18951.0], [28.1, 18951.0], [28.2, 18951.0], [28.3, 18951.0], [28.4, 19028.0], [28.5, 19028.0], [28.6, 19028.0], [28.7, 19028.0], [28.8, 19028.0], [28.9, 19028.0], [29.0, 19028.0], [29.1, 19028.0], [29.2, 19209.0], [29.3, 19209.0], [29.4, 19209.0], [29.5, 19209.0], [29.6, 19209.0], [29.7, 19209.0], [29.8, 19209.0], [29.9, 19209.0], [30.0, 19211.0], [30.1, 19211.0], [30.2, 19211.0], [30.3, 19211.0], [30.4, 19211.0], [30.5, 19211.0], [30.6, 19211.0], [30.7, 19211.0], [30.8, 19211.0], [30.9, 19495.0], [31.0, 19495.0], [31.1, 19495.0], [31.2, 19495.0], [31.3, 19495.0], [31.4, 19495.0], [31.5, 19495.0], [31.6, 19495.0], [31.7, 19743.0], [31.8, 19743.0], [31.9, 19743.0], [32.0, 19743.0], [32.1, 19743.0], [32.2, 19743.0], [32.3, 19743.0], [32.4, 19743.0], [32.5, 19976.0], [32.6, 19976.0], [32.7, 19976.0], [32.8, 19976.0], [32.9, 19976.0], [33.0, 19976.0], [33.1, 19976.0], [33.2, 19976.0], [33.3, 19976.0], [33.4, 19992.0], [33.5, 19992.0], [33.6, 19992.0], [33.7, 19992.0], [33.8, 19992.0], [33.9, 19992.0], [34.0, 19992.0], [34.1, 19992.0], [34.2, 19998.0], [34.3, 19998.0], [34.4, 19998.0], [34.5, 19998.0], [34.6, 19998.0], [34.7, 19998.0], [34.8, 19998.0], [34.9, 19998.0], [35.0, 20067.0], [35.1, 20067.0], [35.2, 20067.0], [35.3, 20067.0], [35.4, 20067.0], [35.5, 20067.0], [35.6, 20067.0], [35.7, 20067.0], [35.8, 20067.0], [35.9, 20109.0], [36.0, 20109.0], [36.1, 20109.0], [36.2, 20109.0], [36.3, 20109.0], [36.4, 20109.0], [36.5, 20109.0], [36.6, 20109.0], [36.7, 20535.0], [36.8, 20535.0], [36.9, 20535.0], [37.0, 20535.0], [37.1, 20535.0], [37.2, 20535.0], [37.3, 20535.0], [37.4, 20535.0], [37.5, 20553.0], [37.6, 20553.0], [37.7, 20553.0], [37.8, 20553.0], [37.9, 20553.0], [38.0, 20553.0], [38.1, 20553.0], [38.2, 20553.0], [38.3, 20553.0], [38.4, 20678.0], [38.5, 20678.0], [38.6, 20678.0], [38.7, 20678.0], [38.8, 20678.0], [38.9, 20678.0], [39.0, 20678.0], [39.1, 20678.0], [39.2, 20930.0], [39.3, 20930.0], [39.4, 20930.0], [39.5, 20930.0], [39.6, 20930.0], [39.7, 20930.0], [39.8, 20930.0], [39.9, 20930.0], [40.0, 20930.0], [40.1, 21053.0], [40.2, 21053.0], [40.3, 21053.0], [40.4, 21053.0], [40.5, 21053.0], [40.6, 21053.0], [40.7, 21053.0], [40.8, 21053.0], [40.9, 21954.0], [41.0, 21954.0], [41.1, 21954.0], [41.2, 21954.0], [41.3, 21954.0], [41.4, 21954.0], [41.5, 21954.0], [41.6, 21954.0], [41.7, 21988.0], [41.8, 21988.0], [41.9, 21988.0], [42.0, 21988.0], [42.1, 21988.0], [42.2, 21988.0], [42.3, 21988.0], [42.4, 21988.0], [42.5, 21988.0], [42.6, 22562.0], [42.7, 22562.0], [42.8, 22562.0], [42.9, 22562.0], [43.0, 22562.0], [43.1, 22562.0], [43.2, 22562.0], [43.3, 22562.0], [43.4, 23090.0], [43.5, 23090.0], [43.6, 23090.0], [43.7, 23090.0], [43.8, 23090.0], [43.9, 23090.0], [44.0, 23090.0], [44.1, 23090.0], [44.2, 23247.0], [44.3, 23247.0], [44.4, 23247.0], [44.5, 23247.0], [44.6, 23247.0], [44.7, 23247.0], [44.8, 23247.0], [44.9, 23247.0], [45.0, 23247.0], [45.1, 23294.0], [45.2, 23294.0], [45.3, 23294.0], [45.4, 23294.0], [45.5, 23294.0], [45.6, 23294.0], [45.7, 23294.0], [45.8, 23294.0], [45.9, 23396.0], [46.0, 23396.0], [46.1, 23396.0], [46.2, 23396.0], [46.3, 23396.0], [46.4, 23396.0], [46.5, 23396.0], [46.6, 23396.0], [46.7, 23832.0], [46.8, 23832.0], [46.9, 23832.0], [47.0, 23832.0], [47.1, 23832.0], [47.2, 23832.0], [47.3, 23832.0], [47.4, 23832.0], [47.5, 23832.0], [47.6, 24098.0], [47.7, 24098.0], [47.8, 24098.0], [47.9, 24098.0], [48.0, 24098.0], [48.1, 24098.0], [48.2, 24098.0], [48.3, 24098.0], [48.4, 24159.0], [48.5, 24159.0], [48.6, 24159.0], [48.7, 24159.0], [48.8, 24159.0], [48.9, 24159.0], [49.0, 24159.0], [49.1, 24159.0], [49.2, 24620.0], [49.3, 24620.0], [49.4, 24620.0], [49.5, 24620.0], [49.6, 24620.0], [49.7, 24620.0], [49.8, 24620.0], [49.9, 24620.0], [50.0, 24620.0], [50.1, 24961.0], [50.2, 24961.0], [50.3, 24961.0], [50.4, 24961.0], [50.5, 24961.0], [50.6, 24961.0], [50.7, 24961.0], [50.8, 24961.0], [50.9, 25018.0], [51.0, 25018.0], [51.1, 25018.0], [51.2, 25018.0], [51.3, 25018.0], [51.4, 25018.0], [51.5, 25018.0], [51.6, 25018.0], [51.7, 25389.0], [51.8, 25389.0], [51.9, 25389.0], [52.0, 25389.0], [52.1, 25389.0], [52.2, 25389.0], [52.3, 25389.0], [52.4, 25389.0], [52.5, 25389.0], [52.6, 25915.0], [52.7, 25915.0], [52.8, 25915.0], [52.9, 25915.0], [53.0, 25915.0], [53.1, 25915.0], [53.2, 25915.0], [53.3, 25915.0], [53.4, 26204.0], [53.5, 26204.0], [53.6, 26204.0], [53.7, 26204.0], [53.8, 26204.0], [53.9, 26204.0], [54.0, 26204.0], [54.1, 26204.0], [54.2, 26209.0], [54.3, 26209.0], [54.4, 26209.0], [54.5, 26209.0], [54.6, 26209.0], [54.7, 26209.0], [54.8, 26209.0], [54.9, 26209.0], [55.0, 26209.0], [55.1, 26329.0], [55.2, 26329.0], [55.3, 26329.0], [55.4, 26329.0], [55.5, 26329.0], [55.6, 26329.0], [55.7, 26329.0], [55.8, 26329.0], [55.9, 26341.0], [56.0, 26341.0], [56.1, 26341.0], [56.2, 26341.0], [56.3, 26341.0], [56.4, 26341.0], [56.5, 26341.0], [56.6, 26341.0], [56.7, 26556.0], [56.8, 26556.0], [56.9, 26556.0], [57.0, 26556.0], [57.1, 26556.0], [57.2, 26556.0], [57.3, 26556.0], [57.4, 26556.0], [57.5, 26556.0], [57.6, 26635.0], [57.7, 26635.0], [57.8, 26635.0], [57.9, 26635.0], [58.0, 26635.0], [58.1, 26635.0], [58.2, 26635.0], [58.3, 26635.0], [58.4, 26737.0], [58.5, 26737.0], [58.6, 26737.0], [58.7, 26737.0], [58.8, 26737.0], [58.9, 26737.0], [59.0, 26737.0], [59.1, 26737.0], [59.2, 26937.0], [59.3, 26937.0], [59.4, 26937.0], [59.5, 26937.0], [59.6, 26937.0], [59.7, 26937.0], [59.8, 26937.0], [59.9, 26937.0], [60.0, 26937.0], [60.1, 26937.0], [60.2, 26937.0], [60.3, 26937.0], [60.4, 26937.0], [60.5, 26937.0], [60.6, 26937.0], [60.7, 26937.0], [60.8, 26937.0], [60.9, 26986.0], [61.0, 26986.0], [61.1, 26986.0], [61.2, 26986.0], [61.3, 26986.0], [61.4, 26986.0], [61.5, 26986.0], [61.6, 26986.0], [61.7, 26992.0], [61.8, 26992.0], [61.9, 26992.0], [62.0, 26992.0], [62.1, 26992.0], [62.2, 26992.0], [62.3, 26992.0], [62.4, 26992.0], [62.5, 26992.0], [62.6, 27159.0], [62.7, 27159.0], [62.8, 27159.0], [62.9, 27159.0], [63.0, 27159.0], [63.1, 27159.0], [63.2, 27159.0], [63.3, 27159.0], [63.4, 27166.0], [63.5, 27166.0], [63.6, 27166.0], [63.7, 27166.0], [63.8, 27166.0], [63.9, 27166.0], [64.0, 27166.0], [64.1, 27166.0], [64.2, 27277.0], [64.3, 27277.0], [64.4, 27277.0], [64.5, 27277.0], [64.6, 27277.0], [64.7, 27277.0], [64.8, 27277.0], [64.9, 27277.0], [65.0, 27277.0], [65.1, 27737.0], [65.2, 27737.0], [65.3, 27737.0], [65.4, 27737.0], [65.5, 27737.0], [65.6, 27737.0], [65.7, 27737.0], [65.8, 27737.0], [65.9, 27802.0], [66.0, 27802.0], [66.1, 27802.0], [66.2, 27802.0], [66.3, 27802.0], [66.4, 27802.0], [66.5, 27802.0], [66.6, 27802.0], [66.7, 27912.0], [66.8, 27912.0], [66.9, 27912.0], [67.0, 27912.0], [67.1, 27912.0], [67.2, 27912.0], [67.3, 27912.0], [67.4, 27912.0], [67.5, 27912.0], [67.6, 27947.0], [67.7, 27947.0], [67.8, 27947.0], [67.9, 27947.0], [68.0, 27947.0], [68.1, 27947.0], [68.2, 27947.0], [68.3, 27947.0], [68.4, 28000.0], [68.5, 28000.0], [68.6, 28000.0], [68.7, 28000.0], [68.8, 28000.0], [68.9, 28000.0], [69.0, 28000.0], [69.1, 28000.0], [69.2, 28016.0], [69.3, 28016.0], [69.4, 28016.0], [69.5, 28016.0], [69.6, 28016.0], [69.7, 28016.0], [69.8, 28016.0], [69.9, 28016.0], [70.0, 28016.0], [70.1, 28104.0], [70.2, 28104.0], [70.3, 28104.0], [70.4, 28104.0], [70.5, 28104.0], [70.6, 28104.0], [70.7, 28104.0], [70.8, 28104.0], [70.9, 28127.0], [71.0, 28127.0], [71.1, 28127.0], [71.2, 28127.0], [71.3, 28127.0], [71.4, 28127.0], [71.5, 28127.0], [71.6, 28127.0], [71.7, 28451.0], [71.8, 28451.0], [71.9, 28451.0], [72.0, 28451.0], [72.1, 28451.0], [72.2, 28451.0], [72.3, 28451.0], [72.4, 28451.0], [72.5, 28451.0], [72.6, 28469.0], [72.7, 28469.0], [72.8, 28469.0], [72.9, 28469.0], [73.0, 28469.0], [73.1, 28469.0], [73.2, 28469.0], [73.3, 28469.0], [73.4, 28542.0], [73.5, 28542.0], [73.6, 28542.0], [73.7, 28542.0], [73.8, 28542.0], [73.9, 28542.0], [74.0, 28542.0], [74.1, 28542.0], [74.2, 28548.0], [74.3, 28548.0], [74.4, 28548.0], [74.5, 28548.0], [74.6, 28548.0], [74.7, 28548.0], [74.8, 28548.0], [74.9, 28548.0], [75.0, 28753.0], [75.1, 28753.0], [75.2, 28753.0], [75.3, 28753.0], [75.4, 28753.0], [75.5, 28753.0], [75.6, 28753.0], [75.7, 28753.0], [75.8, 28753.0], [75.9, 28894.0], [76.0, 28894.0], [76.1, 28894.0], [76.2, 28894.0], [76.3, 28894.0], [76.4, 28894.0], [76.5, 28894.0], [76.6, 28894.0], [76.7, 28961.0], [76.8, 28961.0], [76.9, 28961.0], [77.0, 28961.0], [77.1, 28961.0], [77.2, 28961.0], [77.3, 28961.0], [77.4, 28961.0], [77.5, 29089.0], [77.6, 29089.0], [77.7, 29089.0], [77.8, 29089.0], [77.9, 29089.0], [78.0, 29089.0], [78.1, 29089.0], [78.2, 29089.0], [78.3, 29089.0], [78.4, 29124.0], [78.5, 29124.0], [78.6, 29124.0], [78.7, 29124.0], [78.8, 29124.0], [78.9, 29124.0], [79.0, 29124.0], [79.1, 29124.0], [79.2, 29269.0], [79.3, 29269.0], [79.4, 29269.0], [79.5, 29269.0], [79.6, 29269.0], [79.7, 29269.0], [79.8, 29269.0], [79.9, 29269.0], [80.0, 29298.0], [80.1, 29298.0], [80.2, 29298.0], [80.3, 29298.0], [80.4, 29298.0], [80.5, 29298.0], [80.6, 29298.0], [80.7, 29298.0], [80.8, 29298.0], [80.9, 29413.0], [81.0, 29413.0], [81.1, 29413.0], [81.2, 29413.0], [81.3, 29413.0], [81.4, 29413.0], [81.5, 29413.0], [81.6, 29413.0], [81.7, 29480.0], [81.8, 29480.0], [81.9, 29480.0], [82.0, 29480.0], [82.1, 29480.0], [82.2, 29480.0], [82.3, 29480.0], [82.4, 29480.0], [82.5, 29488.0], [82.6, 29488.0], [82.7, 29488.0], [82.8, 29488.0], [82.9, 29488.0], [83.0, 29488.0], [83.1, 29488.0], [83.2, 29488.0], [83.3, 29488.0], [83.4, 29658.0], [83.5, 29658.0], [83.6, 29658.0], [83.7, 29658.0], [83.8, 29658.0], [83.9, 29658.0], [84.0, 29658.0], [84.1, 29658.0], [84.2, 29855.0], [84.3, 29855.0], [84.4, 29855.0], [84.5, 29855.0], [84.6, 29855.0], [84.7, 29855.0], [84.8, 29855.0], [84.9, 29855.0], [85.0, 29922.0], [85.1, 29922.0], [85.2, 29922.0], [85.3, 29922.0], [85.4, 29922.0], [85.5, 29922.0], [85.6, 29922.0], [85.7, 29922.0], [85.8, 29922.0], [85.9, 30045.0], [86.0, 30045.0], [86.1, 30045.0], [86.2, 30045.0], [86.3, 30045.0], [86.4, 30045.0], [86.5, 30045.0], [86.6, 30045.0], [86.7, 30229.0], [86.8, 30229.0], [86.9, 30229.0], [87.0, 30229.0], [87.1, 30229.0], [87.2, 30229.0], [87.3, 30229.0], [87.4, 30229.0], [87.5, 30229.0], [87.6, 30229.0], [87.7, 30229.0], [87.8, 30229.0], [87.9, 30229.0], [88.0, 30229.0], [88.1, 30229.0], [88.2, 30229.0], [88.3, 30229.0], [88.4, 30232.0], [88.5, 30232.0], [88.6, 30232.0], [88.7, 30232.0], [88.8, 30232.0], [88.9, 30232.0], [89.0, 30232.0], [89.1, 30232.0], [89.2, 30260.0], [89.3, 30260.0], [89.4, 30260.0], [89.5, 30260.0], [89.6, 30260.0], [89.7, 30260.0], [89.8, 30260.0], [89.9, 30260.0], [90.0, 30264.0], [90.1, 30264.0], [90.2, 30264.0], [90.3, 30264.0], [90.4, 30264.0], [90.5, 30264.0], [90.6, 30264.0], [90.7, 30264.0], [90.8, 30264.0], [90.9, 30445.0], [91.0, 30445.0], [91.1, 30445.0], [91.2, 30445.0], [91.3, 30445.0], [91.4, 30445.0], [91.5, 30445.0], [91.6, 30445.0], [91.7, 30523.0], [91.8, 30523.0], [91.9, 30523.0], [92.0, 30523.0], [92.1, 30523.0], [92.2, 30523.0], [92.3, 30523.0], [92.4, 30523.0], [92.5, 30677.0], [92.6, 30677.0], [92.7, 30677.0], [92.8, 30677.0], [92.9, 30677.0], [93.0, 30677.0], [93.1, 30677.0], [93.2, 30677.0], [93.3, 30677.0], [93.4, 30936.0], [93.5, 30936.0], [93.6, 30936.0], [93.7, 30936.0], [93.8, 30936.0], [93.9, 30936.0], [94.0, 30936.0], [94.1, 30936.0], [94.2, 31013.0], [94.3, 31013.0], [94.4, 31013.0], [94.5, 31013.0], [94.6, 31013.0], [94.7, 31013.0], [94.8, 31013.0], [94.9, 31013.0], [95.0, 31081.0], [95.1, 31081.0], [95.2, 31081.0], [95.3, 31081.0], [95.4, 31081.0], [95.5, 31081.0], [95.6, 31081.0], [95.7, 31081.0], [95.8, 31081.0], [95.9, 31461.0], [96.0, 31461.0], [96.1, 31461.0], [96.2, 31461.0], [96.3, 31461.0], [96.4, 31461.0], [96.5, 31461.0], [96.6, 31461.0], [96.7, 31483.0], [96.8, 31483.0], [96.9, 31483.0], [97.0, 31483.0], [97.1, 31483.0], [97.2, 31483.0], [97.3, 31483.0], [97.4, 31483.0], [97.5, 31523.0], [97.6, 31523.0], [97.7, 31523.0], [97.8, 31523.0], [97.9, 31523.0], [98.0, 31523.0], [98.1, 31523.0], [98.2, 31523.0], [98.3, 31523.0], [98.4, 33127.0], [98.5, 33127.0], [98.6, 33127.0], [98.7, 33127.0], [98.8, 33127.0], [98.9, 33127.0], [99.0, 33127.0], [99.1, 33127.0], [99.2, 33494.0], [99.3, 33494.0], [99.4, 33494.0], [99.5, 33494.0], [99.6, 33494.0], [99.7, 33494.0], [99.8, 33494.0], [99.9, 33494.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5100.0, "maxY": 5.0, "series": [{"data": [[5100.0, 1.0], [5800.0, 1.0], [6500.0, 1.0], [7100.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8500.0, 1.0], [9300.0, 1.0], [9900.0, 1.0], [10200.0, 1.0], [10600.0, 1.0], [10500.0, 1.0], [11000.0, 1.0], [12700.0, 1.0], [12800.0, 1.0], [13100.0, 1.0], [13800.0, 1.0], [13400.0, 1.0], [13900.0, 1.0], [14100.0, 1.0], [14600.0, 1.0], [14700.0, 1.0], [15300.0, 1.0], [15400.0, 1.0], [16600.0, 1.0], [17300.0, 1.0], [18000.0, 1.0], [17800.0, 1.0], [18400.0, 1.0], [18500.0, 1.0], [19200.0, 2.0], [18900.0, 1.0], [18800.0, 3.0], [19400.0, 1.0], [19000.0, 1.0], [19900.0, 3.0], [20000.0, 1.0], [19700.0, 1.0], [20100.0, 1.0], [20900.0, 1.0], [20500.0, 2.0], [21000.0, 1.0], [20600.0, 1.0], [22500.0, 1.0], [21900.0, 2.0], [23000.0, 1.0], [23200.0, 2.0], [23300.0, 1.0], [23800.0, 1.0], [24000.0, 1.0], [24100.0, 1.0], [25300.0, 1.0], [24900.0, 1.0], [24600.0, 1.0], [25000.0, 1.0], [26300.0, 2.0], [26200.0, 2.0], [26600.0, 1.0], [26500.0, 1.0], [25900.0, 1.0], [26900.0, 4.0], [27200.0, 1.0], [27100.0, 2.0], [26700.0, 1.0], [28000.0, 2.0], [28500.0, 2.0], [28100.0, 2.0], [27900.0, 2.0], [28400.0, 2.0], [27800.0, 1.0], [27700.0, 1.0], [28700.0, 1.0], [29400.0, 3.0], [29200.0, 2.0], [29000.0, 1.0], [29600.0, 1.0], [28900.0, 1.0], [28800.0, 1.0], [29100.0, 1.0], [30200.0, 5.0], [30500.0, 1.0], [29900.0, 1.0], [30600.0, 1.0], [30000.0, 1.0], [29800.0, 1.0], [30400.0, 1.0], [31400.0, 2.0], [30900.0, 1.0], [31000.0, 2.0], [31500.0, 1.0], [33400.0, 1.0], [33100.0, 1.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.285714285714286, "minX": 1.77380622E12, "maxY": 12.0, "series": [{"data": [[1.77380634E12, 12.0], [1.77380652E12, 4.285714285714286], [1.77380622E12, 4.5], [1.7738064E12, 9.875], [1.77380628E12, 9.681818181818182], [1.77380646E12, 7.894736842105265]], "isOverall": false, "label": "OllamaThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380652E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 7856.0, "minX": 1.0, "maxY": 28386.212121212113, "series": [{"data": [[4.0, 10595.4], [8.0, 25141.0], [2.0, 11003.0], [1.0, 7856.0], [9.0, 24303.636363636364], [5.0, 13418.333333333332], [10.0, 25010.272727272728], [11.0, 24239.4], [3.0, 10737.57142857143], [6.0, 17610.714285714286], [12.0, 28386.212121212113], [7.0, 24091.5]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}, {"data": [[8.600000000000001, 22716.31666666668]], "isOverall": false, "label": "HTTP リクエスト-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52.266666666666666, "minX": 1.77380622E12, "maxY": 221.21666666666667, "series": [{"data": [[1.77380634E12, 221.21666666666667], [1.77380652E12, 129.1], [1.77380622E12, 147.58333333333334], [1.7738064E12, 210.21666666666667], [1.77380628E12, 204.45], [1.77380646E12, 201.63333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77380634E12, 93.33333333333333], [1.77380652E12, 52.266666666666666], [1.77380622E12, 59.733333333333334], [1.7738064E12, 89.6], [1.77380628E12, 82.13333333333334], [1.77380646E12, 70.93333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380652E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 10396.9375, "minX": 1.77380622E12, "maxY": 28970.320000000003, "series": [{"data": [[1.77380634E12, 28970.320000000003], [1.77380652E12, 15293.999999999998], [1.77380622E12, 10396.9375], [1.7738064E12, 27862.541666666668], [1.77380628E12, 20752.227272727272], [1.77380646E12, 26104.36842105263]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380652E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 10396.4375, "minX": 1.77380622E12, "maxY": 28970.079999999998, "series": [{"data": [[1.77380634E12, 28970.079999999998], [1.77380652E12, 15293.85714285714], [1.77380622E12, 10396.4375], [1.7738064E12, 27862.166666666664], [1.77380628E12, 20751.909090909092], [1.77380646E12, 26104.21052631579]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380652E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.7142857142857142, "minX": 1.77380622E12, "maxY": 5.062499999999999, "series": [{"data": [[1.77380634E12, 0.8], [1.77380652E12, 0.7142857142857142], [1.77380622E12, 5.062499999999999], [1.7738064E12, 1.2500000000000002], [1.77380628E12, 1.1363636363636362], [1.77380646E12, 0.8421052631578948]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380652E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 5121.0, "minX": 1.77380622E12, "maxY": 33494.0, "series": [{"data": [[1.77380634E12, 31483.0], [1.77380652E12, 20678.0], [1.77380622E12, 18559.0], [1.7738064E12, 33494.0], [1.77380628E12, 26329.0], [1.77380646E12, 33127.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77380634E12, 24961.0], [1.77380652E12, 7856.0], [1.77380622E12, 5121.0], [1.7738064E12, 20067.0], [1.77380628E12, 16623.0], [1.77380646E12, 19743.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77380634E12, 30990.600000000002], [1.77380652E12, 20086.5], [1.77380622E12, 16307.800000000003], [1.7738064E12, 30974.5], [1.77380628E12, 25001.7], [1.77380646E12, 31523.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77380634E12, 31483.0], [1.77380652E12, 20678.0], [1.77380622E12, 18559.0], [1.7738064E12, 33494.0], [1.77380628E12, 26329.0], [1.77380646E12, 33127.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77380634E12, 29269.0], [1.77380652E12, 14468.0], [1.77380622E12, 10063.0], [1.7738064E12, 28071.5], [1.77380628E12, 19995.0], [1.77380646E12, 26556.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77380634E12, 31476.4], [1.77380652E12, 20678.0], [1.77380622E12, 18559.0], [1.7738064E12, 32873.75], [1.77380628E12, 26187.999999999996], [1.77380646E12, 33127.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380652E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
    data: {"result": {"minY": 24790.5, "minX": 1.0, "maxY": 24790.5, "series": [{"data": [[1.0, 24790.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 24790.5, "minX": 1.0, "maxY": 24790.5, "series": [{"data": [[1.0, 24790.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.77380622E12, "maxY": 0.45, "series": [{"data": [[1.77380634E12, 0.4166666666666667], [1.77380652E12, 0.13333333333333333], [1.77380622E12, 0.38333333333333336], [1.7738064E12, 0.35], [1.77380628E12, 0.45], [1.77380646E12, 0.26666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380652E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.77380622E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.77380634E12, 0.4166666666666667], [1.77380652E12, 0.23333333333333334], [1.77380622E12, 0.26666666666666666], [1.7738064E12, 0.4], [1.77380628E12, 0.36666666666666664], [1.77380646E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77380652E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.77380622E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.77380634E12, 0.4166666666666667], [1.77380652E12, 0.23333333333333334], [1.77380622E12, 0.26666666666666666], [1.7738064E12, 0.4], [1.77380628E12, 0.36666666666666664], [1.77380646E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP リクエスト-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380652E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.77380622E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.77380634E12, 0.4166666666666667], [1.77380652E12, 0.23333333333333334], [1.77380622E12, 0.26666666666666666], [1.7738064E12, 0.4], [1.77380628E12, 0.36666666666666664], [1.77380646E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77380652E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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

