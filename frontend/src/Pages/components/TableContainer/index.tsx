import { ReactTable } from "./Table";
import { ScrollableWrapper } from "../ScrollableWrapper";

import "./styles.css";
import { FC } from "react";

interface TableContainerProps {
	data: Array<any>;
	onDelete: (id: any) => void;
	canDelete?: boolean;
}

const TableContainer: FC<TableContainerProps> = ({data, onDelete, canDelete=true}) => {
	return(
		<ScrollableWrapper maxHeight={400}>
			<div className="scroll-wrapper">
				{data && data.length !== 0 &&
					<ReactTable
						data={data}
						onDelete={onDelete}
						canDelete={canDelete}
					/>
				}
			</div>

		</ScrollableWrapper>
	);
}

export { TableContainer }