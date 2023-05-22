export default {
  name: "MainScreen",
  props: {},
  methodes: {
    login(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log(123);
    },
  },
};
