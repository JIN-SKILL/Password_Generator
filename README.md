# 密碼產生器
使用 Express.js 建置的密碼產生器，能指定方式隨機生成密碼。

![Minion](https://raw.githubusercontent.com/JIN-SKILL/Example_Image/main/generator_password.png)

## 網站功能
+ 生成 1-100 組密碼
+ 密碼長度 4-16
+ 是否選用大小寫英文字母
+ 是否選用數字與特殊符號
+ 過濾不需要的字元

## 使用工具
+ Node.js 14.15.3
+ Express 4.17.1
+ Express-Handlebars: 5.2.0
+ Body-Parser 1.19.0
+ nodemon 2.0.6

## 安裝
1. 開啟終端機 (Terminal) 並前往安裝路徑的資料夾內輸入指令
    ```
    git clone https://github.com/JIN-SKILL/Password_Generator.git
    ```
2. 進入專案資料夾
	```
    cd Password_Generator
    ```
3. 安裝所需套件
	```
    npm i
    ```
3. 啟用 localhost 伺服器
	```
    npm run dev
    ```
4. 終端機 (Terminal) 顯示以下內容，即可在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用網站
	```
    The server is listening on http://localhost:3000