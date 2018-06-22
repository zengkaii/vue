// var o = {};
// o.step = 1;
// var bValue = 1;
// Object.defineProperty(o, 'a',{
//     // value:7,
    
//     get: function(){
//         console.log('get');
//         return bValue;
//     },
//     set: function(val){
//         console.log('set');
//         bValue = val;
//     }
//     // writable:false
// });
// o.a = 2;
// console.log(o.a)
// (function(){
//     // 以下为严格模式
//     'use strict'
//     // console.log(this)
//     var o = {};
//     Object.defineProperty(o , 'a',{
//         value:7,
//         writable:false
//     });
//     console.log(o.a);
//     o.a = 25;
//     console.log(o.a);
// })();

// var o = {};
// Object.defineProperty(o, 'a',{
//     value:1,
//     enumerable:true

// });
// Object.defineProperty(o ,'b',{
//     value:2,
//     enumerable:false
// });
// Object.defineProperty(o , 'c' ,{
//     value:3
// });
// o.d = 4;
// console.log(Object.keys(o));
// for(let key in o) {
//     console.log(key,o[key]);
// }

// 'use strict'
// var o ={};
// Object.defineProperty(o ,'a' ,{
//     configurable:false,
//     get:function(){
//         return 1;
//     }
// });
// console.log(o.a);
// delete o.a;
// console.log(o.a);



function Archiver(){
    var temperatrue = null;
    var archiver = [];
    Object.defineProperty(this, 'temperature',{
        get: function(){
            console.log('get');
            return temperatrue;
        },
        set: function(value){
            temperatrue = value;
        }
    })
    // var data ={
    //     age: 20,
    //     name: '曾凯'
    // }
    // for (let key in data) {
    //     Object.defineProperty(data,key,{
    //         get: function(){
    //             console.log('get');
    //             return data[key];
    //         },
    //         set:function(newValue){
    //             console.log('set');
    //             data[key]=newValue;
    //         }
    //     })
    // }
    // data.age=22;
}
var arc =new Archiver();
arc.temperatrue = 35;
