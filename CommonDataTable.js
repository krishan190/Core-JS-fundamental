import { useMemo, useState, Fragment, useRef } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    flexRender,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from "react-router";
import { Button, Badge, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { randomString, Encrypt } from 'utils';
import { useMediaPredicate } from "react-media-hook";
import { GlobalWrapper, StyleTable, TRStyle } from './styles';
import { Loader, NoDataFound } from '../../../../components';
import { Field, Input } from '@headlessui/react';
import { getStickyClassAndStyle } from './utils/helper';
import DropdownPanel from './localComponents/DropdownPanel';
import { Pagination } from './localComponents/Pagination';
import { DefaultColumnFilter } from './localComponents/DefaultColumnFilter';
import SelectListPage from "./localComponents/SelectListPage"
import { useSelector } from 'react-redux';



const ExcludeHeaderFeatures = ["Operations", "View"]

const defaultProps = {
    columns: [
        {
            header: "Name",
            accessor: "name"
        },
        {
            header: "Email",
            accessor: "email"
        },
        {
            header: "Mobile No.",
            accessor: "mobile_no"
        },
        {
            header: "Type",
            accessor: "type"
        },
        {
            header: "Operations",
            accessor: "operations"
        }
    ],
    data: [],
    userStatus: () => { },
    count: {},
}

export default function CommonDataTable
    ({
        columns = defaultProps.columns,
        data = defaultProps.data,
        userStatus = defaultProps.userStatus,
        count = defaultProps.count,
        type,
        noStatus,
        pageState = {},
        pageSizeOptions = [],
        editLink = null,
        viewLink = null,
        viewFlag,
        viewFn = () => null,
        deleteFlag,
        removeAction = () => null,
        deleteLimit = 0,
        EditFlag = null,
        EditFunc = () => null,
        autoResetPage = true,
        showFilter = false,
        showGlobalFilter = false,
        stickyHeader = true,
        noDataFoundText = 'No Data Found',
        showEmptyMessage = true,
        loading = false,
        ...rest
    }) {

    const { globalTheme } = useSelector((state) => state.theme);


    const [globalFilter, setGlobalFilter] = useState('');
    const [columnFilters, setColumnFilters] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: pageState?.pageIndex || 0,
        pageSize: pageState?.pageSize || 10,
    });


    const [columnPinning, setColumnPinning] = useState({
        left: [],
        right: [],
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lessThan1025 = useMediaPredicate("(min-width: 1025px)");
    const tableRef = useRef(null);


    const updatedData = useMemo(() => {
        const safeData = Array.isArray(data) ? data : [];
        return safeData.map(item => {
            let itemCopy = { ...item };
            Object.keys(itemCopy).forEach(key => {
                if (itemCopy[key] === null || itemCopy[key] === undefined) {
                    itemCopy[key] = ''; // Replace null or undefined with an empty string
                }
            });
            return itemCopy;
        });
    }, [data]);

    const tableColumns = useMemo(() => {
        return columns.map(col => {
            return {
                accessorKey: col.accessor,
                header: col.header,
                cell: col.Cell ? ({ cell, row }) => col.Cell({ value: cell.getValue(), row: { original: row.original } }) : undefined,
                enableColumnFilter: !ExcludeHeaderFeatures.includes(col.header),
                enableSorting: !ExcludeHeaderFeatures.includes(col.header),
                enablePinning: !ExcludeHeaderFeatures.includes(col.header),
                filterFn: 'includesString',
                size: col.size || 'none',
                sticky: col.sticky,
                className: col.className,
                ...col
            }
        });
    }, [columns])


    const operation = (data, type) => {
        switch (type) {
            case "delete":
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            switch (deleteFlag) {
                                case 'custom_delete': dispatch(removeAction(data.id))
                                    break;
                                case 'custom_delete_action': removeAction(data.id, data)
                                    break;
                                default: swal('Server Issue', 'Please contact the administrator', 'info')
                            }
                        }
                    });
                break;
            default:
                break;
        }
    };

    const _renderOperationAction = (index, cell) => {
        return (
            <ButtonGroup key={`${index}-operations`} size="sm">

                {viewLink && < OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>View {type}</strong>.
                    </Tooltip>}>
                    <Button onClick={() => navigate(`${viewLink}/${randomString()}/${Encrypt((type === 'Employee') ? cell.row?.original?.user_id || cell.row?.original?.id : cell.row?.original?.id)}/${randomString()}`)} className="strong" variant="outline-info"><i className="ti-eye" /></Button>
                </OverlayTrigger>}

                {viewFlag && < OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>View {type}</strong>.
                    </Tooltip>}>
                    <Button className="strong" variant="outline-info" onClick={() => viewFn(cell.row.original)}><i className="ti-eye" /></Button>
                </OverlayTrigger>}

                {editLink && ((type === 'Role' ? !!(rest.own && deleteLimit <= cell.row?.id) : true) || !rest.own) && <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>Edit {type}</strong>
                    </Tooltip>}>
                    <Button className="strong" variant="outline-warning"
                        onClick={() => navigate(`${editLink}/${randomString()}/${Encrypt(cell.row?.original?.id)}/${randomString()}`)}>
                        <i className="ti-pencil-alt" /></Button>
                </OverlayTrigger>}

                {EditFlag && <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>Edit {type}</strong>
                    </Tooltip>}>
                    <Button className="strong" variant={(rest.selectiveEdit && !cell.row.original?.to_allow_actions) ? "outline-secondary" : "outline-warning"} disabled={(rest.selectiveEdit && !cell.row.original?.to_allow_actions) ? true : false} onClick={() => EditFunc(cell.row.original?.id, cell.row.original)}>
                        <i className="ti-pencil-alt" />
                    </Button>
                </OverlayTrigger>}

                {deleteFlag && deleteLimit <= cell.row?.id && <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>Remove {type}</strong>
                    </Tooltip>}>
                    <Button className="strong" variant={(rest.selectiveDelete && !cell.row.original?.to_allow_delete_actions) ? "outline-secondary" : "outline-danger"} disabled={(rest.selectiveDelete && !cell.row.original?.to_allow_delete_actions) ? true : false} onClick={() => operation(cell.row.original, `delete`)}><i className="ti-trash" /></Button>
                </OverlayTrigger>}

                {!!(rest.redirectPolicy && cell.row?.original?.status === 'Won' && cell.row?.original?.enquiry_id) && <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>
                        <strong>Create Policy</strong>.
                    </Tooltip>}>
                    <Link to={`./../policy-config`}> <Button className="strong" variant="outline-info"><i className="ti-pencil-alt" /></Button></Link>
                </OverlayTrigger>}

            </ButtonGroup >
        );
    };

    const _renderCell = (cell, index) => {
        const cellHeader = cell.column.columnDef.header;
        switch (cellHeader) {
            case "Operations":
                return _renderOperationAction(index, cell);
            case "View":
                return _renderOperationAction(index, cell);
            default: {
                // For custom cell renderers
                if (cell.column.columnDef.cell) {
                    return flexRender(cell.column.columnDef.cell, cell.getContext());
                }
                // Default rendering
                return cell.getValue() || cell.getValue() === 0 ? cell.getValue() : "-";
            }
        }
    }

    const table = useReactTable({
        data: updatedData,
        columns: tableColumns,
        state: {
            columnFilters,
            globalFilter,
            sorting,
            pagination,
            columnPinning
        },

        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        onColumnPinningChange: setColumnPinning,
        onPaginationChange: updater => {
            let newPagination = typeof updater === 'function' ? updater(pagination) : updater;
            if (newPagination.pageSize !== pagination.pageSize) {
                newPagination = { ...newPagination, pageIndex: 0 };
            }
            setPagination(newPagination);
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex: autoResetPage,
    });


    if (!data?.length && !loading && showEmptyMessage) {
        return <NoDataFound text={noDataFoundText} />
    }

    const allColumnsHidden = table.getAllLeafColumns().every((column) => !column.getIsVisible());


    const hidePaginationLimit = rest.hidePagination ?? 3;
    const shouldShowPagination = data.length > hidePaginationLimit;

    return (
        <>
            {(data?.length || !showEmptyMessage) ? (
                <>
                    {/* Above Table */}
                    <div className='tw-py-[8px] tw-flex tw-flex-wrap tw-gap-[10px] tw-items-center tw-justify-between'>

                        {showGlobalFilter && <div className="tw-relative tw-max-w-[200px]">
                            <Field>
                                <div className="tw-relative">
                                    {/* Search Icon */}
                                    <div className="tw-absolute tw-left-3 tw-top-[25%] tw--translate-y-1/2">
                                        <i className="fas fa-search tw-text-[15px] tw-text-gray-600"></i>
                                    </div>
                                    {/* Expanding Input */}
                                    <Input
                                        value={globalFilter ?? ''}
                                        onChange={e => {
                                            const value = String(e.target.value);
                                            setGlobalFilter(value);
                                            table.setPageIndex(0); // Reset to first page on search
                                        }
                                        }
                                        placeholder="Search..."
                                        className={`
                                       tw-min-h-[35px] tw-text-[#495057] tw-text-start tw-placeholder-[#495057] tw-block tw-rounded-md tw-py-1.5 tw-pr-[33px] tw-text-sm/6 tw-pl-[33px]
                                       tw-border tw-border-gray-300 focus:tw-border-gray-400
                                       tw-transition-[width] tw-duration-300 tw-ease-in-out tw-shadow-lg
                                       tw-w-[120px] focus:tw-w-full focus:tw-outline focus:tw-outline-gray-300
                                       focus:tw-outline-[3px]
                                      `}
                                    />
                                </div>
                            </Field>
                        </div>}

                        {/* Dropdown  */}
                        <DropdownPanel table={table} />


                        {(shouldShowPagination ||
                            (type !== "Module" && type !== "Role" && !noStatus) ||
                            !!rest.onExport) &&
                            (type !== "Module" && type !== "Role" && !noStatus) && <div>
                                <Button size="sm" className="tw-shadow tw-m-1" variant="success" onClick={() => userStatus(1)}>
                                    <strong>Active</strong> <Badge className="tw-text-dark" bg="light" text="dark">{count?.data?.active ?? 0}</Badge>
                                </Button>
                                <Button size="sm" className="tw-shadow tw-m-1" variant="secondary" onClick={() => userStatus(0)}>
                                    <strong>Disabled</strong> <Badge className="tw-text-dark" bg="light" text="dark">{count?.data?.inactive}</Badge>
                                </Button>
                                <Button size="sm" className="tw-shadow tw-m-1" variant="danger" onClick={() => userStatus(2)}>
                                    <strong>Removed</strong> <Badge className="tw-text-dark" bg="light" text="dark">{count?.data?.deleted}</Badge>
                                </Button>
                            </div>
                        }
                        {!!rest.onExport && <Button size="sm" className="tw-shadow tw-m-1" variant="dark" onClick={rest.onExport}>
                            <strong><i className="ti-cloud-down"></i> Export</strong>
                        </Button>}
                    </div>

                    {/* Data Table - Headless UI */}
                    {
                        allColumnsHidden ? (<div className="tw-px-4 tw-py-2 tw-text-center tw-text-base/5 tw-tw-text-gray-600">
                            No columns selected. Please select at least one column to display.
                        </div>) : (<div className="tw-relative tw-max-w-full tw-overflow-auto" ref={tableRef}>
                            <StyleTable>
                                <thead className="tw-text-white tw-text-left"
                                    style={{ backgroundColor: globalTheme.PrimaryColors?.color1 }}>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <Fragment key={headerGroup.id}>
                                            <TRStyle>
                                                {headerGroup.headers.map((header, headerIndex) => {
                                                    const { className: stickyClass, style: stickyStyle } = getStickyClassAndStyle(
                                                        header.column.columnDef,
                                                        headerIndex,
                                                        tableColumns
                                                    );

                                                    return ExcludeHeaderFeatures.includes(header.column.columnDef.header) ? (
                                                        <th
                                                            key={header.id}
                                                            colSpan={header.colSpan}
                                                            className={`tw-border-top-0 ${stickyHeader ? 'sticky-header ' : ''} ${stickyClass} ` +
                                                                ((header.column.columnDef.className && lessThan1025) ? header.column.columnDef.className : '')}
                                                            style={{
                                                                ...header.column.columnDef.size && { width: `${header.column.columnDef.size}px` },
                                                                ...header.column.columnDef.size && { minWidth: `${header.column.columnDef.size}px` },
                                                                ...header.column.columnDef.size && { maxWidth: `${header.column.columnDef.size}px` },
                                                                ...stickyStyle,
                                                            }}
                                                        >
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </th>
                                                    ) : (
                                                        <th
                                                            key={header.id}
                                                            colSpan={header.colSpan}
                                                            className={`tw-border-top-0 ${stickyHeader ? 'sticky-header ' : ''} ${stickyClass} ` +
                                                                (header.column.getIsSorted()
                                                                    ? header.column.getIsSorted() === "desc"
                                                                        ? "sort-desc "
                                                                        : "sort-asc "
                                                                    : "") + ((header.column.columnDef.className && lessThan1025) ? header.column.columnDef.className : '')
                                                            }
                                                            onClick={header.column.getToggleSortingHandler()}
                                                            style={{
                                                                cursor: 'pointer',
                                                                ...header.column.columnDef.size && { width: `${header.column.columnDef.size}px` },
                                                                ...header.column.columnDef.size && { minWidth: `${header.column.columnDef.size}px` },
                                                                ...header.column.columnDef.size && { maxWidth: `${header.column.columnDef.size}px` },
                                                                ...stickyStyle,
                                                                backgroundColor: globalTheme.PrimaryColors?.color1,
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                            {header.column.columnDef.enableSorting && <i className="ti-exchange-vertical tw-ml-[5px]" />}
                                                        </th>
                                                    );
                                                })}
                                            </TRStyle>

                                            {(data.length > 1 || showFilter) && (
                                                <tr>
                                                    {headerGroup.headers.map((header, headerIndex) => {
                                                        const { className: stickyClass, style: stickyStyle } = getStickyClassAndStyle(
                                                            header.column.columnDef,
                                                            headerIndex,
                                                            tableColumns
                                                        );

                                                        return (
                                                            <th
                                                                key={header.id}
                                                                className={`tw-align-top ${stickyHeader ? 'sticky-header top-30 ' : ''} ${stickyClass} ` +
                                                                    ((header.column.columnDef.className && lessThan1025) ? header.column.columnDef.className : '')}
                                                                style={{
                                                                    ...header.column.columnDef.size && { width: `${header.column.columnDef.size}px` },
                                                                    ...header.column.columnDef.size && { minWidth: `${header.column.columnDef.size}px` },
                                                                    ...header.column.columnDef.size && { maxWidth: `${header.column.columnDef.size}px` },
                                                                    background: "#f3f3f3",
                                                                    ...stickyStyle
                                                                }}
                                                            >
                                                                {ExcludeHeaderFeatures.includes(header.column.columnDef.header) ? "" : (
                                                                    <div onClick={() => table.setPageIndex(0)}>
                                                                        {header.column.columnDef.enableColumnFilter && (
                                                                            <DefaultColumnFilter column={header.column} />
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </th>
                                                        );
                                                    })}
                                                </tr>
                                            )}
                                        </Fragment>
                                    ))}
                                </thead>
                                <tbody>
                                    {table.getRowModel().rows.map(row => (
                                        <tr className='table-row' key={row.id}>
                                            {row.getVisibleCells().map((cell, cellIndex) => {
                                                const { className: stickyClass, style: stickyStyle } = getStickyClassAndStyle(
                                                    cell.column.columnDef,
                                                    cellIndex,
                                                    tableColumns
                                                );

                                                return (
                                                    <td
                                                        key={cell.id}
                                                        className={`tw-p-[8px] tw-text-center tw-text-sm tw-border tw-border-solid tw-border-x-0 tw-border-t-0 tw-border-b-gray-300 tw-truncate ${stickyClass}`}
                                                        style={{
                                                            width: `${cell.column.columnDef.size}px`,
                                                            minWidth: `${cell.column.columnDef.size}px`,
                                                            maxWidth: `${cell.column.columnDef.size}px`,
                                                            ...stickyStyle
                                                        }}
                                                    >
                                                        {_renderCell(cell, cellIndex)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </StyleTable>
                        </div>)
                    }
                    {stickyHeader && <GlobalWrapper />}
                    <div className='tw-my-[10px] tw-flex tw-justify-end tw-flex-wrap tw-gap-[20px]'>
                        {(shouldShowPagination ||
                            (type !== "Module" && type !== "Role" && !noStatus) ||
                            !!rest.onExport) &&
                            <form onSubmit={e => e.preventDefault()} className={"tw-flex tw-justify-between form-inline"}>
                                {shouldShowPagination && <>
                                    <span className="tw-mr-3">Rows per page</span>
                                    <SelectListPage table={table} pageSizes={pageSizeOptions.length > 0 ? pageSizeOptions : [10, 20, 50, 100]} />
                                </>}
                            </form>}
                        {shouldShowPagination && <Pagination table={table} />}
                    </div>
                </>
            ) : <NoDataFound text='Loading Data...' type='loading' />}
            {loading && <Loader />}
        </>
    );
};
