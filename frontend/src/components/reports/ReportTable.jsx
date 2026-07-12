import Table from "../common/Table";

const ReportTable = ({
    columns = [],
    data = [],
}) => {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
                Report
            </h2>

            <Table
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default ReportTable;