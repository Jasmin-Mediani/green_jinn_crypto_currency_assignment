// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { useEffect } from 'react';
//import NivoData from './NivoData.json'

const data = [{
    "id": "japan",
    "color": "hsl(214, 70%, 50%)",
    "data": [{
            "x": "plane",
            "y": 219
        },
        {
            "x": "helicopter",
            "y": 295
        },
        {
            "x": "boat",
            "y": 84
        },
        {
            "x": "train",
            "y": 7
        },
        {
            "x": "subway",
            "y": 53
        },
        {
            "x": "bus",
            "y": 174
        },
        {
            "x": "car",
            "y": 59
        },
        {
            "x": "moto",
            "y": 164
        },
        {
            "x": "bicycle",
            "y": 225
        },
        {
            "x": "horse",
            "y": 97
        },
        {
            "x": "skateboard",
            "y": 100
        },
        {
            "x": "others",
            "y": 294
        }
    ]
},
{
    "id": "france",
    "color": "hsl(332, 70%, 50%)",
    "data": [{
            "x": "plane",
            "y": 216
        },
        {
            "x": "helicopter",
            "y": 232
        },
        {
            "x": "boat",
            "y": 217
        },
        {
            "x": "train",
            "y": 91
        },
        {
            "x": "subway",
            "y": 62
        },
        {
            "x": "bus",
            "y": 40
        },
        {
            "x": "car",
            "y": 64
        },
        {
            "x": "moto",
            "y": 36
        },
        {
            "x": "bicycle",
            "y": 134
        },
        {
            "x": "horse",
            "y": 160
        },
        {
            "x": "skateboard",
            "y": 200
        },
        {
            "x": "others",
            "y": 216
        }
    ]
},
{
    "id": "us",
    "color": "hsl(286, 70%, 50%)",
    "data": [{
            "x": "plane",
            "y": 5
        },
        {
            "x": "helicopter",
            "y": 191
        },
        {
            "x": "boat",
            "y": 59
        },
        {
            "x": "train",
            "y": 100
        },
        {
            "x": "subway",
            "y": 156
        },
        {
            "x": "bus",
            "y": 60
        },
        {
            "x": "car",
            "y": 215
        },
        {
            "x": "moto",
            "y": 70
        },
        {
            "x": "bicycle",
            "y": 270
        },
        {
            "x": "horse",
            "y": 151
        },
        {
            "x": "skateboard",
            "y": 1
        },
        {
            "x": "others",
            "y": 294
        }
    ]
},
{
    "id": "germany",
    "color": "hsl(301, 70%, 50%)",
    "data": [{
            "x": "plane",
            "y": 4
        },
        {
            "x": "helicopter",
            "y": 192
        },
        {
            "x": "boat",
            "y": 102
        },
        {
            "x": "train",
            "y": 234
        },
        {
            "x": "subway",
            "y": 284
        },
        {
            "x": "bus",
            "y": 271
        },
        {
            "x": "car",
            "y": 191
        },
        {
            "x": "moto",
            "y": 241
        },
        {
            "x": "bicycle",
            "y": 116
        },
        {
            "x": "horse",
            "y": 13
        },
        {
            "x": "skateboard",
            "y": 26
        },
        {
            "x": "others",
            "y": 60
        }
    ]
},
{
    "id": "norway",
    "color": "hsl(155, 70%, 50%)",
    "data": [{
            "x": "plane",
            "y": 19
        },
        {
            "x": "helicopter",
            "y": 46
        },
        {
            "x": "boat",
            "y": 267
        },
        {
            "x": "train",
            "y": 189
        },
        {
            "x": "subway",
            "y": 268
        },
        {
            "x": "bus",
            "y": 70
        },
        {
            "x": "car",
            "y": 161
        },
        {
            "x": "moto",
            "y": 258
        },
        {
            "x": "bicycle",
            "y": 209
        },
        {
            "x": "horse",
            "y": 107
        },
        {
            "x": "skateboard",
            "y": 107
        },
        {
            "x": "others",
            "y": 19
        }
    ]
}
];


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NivoChart = (data) => {


    useEffect(() =>{
        MyResponsiveLine(data);
        
    }, [data])

    
    
    const MyResponsiveLine = (data) => (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
    
}

export default NivoChart