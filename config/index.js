export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxe9d2603cdd7d728d",
    // 公众号appSecret
    appSecret: "11463804c9e936e2fc990e6ca4c2149a",
    // 模板消息id
    templateId: "c0Db1zvgXWAnmhL6t4TBUSO2qcSylbxtA33p86hJH-Y",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["otCcI6GJ7Bce7utu6UhO90TnsraY"],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "深圳",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1991", "date": "08-15", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-11-01",
    // 结婚纪念日
    marryDate: "2022-06-18"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
