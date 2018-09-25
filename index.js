var data = {
  // input form
  titleMsg: "Hello",
  text: "",
  inputMsg: "",
  textAreaMsg: "",

  // button click event
  eventMsg: "NO Click",

  // table
  taskColumns: {
    id: "ID",
    subject: "件数",
    category: "カテゴリ",
    date: "日付"
  },
  tasks: [
    {
      id: 1,
      subject: "タスク1",
      category: "カテゴリー1",
      date: "2016-12-01"
    },
    {
      id: 2,
      subject: "タスク2",
      category: "カテゴリー2",
      date: "2016-12-02"
    },
    {
      id: 3,
      subject: "タスク3",
      category: "カテゴリー3",
      date: "2016-12-03"
    }
  ],

  // image
  imageSrc: "assets/logo.png",

  // select
  selectOptions: [
    { name: "おすすめ順", value: "recommend" },
    { name: "費用安い順", value: "lowinitial" },
    { name: "近い順", value: "nearly" }
  ],

  // counter
  clickCount: 0,

  // todo
  newTodo: "",
  todos: ["bu car"],

  // search
  searchQuery: "",
  searchTargetList: [
    {
      id: "ID_A",
      description: "Desc_A"
    },
    {
      id: "ID_B",
      description: "Desc_B"
    }
  ]
};

const app = new Vue({
  el: "#app",
  data: data, // データオブジェクト
  methods: {
    // input form
    resetText: function() {
      this.text = "";
    },

    // button click event
    clickButton() {
      this.eventMsg = "Clicked";
    },

    // counter
    counter: function(event) {
      if (this.clickCount < 10) {
        this.clickCount += 1;
      } else {
        this.clickCount = 0;
      }
    },

    // todo
    addTodo: function() {
      if (this.newTodo == "") return;
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    deleteTodo: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  },
  created() {
    console.log("----- created -----");
  },
  mounted() {
    console.log("----- mounted -----");
  },
  computed: {
    searchResult() {
      console.log("----- computed -----");
      return this.searchTargetList.filter(res => {
        return this.searchQuery
          .toLowerCase()
          .split(/\s+/)
          .map(
            q =>
              res.id.toLowerCase().indexOf(q) > -1 ||
              res.description.toLowerCase().indexOf(q) > -1
          ) // 検索
          .every(result => result === true); // 全ての検索語にマッチしたものを取り出す
      });
    }
  }
});
