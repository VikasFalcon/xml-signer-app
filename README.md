
# XML Signer

Sign your xml payload using this app




## How to use

#### Pull Docker image & Run apllication

```
  docker run -d --name xml-signer-app -p 4500:3000 vikasfalcon/xml-signer-app:1.0.0
```

| Form Fields | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `XML Data` | `string` | **Required**. Your xml payload|
| `API Name` | `string` | **Required**. XML payload API Name|
| `Signature Location` | `string` | **Required**. Where exactly you want to store signature|
| `Signer Private Key` | `string` | **Required**. Signing Private Key|



## Authors

- [@VikasSawant](https://github.com/VikasFalcon)

