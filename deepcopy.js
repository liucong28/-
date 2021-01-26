
const data1 = [{
    name: '中国',
    children: [{
        name: '教第三节课',
    },
    {
        name: '教呼呼',
        children: [{
            name: '大一',
            children: [{
                name: '课程1',
                children: [{
                    name: '1231'
                },
                {
                    name: '121'
                }
                ]
            },
            {
                name: '课程3',
                children: [{
                    name: '1233'
                },]
            },
            ]
        }]
    },
    {
        name: '活动',
        children: null
    }
    ]
},
{
    name: '菜单'
}
];

// 使用递归 和 非递归方式
let names = [];
function getNames(data) {

    data.forEach(item => {

        let keys = Object.keys(item);

        keys.forEach(ele => {
            if (ele === 'name') {
                //console.log('ele' + ele, 'item[ele]:' + item[ele]);
                names.push(item[ele]);
            } else if (ele === 'children') {
                if (item[ele]) {
                    getNames(item[ele]);
                }

            }
        })
    });
}

getNames(data1);
console.log(names)


let names2 = [];
function getNames2(data) {
    let str = JSON.stringify(data);
    let arr = str.split('"');

    arr.forEach((ele, index, Array) => {
        if (ele === 'name') {
            if (Array[index + 2]) {
                names2.push(Array[index + 2])
            }

        }
    })

}
getNames2(data1);
console.log(names2)
