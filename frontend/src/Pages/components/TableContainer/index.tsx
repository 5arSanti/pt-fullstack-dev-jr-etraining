import { ReactTable } from "./Table";
import { ScrollableWrapper } from "../ScrollableWrapper";

import "./styles.css";
import { FC } from "react";

interface TableContainerProps {
	data: Array<any>;
}

const TableContainer: FC<TableContainerProps> = ({data}) => {
	return(
		<ScrollableWrapper maxHeight={400}>
			<div className="scroll-wrapper">
				{data && data.length !== 0 &&
					<ReactTable
						data={data}
					/>
				}
			</div>

		</ScrollableWrapper>
	);
}

export { TableContainer }