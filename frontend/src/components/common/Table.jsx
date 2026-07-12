const Table = ({
    columns = [],
    data = [],
}) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
                <thead className="bg-slate-800 text-white">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column}
                                className="px-4 py-3 text-left"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center py-6"
                            >
                                No Data Found
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-100"
                            >
                                {Object.values(row).map(
                                    (value, i) => (
                                        <td
                                            key={i}
                                            className="px-4 py-3"
                                        >
                                            {String(value)}
                                        </td>
                                    )
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;