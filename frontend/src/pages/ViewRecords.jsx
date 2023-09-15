import { DataTable } from 'mantine-datatable';
import { useEffect, useMemo, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container';
import { Man4TwoTone, Woman2TwoTone, DeleteForever } from '@mui/icons-material';
import { fetchPatients } from '../store/patientSlice';

const RangeSearch = () => {
    const dispatch = useDispatch();
    const information = useSelector(state => state.Patients.data);
    const fetched = useSelector(state => state.Patients.fetched);

    const rowData = useMemo(() => information);

    if(fetched === false){
        dispatch(fetchPatients())
    }

    useEffect(() => {
        // dispatch(setPageTitle('Range Search Table'));
    }, []);

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [tempData, setTempData] = useState(initialRecords);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return tempData.filter((item) => {
                return (
                    item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.other_names.toLowerCase().includes(search.toLowerCase()) ||
                    getAge(item.dob) === parseInt(search) ||
                    parseFloat(item.height) === parseFloat(search) ||
                    item.phone.toString().includes(search.toString()) ||
                    item.phone_alt.toString().includes(search.toString()) ||
                    item.nok_contact.toString().includes(search.toString()) ||
                    item.nok_name.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');

    useEffect(() => {
        let dt = rowData;
        if (minAge !== '' && minAge !== null) {
            dt = dt.filter((d) => d.age >= Number(minAge));
        }
        if (maxAge !== '' && maxAge !== null) {
            dt = dt.filter((d) => d.age <= Number(maxAge));
        }
        if (minAge || maxAge) {
            setInitialRecords(dt);
            setTempData(dt);
        }
    }, [minAge, maxAge]);

    const getAge = (date) => {
        if (date) {
            const dt = new Date(date);
            const today = new Date();
            const age = (today.getFullYear() - dt.getFullYear())
            return age;
        }
    };

    const formatDate = (date) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    return (
        <div className="panel">
            <div className="mb-4.5 flex md:items-center md:flex-row flex-col gap-5">
    

                <div className="ltr:ml-auto rtl:mr-auto">
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[
                        { accessor: 'id', title: 'Id', sortable: true },
                        {
                            accessor: 'first_name',
                            title: 'First Name',
                            sortable: true,
                            render: ({ first_name, last_name, other_names }) => <div>{`${first_name} ${last_name} ${other_names}`}</div>,
                        },
                        { accessor: 'gender', title: 'Gender', sortable: true,
                        render: ({ gender }) => gender.toLowerCase() === 'm' ? <Man4TwoTone/> : <Woman2TwoTone/>, 
                        },
                        { accessor: 'age', title: 'Age', sortable: true,
                            render: ({ dob }) => getAge(dob),
                        },
                        {
                            accessor: 'dob',
                            title: 'Date of Birth',
                            sortable: true,
                            render: ({ dob }) => <div>{formatDate(dob)}</div>,
                        },
                        { accessor: 'height', title: 'Height (cm)', sortable: true,
                        render: ({ height }) => height, 
                        },
                        { accessor: 'phone', title: 'Phone No.', sortable: true },
                        { accessor: 'nok_name', title: 'N.o.k (Name)', sortable: true },
                        { accessor: 'nok_contact', title: 'N.o.k (Contact)', sortable: true },
                        { accessor: '', title: 'Action',
                            mantineTableHeadCellProps: {
                                align: 'right',
                            },
                            mantineTableBodyCellProps: {
                                align: 'right',
                            },
                            render: ({ id }) => <DeleteForever color="error"/>
                        },
                    ]}
                    totalRecords={initialRecords.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

// export default RangeSearch;

export default function ViewRecords(){
    return (
        <div className='py-12'>
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Patient Directory</h2>
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">

                <div className="px-4 py-5 sm:p-6">
                <Container Component={RangeSearch} />
                </div>
            </div>

        </div>
    )
}
