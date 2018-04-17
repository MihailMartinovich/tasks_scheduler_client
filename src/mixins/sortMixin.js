const sortMixin = {
  methods: {
    ascendingSort: function (sortField) {
      return function (a, b) {
        return a[sortField] - b[sortField];
      };
    }
  }
};

export default sortMixin;
