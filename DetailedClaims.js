import CommonDataTable from "../../../table/CommonDataTable"
import TrackModal from "../../../modals/TrackModal"
import DetailsModal from "../../../modals/DetailsModal"
import { useEffect, useMemo, useState } from "react";
import { useDownloadClaims, useGetClaimStatusDetails } from "modules/RM-Dashboard/components/widgets/service";
import { handlePreview, toTitleCase } from "modules/RM-Dashboard/constant/constant";
import { Loader, NoDataFound, _copyTextOnHover } from "components";


export default function DetailedClaims({ claim, onBack, globalTheme }) {


    const [showModal, setShowModal] = useState(null);
    const [showDetail, setShowDetail] = useState(null);

    const { data: claimStatusDetails, isLoading } = useGetClaimStatusDetails({
        claim_card_id: claim?.claim_card_id,
        enabled: !!claim?.claim_card_id,
    });
    const { mutateAsync: downloadClaims, isPending } = useDownloadClaims();

    // const tableData = claimStatusDetails?.data?.details || [];
    // console.log("tableData response", tableData);


    const tableData =
        [
            {
                "claim_id": "Def-14",
                "client": "Demo Flex",
                "employee": "Dinesh Lamba",
                "member": "Dinesh Lamba",
                "type": "Cashless",
                "claimed_amount": "₹55,000",
                "sum_insured": "₹20,00,000.00",
                "balance_covered": "₹20,000",
                "claim_date": "09-03-2025",
                "tpa_insurer": "Health India",
                "tracking_status": "Under Process",
                "tat_days": 305,
                "priority": "High",
                "extensions": []
            },
            {
                "claim_id": "94779463-00",
                "client": "Demo Flex",
                "employee": "DAUGHTER OF DASHRATH .",
                "member": "Dinesh Lamba",
                "type": "R",
                "claimed_amount": "₹0",
                "sum_insured": "₹3,00,000",
                "balance_covered": "₹0",
                "claim_date": "N/A",
                "tpa_insurer": "Care",
                "tracking_status": "Under Process",
                "tat_days": 0,
                "priority": "Low",
                "extensions": [
                    {
                        "claim_id": "94779463-01",
                        "client": "Demo Flex",
                        "employee": "DAUGHTER OF DASHRATH .",
                        "member": "Dinesh Lamba",
                        "type": "R",
                        "claimed_amount": "₹0",
                        "sum_insured": "₹3,00,000",
                        "balance_covered": "₹0",
                        "claim_date": "N/A",
                        "tpa_insurer": "Care",
                        "tracking_status": "Under Process",
                        "tat_days": 0,
                        "priority": "Low"
                    },
                    {
                        "claim_id": "94779463-02",
                        "client": "Demo Flex",
                        "employee": "DAUGHTER OF DASHRATH .",
                        "member": "Dinesh Lamba",
                        "type": "R",
                        "claimed_amount": "₹0",
                        "sum_insured": "₹3,00,000",
                        "balance_covered": "₹0",
                        "claim_date": "N/A",
                        "tpa_insurer": "Care",
                        "tracking_status": "Under Process",
                        "tat_days": 0,
                        "priority": "Low"
                    }
                ]
            }
        ]


    const columns = useMemo(() =>
        [
            {
                id: "expander",
                header: "",
                enableSorting: false,
                enableColumnFilter: false,
                cell: ({ row }) => {
                    const hasExtensions = row.original.extensions?.length > 0;

                    if (!hasExtensions) return null;

                    return (
                        <button
                            onClick={() => row.toggleExpanded()}
                            className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-rounded hover:tw-bg-gray-200 tw-transition"
                            title={row.getIsExpanded() ? "Collapse" : "Expand"}
                        >
                            {row.getIsExpanded() ? (
                                <i className="ti-minus tw-text-sm" />
                            ) : (
                                <i className="ti-plus tw-text-sm" />
                            )}
                        </button>
                    );
                },
            },
            {
                accessorKey: "claim_id",
                sticky: 'left',
                header: "Claim ID",
                enableColumnFilter: false,
                Cell: _copyTextOnHover,
            },
            {
                accessorKey: "client",
                header: "Client",
                enableColumnFilter: false,
                enableSorting: false,
            },
            {
                accessorKey: "employee",
                header: "Employee Name",
                size: 170,
                enableColumnFilter: false,
                enableSorting: false,
                cell: info => (
                    <div className="tw-line-clamp-2 tw-whitespace-normal tw-break-words">
                        {info.getValue() || "N/A"}
                    </div>
                )
            },
            {
                accessorKey: "member",
                header: "Member Name",
                size: 170,
                enableColumnFilter: false,
                enableSorting: false,
                cell: info => (
                    <div className="tw-line-clamp-2 tw-whitespace-normal tw-break-words">
                        {info.getValue() || "N/A"}
                    </div>
                )
            },
            {
                accessorKey: "type", header: "Type",
                cell: info => {
                    let value = info.getValue();

                    if (value === "N/A") {
                        return <span>{value}</span>;
                    }
                    const color =
                        value === "Cashless"
                            ? "tw-bg-red-600 tw-text-white"
                            : "tw-bg-black tw-text-white";

                    return (
                        <span className={`tw-inline-flex tw-px-2 tw-py-1 tw-rounded-lg tw-text-s ${color}`}>
                            {toTitleCase(value)}
                        </span>
                    );
                },
                enableColumnFilter: false,
                enableSorting: false,
            },
            {
                accessorKey: "claimed_amount", header: "Claimed Amount",
                enableColumnFilter: false
            },
            {
                accessorKey: "sum_insured", header: "Sum Insured", enableColumnFilter: false,
            },
            { accessorKey: "balance_covered", header: "Balance Covered", enableColumnFilter: false },
            { accessorKey: "claim_date", header: "Claim Date", enableColumnFilter: false },
            {
                accessorKey: "tpa_insurer", header: "TPA/Insurer", enableColumnFilter: false, enableSorting: false,
                cell: info => (
                    <div className="tw-whitespace-normal tw-break-words">
                        {info.getValue() || "N/A"}
                    </div>
                ),
            },
            {
                accessorKey: "tracking_status", header: "Tracking Status",
                cell: info => {
                    const value = info.getValue();
                    return (
                        <span className="tw-whitespace-normal tw-break-words tw-text-[#2854A3] tw-font-semibold tw-rounded-lg tw-text-center tw-text-s">
                            {toTitleCase(value)}
                        </span>
                    );
                },
                enableColumnFilter: false,
                enableSorting: false,
                size: 160,
            },
            {
                id: "action",
                header: "Action",
                cell: (info) => (
                    <div className="tw-flex tw-gap-1">
                        <button type="button"
                            className="shadow btn btn-primary btn-sm"
                            onClick={() => setShowDetail(info.row.original)}
                        >
                            Details
                        </button>
                        <button type="button" className="shadow btn btn-outline-dark btn-sm"
                            onClick={() => setShowModal(info.row.original)}
                        >
                            Track
                        </button>
                    </div>
                ),
                enableColumnFilter: false,
                enableSorting: false,
            },
        ]
        , [])


    const handleDownload = async ({ claimId }) => {
        if (!claimId)
            return;

        const res = await downloadClaims(claimId);
        if (res?.status && res?.data?.file_url) {
            handlePreview(res?.data?.file_url);
        } else {
            swal({
                title: "Alert",
                text: "No Data Found",
                icon: "warning",
                button: "OK",
            });
        }
    }


    // useEffect(() => {
    //     if (tableData?.length > 0 && !isLoading) {
    //         window.scrollTo({
    //             top: 300,
    //             behavior: 'smooth'
    //         });
    //     }
    // }, [tableData, isLoading]);


    return (
        <>
            {isLoading ? (
                <Loader />
            ) :
                (
                    <>
                        <div className="tw-mt-6 tw-px-4 tw-py-4 tw-border tw-border-solid tw-rounded-xl tw-shadow-lg tw-gap-1.5"
                            style={{
                                borderColor: globalTheme.PrimaryColors?.color1,
                            }}
                        >
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <div>
                                    <h5 className="tw-text-base tw-font-semibold tw-text-gray-900 tw-m-0"
                                        style={{ color: globalTheme.PrimaryColors?.color4 }}
                                    >
                                        Detailed Claims - {claim.label}
                                    </h5>
                                    <p className="tw-text-sm tw-text-gray-500 tw-m-0">
                                        Individual claim records with tracking and complete details
                                    </p>
                                </div>
                                {
                                    tableData.length > 0 && (
                                        <div className="tw-flex tw-items-center tw-gap-3">
                                            <button type="button" className="shadow btn btn-outline-dark btn-sm rounded-4"
                                                onClick={() => handleDownload({ claimId: claim?.claim_card_id })}
                                            >
                                                Export
                                            </button>
                                            <button
                                                className="tw-py-2 tw-px-4 tw-border-0 tw-bg-[#00448e] hover:tw-bg-[#2854a3] tw-text-sm tw-text-white tw-rounded-full"
                                                onClick={onBack}
                                            >
                                                Close Details
                                            </button>
                                        </div>
                                    )
                                }
                            </div>

                            {isLoading ? (
                                <>
                                    <Loader />
                                    <NoDataFound text={isLoading ? 'Loading Data' : undefined} type={isLoading ? 'loading' : ''} />
                                </>
                            ) :
                                tableData.length > 0 ?
                                    <CommonDataTable
                                        data={tableData}
                                        columns={columns}
                                        pageState={{ pageIndex: 0, pageSize: 10 }}
                                        pageSizeOptions={[7, 10, 20, 50, 100]}
                                        autoResetPage={false}
                                        noStatus
                                        showGlobalFilter={true}
                                        enableExpanding={true}
                                        getSubRows={(row) => row.extensions || []}
                                    /> : <NoDataFound />
                            }
                        </div>

                        <DetailsModal
                            show={!!showDetail}
                            onHide={() => setShowDetail(null)}
                            claim={showDetail}
                            openTrackModal={setShowModal}
                        />

                        <TrackModal
                            show={!!showModal}
                            onHide={() => setShowModal(null)}
                            claim={showModal}
                        />
                    </>
                )
            }
            {isPending && <Loader />}
        </>
    );
};


