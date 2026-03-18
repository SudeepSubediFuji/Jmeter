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
        data: {"result": {"minY": 3817.0, "minX": 0.0, "maxY": 29739.0, "series": [{"data": [[0.0, 3817.0], [0.1, 3817.0], [0.2, 3817.0], [0.3, 3817.0], [0.4, 3817.0], [0.5, 3817.0], [0.6, 3817.0], [0.7, 3817.0], [0.8, 3817.0], [0.9, 4771.0], [1.0, 4771.0], [1.1, 4771.0], [1.2, 4771.0], [1.3, 4771.0], [1.4, 4771.0], [1.5, 4771.0], [1.6, 4771.0], [1.7, 5431.0], [1.8, 5431.0], [1.9, 5431.0], [2.0, 5431.0], [2.1, 5431.0], [2.2, 5431.0], [2.3, 5431.0], [2.4, 5431.0], [2.5, 6550.0], [2.6, 6550.0], [2.7, 6550.0], [2.8, 6550.0], [2.9, 6550.0], [3.0, 6550.0], [3.1, 6550.0], [3.2, 6550.0], [3.3, 6550.0], [3.4, 6648.0], [3.5, 6648.0], [3.6, 6648.0], [3.7, 6648.0], [3.8, 6648.0], [3.9, 6648.0], [4.0, 6648.0], [4.1, 6648.0], [4.2, 6682.0], [4.3, 6682.0], [4.4, 6682.0], [4.5, 6682.0], [4.6, 6682.0], [4.7, 6682.0], [4.8, 6682.0], [4.9, 6682.0], [5.0, 6774.0], [5.1, 6774.0], [5.2, 6774.0], [5.3, 6774.0], [5.4, 6774.0], [5.5, 6774.0], [5.6, 6774.0], [5.7, 6774.0], [5.8, 6774.0], [5.9, 7363.0], [6.0, 7363.0], [6.1, 7363.0], [6.2, 7363.0], [6.3, 7363.0], [6.4, 7363.0], [6.5, 7363.0], [6.6, 7363.0], [6.7, 8367.0], [6.8, 8367.0], [6.9, 8367.0], [7.0, 8367.0], [7.1, 8367.0], [7.2, 8367.0], [7.3, 8367.0], [7.4, 8367.0], [7.5, 9637.0], [7.6, 9637.0], [7.7, 9637.0], [7.8, 9637.0], [7.9, 9637.0], [8.0, 9637.0], [8.1, 9637.0], [8.2, 9637.0], [8.3, 9637.0], [8.4, 9745.0], [8.5, 9745.0], [8.6, 9745.0], [8.7, 9745.0], [8.8, 9745.0], [8.9, 9745.0], [9.0, 9745.0], [9.1, 9745.0], [9.2, 10548.0], [9.3, 10548.0], [9.4, 10548.0], [9.5, 10548.0], [9.6, 10548.0], [9.7, 10548.0], [9.8, 10548.0], [9.9, 10548.0], [10.0, 10917.0], [10.1, 10917.0], [10.2, 10917.0], [10.3, 10917.0], [10.4, 10917.0], [10.5, 10917.0], [10.6, 10917.0], [10.7, 10917.0], [10.8, 10917.0], [10.9, 11669.0], [11.0, 11669.0], [11.1, 11669.0], [11.2, 11669.0], [11.3, 11669.0], [11.4, 11669.0], [11.5, 11669.0], [11.6, 11669.0], [11.7, 11806.0], [11.8, 11806.0], [11.9, 11806.0], [12.0, 11806.0], [12.1, 11806.0], [12.2, 11806.0], [12.3, 11806.0], [12.4, 11806.0], [12.5, 11806.0], [12.6, 13739.0], [12.7, 13739.0], [12.8, 13739.0], [12.9, 13739.0], [13.0, 13739.0], [13.1, 13739.0], [13.2, 13739.0], [13.3, 13739.0], [13.4, 14162.0], [13.5, 14162.0], [13.6, 14162.0], [13.7, 14162.0], [13.8, 14162.0], [13.9, 14162.0], [14.0, 14162.0], [14.1, 14162.0], [14.2, 14521.0], [14.3, 14521.0], [14.4, 14521.0], [14.5, 14521.0], [14.6, 14521.0], [14.7, 14521.0], [14.8, 14521.0], [14.9, 14521.0], [15.0, 14521.0], [15.1, 14666.0], [15.2, 14666.0], [15.3, 14666.0], [15.4, 14666.0], [15.5, 14666.0], [15.6, 14666.0], [15.7, 14666.0], [15.8, 14666.0], [15.9, 15075.0], [16.0, 15075.0], [16.1, 15075.0], [16.2, 15075.0], [16.3, 15075.0], [16.4, 15075.0], [16.5, 15075.0], [16.6, 15075.0], [16.7, 15093.0], [16.8, 15093.0], [16.9, 15093.0], [17.0, 15093.0], [17.1, 15093.0], [17.2, 15093.0], [17.3, 15093.0], [17.4, 15093.0], [17.5, 15093.0], [17.6, 15357.0], [17.7, 15357.0], [17.8, 15357.0], [17.9, 15357.0], [18.0, 15357.0], [18.1, 15357.0], [18.2, 15357.0], [18.3, 15357.0], [18.4, 15388.0], [18.5, 15388.0], [18.6, 15388.0], [18.7, 15388.0], [18.8, 15388.0], [18.9, 15388.0], [19.0, 15388.0], [19.1, 15388.0], [19.2, 15468.0], [19.3, 15468.0], [19.4, 15468.0], [19.5, 15468.0], [19.6, 15468.0], [19.7, 15468.0], [19.8, 15468.0], [19.9, 15468.0], [20.0, 15498.0], [20.1, 15498.0], [20.2, 15498.0], [20.3, 15498.0], [20.4, 15498.0], [20.5, 15498.0], [20.6, 15498.0], [20.7, 15498.0], [20.8, 15498.0], [20.9, 15531.0], [21.0, 15531.0], [21.1, 15531.0], [21.2, 15531.0], [21.3, 15531.0], [21.4, 15531.0], [21.5, 15531.0], [21.6, 15531.0], [21.7, 15720.0], [21.8, 15720.0], [21.9, 15720.0], [22.0, 15720.0], [22.1, 15720.0], [22.2, 15720.0], [22.3, 15720.0], [22.4, 15720.0], [22.5, 15881.0], [22.6, 15881.0], [22.7, 15881.0], [22.8, 15881.0], [22.9, 15881.0], [23.0, 15881.0], [23.1, 15881.0], [23.2, 15881.0], [23.3, 15881.0], [23.4, 15936.0], [23.5, 15936.0], [23.6, 15936.0], [23.7, 15936.0], [23.8, 15936.0], [23.9, 15936.0], [24.0, 15936.0], [24.1, 15936.0], [24.2, 16050.0], [24.3, 16050.0], [24.4, 16050.0], [24.5, 16050.0], [24.6, 16050.0], [24.7, 16050.0], [24.8, 16050.0], [24.9, 16050.0], [25.0, 16134.0], [25.1, 16134.0], [25.2, 16134.0], [25.3, 16134.0], [25.4, 16134.0], [25.5, 16134.0], [25.6, 16134.0], [25.7, 16134.0], [25.8, 16134.0], [25.9, 16207.0], [26.0, 16207.0], [26.1, 16207.0], [26.2, 16207.0], [26.3, 16207.0], [26.4, 16207.0], [26.5, 16207.0], [26.6, 16207.0], [26.7, 16238.0], [26.8, 16238.0], [26.9, 16238.0], [27.0, 16238.0], [27.1, 16238.0], [27.2, 16238.0], [27.3, 16238.0], [27.4, 16238.0], [27.5, 16351.0], [27.6, 16351.0], [27.7, 16351.0], [27.8, 16351.0], [27.9, 16351.0], [28.0, 16351.0], [28.1, 16351.0], [28.2, 16351.0], [28.3, 16351.0], [28.4, 17000.0], [28.5, 17000.0], [28.6, 17000.0], [28.7, 17000.0], [28.8, 17000.0], [28.9, 17000.0], [29.0, 17000.0], [29.1, 17000.0], [29.2, 17071.0], [29.3, 17071.0], [29.4, 17071.0], [29.5, 17071.0], [29.6, 17071.0], [29.7, 17071.0], [29.8, 17071.0], [29.9, 17071.0], [30.0, 17083.0], [30.1, 17083.0], [30.2, 17083.0], [30.3, 17083.0], [30.4, 17083.0], [30.5, 17083.0], [30.6, 17083.0], [30.7, 17083.0], [30.8, 17083.0], [30.9, 17177.0], [31.0, 17177.0], [31.1, 17177.0], [31.2, 17177.0], [31.3, 17177.0], [31.4, 17177.0], [31.5, 17177.0], [31.6, 17177.0], [31.7, 17368.0], [31.8, 17368.0], [31.9, 17368.0], [32.0, 17368.0], [32.1, 17368.0], [32.2, 17368.0], [32.3, 17368.0], [32.4, 17368.0], [32.5, 17913.0], [32.6, 17913.0], [32.7, 17913.0], [32.8, 17913.0], [32.9, 17913.0], [33.0, 17913.0], [33.1, 17913.0], [33.2, 17913.0], [33.3, 17913.0], [33.4, 17935.0], [33.5, 17935.0], [33.6, 17935.0], [33.7, 17935.0], [33.8, 17935.0], [33.9, 17935.0], [34.0, 17935.0], [34.1, 17935.0], [34.2, 18117.0], [34.3, 18117.0], [34.4, 18117.0], [34.5, 18117.0], [34.6, 18117.0], [34.7, 18117.0], [34.8, 18117.0], [34.9, 18117.0], [35.0, 18163.0], [35.1, 18163.0], [35.2, 18163.0], [35.3, 18163.0], [35.4, 18163.0], [35.5, 18163.0], [35.6, 18163.0], [35.7, 18163.0], [35.8, 18163.0], [35.9, 18198.0], [36.0, 18198.0], [36.1, 18198.0], [36.2, 18198.0], [36.3, 18198.0], [36.4, 18198.0], [36.5, 18198.0], [36.6, 18198.0], [36.7, 18213.0], [36.8, 18213.0], [36.9, 18213.0], [37.0, 18213.0], [37.1, 18213.0], [37.2, 18213.0], [37.3, 18213.0], [37.4, 18213.0], [37.5, 18280.0], [37.6, 18280.0], [37.7, 18280.0], [37.8, 18280.0], [37.9, 18280.0], [38.0, 18280.0], [38.1, 18280.0], [38.2, 18280.0], [38.3, 18280.0], [38.4, 18740.0], [38.5, 18740.0], [38.6, 18740.0], [38.7, 18740.0], [38.8, 18740.0], [38.9, 18740.0], [39.0, 18740.0], [39.1, 18740.0], [39.2, 18876.0], [39.3, 18876.0], [39.4, 18876.0], [39.5, 18876.0], [39.6, 18876.0], [39.7, 18876.0], [39.8, 18876.0], [39.9, 18876.0], [40.0, 18876.0], [40.1, 18941.0], [40.2, 18941.0], [40.3, 18941.0], [40.4, 18941.0], [40.5, 18941.0], [40.6, 18941.0], [40.7, 18941.0], [40.8, 18941.0], [40.9, 19170.0], [41.0, 19170.0], [41.1, 19170.0], [41.2, 19170.0], [41.3, 19170.0], [41.4, 19170.0], [41.5, 19170.0], [41.6, 19170.0], [41.7, 19188.0], [41.8, 19188.0], [41.9, 19188.0], [42.0, 19188.0], [42.1, 19188.0], [42.2, 19188.0], [42.3, 19188.0], [42.4, 19188.0], [42.5, 19188.0], [42.6, 19284.0], [42.7, 19284.0], [42.8, 19284.0], [42.9, 19284.0], [43.0, 19284.0], [43.1, 19284.0], [43.2, 19284.0], [43.3, 19284.0], [43.4, 19434.0], [43.5, 19434.0], [43.6, 19434.0], [43.7, 19434.0], [43.8, 19434.0], [43.9, 19434.0], [44.0, 19434.0], [44.1, 19434.0], [44.2, 19488.0], [44.3, 19488.0], [44.4, 19488.0], [44.5, 19488.0], [44.6, 19488.0], [44.7, 19488.0], [44.8, 19488.0], [44.9, 19488.0], [45.0, 19488.0], [45.1, 19579.0], [45.2, 19579.0], [45.3, 19579.0], [45.4, 19579.0], [45.5, 19579.0], [45.6, 19579.0], [45.7, 19579.0], [45.8, 19579.0], [45.9, 19761.0], [46.0, 19761.0], [46.1, 19761.0], [46.2, 19761.0], [46.3, 19761.0], [46.4, 19761.0], [46.5, 19761.0], [46.6, 19761.0], [46.7, 20002.0], [46.8, 20002.0], [46.9, 20002.0], [47.0, 20002.0], [47.1, 20002.0], [47.2, 20002.0], [47.3, 20002.0], [47.4, 20002.0], [47.5, 20002.0], [47.6, 20111.0], [47.7, 20111.0], [47.8, 20111.0], [47.9, 20111.0], [48.0, 20111.0], [48.1, 20111.0], [48.2, 20111.0], [48.3, 20111.0], [48.4, 20211.0], [48.5, 20211.0], [48.6, 20211.0], [48.7, 20211.0], [48.8, 20211.0], [48.9, 20211.0], [49.0, 20211.0], [49.1, 20211.0], [49.2, 20274.0], [49.3, 20274.0], [49.4, 20274.0], [49.5, 20274.0], [49.6, 20274.0], [49.7, 20274.0], [49.8, 20274.0], [49.9, 20274.0], [50.0, 20274.0], [50.1, 20731.0], [50.2, 20731.0], [50.3, 20731.0], [50.4, 20731.0], [50.5, 20731.0], [50.6, 20731.0], [50.7, 20731.0], [50.8, 20731.0], [50.9, 20750.0], [51.0, 20750.0], [51.1, 20750.0], [51.2, 20750.0], [51.3, 20750.0], [51.4, 20750.0], [51.5, 20750.0], [51.6, 20750.0], [51.7, 21214.0], [51.8, 21214.0], [51.9, 21214.0], [52.0, 21214.0], [52.1, 21214.0], [52.2, 21214.0], [52.3, 21214.0], [52.4, 21214.0], [52.5, 21214.0], [52.6, 21224.0], [52.7, 21224.0], [52.8, 21224.0], [52.9, 21224.0], [53.0, 21224.0], [53.1, 21224.0], [53.2, 21224.0], [53.3, 21224.0], [53.4, 21295.0], [53.5, 21295.0], [53.6, 21295.0], [53.7, 21295.0], [53.8, 21295.0], [53.9, 21295.0], [54.0, 21295.0], [54.1, 21295.0], [54.2, 21615.0], [54.3, 21615.0], [54.4, 21615.0], [54.5, 21615.0], [54.6, 21615.0], [54.7, 21615.0], [54.8, 21615.0], [54.9, 21615.0], [55.0, 21615.0], [55.1, 21757.0], [55.2, 21757.0], [55.3, 21757.0], [55.4, 21757.0], [55.5, 21757.0], [55.6, 21757.0], [55.7, 21757.0], [55.8, 21757.0], [55.9, 21783.0], [56.0, 21783.0], [56.1, 21783.0], [56.2, 21783.0], [56.3, 21783.0], [56.4, 21783.0], [56.5, 21783.0], [56.6, 21783.0], [56.7, 21807.0], [56.8, 21807.0], [56.9, 21807.0], [57.0, 21807.0], [57.1, 21807.0], [57.2, 21807.0], [57.3, 21807.0], [57.4, 21807.0], [57.5, 21807.0], [57.6, 21993.0], [57.7, 21993.0], [57.8, 21993.0], [57.9, 21993.0], [58.0, 21993.0], [58.1, 21993.0], [58.2, 21993.0], [58.3, 21993.0], [58.4, 22324.0], [58.5, 22324.0], [58.6, 22324.0], [58.7, 22324.0], [58.8, 22324.0], [58.9, 22324.0], [59.0, 22324.0], [59.1, 22324.0], [59.2, 22478.0], [59.3, 22478.0], [59.4, 22478.0], [59.5, 22478.0], [59.6, 22478.0], [59.7, 22478.0], [59.8, 22478.0], [59.9, 22478.0], [60.0, 22478.0], [60.1, 22916.0], [60.2, 22916.0], [60.3, 22916.0], [60.4, 22916.0], [60.5, 22916.0], [60.6, 22916.0], [60.7, 22916.0], [60.8, 22916.0], [60.9, 22954.0], [61.0, 22954.0], [61.1, 22954.0], [61.2, 22954.0], [61.3, 22954.0], [61.4, 22954.0], [61.5, 22954.0], [61.6, 22954.0], [61.7, 23381.0], [61.8, 23381.0], [61.9, 23381.0], [62.0, 23381.0], [62.1, 23381.0], [62.2, 23381.0], [62.3, 23381.0], [62.4, 23381.0], [62.5, 23381.0], [62.6, 24053.0], [62.7, 24053.0], [62.8, 24053.0], [62.9, 24053.0], [63.0, 24053.0], [63.1, 24053.0], [63.2, 24053.0], [63.3, 24053.0], [63.4, 24173.0], [63.5, 24173.0], [63.6, 24173.0], [63.7, 24173.0], [63.8, 24173.0], [63.9, 24173.0], [64.0, 24173.0], [64.1, 24173.0], [64.2, 24274.0], [64.3, 24274.0], [64.4, 24274.0], [64.5, 24274.0], [64.6, 24274.0], [64.7, 24274.0], [64.8, 24274.0], [64.9, 24274.0], [65.0, 24274.0], [65.1, 24358.0], [65.2, 24358.0], [65.3, 24358.0], [65.4, 24358.0], [65.5, 24358.0], [65.6, 24358.0], [65.7, 24358.0], [65.8, 24358.0], [65.9, 24402.0], [66.0, 24402.0], [66.1, 24402.0], [66.2, 24402.0], [66.3, 24402.0], [66.4, 24402.0], [66.5, 24402.0], [66.6, 24402.0], [66.7, 24406.0], [66.8, 24406.0], [66.9, 24406.0], [67.0, 24406.0], [67.1, 24406.0], [67.2, 24406.0], [67.3, 24406.0], [67.4, 24406.0], [67.5, 24406.0], [67.6, 24414.0], [67.7, 24414.0], [67.8, 24414.0], [67.9, 24414.0], [68.0, 24414.0], [68.1, 24414.0], [68.2, 24414.0], [68.3, 24414.0], [68.4, 24550.0], [68.5, 24550.0], [68.6, 24550.0], [68.7, 24550.0], [68.8, 24550.0], [68.9, 24550.0], [69.0, 24550.0], [69.1, 24550.0], [69.2, 24744.0], [69.3, 24744.0], [69.4, 24744.0], [69.5, 24744.0], [69.6, 24744.0], [69.7, 24744.0], [69.8, 24744.0], [69.9, 24744.0], [70.0, 24744.0], [70.1, 25046.0], [70.2, 25046.0], [70.3, 25046.0], [70.4, 25046.0], [70.5, 25046.0], [70.6, 25046.0], [70.7, 25046.0], [70.8, 25046.0], [70.9, 25092.0], [71.0, 25092.0], [71.1, 25092.0], [71.2, 25092.0], [71.3, 25092.0], [71.4, 25092.0], [71.5, 25092.0], [71.6, 25092.0], [71.7, 25149.0], [71.8, 25149.0], [71.9, 25149.0], [72.0, 25149.0], [72.1, 25149.0], [72.2, 25149.0], [72.3, 25149.0], [72.4, 25149.0], [72.5, 25149.0], [72.6, 25204.0], [72.7, 25204.0], [72.8, 25204.0], [72.9, 25204.0], [73.0, 25204.0], [73.1, 25204.0], [73.2, 25204.0], [73.3, 25204.0], [73.4, 25309.0], [73.5, 25309.0], [73.6, 25309.0], [73.7, 25309.0], [73.8, 25309.0], [73.9, 25309.0], [74.0, 25309.0], [74.1, 25309.0], [74.2, 25612.0], [74.3, 25612.0], [74.4, 25612.0], [74.5, 25612.0], [74.6, 25612.0], [74.7, 25612.0], [74.8, 25612.0], [74.9, 25612.0], [75.0, 25612.0], [75.1, 25642.0], [75.2, 25642.0], [75.3, 25642.0], [75.4, 25642.0], [75.5, 25642.0], [75.6, 25642.0], [75.7, 25642.0], [75.8, 25642.0], [75.9, 25783.0], [76.0, 25783.0], [76.1, 25783.0], [76.2, 25783.0], [76.3, 25783.0], [76.4, 25783.0], [76.5, 25783.0], [76.6, 25783.0], [76.7, 25835.0], [76.8, 25835.0], [76.9, 25835.0], [77.0, 25835.0], [77.1, 25835.0], [77.2, 25835.0], [77.3, 25835.0], [77.4, 25835.0], [77.5, 25956.0], [77.6, 25956.0], [77.7, 25956.0], [77.8, 25956.0], [77.9, 25956.0], [78.0, 25956.0], [78.1, 25956.0], [78.2, 25956.0], [78.3, 25956.0], [78.4, 26182.0], [78.5, 26182.0], [78.6, 26182.0], [78.7, 26182.0], [78.8, 26182.0], [78.9, 26182.0], [79.0, 26182.0], [79.1, 26182.0], [79.2, 26299.0], [79.3, 26299.0], [79.4, 26299.0], [79.5, 26299.0], [79.6, 26299.0], [79.7, 26299.0], [79.8, 26299.0], [79.9, 26299.0], [80.0, 26415.0], [80.1, 26415.0], [80.2, 26415.0], [80.3, 26415.0], [80.4, 26415.0], [80.5, 26415.0], [80.6, 26415.0], [80.7, 26415.0], [80.8, 26415.0], [80.9, 26426.0], [81.0, 26426.0], [81.1, 26426.0], [81.2, 26426.0], [81.3, 26426.0], [81.4, 26426.0], [81.5, 26426.0], [81.6, 26426.0], [81.7, 26492.0], [81.8, 26492.0], [81.9, 26492.0], [82.0, 26492.0], [82.1, 26492.0], [82.2, 26492.0], [82.3, 26492.0], [82.4, 26492.0], [82.5, 26648.0], [82.6, 26648.0], [82.7, 26648.0], [82.8, 26648.0], [82.9, 26648.0], [83.0, 26648.0], [83.1, 26648.0], [83.2, 26648.0], [83.3, 26648.0], [83.4, 26688.0], [83.5, 26688.0], [83.6, 26688.0], [83.7, 26688.0], [83.8, 26688.0], [83.9, 26688.0], [84.0, 26688.0], [84.1, 26688.0], [84.2, 26761.0], [84.3, 26761.0], [84.4, 26761.0], [84.5, 26761.0], [84.6, 26761.0], [84.7, 26761.0], [84.8, 26761.0], [84.9, 26761.0], [85.0, 26800.0], [85.1, 26800.0], [85.2, 26800.0], [85.3, 26800.0], [85.4, 26800.0], [85.5, 26800.0], [85.6, 26800.0], [85.7, 26800.0], [85.8, 26800.0], [85.9, 26855.0], [86.0, 26855.0], [86.1, 26855.0], [86.2, 26855.0], [86.3, 26855.0], [86.4, 26855.0], [86.5, 26855.0], [86.6, 26855.0], [86.7, 26918.0], [86.8, 26918.0], [86.9, 26918.0], [87.0, 26918.0], [87.1, 26918.0], [87.2, 26918.0], [87.3, 26918.0], [87.4, 26918.0], [87.5, 26923.0], [87.6, 26923.0], [87.7, 26923.0], [87.8, 26923.0], [87.9, 26923.0], [88.0, 26923.0], [88.1, 26923.0], [88.2, 26923.0], [88.3, 26923.0], [88.4, 26975.0], [88.5, 26975.0], [88.6, 26975.0], [88.7, 26975.0], [88.8, 26975.0], [88.9, 26975.0], [89.0, 26975.0], [89.1, 26975.0], [89.2, 27014.0], [89.3, 27014.0], [89.4, 27014.0], [89.5, 27014.0], [89.6, 27014.0], [89.7, 27014.0], [89.8, 27014.0], [89.9, 27014.0], [90.0, 27153.0], [90.1, 27153.0], [90.2, 27153.0], [90.3, 27153.0], [90.4, 27153.0], [90.5, 27153.0], [90.6, 27153.0], [90.7, 27153.0], [90.8, 27153.0], [90.9, 27159.0], [91.0, 27159.0], [91.1, 27159.0], [91.2, 27159.0], [91.3, 27159.0], [91.4, 27159.0], [91.5, 27159.0], [91.6, 27159.0], [91.7, 27773.0], [91.8, 27773.0], [91.9, 27773.0], [92.0, 27773.0], [92.1, 27773.0], [92.2, 27773.0], [92.3, 27773.0], [92.4, 27773.0], [92.5, 27860.0], [92.6, 27860.0], [92.7, 27860.0], [92.8, 27860.0], [92.9, 27860.0], [93.0, 27860.0], [93.1, 27860.0], [93.2, 27860.0], [93.3, 27860.0], [93.4, 27946.0], [93.5, 27946.0], [93.6, 27946.0], [93.7, 27946.0], [93.8, 27946.0], [93.9, 27946.0], [94.0, 27946.0], [94.1, 27946.0], [94.2, 28106.0], [94.3, 28106.0], [94.4, 28106.0], [94.5, 28106.0], [94.6, 28106.0], [94.7, 28106.0], [94.8, 28106.0], [94.9, 28106.0], [95.0, 28226.0], [95.1, 28226.0], [95.2, 28226.0], [95.3, 28226.0], [95.4, 28226.0], [95.5, 28226.0], [95.6, 28226.0], [95.7, 28226.0], [95.8, 28226.0], [95.9, 28265.0], [96.0, 28265.0], [96.1, 28265.0], [96.2, 28265.0], [96.3, 28265.0], [96.4, 28265.0], [96.5, 28265.0], [96.6, 28265.0], [96.7, 28606.0], [96.8, 28606.0], [96.9, 28606.0], [97.0, 28606.0], [97.1, 28606.0], [97.2, 28606.0], [97.3, 28606.0], [97.4, 28606.0], [97.5, 28814.0], [97.6, 28814.0], [97.7, 28814.0], [97.8, 28814.0], [97.9, 28814.0], [98.0, 28814.0], [98.1, 28814.0], [98.2, 28814.0], [98.3, 28814.0], [98.4, 29019.0], [98.5, 29019.0], [98.6, 29019.0], [98.7, 29019.0], [98.8, 29019.0], [98.9, 29019.0], [99.0, 29019.0], [99.1, 29019.0], [99.2, 29739.0], [99.3, 29739.0], [99.4, 29739.0], [99.5, 29739.0], [99.6, 29739.0], [99.7, 29739.0], [99.8, 29739.0], [99.9, 29739.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3800.0, "maxY": 3.0, "series": [{"data": [[3800.0, 1.0], [4700.0, 1.0], [5400.0, 1.0], [6600.0, 2.0], [6500.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [8300.0, 1.0], [9700.0, 1.0], [9600.0, 1.0], [10500.0, 1.0], [10900.0, 1.0], [11600.0, 1.0], [11800.0, 1.0], [13700.0, 1.0], [14100.0, 1.0], [14600.0, 1.0], [14500.0, 1.0], [15000.0, 2.0], [15300.0, 2.0], [15400.0, 2.0], [15700.0, 1.0], [15800.0, 1.0], [15500.0, 1.0], [15900.0, 1.0], [16200.0, 2.0], [16000.0, 1.0], [16300.0, 1.0], [16100.0, 1.0], [17000.0, 3.0], [17100.0, 1.0], [17300.0, 1.0], [18200.0, 2.0], [18100.0, 3.0], [17900.0, 2.0], [18900.0, 1.0], [19100.0, 2.0], [19400.0, 2.0], [19200.0, 1.0], [18800.0, 1.0], [18700.0, 1.0], [20100.0, 1.0], [20000.0, 1.0], [19700.0, 1.0], [20200.0, 2.0], [19500.0, 1.0], [21200.0, 3.0], [20700.0, 2.0], [21700.0, 2.0], [22400.0, 1.0], [21800.0, 1.0], [22300.0, 1.0], [21600.0, 1.0], [21900.0, 1.0], [22900.0, 2.0], [23300.0, 1.0], [24400.0, 3.0], [24200.0, 1.0], [24000.0, 1.0], [24300.0, 1.0], [24100.0, 1.0], [24500.0, 1.0], [25300.0, 1.0], [25200.0, 1.0], [25000.0, 2.0], [25100.0, 1.0], [24700.0, 1.0], [26200.0, 1.0], [25700.0, 1.0], [25600.0, 2.0], [25800.0, 1.0], [26400.0, 3.0], [26600.0, 2.0], [25900.0, 1.0], [26100.0, 1.0], [26900.0, 3.0], [26800.0, 2.0], [26700.0, 1.0], [27000.0, 1.0], [27100.0, 2.0], [27900.0, 1.0], [27700.0, 1.0], [27800.0, 1.0], [28200.0, 2.0], [28600.0, 1.0], [28100.0, 1.0], [29000.0, 1.0], [28800.0, 1.0], [29700.0, 1.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 29700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.77381324E12, "maxY": 11.592592592592593, "series": [{"data": [[1.7738133E12, 9.347826086956518], [1.77381348E12, 6.583333333333335], [1.77381336E12, 11.592592592592593], [1.77381354E12, 2.6], [1.77381324E12, 4.0625], [1.77381342E12, 9.319999999999999]], "isOverall": false, "label": "OllamaThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77381354E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5431.0, "minX": 1.0, "maxY": 26291.0, "series": [{"data": [[2.0, 11737.666666666666], [4.0, 10062.5], [8.0, 18937.25], [1.0, 5431.0], [9.0, 22741.647058823528], [5.0, 14897.375], [10.0, 26291.0], [11.0, 23763.076923076922], [3.0, 8858.833333333334], [6.0, 15314.428571428572], [12.0, 25875.2], [7.0, 16533.916666666668]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}, {"data": [[8.30833333333333, 20113.358333333334]], "isOverall": false, "label": "HTTP リクエスト-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18.666666666666668, "minX": 1.77381324E12, "maxY": 235.43333333333334, "series": [{"data": [[1.7738133E12, 218.71666666666667], [1.77381348E12, 226.78333333333333], [1.77381336E12, 235.43333333333334], [1.77381354E12, 44.8], [1.77381324E12, 160.55], [1.77381342E12, 233.28333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7738133E12, 85.86666666666666], [1.77381348E12, 89.6], [1.77381336E12, 100.8], [1.77381354E12, 18.666666666666668], [1.77381324E12, 59.733333333333334], [1.77381342E12, 93.33333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77381354E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9517.1875, "minX": 1.77381324E12, "maxY": 25982.629629629628, "series": [{"data": [[1.7738133E12, 19221.391304347828], [1.77381348E12, 17845.083333333336], [1.77381336E12, 25982.629629629628], [1.77381354E12, 12029.8], [1.77381324E12, 9517.1875], [1.77381342E12, 25170.96]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77381354E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9516.562499999998, "minX": 1.77381324E12, "maxY": 25982.25925925926, "series": [{"data": [[1.7738133E12, 19221.17391304348], [1.77381348E12, 17844.874999999996], [1.77381336E12, 25982.25925925926], [1.77381354E12, 12029.6], [1.77381324E12, 9516.562499999998], [1.77381342E12, 25170.840000000004]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77381354E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77381324E12, "maxY": 3.625, "series": [{"data": [[1.7738133E12, 0.7826086956521738], [1.77381348E12, 0.6666666666666665], [1.77381336E12, 1.3703703703703702], [1.77381354E12, 0.0], [1.77381324E12, 3.625], [1.77381342E12, 0.84]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77381354E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3817.0, "minX": 1.77381324E12, "maxY": 29739.0, "series": [{"data": [[1.7738133E12, 22954.0], [1.77381348E12, 20750.0], [1.77381336E12, 29019.0], [1.77381354E12, 15531.0], [1.77381324E12, 18213.0], [1.77381342E12, 29739.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7738133E12, 14521.0], [1.77381348E12, 15093.0], [1.77381336E12, 23381.0], [1.77381354E12, 5431.0], [1.77381324E12, 3817.0], [1.77381342E12, 18876.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7738133E12, 22740.8], [1.77381348E12, 20242.5], [1.77381336E12, 27877.2], [1.77381354E12, 15531.0], [1.77381324E12, 15730.100000000002], [1.77381342E12, 28689.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7738133E12, 22954.0], [1.77381348E12, 20750.0], [1.77381336E12, 29019.0], [1.77381354E12, 15531.0], [1.77381324E12, 18213.0], [1.77381342E12, 29739.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7738133E12, 19188.0], [1.77381348E12, 18015.0], [1.77381336E12, 26299.0], [1.77381354E12, 14162.0], [1.77381324E12, 9056.0], [1.77381342E12, 25956.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7738133E12, 22946.4], [1.77381348E12, 20631.0], [1.77381336E12, 28589.8], [1.77381354E12, 15531.0], [1.77381324E12, 18213.0], [1.77381342E12, 29461.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77381354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 20502.5, "minX": 1.0, "maxY": 20502.5, "series": [{"data": [[1.0, 20502.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 20502.5, "minX": 1.0, "maxY": 20502.5, "series": [{"data": [[1.0, 20502.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77381324E12, "maxY": 0.48333333333333334, "series": [{"data": [[1.7738133E12, 0.48333333333333334], [1.77381348E12, 0.3333333333333333], [1.77381336E12, 0.4166666666666667], [1.77381354E12, 0.016666666666666666], [1.77381324E12, 0.36666666666666664], [1.77381342E12, 0.38333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77381354E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77381324E12, "maxY": 0.45, "series": [{"data": [[1.7738133E12, 0.38333333333333336], [1.77381348E12, 0.4], [1.77381336E12, 0.45], [1.77381354E12, 0.08333333333333333], [1.77381324E12, 0.26666666666666666], [1.77381342E12, 0.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77381354E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77381324E12, "maxY": 0.45, "series": [{"data": [[1.7738133E12, 0.38333333333333336], [1.77381348E12, 0.4], [1.77381336E12, 0.45], [1.77381354E12, 0.08333333333333333], [1.77381324E12, 0.26666666666666666], [1.77381342E12, 0.4166666666666667]], "isOverall": false, "label": "HTTP リクエスト-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77381354E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77381324E12, "maxY": 0.45, "series": [{"data": [[1.7738133E12, 0.38333333333333336], [1.77381348E12, 0.4], [1.77381336E12, 0.45], [1.77381354E12, 0.08333333333333333], [1.77381324E12, 0.26666666666666666], [1.77381342E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77381354E12, "title": "Total Transactions Per Second"}},
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

