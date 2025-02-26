import CheckTable from './components/CheckTable';
import ColumnsTable from './components/ColumnsTable';
import ComplexTable from './components/ComplexTable';
import DevelopmentTable from './components/DevelopmentTable';
import tableDataCheck from './variables/tableDataCheck';
import tableDataColumns from './variables/tableDataColumns';
import tableDataComplex from './variables/tableDataComplex';
import tableDataDevelopment from './variables/tableDataDevelopment';

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Tables;
