import React, { useContext } from "react";
import { DiaryStateContext } from "../..";
import Item from "../Item";
import { Table, Thead, Tbody, Tfoot } from "./List.styled";

function List() {
	const formList = useContext(DiaryStateContext);
	return (
		<div className="List">
			<Table>
				<Thead>
					<tr>
						<th>genre</th>
						<th>제목</th>
						<th>date</th>
						<th>User</th>
						<th className="text-right">status</th>
					</tr>
				</Thead>
				<Tbody>
					{formList.map((it) => (
						<Item key={it.id} {...it} />
					))}
				</Tbody>
				<Tfoot>
					<tr>
						<th colSpan="5">{new Date().getFullYear()}</th>
					</tr>
				</Tfoot>
			</Table>
		</div>
	);
}

List.defaultProps = {
	formList: [],
};

export default List;
