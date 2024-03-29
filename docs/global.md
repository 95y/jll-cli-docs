# 全局自定义变量

## initGlobalData(bizFields, bizContent)
#### 初始化全局变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bizFields | String | 自定义业务字段名 |
| bizContent | Object,Array | 自定义业务数据 |
``` javascript
/**
 * 初始化全局变量 
 * @param bizFields: 自定义业务字段 如: 'GLOBAL_EXAMPLE' 
 * @param bizContent: 自定义业务数据，接收 对象或者数组
 **/
const globalRes = await jll.initGlobalData(
  bizFields, 
  bizContent
)
console.log('globalRes', globalRes);
```

## batchInitGlobal(paramList)
#### 批量初始化全局变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| paramList | Array | 批量初始化的数据 |
``` javascript
/**
 * 批量初始化全局变量 
 * 批量初始化多个bizFields的数据
 * @param paramList: 批量初始化的数据
 **/
const paramList = [
	{bizFields: 'Global_1', bizContent: {textVal: 1}},
	{bizFields: 'Global_2', bizContent: {textVal: 2}},
]
const globalRes = await jll.batchInitGlobal(paramList)
console.log('globalRes', globalRes);
```

## batchGetGlobal(paramList)
#### 批量获取全局变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| paramList | Array | 批量查询的数据bizFields |
``` javascript
/**
 * 批量获取全局变量 
 * 批量获取多个bizFields的数据
 * @param paramList: 批量获取的数据
 **/
const paramList = [
	{bizFields: 'Global_1'},
	{bizFields: 'Global_2'},
]
const globalRes = await jll.batchGetGlobal(paramList)
console.log('globalRes', globalRes);
```

## batchGlobal(paramList)
#### 批量修改全局变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| paramList | Array | 批量初始化的数据 |
``` javascript
/**
 * 批量修改全局变量 
 * 批量修改多个bizFields的数据
 * @param paramList: 批量初始化的数据
 **/
const paramList = [
	{bizFields: 'Global_1', bizContent: {textVal: 1}},
	{bizFields: 'Global_2', bizContent: {textVal: 2}},
]
const globalRes = await jll.batchGlobal(paramList)
console.log('globalRes', globalRes);
```

## getGlobalData(bizFields)
#### 获取全局自定义变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bizFields | String | biz数据属性的描述列表,调用方的自己定义的,类似java里面对象的类描述信息,业务方可以用自定义bizId |

``` javascript
// `GLOBAL_DATA` 是自定义数据的 key
const getGlobalRes = await jll.getGlobalData('GLOBAL_DATA')
console.log('getGlobalRes', getGlobalRes);

// 成功示例
{
	"code": 0,
	"apiName": "getGlobalData",
	"errorMessage": "成功",
	"data": {
		"bizContent": {
			"global": 4
		},
		"dataVersion": 7
	}
}
```

## getGlobalValue(key)
#### 获取全局自定义变量中某个值
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | String | 获取对象下的某个值，例如：GLOBAL_DATA.global |

``` javascript
// `GLOBAL_DATA` 获取 GLOBAL_DATA 下的 global 值
const getData = await jll.getGlobalValue('GLOBAL_DATA.global')
console.log('getData', getData); // 4
```

## setGlobalData(bizFields, bizContent, dataVersion)
#### 更新全局自定义变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bizFields | String | 业务字段的 key |
| bizContent | Object, Array | 业务字段的 内容 |
| dataVersion | Number | 如果需要版本控制，则需要传入dataVersion，不需要则不传 |

``` javascript
const setGlobalRes = await jll.setGlobalData('GLOBAL_DATA', {global: 4}, 6)
console.log('setGlobalRes', setGlobalRes);

```

## setGlobalValue(key, value, dataVersion)
#### 更新全局自定义变量中某个值
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | String | 业务字段的 key + 属性名 如: GLOBAL_DATA.global |
| value | 不限 | 需要修改的值 |
| dataVersion | Number | 如果需要版本控制，则需要传入dataVersion，不需要则不传 |

``` javascript
const setGlobalValue = await jll.setGlobalValue(
	'GLOBAL_DATA.global',
	3,
	'0'
)
console.log('setGlobalValue', setGlobalValue);

// 成功示例
{
	"code": 0,
	"apiName": "updateGloBalDataWithDataVersionSync",
	"errorMessage": "成功",
	"data": {
		"bizFields": "GLOBAL_DATA",
		"constructor": 1610711353,
		"dataVersion": 10,
		"errorCode": 0
	}
}
```

## setGlobalValueAdd(key, value, max)
#### 更新全局自定义变量指定值，自增，多人同时竞争一个东西时，可以使用
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | String | 业务字段的 key + 属性名 如: GLOBAL_DATA.global |
| value | Number | 需要新增的数值 |
| max | Number | 最大值，如果设定最大值，自增超过最大值，则返回失败 |

``` javascript
const response_1 = await jll.setGlobalValueAdd('GLOBAL_DATA.global', 10, 999)
console.log('response_1', response_1);

// 成功示例
{
	"code": 0,
	"apiName": "setGlobalIntSync",
	"errorMessage": "成功",
	"data": null
}
```

## setGlobalValueSub(key, value, min)
#### 更新全局自定义变量指定值，自减，多人同时竞争一个东西时，可以使用
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | String | 业务字段的 key + 属性名 如: GLOBAL_DATA.global |
| value | Number | 需要新增的数值 |
| min | Number | 最小值，如果设定最小值，自减超过最小值，则返回失败 |

``` javascript
const response_1 = await jll.setGlobalValueSub('GLOBAL_DATA.global', 10, 0)
console.log('response_1', response_1);

// 成功示例
{
	"code": 0,
	"apiName": "setGlobalValueSub",
	"errorMessage": "成功",
	"data": null
}
```

