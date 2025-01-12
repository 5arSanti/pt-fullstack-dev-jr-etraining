import { ReactTable } from "./Table";
import { ScrollableWrapper } from "../ScrollableWrapper";

import "./styles.css";
import { FC } from "react";

interface TableContainerProps {
	data: Array<any>;
	onDelete: (id: any) => void;

}

const TableContainer: FC<TableContainerProps> = ({data, onDelete}) => {
	return(
		<ScrollableWrapper maxHeight={400}>
			<div className="scroll-wrapper">
				{data && data.length !== 0 &&
					<ReactTable
						data={data}
						onDelete={onDelete}
					/>
				}
			</div>

		</ScrollableWrapper>
	);
}

export { TableContainer }