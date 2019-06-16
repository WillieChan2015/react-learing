import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import getRouter from './router/router';

// 初始化
renderWithHotReload(getRouter());

// 热更新
if (module.hot) {
    module.hot.accept('./router/router.js', () => {
        const getRouter = require("./router/router.js").default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(rootElem) {
    ReactDom.render(
        <AppContainer>{rootElem}</AppContainer>,
        document.getElementById("app")
    );
}
