export default {
    addGladiatorType({commit}: any, typeName: object) {
      commit('addGladiatorType', typeName);
    },
    removeGladiatorType({commit}: any, typeName: object) {
      commit('removeGladiatorType', typeName);
    },
    setFightType({commit}: any, fightType: object[]) {
      commit('setFightType', fightType)
    }
}