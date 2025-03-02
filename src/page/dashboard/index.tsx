import { Flex } from "@mantine/core"
import { TableSort } from "../../components/table"

export const Dashboard = () => {
    return (
        <div >
            <Flex direction={'column'} sx={{ margin: 20 }}>
                <h1>dashboard page</h1>
                <TableSort />
            </Flex>
        </div>
    )
}

