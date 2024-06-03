type Predicate =  () => boolean

type Effect = (result: boolean) => void

const newIf = (predicate: Predicate) => {
    const result = predicate()

    const newThen = (thenEffect: Effect | undefined) => {
        if(result && thenEffect){
            thenEffect(result)
        }
        return {then: newThen, else: newElse};
    }

    const newElse = (elseEffect?: Effect | undefined) => {
        if(!result && elseEffect){
            elseEffect(result)
        }

        return {if: newElseIf}
    }

    const newElseIf = (elifPredicate: Predicate) => {
        return newIf(elifPredicate)
    }

    return {
        then: newThen,
        else: newElse
    }
}

export default newIf