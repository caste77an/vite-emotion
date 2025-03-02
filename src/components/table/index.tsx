import { useState } from 'react';
import { IconChevronDown, IconChevronUp, IconSearch, IconSelector } from '@tabler/icons-react';
import {
    Center,
    Group,
    keys,
    ScrollArea,
    Table,
    Text,
    TextInput,
    UnstyledButton,
} from '@mantine/core';
import classes from './TableSort.module.css';

interface RowData {
    idx: number;
    token: string;
    symbol: string;
    content: string;
    increasedRate: number;
    was: number;
    now: number;
    date: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort: () => void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size={16} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query))
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].toString().localeCompare(a[sortBy].toString());
            }

            return a[sortBy].toString().localeCompare(b[sortBy].toString());
        }),
        payload.search
    );
}

const data = [
    {
        idx: 1,
        token: 'Athena Weissnat',
        symbol: 'Little - Rippin',
        content: 'Elouise.Prohaska@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 2,
        token: 'Deangelo Runolfsson',
        symbol: 'Greenfelder - Krajcik',
        content: 'Kadin_Trantow87@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 3,
        token: 'Danny Carter',
        symbol: 'Kohler and Sons',
        content: 'Marina3@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 4,
        token: 'Trace Tremblay PhD',
        symbol: 'Crona, Aufderhar and Senger',
        content: 'Antonina.Pouros@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 5,
        token: 'Derek Dibbert',
        symbol: 'Gottlieb LLC',
        content: 'Abagail29@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 6,
        token: 'Viola Bernhard',
        symbol: 'Funk, Rohan and Kreiger',
        content: 'Jamie23@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 7,
        token: 'Austin Jacobi',
        symbol: 'Botsford - Corwin',
        content: 'Genesis42@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 8,
        token: 'Hershel Mosciski',
        symbol: 'Okuneva, Farrell and Kilback',
        content: 'Idella.Stehr28@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 9,
        token: 'Mylene Ebert',
        symbol: 'Kirlin and Sons',
        content: 'Hildegard17@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 10,
        token: 'Lou Trantow',
        symbol: 'Parisian - Lemke',
        content: 'Hillard.Barrows1@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 11,
        token: 'Dariana Weimann',
        symbol: 'Schowalter - Donnelly',
        content: 'Colleen80@gmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 12,
        token: 'Dr. Christy Herman',
        symbol: 'VonRueden - Labadie',
        content: 'Lilyan98@gmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 13,
        token: 'Katelin Schuster',
        symbol: 'Jacobson - Smitham',
        content: 'Erich_Brekke76@gmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 14,
        token: 'Melyna Macejkovic',
        symbol: 'Schuster LLC',
        content: 'Kylee4@yahoo.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 15,
        token: 'Pinkie Rice',
        symbol: 'Wolf, Trantow and Zulauf',
        content: 'Fiona.Kutch@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
    {
        idx: 16,
        token: 'Brain Kreiger',
        symbol: 'Lueilwitz Group',
        content: 'Rico98@hotmail.com',
        increasedRate: 10,
        was: 10,
        now: 10,
        date: '2025-02-28',
    },
];

export function TableSort() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.idx}>
            <Table.Td>{row.token}</Table.Td>
            <Table.Td>{row.symbol}</Table.Td>
            <Table.Td>{row.content}</Table.Td>
            <Table.Td>{row.increasedRate}</Table.Td>
            <Table.Td>{row.was}</Table.Td>
            <Table.Td>{row.now}</Table.Td>
            <Table.Td>{row.date}</Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch size={16} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'token'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('token')}
                        >
                            Token
                        </Th>
                        <Th
                            sorted={sortBy === 'symbol'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('symbol')}
                        >
                            Symbol
                        </Th>
                        <Th
                            sorted={sortBy === 'content'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('content')}
                        >
                            Content
                        </Th>
                        <Th
                            sorted={sortBy === 'increasedRate'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('increasedRate')}
                        >
                            Increased Rate
                        </Th>
                        <Th
                            sorted={sortBy === 'was'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('was')}
                        >
                            Was
                        </Th>
                        <Th
                            sorted={sortBy === 'now'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('now')}
                        >
                            Now
                        </Th>
                        <Th
                            sorted={sortBy === 'date'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('date')}
                        >
                            Date
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(data[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}