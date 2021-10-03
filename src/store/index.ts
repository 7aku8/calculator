import { createStore } from 'vuex'

interface State {
  equation: string[];
  temp: string | null;
}

const state: State = {
  equation: [],
  temp: null
}

const actions = {
  setCharacter (state: State, data: { key: string }) {
    switch (data.key) {
      case '':
    }
  }
}

const mutations = {

}

export default createStore({ state, mutations, actions })
