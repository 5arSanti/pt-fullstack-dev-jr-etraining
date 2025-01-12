import { FC } from "react";
import "./styles.css";

interface ReactTableProps {
	data: Array<any>;
}

const ReactTable: FC<ReactTableProps> = ({data=[]}) => {
	const columns = data?.length ? Object.keys(data[0]).filter(column => column !== 'Imagen') : [];

	return (
		<table className="table-container" id="dataTable">
			<thead>
				<tr>
					{columns?.map((column, index) => (
						<th key={index}>{column}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.map((row: { [key: string]: any }, rowIndex: number) => (
					<tr key={rowIndex}>
						{columns?.map((column: string, colIndex: number) => (
							<td key={colIndex}>{row?.[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };