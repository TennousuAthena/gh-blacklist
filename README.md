# Github 中文圈黑名单用户记录

## 介绍
随着Github的壮大，越来越多的用户涌进了Github，但其中鱼龙混杂，难免有低质量用户存在。
由于Github以英文为主，导致中文内容难以经过筛查和过滤，故使用本仓库记录低质量、发表不当言论的用户。

## 规则
所有违规用户在“user/{用户名}”里储存，文件格式为json，包含以下信息：
- 用户名:username
- 被举报类型:type
- 严重程度:level
- 证据：evidence [原文地址, 存档地址1, 存档地址...]

比如，用户名为evalperson的人在[qcminecraft/example/issue/666]()下发表了包含人身攻击的内容，程度十分恶劣，那么请在
`/user/evalperson` 中写入
```
{
    "username": "evalperson",
    "type": 1,
    "level": 5,
    "evidence": [
        "https://github.com/qcminecraft/example/issue/666",
        "https://web.archive.org/web/20190411142706/https://github.com/qcminecraft/example/issue/666"
    ]
}
```

## 须知
- 如果你发现了让你不舒服的内容，请**不要**回复。否则，不但你的PR会被驳回，而且如果你的言辞同样严重，你可能也会进入黑名单。
- 举报必须客观真实，如果你多次虚假举报，你也可能会进入黑名单。
- 为了防止证据内容被删除，建议在举报时从[https://archive.org/]()将内容存档。
