var Main = {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
      };
    }
  };
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')

console.log(Main.data().value1);
ELEMENT.locale(ELEMENT.lang.en)