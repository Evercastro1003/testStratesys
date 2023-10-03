export interface FilterTabProps {
    filterData: {
        key: string,
        title: string,
        MyFunction: () => void
    }[]
    filterBy: string | undefined
}