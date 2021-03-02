import { Popup, Button, Cell, CellGroup } from 'vant';
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
  }) {
    Vue.component(Button.name, Button),
    Vue.component(Popup.name, Popup),
    Vue.component(Cell.name, Cell),
    Vue.component(CellGroup.name, CellGroup)
  }
};
export default ant;