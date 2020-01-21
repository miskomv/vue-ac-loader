import Loader from "./Loader";

export default {
    install(Vue, options) {

        const root = new Vue({render: createElement => createElement(Loader)});
        root.$mount(document.body.appendChild(document.createElement('div')));

        const AcLoader = root.$children[0];

        Vue.prototype.$showLoader = () => {
            AcLoader.showLoader();
        };

        Vue.prototype.$hideLoader = () => {
            AcLoader.hideLoader();
        };
    }
};
