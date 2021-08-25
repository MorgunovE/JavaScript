1. add assets and copy files
2. add index.html and code
3. add Post.js for model and code
4. add index.js and code
5. add script in index.html
6. add analytics.js and code
7. add analytics.js in index.html
8. add src and move files
9. npm init
10. npm i -D webpack webpack-cli
11. add webpack.config.js and code
12. npm install -g webpack
13. npm i -g webpack-cli
14. webpack | node_modules\.bin\webpack
15. change code in Post
16. import Post in index.js
17. copy index.html in dist and add scripts bundle.js
18. change entry in webpack.config.js
19. add name in webpack.config.js
20. change in index.html scripts
21. change bundle to contenthash in webpack.config.js
22. change code analytics.js
23. npm i -D html-webpack-plugin
24. add plugin in webpack.config.js
25. add code in Post.js
26. commit script in index.html
27. add template in webpack.config.js
28. npm i -D clean-webpack-plugin
29. import clean in webpack.config.js
30. change code in analytics.js
31. webpack
32. add script in package.json "dev": "webpack --mode development",
    "build": "webpack --mode production"
33. add context in webpack.config.js
34. add src/styles and styles.css and code
35. import styles in index.js
36. add module in webpack.config.js
37. npm i -D style-loader css-loader
38. import json in index.js
39. add script watch in package.json "watch": "webpack --mode development --watch"
40. import img in index.js
41. add img in Post.js
42. add loader npm i -D file-loader / not working need type: 'asset/resource',
43. add loader file in webpack.config.js // type: 'asset/resource',
44. add style for img
45. add logo in index.html
46. add roboto.css in styles
47. import roboto in style.css
48. add style in roboto.css
49. add font in webpack.config.js // type: 'asset/resource',
50. https://necolas.github.io/normalize.css/
51. npm install normalize.css
52. import normalise in style.css
53. change "main": "index.js", to  in package.json
54. add loader xml in webpack.config.js
55. npm i -D xml-loader
56. import xml in index.js
57. add csv loader in webpack.config.js
58. npm i -D csv-loader
59. import csv in index.js
60. npm i -D papaparse / not needed right now for csv
61. add resolve in webpack.config.js
62. add models and move there Post.js
63. add alias in webpack.config.js
64. use alias @models and @ in index.js
65. npm i -S jquery
66. import jquery in index.js
67. add pre in index.html
68. npm run dev
69. add parameters in Post.js
70. import jquery in analytics.js
71. npm run dev
72. add optimisation in webpack.config.js
73. npm run dev
74. add class in index.js
75. npm i -D webpack-dev-server // or npm i -D webpack serve
76. add devServer in webpack.config.js
77. npm i
78. add script in package.json "start": "webpack-dev-server --mode development --open" // or webpack serve --mode development --open
79. npm run start
80. add style code
81. npm i -D copy-webpack-plugin
82. add icon in index.html
83. import Copy plugin in webpack.config.js
84. npm install --save-dev mini-css-extract-plugin
85. add mini-css-extract-plugin in webpack.config.js
86. test set NODE_ENV=development
87. npm i -D cross-env
88. change script in package.json "dev": "cross-env NODE_ENV=development webpack --mode development", add others cross-env NODE_ENV=development or production
89. not need hmr and reloadAll in webpack.config.js
90. npm run build
91. optimise plugin in webpack.config.js
92. npm run build
93. https://webpack.js.org/plugins/terser-webpack-plugin/
94. npm install terser-webpack-plugin --save-dev
95. optimize-css-assets-webpack-plugin
96. npm install --save-dev optimize-css-assets-webpack-plugin /not works with webpack 5 up
97. npm install css-minimizer-webpack-plugin --save-dev
98. import plugins in webpack.config.js
99. npm run dev
100. npm run build
101. add rules for less in webpack.config.js
102. npm i -D less-loader
103. add less.less in styles and code
104. import  less in index.js
105. add box in index.html
106. npm run dev
107. npm i -D less 
108. change hash in webpack.config.js
109. npm run dev
110. npm run build
111. npm run start
112. npm i -D node-sass sass-loader - old // new npm i -D sass sass-loader
113. add loader in webpack.config.js
114. add scss.scss and code
115. import scss in index.js
116. add card in index.html
117. npm run start
118. add optimisation in webpack.config.js
119. google babel https://babeljs.io/
120. add babel.js snd code
121. import babel.js in index.js 
122. npm install --save-dev babel-loader @babel/core
123. add rules in webpack.config.js
124. npm install --save-dev @babel/preset-env
125. add "browserslist": "> 0.25%, not dead" in package.json
126. npm run dev
127. https://babeljs.io/docs/en/babel-polyfill
128. npm install --save @babel/polyfill
129. add parameters for polyfill in webpack.config.js
130. npm run dev
131. add class in babel.js
132. npm run dev // if error install plugin npm i -D @babel/plugin-proposal-class-properties 
133. add plugin in webpack.config.js // only if 132
134. npm run dev
135. add params in webpack.config.js add preset  https://babeljs.io/docs/en/babel-preset-typescript
136. npm install --save-dev @babel/preset-typescript
137. change analytics.js to analytics.ts and code
138. change analytics.ts in webpack.config.js
139. npm run dev
140. add preset react https://babeljs.io/docs/en/babel-preset-react
141. npm install --save-dev @babel/preset-react
142. add optimisation for preset in webpack.config.js
143. add react in webpack.config.js
144. npm i react react-dom
145. change index.js to index.jsx
146. import react in index.jsx
147. change index.html
148. npm run dev
149. change to index.jsx in webpack.config.js
150. npm run dev
151. add https://webpack.js.org/configuration/devtool/ in webpack.config.js devtool:isDev ? 'source-map': false,
152. npm run dev
153. npm run build
154. npm i -D eslint-loader
155. change loader in webpack.config.js
156. add .eslintrc and code
157. npm i -D eslint
158. add const in babel.js
159. npm run dev
160. npm i -D babel-eslint
161. add extends in .eslintrc 
162. npm run dev
163. npm i lodash
164. import lodash in babel.js
165. npm run dev
166. webpack-bundle-analyzer https://www.npmjs.com/package/webpack-bundle-analyzer
167. npm i webpack-bundle-analyzer -D
168. move plugins in webpack.config.js
169. import webpack-bundle-analyzer in webpack.config.js
170. npm run dev
171. npm run build
172. add script in package.json "stats": "webpack --json > stats.json && webpack-bundle-analyzer stats.json"
173. end