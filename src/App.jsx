import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store.js';

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
        <AppContainer>
            <Provider store={store}>
                {rootElem}
            </Provider>
        </AppContainer>,
        document.getElementById("app")
    );
}
