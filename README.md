## proximity-app

This project consists of a web app where you can search in season products per country, month and type (fruit or vegetable). If you click on any of the products generated you will get information about the product (nutritional info, properties, recipes) and a feature to create your own grocery list.

### Wireframe screenshots

![This is a alt text.](https://github.com/isaraz/proximity-app/blob/main/wiref.jpg?raw=true)

### How to run this project

Once you've download or cloned the project:

1. Create an .env file and add your credentials
2. create a database named _proximity_
3. then create tables in local executing
```
npm run migrate
```
4. Then install it with:
```
npm install
```
After that, if you want to run it in local execute this command:
```
npm start
```

### Database schema screenshot

![This is a alt text.](https://github.com/isaraz/proximity-app/blob/main/dbschema.png?raw=true)

### API Routes plan


| URI  | HTTP Method | Description | Request Object | Response Object |
| :---:| :---------: | :---------: | :--------------| :-------------- |
|/products|GET|Gets products according to country, month, and type|{<br> month: int <br> country: int <br> type: int <br>}|{ <br> ID: integer <br> Name: string <br> ProductID: int <br> SeasonID: int <br> MonthID: int <br> CountryID: int <br> TypeID: int <br>}|
|/countries|GET|Gets countries by id||{ <br> ID: int <br> Name: string <br> }|  
|/months|GET|Gets months by id||{ <br> ID: int <br> Name: string <br> }| 
|/seasons|GET|Gets seasons by id||{ <br> ID: int <br> Name: string <br> }| 

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
