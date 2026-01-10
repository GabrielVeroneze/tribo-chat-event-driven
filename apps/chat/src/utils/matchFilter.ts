interface HasName {
    name: string
}

interface MatchFilterParams<T extends HasName> {
    filter: string
    list?: T[]
}

type MatchFilterCallback<T> = (result?: T[]) => void

export const matchFilter = <T extends HasName>(
    params: MatchFilterParams<T>,
    callback: MatchFilterCallback<T>,
) => {
    const regexp = new RegExp(params.filter, 'i')

    const listMatchingWithFilter = params.list?.filter((item) =>
        item.name.match(regexp),
    )

    callback(listMatchingWithFilter)
}
