# Github 中文圈黑名单用户记录

## 介绍
随着Github的壮大，越来越多的用户涌进了Github，但其中鱼龙混杂，难免有低质量用户存在。
由于Github以英文为主，导致中文内容难以经过筛查和过滤，故使用本仓库记录低质量、发表不当言论的用户。

## 规则
所有违规用户在“user/{用户名}”里储存，文件格式为json，包含以下信息：
- 用户名:username
- 被举报类型:type
- 严重程度:level
- 证据:evidence [原文地址, 存档地址1, 存档地址...]
- 描述:description

比如，用户名为evilperson的人在[qcminecraft/example/issue/666]()下发表了包含人身攻击的内容，程度十分恶劣，那么请在
`/user/evalperson` 中写入
```
{
    "username": "evalperson",
    "type": 1,
    "level": 5,
    "evidence": [
        "https://github.com/qcminecraft/example/issue/666",
        "https://web.archive.org/web/20190411142706/https://github.com/qcminecraft/example/issue/666"
    ],
    "description": "描述"
}
```

## 须知
- Github官方虽然处理举报时间较长，但仍然有用，请在添加黑名单前[举报](https://github.com/contact/report-content)或
- 如果你发现了让你不舒服的内容，请**不要**回复。否则，不但你的PR会被驳回，而且如果你的言辞同样严重，你可能也会进入黑名单。
- 举报必须客观真实，如果你多次虚假举报，你也可能会进入黑名单。
- 为了防止证据内容被删除，建议在举报时从[https://archive.org/]()将内容存档。

## Type 举报类别
| Type | 类别 |
| -----| ----|
| 1    | 人身攻击 | 
| 2    | 广告 |
| 3    | 政治敏感 |
| 4    | 作弊行为 |
| 8    | 其他不当言论 |
| 9    | 虚假举报过多 |

## Level 举报等级
等级由轻到重，分为1~5五个等级

## 贡献
感谢！你可以通过以下方式参与贡献：

### 发布Issue
从[这里](https://github.com/qcminecraft/gh-blacklist/issues/new/choose)发布一个Issue，如果符合要求，则会被添加到仓库

### 提交 Pull requests
你可以直接按照以上要求在仓库内创建文件并提交PR

## 申请移除
>人非圣贤，孰能无过。  ————《左传·宣公二年》

每个人都可能犯错误，如果及时补救还为时不晚，若符合以下条件则可以考虑删除黑名单：
- 删除不当言论，并在原文下或在社交媒体上发文道歉
- 积极贡献本仓库
- 获得原谅

## 调用
只要Get请求
`https://raw.githubusercontent.com/qcminecraft/gh-blacklist/master/user/{用户名}`
就好，返回值见上文

## 结语
希望大家共同努力，共建良好的网络环境！
