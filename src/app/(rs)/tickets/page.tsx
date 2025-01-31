import TicketSearch from "@/app/(rs)/tickets/TicketSearch"
import { getOpenTickets } from "@/lib/queries/getOpenTickets"
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults"
import TicketTable from "@/app/(rs)/tickets/TicketTable"


export const metadata = {
    title: "Tickets",
}


export default async function Tickets({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams

    // if (!searchText) return <TicketSearch />


    if (!searchText) {
        const results = await getOpenTickets()
        return (
            <>
                <TicketSearch />
                {/* <p>{JSON.stringify(results)}</p> */}
                {results.length ? <TicketTable data={results} /> : (
                    <p className="mt-4">No Results found</p>
                )}
                {/* <p>{JSON.stringify(results)}</p> */}

            </>
        )
    }


    const results = await getTicketSearchResults(searchText)

    return (
        <>
            <TicketSearch />
            {/* <p>{JSON.stringify(results)}</p> */}

            {results.length ? <TicketTable data={results} /> : (
                <p className="mt-4">No Results found</p>
            )}

        </>
    )
}