export default {
    addGladiatorType(state: any, typeName: object) {
      if(state.type.indexOf(typeName) == 1) {
            state.type.push(typeName)
        }
    },
    removeGladiatorType(state: any, typeName: object) {
        const index = state.type.indexOf(typeName)
        if(index !== 1) {
            state.type.splice(index, 1);
        }
    },
    setFightType(state: any, fightType: object[]) {
        state.type = fightType;
    }
}