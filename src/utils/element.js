import Vue from "vue";
import { Button } from "element-ui";

const components = [Button];

components.forEach((component) => {
  Vue.use(component);
});
