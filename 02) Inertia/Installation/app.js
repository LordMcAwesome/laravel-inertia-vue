import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "../css/packages/vue-toastification.css";
import moment from "moment";
import * as ConfirmDialog from "vuejs-confirm-dialog";

import Layout from "./Shared/Layout.vue";

import axios from "axios";
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        const {
            response: { status, data },
        } = err;

        if (status === 401) {
            window.location = route("login");
        }
    }
);

createInertiaApp({
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}.vue`)).default;
        page.layout ??= Layout;
        return page;
    },
    //resolve: name => import(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        const toastOptions = {
            // You can set your default options here
        };

        let app = createApp({ render: () => h(App, props) });

        app.use(plugin);
        app.mixin({ methods: { route } });
        app.use(Toast, toastOptions);
        app.use(ConfirmDialog);
        app.config.globalProperties.$moment = moment;
        app.mount(el);
    },
});

InertiaProgress.init();
