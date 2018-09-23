var data = {
  animals: [
    { id: 0, name: "Dog" },
    { id: 1, name: "Cat" },
    { id: 2, name: "Horse" }
  ]
};

Vue.component("my-apple", {
  template: "<li>This is a Apple</li>"
});

Vue.component("my-animals", {
  props: ["receive"],
  template: "<li>{{ receive.name }}</li>"
});

const app = new Vue({
  el: "#app",
  data: data, // データオブジェクト
  methods: {},
  created() {
    console.log("----- created -----");
  },
  mounted() {
    console.log("----- mounted -----");
  },
  computed: {}
});
