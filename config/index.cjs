/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxaf193513be4102dc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a97440004e33eb5eb2a9c1cc884e36b1',

  PROVINCE: '广东',
  CITY: '东莞',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEl6O57tr0qx4Ngj1pB0iqei5DhA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'giAiUPShnJaMu8h1Q-s2XBvMw09H2UI0YJEm5XV0zF0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1995', date: '11-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-17' },
        { keyword: 'miss_day', date: '2022-09-19' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Yvi0GD-A-uM95tFY6lU2dxH4QhLUQIQYv-XYDPttrcpPf2qWpo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEl6O59xrG8-0y0Ur4oDQ0nl7MFo',
    }
  ],

}

module.exports = USER_CONFIG

