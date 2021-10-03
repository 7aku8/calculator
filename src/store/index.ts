import { Commit, createStore } from 'vuex'

interface State {
  equation: string[];
  temp: string;
}

const state: State = {
  equation: [],
  temp: ''
}

const actions = {
  setCharacter ({
    commit,
    state
  }: { commit: Commit, state: State }, data: { key: string }) {
    switch (data.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        commit('addTempCharacter', data)
        break
      case '0':
        commit('setZero')
        break
      case '-':
      case '+':
      case '/':
      case '*':
        commit('setCharacter', data)
        break
      case ',':
        commit('setComma')
        break
      case '=':
        commit('forceCompute')
        break
      case 'C':
        commit('eraseLast')
        break
      case 'CH':
        commit('changeCharacter')
        break
      case '%':
        commit('calculatePercent')
    }

    if (state.equation.length >= 3) {
      commit('compute')
    }
  }
}

const mutations = {
  calculatePercent (state: State) {
    if (state.equation.length === 2 && state.temp) {
      state.equation.push(state.temp)
      state.temp = ''

      state.equation[2] = (parseFloat(state.equation[2]) / 100).toString(10)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.commit('compute')
    }
  },
  changeCharacter (state: State) {
    if (state.temp.length) {
      switch (state.temp[0]) {
        case '-':
          state.temp = state.temp.slice(1, state.temp.length)
          break
        default:
          state.temp = '-' + state.temp
      }
    } else {
      state.temp = '-'
    }
  },
  eraseLast (state: State) {
    if (state.temp.length) {
      state.temp = state.temp.slice(0, state.temp.length - 1)
    }
  },
  addTempCharacter (state: State, data: { key: string }) {
    state.temp += data.key
  },
  setCharacter (state: State, data: { key: string }) {
    if (state.temp?.length) {
      state.equation.push(state.temp)
      state.equation.push(data.key)

      state.temp = ''
    }
  },
  setComma (state: State) {
    if (!state.temp.includes(',') && state.temp.length) {
      state.temp += ','
    }
  },
  setZero (state: State) {
    if (state.temp.length) {
      state.temp += '0'
    }
  },
  forceCompute (state: State) {
    state.equation.push(state.temp)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.commit('compute')
  },
  compute (state: State) {
    const x = parseFloat(state.equation[0])
    const y = parseFloat(state.equation[2])

    let result = 0

    switch (state.equation[1]) {
      case '+':
        result = x + y
        break
      case '-':
        result = x - y
        break
      case '*':
        result = x * y
        break
      case '/':
        result = x / y
        break
    }
    result = Math.round(result * 100) / 100

    state.equation = []
    state.temp = result.toString(10)
  }
}

const getters = {
  equation (state: State) {
    return state.equation.join(' ')
  },
  temp (state: State) {
    return state.temp
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
