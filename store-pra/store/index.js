export const state = () => ({
  email: "",
  username: "",
  phone: "",
  password: "",
  cpassword: "",
  gender: "",
  countrycode: "",
});

export const gatters = {
  getCounter(state) {
    return state.counter;
  },
};

export const mutations = {
  ADD_NAME(state, payload) {
    state.name = payload;
  },
  REGISTER(state, payload) {
    state.email = payload.email;
    state.username = payload.username;
    state.password = payload.password;
    state.cpassword = payload.cpassword;
    state.phone = payload.phone;
    state.gender = payload.selectedgender;
    state.countrycode = payload.selectedcountrycode;
  },
  LOGIN(state, payload) {
    state.username = payload.username;
    state.password = payload.password;
  },
};

export const actions = {
  async fetchCounter({ state }) {
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};
