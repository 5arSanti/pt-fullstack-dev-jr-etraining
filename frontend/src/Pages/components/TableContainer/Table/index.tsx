import { FC } from "react";
import "./styles.css";

import { MdDelete } from "react-icons/md";
import { ButtonCard } from "../../ButtonCard";
import { handleDeleteData } from "../../../../utils/handleData/handleDeleteData";

interface ReactTableProps {
	data: Array<any>;
	onDelete: (item: object) => void;
}

const ReactTable: FC<ReactTableProps> = ({data=[], onDelete}) => {
	const columns = data?.length ? Object.keys(data[0]).filter(column => column !== 'Imagen') : [];

	return (
		<table className="table-container" id="dataTable">
			<thead>
				<tr>
					{columns?.map((column, index) => (
						<th key={index}>{column}</th>
					))}
					<th>Eliminar</th>

				</tr>
			</thead>

			<tbody>
				{data?.map((row: { [key: string]: any }, rowIndex: number) => (
					<tr key={rowIndex}>
						{columns?.map((column: string, colIndex: number) => (
							<td key={colIndex}>{row?.[column]}</td>
						))}
						<td>
							<ButtonCard padding={10} title="Eliminar" onClick={() => onDelete(row)}>
								<MdDelete/>
							</ButtonCard>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };